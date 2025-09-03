import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ContactLabel } from './contact-label.entity';

@Injectable()
export class ContactLabelService {
  async findByAllianceId(allianceId: number): Promise<ContactLabel[]> {
    const url = `https://esi.evetech.net/latest/alliances/${allianceId}/contacts/labels/`;
    const response = await axios.get(url);
    return response.data;
  }

  async findByCorporationId(corporationId: number): Promise<ContactLabel[]> {
    const url = `https://esi.evetech.net/latest/corporations/${corporationId}/contacts/labels/`;
    const response = await axios.get(url);
    return response.data;
  }
}
