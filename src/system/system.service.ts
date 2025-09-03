import { Injectable } from '@nestjs/common';
import { System } from './system.entity';
import axios from 'axios';

@Injectable()
export class SystemService {
  async findAll(): Promise<number[]> {
    const idsRes = await axios.get('https://esi.evetech.net/latest/universe/systems/');
    return idsRes.data;
  }

  async findOne(system_id: number): Promise<System | undefined> {
    const res = await axios.get(`https://esi.evetech.net/latest/universe/systems/${system_id}/`);
    return res.data;
  }
}
