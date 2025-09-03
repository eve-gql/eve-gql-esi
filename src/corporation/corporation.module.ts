import { Module } from '@nestjs/common';
import { CorporationResolver } from './corporation.resolver';
import { CorporationService } from './corporation.service';
import { CorporationAllianceResolver } from './corporation.alliance.resolver';
import { CorporationLoader } from './corporation.loader';
import { CorporationFieldResolver } from './corporation.field.resolver';

@Module({
  providers: [
    CorporationService,
    CorporationLoader,
    CorporationResolver,
    CorporationFieldResolver,
    CorporationAllianceResolver,
  ],
  exports: [CorporationResolver, CorporationFieldResolver, CorporationAllianceResolver],
})
export class CorporationModule {}
