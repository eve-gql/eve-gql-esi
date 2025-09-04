import * as DataLoader from 'dataloader';
import { Entity } from 'src/entity/entity';
import { Service } from 'src/service/service';

export abstract class Loader<K, V extends Entity<K>> {
  private loader: DataLoader<K, V>;

  constructor(private readonly s: Service<K, V>) {
    this.loader = new DataLoader(async (ids: readonly K[]) => {
      const types = await Promise.all(ids.map((id) => this.s.findOne(id)));
      const typeMap = new Map(types.filter(Boolean).map((type) => [type!.id, type]));
      return ids.map((id) => typeMap.get(id));
    });
  }

  async load(key: K): Promise<V | undefined> {
    return this.loader.load(key);
  }

  async loadMany(keys: K[]): Promise<(V | Error)[]> {
    return this.loader.loadMany(keys);
  }
}
