import { Injectable } from '@nestjs/common';
import { Blueprint } from './blueprint.entity';
import axios from 'axios';

@Injectable()
export class BlueprintService {
  async findAll(): Promise<number[]> {
    // ESI blueprint endpoint requires authentication, so this is a placeholder
    return [];
  }

  async findOne(blueprint_id: number): Promise<Blueprint | undefined> {
    // ESI blueprint endpoint requires authentication, so this is a placeholder
    return undefined;
  }
}
