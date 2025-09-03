import { Injectable } from '@nestjs/common';
import { Region } from './region.entity';
import axios from 'axios';

@Injectable()
export class RegionService {
  async findAll(): Promise<number[]> {
    const idsRes = await axios.get('https://esi.evetech.net/latest/universe/regions/');
    return idsRes.data;
  }

  async findOne(region_id: number): Promise<Region | undefined> {
    const res = await axios.get(`https://esi.evetech.net/latest/universe/regions/${region_id}/`);
    return res.data;
  }
}
