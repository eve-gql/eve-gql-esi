import { Module } from '@nestjs/common';
import { AllianceResolver } from './alliance.resolver';
import { AllianceService } from './alliance.service';
import { AllianceFieldResolver } from './alliance.field.resolver';
import { AllianceLoader } from './alliance.loader';
import { EsiModule } from 'src/esi/esi.module';

@Module({
  imports: [EsiModule],
  providers: [AllianceService, AllianceLoader, AllianceResolver, AllianceFieldResolver],
  exports: [AllianceResolver, AllianceFieldResolver],
})
export class AllianceModule {}
