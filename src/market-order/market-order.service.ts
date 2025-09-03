import { Injectable } from '@nestjs/common';
import { MarketOrder } from './market-order.entity';
import axios from 'axios';

@Injectable()
export class MarketOrderService {
  async findAll(): Promise<number[]> {
    // ESI market order endpoint requires authentication, so this is a placeholder
    return [];
  }

  async findOne(order_id: number): Promise<MarketOrder | undefined> {
    // ESI market order endpoint requires authentication, so this is a placeholder
    return undefined;
  }
}
