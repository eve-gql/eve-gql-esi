import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Region } from './region.entity';
import { RegionService } from './region.service';

@Resolver(() => Region)
export class RegionResolver {
  constructor(private readonly regionService: RegionService) {}

  @Query(() => [Region])
  regions() {
    return this.regionService.findAll();
  }

  @Query(() => Region, { nullable: true })
  region(@Args('region_id', { type: () => Number }) region_id: number) {
    return this.regionService.findOne(region_id);
  }

  @ResolveReference()
  resolveReference(reference: { region_id: number }) {
    return this.regionService.findOne(reference.region_id);
  }
}
