import { Injectable } from '@nestjs/common';
import { DogmaAttribute } from './dogma-attribute.entity';
import axios from 'axios';

@Injectable()
export class DogmaAttributeService {
  async findAll(): Promise<number[]> {
    const idsRes = await axios.get('https://esi.evetech.net/latest/dogma/attributes/');
    return idsRes.data;
  }

  async findOne(attribute_id: number): Promise<DogmaAttribute | undefined> {
    const res = await axios.get(`https://esi.evetech.net/latest/dogma/attributes/${attribute_id}/`);
    return res.data;
  }
}
