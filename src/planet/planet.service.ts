import { Injectable } from '@nestjs/common';
import { Planet } from './planet.entity';
import axios from 'axios';

@Injectable()
export class PlanetService {
  async findAll(): Promise<number[]> {
    // ESI does not expose a direct endpoint for planets, so this is a placeholder
    return [];
  }

  async findOne(planet_id: number): Promise<Planet | undefined> {
    // ESI does not expose a direct endpoint for planets, so this is a placeholder
    return undefined;
  }
}
