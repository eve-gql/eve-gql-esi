import { Module } from '@nestjs/common';
import { RegionResolver } from './region.resolver';
import { RegionService } from './region.service';

@Module({
  providers: [RegionResolver, RegionService],
})
export class RegionModule {}
