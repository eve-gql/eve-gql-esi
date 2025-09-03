import { Injectable } from '@nestjs/common';
import { Alliance } from './alliance.entity';
import { EsiService } from 'src/esi/esi.service';
import { WithId } from 'src/decorators/with-id';

@Injectable()
export class AllianceService {
  constructor(private readonly esiService: EsiService) {}

  public findAll() {
    return this.esiService.alliances();
  }

  @WithId()
  public findOne(id: number): Promise<Alliance | undefined> {
    return this.esiService.alliance(id);
  }
}
