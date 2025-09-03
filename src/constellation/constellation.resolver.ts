import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Constellation } from './constellation.entity';
import { ConstellationService } from './constellation.service';

@Resolver(() => Constellation)
export class ConstellationResolver {
  constructor(private readonly constellationService: ConstellationService) {}

  @Query(() => [Constellation])
  constellations() {
    return this.constellationService.findAll();
  }

  @Query(() => Constellation, { nullable: true })
  constellation(@Args('constellation_id', { type: () => Number }) constellation_id: number) {
    return this.constellationService.findOne(constellation_id);
  }

  @ResolveReference()
  resolveReference(reference: { constellation_id: number }) {
    return this.constellationService.findOne(reference.constellation_id);
  }
}
