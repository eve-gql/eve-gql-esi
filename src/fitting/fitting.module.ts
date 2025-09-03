import { Module } from '@nestjs/common';
import { FittingResolver } from './fitting.resolver';
import { FittingService } from './fitting.service';

@Module({
  providers: [FittingResolver, FittingService],
})
export class FittingModule {}
