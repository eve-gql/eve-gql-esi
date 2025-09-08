import { Module } from '@nestjs/common';
import { CorporationResolver } from './corporation.resolver';
import { CorporationService } from './corporation.service';
import { AllianceCorporationsResolver } from './alliance.corporations.resolver';
import { CorporationAllianceService } from './corporation.alliance.service';
import { CorporationLoader } from './corporation.loader';
import { CorporationFieldResolver } from './corporation.field.resolver';
import { EsiModule } from 'src/esi/esi.module';
import { AllianceModule } from 'src/alliance/alliance.module';
import { AllianceCreatorCorporationResolver } from './alliance.creatorcorporation.resolver';
import { AllianceExecutorCorporationResolver } from './alliance.executorcorporation.resolver';

@Module({
  imports: [EsiModule, AllianceModule],
  providers: [
    CorporationService,
    CorporationLoader,
    CorporationResolver,
    CorporationFieldResolver,
    CorporationAllianceService,
    AllianceCorporationsResolver,
    AllianceCreatorCorporationResolver,
    AllianceExecutorCorporationResolver,
  ],
  exports: [
    CorporationLoader,
    CorporationResolver,
    CorporationFieldResolver,
    AllianceCorporationsResolver,
    AllianceCreatorCorporationResolver,
    AllianceExecutorCorporationResolver,
  ],
})
export class CorporationModule {}
