import * as DataLoader from 'dataloader';
import { CorporationService } from './corporation.service';
import { Corporation } from './corporation.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CorporationLoader {
  private loader: DataLoader<number, Corporation>;

  constructor(private readonly corporationService: CorporationService) {
    this.loader = new DataLoader(async (ids: readonly number[]) => {
      const corporations = await this.corporationService.findByIds([...ids]);
      const corporationMap = new Map(corporations.map((corp) => [corp.id, corp]));
      return ids.map((id) => corporationMap.get(id));
    });
  }

  async load(id: number): Promise<Corporation | undefined> {
    return this.loader.load(id);
  }
}
