import { ProtoInfoFieldType } from './proto-info-field-type';

export interface TypeMetadata {
  type: ProtoInfoFieldType;
}

export enum Autocomplete {
  entity,
  previous,
  lookup,
}

export interface FieldMetadata {
  formatted?: boolean;
  autocomplete?: Autocomplete;
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
    'description',
    {
      formatted: true,
    },
  ],
  [
    'short_description',
    {
      formatted: true,
    },
  ],
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
]);
