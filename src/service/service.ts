import { Entity } from 'src/entity/entity';

export interface Service<K, T extends Entity<K>> {
  findOne(id: K): Promise<T>;
}
