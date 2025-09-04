import { Module } from '@nestjs/common';
import { CorporationResolver } from './corporation.resolver';
import { CorporationService } from './corporation.service';
import { CorporationAllianceResolver } from './corporation.alliance.resolver';
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
    CorporationAllianceResolver,
  ],
  exports: [CorporationResolver, CorporationFieldResolver, CorporationAllianceResolver],
})
export class CorporationModule {}
