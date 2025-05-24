import { CommonProto } from './generated/template_pb';
import { ProtoInfoFieldType } from './proto-info-field-type';

export interface TypeMetadata {
  type?: ProtoInfoFieldType;
}

export enum Autocomplete {
  entity,
  previous,
  lookup,
}

export interface FieldMetadata {
  formatted?: boolean;
  autocomplete?: Autocomplete;
  default?: any;
}

export const METATYPES = new Map<string, TypeMetadata>([
  [
    '.dma.RangeProto',
    {
      type: ProtoInfoFieldType.range,
    },
  ],
  [
    '.dma.LinkProto',
    {
      type: ProtoInfoFieldType.link,
    },
  ],
  [
    'string',
    {
      type: ProtoInfoFieldType.string,
    },
  ],
  [
    'number',
    {
      type: ProtoInfoFieldType.string,
    },
  ],
]);

export const METAFIELDS = new Map<string, FieldMetadata>([
  [
    'bases',
    {
      autocomplete: Autocomplete.entity,
    },
  ],
  [
    'locations',
    {
      autocomplete: Autocomplete.previous,
    },
  ],
  [
    'name',
    {
      autocomplete: Autocomplete.entity,
    },
  ],
  [
    'version',
    {
      default: CommonProto.Version.DND_5_24,
    },
  ],
]);

export const PAMAMETRIZED = new Map<string, string>([
  ['Items', 'Item'],
  ['Monsters', 'Monster'],
]);
