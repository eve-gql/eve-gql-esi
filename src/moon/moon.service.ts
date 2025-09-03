import { Injectable } from '@nestjs/common';
import { Moon } from './moon.entity';
import axios from 'axios';

@Injectable()
export class MoonService {
  async findAll(): Promise<number[]> {
    // ESI does not expose a direct endpoint for moons, so this is a placeholder
    return [];
  }

  async findOne(moon_id: number): Promise<Moon | undefined> {
    // ESI does not expose a direct endpoint for moons, so this is a placeholder
    return undefined;
  }
}
