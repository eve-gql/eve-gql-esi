import { Module } from '@nestjs/common';
import { CorporationResolver } from './corporation.resolver';
import { CorporationService } from './corporation.service';
import { AllianceCorporationsResolver } from './alliance.corporations.resolver';
import { CorporationAllianceService } from './corporation.alliance.service';
import { CorporationLoader } from './corporation.loader';
import { CorporationFieldResolver } from './corporation.field.resolver';
import { EsiModule } from 'src/esi/esi.module';

@Module({
  imports: [EsiModule],
  providers: [
    CorporationService,
    CorporationLoader,
    CorporationResolver,
    CorporationFieldResolver,
    CorporationAllianceService,
    AllianceCorporationsResolver,
  ],
  exports: [
    CorporationLoader,
    CorporationResolver,
    CorporationFieldResolver,
    AllianceCorporationsResolver,
  ],
})
export class CorporationModule {}
