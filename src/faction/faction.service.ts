import { Injectable } from '@nestjs/common';
import { Faction } from './faction.entity';
import axios from 'axios';

@Injectable()
export class FactionService {
  async findAll(): Promise<Faction[]> {
    const res = await axios.get('https://esi.evetech.net/latest/universe/factions/');
    return res.data;
  }

  async findOne(faction_id: number): Promise<Faction | undefined> {
    const res = await axios.get(`https://esi.evetech.net/latest/universe/factions/`);
    return res.data.find((f: Faction) => f.faction_id === faction_id);
  }
}
