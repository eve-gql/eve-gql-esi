import { Injectable } from '@nestjs/common';
import { DogmaEffect } from './dogma-effect.entity';
import axios from 'axios';

@Injectable()
export class DogmaEffectService {
  async findAll(): Promise<number[]> {
    const idsRes = await axios.get('https://esi.evetech.net/latest/dogma/effects/');
    return idsRes.data;
  }

  async findOne(effect_id: number): Promise<DogmaEffect | undefined> {
    const res = await axios.get(`https://esi.evetech.net/latest/dogma/effects/${effect_id}/`);
    return res.data;
  }
}
