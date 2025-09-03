import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { MarketGroup } from './market-group.entity';
import { MarketGroupService } from './market-group.service';

@Resolver(() => MarketGroup)
export class MarketGroupResolver {
  constructor(private readonly marketGroupService: MarketGroupService) {}

  @Query(() => [MarketGroup])
  marketGroups() {
    return this.marketGroupService.findAll();
  }

  @Query(() => MarketGroup, { nullable: true })
  marketGroup(@Args('market_group_id', { type: () => Number }) market_group_id: number) {
    return this.marketGroupService.findOne(market_group_id);
  }

  @ResolveReference()
  resolveReference(reference: { market_group_id: number }) {
    return this.marketGroupService.findOne(reference.market_group_id);
  }
}
