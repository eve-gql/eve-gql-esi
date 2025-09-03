import { AllianceService } from './alliance.service';
import { Alliance } from './alliance.entity';
import { Injectable } from '@nestjs/common';
import { Loader } from 'src/loader/loader';

@Injectable()
export class AllianceLoader extends Loader<number, Alliance> {
  constructor(private readonly allianceService: AllianceService) {
    super(allianceService);
  }
}
