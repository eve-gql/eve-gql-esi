import { Injectable } from '@nestjs/common';
import { Character } from './character.entity';
import axios from 'axios';

@Injectable()
export class CharacterService {
  async findAll(): Promise<number[]> {
    // ESI does not expose a direct endpoint for all characters, so this is a placeholder
    return [];
  }

  async findOne(character_id: number): Promise<Character | undefined> {
    const res = await axios.get(`https://esi.evetech.net/latest/characters/${character_id}/`);
    return res.data;
  }
}
