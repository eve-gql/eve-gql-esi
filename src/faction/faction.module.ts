import { Module } from '@nestjs/common';
import { FactionResolver } from './faction.resolver';
import { FactionService } from './faction.service';

@Module({
  providers: [FactionResolver, FactionService],
  exports: [FactionResolver],
})
export class FactionModule {}
