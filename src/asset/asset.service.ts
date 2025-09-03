import { Injectable } from '@nestjs/common';
import { Asset } from './asset.entity';
import axios from 'axios';

@Injectable()
export class AssetService {
  async findAll(): Promise<number[]> {
    // ESI asset endpoint requires authentication, so this is a placeholder
    return [];
  }

  async findOne(asset_id: number): Promise<Asset | undefined> {
    // ESI asset endpoint requires authentication, so this is a placeholder
    return undefined;
  }
}
