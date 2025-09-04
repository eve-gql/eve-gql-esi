import { CorporationService } from './corporation.service';
import { Corporation } from './corporation.entity';
import { Injectable } from '@nestjs/common';
import { Loader } from 'src/loader/loader';

@Injectable()
export class CorporationLoader extends Loader<number, Corporation> {
  constructor(private readonly corporationService: CorporationService) {
    super(corporationService);
  }
}
