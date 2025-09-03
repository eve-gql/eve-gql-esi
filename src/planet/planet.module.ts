import { Module } from '@nestjs/common';
import { PlanetResolver } from './planet.resolver';
import { PlanetService } from './planet.service';

@Module({
  providers: [PlanetResolver, PlanetService],
})
export class PlanetModule {}
