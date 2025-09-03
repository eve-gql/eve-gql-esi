import { Injectable } from '@nestjs/common';
import { Star } from './star.entity';
import axios from 'axios';

@Injectable()
export class StarService {
  async findAll(): Promise<number[]> {
    // ESI does not expose a direct endpoint for stars, so this is a placeholder
    return [];
  }

  async findOne(star_id: number): Promise<Star | undefined> {
    // ESI does not expose a direct endpoint for stars, so this is a placeholder
    return undefined;
  }
}
