import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Faction } from './faction.entity';
import { FactionService } from './faction.service';

@Resolver(() => Faction)
export class FactionResolver {
  constructor(private readonly factionService: FactionService) {}

  @Query(() => [Faction])
  factions() {
    return this.factionService.findAll();
  }

  @Query(() => Faction, { nullable: true })
  faction(@Args('faction_id', { type: () => Number }) faction_id: number) {
    return this.factionService.findOne(faction_id);
  }

  @ResolveReference()
  resolveReference(reference: { faction_id: number }) {
    return this.factionService.findOne(reference.faction_id);
  }
}
