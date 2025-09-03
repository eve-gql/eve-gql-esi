import { Injectable } from '@nestjs/common';
import { Constellation } from './constellation.entity';
import axios from 'axios';

@Injectable()
export class ConstellationService {
  async findAll(): Promise<number[]> {
    const idsRes = await axios.get('https://esi.evetech.net/latest/universe/constellations/');
    return idsRes.data;
  }

  async findOne(constellation_id: number): Promise<Constellation | undefined> {
    const res = await axios.get(
      `https://esi.evetech.net/latest/universe/constellations/${constellation_id}/`
    );
    return res.data;
  }
}
