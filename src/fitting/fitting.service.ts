import { Injectable } from '@nestjs/common';
import { Fitting } from './fitting.entity';
import axios from 'axios';

@Injectable()
export class FittingService {
  async findAll(): Promise<number[]> {
    // ESI fitting endpoint requires authentication, so this is a placeholder
    return [];
  }

  async findOne(fitting_id: number): Promise<Fitting | undefined> {
    // ESI fitting endpoint requires authentication, so this is a placeholder
    return undefined;
  }
}
