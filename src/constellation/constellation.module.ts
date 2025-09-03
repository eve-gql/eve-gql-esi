import { Module } from '@nestjs/common';
import { ConstellationResolver } from './constellation.resolver';
import { ConstellationService } from './constellation.service';

@Module({
  providers: [ConstellationResolver, ConstellationService],
})
export class ConstellationModule {}
