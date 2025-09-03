import { Injectable } from '@nestjs/common';
import { Station } from './station.entity';
import axios from 'axios';

@Injectable()
export class StationService {
  async findAll(): Promise<number[]> {
    const idsRes = await axios.get('https://esi.evetech.net/latest/universe/stations/');
    return idsRes.data;
  }

  async findOne(station_id: number): Promise<Station | undefined> {
    const res = await axios.get(`https://esi.evetech.net/latest/universe/stations/${station_id}/`);
    return res.data;
  }
}
