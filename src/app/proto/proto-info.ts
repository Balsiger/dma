import { computed, signal } from '@angular/core';
import { Message } from 'google-protobuf';
import { ProtoRpc } from '../net/ProtoRpc';
import { EnumDescriptorProto } from './generated/descriptor_pb';
import {
  DescriptorProto,
  FieldDescriptorProto,
  FileDescriptorProto,
  FileDescriptorSet,
} from './generated/google/protobuf/descriptor_pb';
import * as template from './generated/template_pb';
import { FieldMetadata, METAFIELDS, METATYPES, TypeMetadata } from './metadata';
import { ProtoInfoFieldType } from './proto-info-field-type';

export interface EnumValue {
  name: string;
  index: number;
}

export class ProtoInfoField {
  private readonly getter = 'get' + this.name.replace(/ /g, '') + (this.repeated ? 'List' : '');
  private readonly setter = 'set' + this.name.replace(/ /g, '') + (this.repeated ? 'List' : '');
  readonly nonRepeated: ProtoInfoField = this.repeated
    ? new ProtoInfoField(
        this.id,
        this.name,
        this.type,
        this.typeName,
        false,
        this.enumValues,
        this.subfields,
        this.inputType,
        this.fieldMetadata,
      )
    : this;

  constructor(
    readonly id: string,
    readonly name: string,
    readonly type: ProtoInfoFieldType,
    readonly typeName: string,
    readonly repeated: boolean,
    readonly enumValues: EnumValue[],
    readonly subfields: ProtoInfoField[],
    readonly inputType: string,
    readonly fieldMetadata?: FieldMetadata,
    readonly typeMetadata?: TypeMetadata,
  ) {}

  get(proto: any, index = -1): any {
    if (proto) {
      if (this.getter in proto) {
        if (this.repeated && index >= 0) {
          return proto[this.getter](index);
        } else {
          return proto[this.getter]();
        }
      } else {
        console.warn('proto does not have a getter', this.getter, this.name);
      }
    }

    return undefined;
  }

  set(proto: any, value: any, index = -1) {
    if (proto && this.setter in proto) {
      if (this.repeated && index >= 0) {
        const list = proto[this.getter]();
        list[index] = value;
        proto[this.setter](list);
      } else {
        proto[this.setter](value);
      }
    } else {
      console.warn('cannot set field ', this.name, 'with setter', this.setter, 'on', proto);
    }
  }

  remove(proto: any, index: number) {
    if (this.repeated && index >= 0) {
      const list = proto[this.getter]();
      list.splice(index, 1);
      proto[this.setter](list);
    } else {
      console.warn('Cannot remove in non repeated field ', this.name);
    }
  }

  getNested(name: string): ProtoInfoField | undefined {
    for (const subfield of this.subfields) {
      if (subfield.name === name) {
        return subfield;
      }
    }

    return undefined;
  }

  create(): Message | undefined {
    const message = ProtoInfoField.createMessage(this.typeName.split('.'));
    if (!message) {
      console.warn('cannot create proto message for ', this.typeName, this.id);
    }
    return message;
  }

  static createMessage(types: string[]): Message | undefined {
    return ProtoInfoField.createNamespaceMessage(types, template);
  }

  static createNamespaceMessage(types: string[], namespace: any): Message | undefined {
    if (types.length && types[0] in namespace) {
      const nested = namespace[types[0]];
      if (types.length === 1) {
        return new nested();
      }

      return ProtoInfoField.createNamespaceMessage(types.slice(1), nested);
    }

    return undefined;
  }

  static create(
    field: FieldDescriptorProto,
    types: Map<string, DescriptorProto>,
    enums: Map<string, EnumDescriptorProto>,
  ): ProtoInfoField {
    const type = ProtoInfoField.createType(field.getName() || '', field.getTypeName() || '', field.getType() || -1);
    return new ProtoInfoField(
      field.getName() || '',
      humanize(field.getName() || ''),
      type,
      ProtoInfoField.normalizeType(field.getTypeName() || ''),
      field.getLabel() === 3,
      ProtoInfoField.createEnumValues(field, enums),
      ProtoInfoField.createSubFields(field, types, enums),
      type === ProtoInfoFieldType.number ? 'number' : 'text',
      METAFIELDS.get(field.getName() || ''),
      METATYPES.get(field.getTypeName() || ''),
    );
  }

  static createType(name: string, typeName: string, type: number): ProtoInfoFieldType {
    const meta = METATYPES.get(typeName);
    if (meta) {
      return meta.type || ProtoInfoFieldType.string;
    }

    switch (type) {
      case 9:
        return ProtoInfoFieldType.string;

      case 11:
        return ProtoInfoFieldType.message;

      case 3:
      case 5:
        return ProtoInfoFieldType.number;

      case 8:
        return ProtoInfoFieldType.boolean;

      case 14:
        return ProtoInfoFieldType.enum;

      default:
        console.warn('currently unsupported field type', type, 'for', name);
        return ProtoInfoFieldType.unknown;
    }
  }

  static normalizeType(name: string): string {
    return name.replace(/^.dma./, '');
  }

  static createEnumValues(field: FieldDescriptorProto, enums: Map<string, EnumDescriptorProto>): EnumValue[] {
    if (field.getType() === 14) {
      const fieldEnum = enums.get(field.getTypeName() || '');
      if (fieldEnum) {
        return fieldEnum.getValueList().map((v) => ({
          name: v.getName() || '',
          index: v.getNumber() || 0,
        }));
      }
    }

    return [];
  }

  static createSubFields(
    field: FieldDescriptorProto,
    types: Map<string, DescriptorProto>,
    enums: Map<string, EnumDescriptorProto>,
  ): ProtoInfoField[] {
    if (field.getType() !== 11) {
      return [];
    }

    const type = types.get(field.getTypeName() || '');
    if (type) {
      return type.getFieldList().map((f) => ProtoInfoField.create(f, types, enums));
    } else {
      console.warn('cannot find type for', field.getTypeName(), types.keys());
    }

    return [];
  }
}

export class ProtoInfoMessage {
  constructor(readonly fields: ProtoInfoField[]) {}

  static create(
    descriptor: DescriptorProto | undefined,
    types: Map<string, DescriptorProto>,
    enums: Map<string, EnumDescriptorProto>,
  ): ProtoInfoMessage {
    const fields = [];

    if (descriptor) {
      for (const field of descriptor.getFieldList()) {
        fields.push(ProtoInfoField.create(field, types, enums));
      }
    }

    return new ProtoInfoMessage(fields);
  }
}

const IGNORED = [
  'Monsters',
  'Npcs',
  'Conditions',
  'Spells',
  'Items',
  'Encounters',
  'Products',
  'Miniatures',
  'Maps',
  'Tokens',
];

export class ProtoInfo {
  readonly root = signal<ProtoInfoMessage>(new ProtoInfoMessage([]));
  readonly rootField = computed(
    () =>
      new ProtoInfoField(
        'root',
        'Root',
        ProtoInfoFieldType.message,
        'ProductContentProto',
        false,
        [],
        this.root().fields.filter((f) => !IGNORED.includes(f.name)),
        'text',
      ),
  );
  readonly rootAllField = computed(
    () =>
      new ProtoInfoField(
        'root',
        'Root',
        ProtoInfoFieldType.message,
        'ProductContentProto',
        false,
        [],
        this.root().fields,
        'text',
      ),
  );
  private messageTypes = new Map<string, DescriptorProto>();
  private enumTypes = new Map<string, EnumDescriptorProto>();

  constructor() {
    this.load();
  }

  private async load() {
    const rpc = new ProtoRpc(FileDescriptorSet.deserializeBinary);
    const descriptor = await rpc.fetch('/assets/data/descriptor.pb');

    for (const file of descriptor.getFileList()) {
      this.processFile(file);
    }

    this.root.set(
      ProtoInfoMessage.create(this.messageTypes.get('.dma.ProductContentProto'), this.messageTypes, this.enumTypes),
    );
  }

  private processFile(file: FileDescriptorProto) {
    const namespace = file.getPackage() || '';
    for (const type of file.getMessageTypeList()) {
      this.processType(namespace, type);
    }
    for (const type of file.getEnumTypeList()) {
      this.processEnum(namespace, type);
    }
  }

  private processType(namespace: string, type: DescriptorProto) {
    this.messageTypes.set(createName(namespace, type.getName() || ''), type);

    for (const nested of type.getNestedTypeList()) {
      this.processType(createName(namespace, type.getName() || ''), nested);
    }
    for (const nested of type.getEnumTypeList()) {
      this.processEnum(createName(namespace, type.getName() || ''), nested);
    }
  }

  private processEnum(namespace: string, type: EnumDescriptorProto) {
    this.enumTypes.set(createName(namespace, type.getName() || ''), type);
  }
}

function humanize(name: string): string {
  return name
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function createName(namespace: string, name: string) {
  if (namespace) {
    if (namespace.startsWith('.')) {
      return namespace + '.' + name;
    } else {
      return '.' + namespace + '.' + name;
    }
  }

  return name;
}
