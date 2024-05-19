import { signal } from '@angular/core';
import { Utils } from '../../../../common/utils';
import { Entity } from '../../entities/entity';
import { Factoid } from './factoid';

export interface Data {
  name?: string;
  count?: number;
  bases?: string[];
  values?: { [k: string]: string };
}

export const PATTERN = /^(?:(\d+)\s*x)?\s*(.+?)\s*(?:\[(.*)\])?\s*(?:\((.*)\))?$/;

export class ModifiedEntity<E extends Entity<E>> implements Factoid<Data> {
  count = signal(1);
  bases = signal<string[]>([]);
  name = signal<string>('');
  values = signal<Map<string, string>>(new Map());
  entity = signal<E | undefined>(undefined);

  constructor(
    private readonly create: (data: Data) => Promise<E>,
    data: Data,
  ) {
    this.update(data);
  }

  toData(): Data {
    return {
      name: this.name(),
      count: this.count(),
      bases: this.bases(),
      values: Object.fromEntries(this.values()),
    };
  }

  toString(): string {
    const parts: string[] = [];

    if (this.count() !== 1) {
      parts.push(this.count() + 'x');
    }

    parts.push(this.name());

    if (this.bases().length > 0) {
      parts.push(`[${this.bases().join(', ')}]`);
    }

    if (this.values().size > 0) {
      parts.push(`(${Array.from(this.values().entries()).map((v) => `${v[0]}=${v[1]}`)})`);
    }

    return parts.join(' ');
  }

  async update(data: Data) {
    if (data.name || data.count || data.bases) {
      this.name.set(data.name || '');
      this.count.set(data.count || 1);
      this.bases.set(data.bases || []);
      this.values.set(new Map(Object.entries(data.values || {})));

      this.entity.set(await this.create(data));
    }
  }

  static fromData<E extends Entity<E>>(create: (data: Data) => Promise<E>, data: Data): ModifiedEntity<E> {
    return new ModifiedEntity(create, data);
  }

  static fromString(text: string): Data {
    const match = text.match(PATTERN);
    if (match) {
      const name = match[2];
      const count = Number(match[1] || 1);
      const bases = Utils.trimArray((match[3] || '').split(/\s*,\s*/));
      const values = Entity.splitValues(match[4] || '');

      return { name, count, bases, values: Object.fromEntries(values) };
    }

    return { name: text };
  }
}
