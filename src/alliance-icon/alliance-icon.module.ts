import { Module } from '@nestjs/common';
import { AllianceIconResolver } from './alliance-icon.resolver';
import { AllianceIconService } from './alliance-icon.service';
import { AllianceIconAllianceResolver } from './alliance-icon-alliance.resolver';

@Module({
  providers: [AllianceIconService, AllianceIconResolver, AllianceIconAllianceResolver],
  exports: [AllianceIconResolver, AllianceIconAllianceResolver],
})
export class AllianceIconModule {}
