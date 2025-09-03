import { Injectable } from '@nestjs/common';
import { EsiService } from 'src/esi/esi.service';
import { WithId } from 'src/decorators/with-id';

@Injectable()
export class TypeService {
  constructor(private readonly esiService: EsiService) {}

  public findAll() {
    return this.esiService.types();
  }

  @WithId()
  public findOne(id: number) {
    return this.esiService.type(id);
  }
}
