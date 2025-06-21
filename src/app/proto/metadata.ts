import { Product } from '../data/entities/product';
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
  lookup?: (e: any) => string[];
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
    '.ProductContentProto.products.author.name',
    {
      autocomplete: Autocomplete.lookup,
      lookup: (p: Product) => p.authors.map((a) => a.name),
    },
  ],
  [
    '.ProductContentProto.products.author.job',
    {
      autocomplete: Autocomplete.lookup,
      lookup: (p: Product) => p.authors.map((a) => a.job),
    },
  ],
  [
    '.ProductContentProto.products.editor.name',
    {
      autocomplete: Autocomplete.lookup,
      lookup: (p: Product) => p.editors.map((a) => a.name),
    },
  ],
  [
    '.ProductContentProto.products.editor.job',
    {
      autocomplete: Autocomplete.lookup,
      lookup: (p: Product) => p.editors.map((a) => a.job),
    },
  ],
  [
    '.ProductContentProto.products.cover.name',
    {
      autocomplete: Autocomplete.lookup,
      lookup: (p: Product) => p.cover.map((a) => a.name),
    },
  ],
  [
    '.ProductContentProto.products.cover.job',
    {
      autocomplete: Autocomplete.lookup,
      lookup: (p: Product) => p.cover.map((a) => a.job),
    },
  ],
  [
    '.ProductContentProto.products.cartographer.name',
    {
      autocomplete: Autocomplete.lookup,
      lookup: (p: Product) => p.cartographers.map((a) => a.name),
    },
  ],
  [
    '.ProductContentProto.products.cartographer.job',
    {
      autocomplete: Autocomplete.lookup,
      lookup: (p: Product) => p.cartographers.map((a) => a.job),
    },
  ],
  [
    '.ProductContentProto.products.illustrator.name',
    {
      autocomplete: Autocomplete.lookup,
      lookup: (p: Product) => p.illustrators.map((a) => a.name),
    },
  ],
  [
    '.ProductContentProto.products.illustrator.job',
    {
      autocomplete: Autocomplete.lookup,
      lookup: (p: Product) => p.illustrators.map((a) => a.job),
    },
  ],
  [
    '.ProductContentProto.products.manager.name',
    {
      autocomplete: Autocomplete.lookup,
      lookup: (p: Product) => p.managers.map((a) => a.name),
    },
  ],
  [
    '.ProductContentProto.products.manager.job',
    {
      autocomplete: Autocomplete.lookup,
      lookup: (p: Product) => p.managers.map((a) => a.job),
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
