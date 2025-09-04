import { FactionService } from './faction.service';
import { Faction } from './faction.entity';
import { Injectable } from '@nestjs/common';
import { Loader } from 'src/loader/loader';

@Injectable()
export class FactionLoader extends Loader<number, Faction> {
  constructor(private readonly factionService: FactionService) {
    super(factionService);
  }
}
