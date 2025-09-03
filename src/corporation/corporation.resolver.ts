import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Corporation } from './corporation.entity';
import { CorporationService } from './corporation.service';
import { CorporationLoader } from './corporation.loader';

@Resolver(() => Corporation)
export class CorporationResolver {
  constructor(
    private readonly corporationService: CorporationService,
    private readonly corporationLoader: CorporationLoader
  ) {}

  @Query(() => [Number])
  corporations() {
    return this.corporationService.findAll();
  }

  @Query(() => Corporation, { nullable: true })
  corporation(@Args('corporation_id', { type: () => Number }) corporation_id: number) {
    return this.corporationLoader.load(corporation_id);
  }

  @ResolveReference()
  resolveReference(reference: { corporation_id: number }) {
    return this.corporationService.findOne(reference.corporation_id);
  }
}
