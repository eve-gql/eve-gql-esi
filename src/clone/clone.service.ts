import { Injectable } from '@nestjs/common';
import { Clone } from './clone.entity';
import axios from 'axios';

@Injectable()
export class CloneService {
  async findAll(): Promise<number[]> {
    // ESI clone endpoint requires authentication, so this is a placeholder
    return [];
  }

  async findOne(clone_id: number): Promise<Clone | undefined> {
    // ESI clone endpoint requires authentication, so this is a placeholder
    return undefined;
  }
}
