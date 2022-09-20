import { Entity } from '../data/entities/entity';

export abstract class EntityService<T extends Entity<T>> {
  constructor() {}

  abstract get(name: string): Promise<T>;
}
