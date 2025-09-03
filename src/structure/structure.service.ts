import { Injectable } from '@nestjs/common';
import { Structure } from './structure.entity';
import axios from 'axios';

@Injectable()
export class StructureService {
  async findAll(): Promise<number[]> {
    // ESI structure endpoint requires authentication, so this is a placeholder
    return [];
  }

  async findOne(structure_id: number): Promise<Structure | undefined> {
    // ESI structure endpoint requires authentication, so this is a placeholder
    return undefined;
  }
}
