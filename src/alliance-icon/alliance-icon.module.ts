import { Module } from '@nestjs/common';
import { AllianceIconService } from './alliance-icon.service';
import { AllianceIconAllianceResolver } from './alliance-icon-alliance.resolver';

@Module({
  providers: [AllianceIconService, AllianceIconAllianceResolver],
  exports: [AllianceIconAllianceResolver],
})
export class AllianceIconModule {}
