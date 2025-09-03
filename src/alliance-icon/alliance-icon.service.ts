import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AllianceIcon } from './alliance-icon.entity';

@Injectable()
export class AllianceIconService {
  async findByAllianceId(alliance_id: number): Promise<AllianceIcon> {
    const res = await axios.get(`https://esi.evetech.net/latest/alliances/${alliance_id}/icons`);
    return res.data;
  }
}
