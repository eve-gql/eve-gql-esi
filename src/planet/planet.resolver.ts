import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Planet } from './planet.entity';
import { PlanetService } from './planet.service';

@Resolver(() => Planet)
export class PlanetResolver {
  constructor(private readonly planetService: PlanetService) {}

  @Query(() => [Planet])
  planets() {
    return this.planetService.findAll();
  }

  @Query(() => Planet, { nullable: true })
  planet(@Args('planet_id', { type: () => Number }) planet_id: number) {
    return this.planetService.findOne(planet_id);
  }

  @ResolveReference()
  resolveReference(reference: { planet_id: number }) {
    return this.planetService.findOne(reference.planet_id);
  }
}
