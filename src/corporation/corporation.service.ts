import { Injectable } from '@nestjs/common';
import { Corporation } from './corporation.entity';
import axios from 'axios';

@Injectable()
export class CorporationService {
  private withCorporationId(corporation: Corporation, id: number) {
    return { ...corporation, id, corporation_id: id };
  }

  async findOne(id: number): Promise<Corporation | undefined> {
    const res = await axios.get(`https://esi.evetech.net/latest/corporations/${id}/`);
    return this.withCorporationId(res.data, id);
  }

  async findAll(): Promise<number[]> {
    const idsRes = await axios.get('https://esi.evetech.net/latest/corporations/');
    return idsRes.data;
  }

  async findByIds(ids: number[]): Promise<Corporation[]> {
    return await Promise.all(ids.map(async (id) => await this.findOne(id)));
  }

  async findByAllianceId(id: number): Promise<number[]> {
    const res = await axios.get(`https://esi.evetech.net/latest/alliances/${id}/corporations`);
    return res.data;
  }
}
