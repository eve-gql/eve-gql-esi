import { Injectable } from '@nestjs/common';
import { MarketGroup } from './market-group.entity';
import axios from 'axios';

@Injectable()
export class MarketGroupService {
  async findAll(): Promise<number[]> {
    const idsRes = await axios.get('https://esi.evetech.net/latest/universe/market/groups/');
    return idsRes.data;
  }

  async findOne(market_group_id: number): Promise<MarketGroup | undefined> {
    const res = await axios.get(
      `https://esi.evetech.net/latest/universe/market/groups/${market_group_id}/`
    );
    return res.data;
  }
}
