import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
  async findByAllianceId(allianceId: number): Promise<Contact[]> {
    const url = `https://esi.evetech.net/latest/alliances/${allianceId}/contacts/`;
    const response = await axios.get(url);
    return response.data;
  }

  async findByCorporationId(corporationId: number): Promise<Contact[]> {
    const url = `https://esi.evetech.net/latest/corporations/${corporationId}/contacts/`;
    const response = await axios.get(url);
    return response.data;
  }
}
