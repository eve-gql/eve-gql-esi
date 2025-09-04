import { Injectable } from '@nestjs/common';
import { EsiService } from 'src/esi/esi.service';

@Injectable()
export class CorporationAllianceService {
  constructor(private readonly esiService: EsiService) {}

  async findByAllianceId(id: number) {
    return this.esiService.allianceCorporations(id);
  }
}
