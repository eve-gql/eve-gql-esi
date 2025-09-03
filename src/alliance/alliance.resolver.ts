import { Resolver, Query, Args, ResolveReference, ID } from '@nestjs/graphql';
import { AllianceType } from './alliance.type';
import { AllianceService } from './alliance.service';
import { AllianceLoader } from './alliance.loader';

@Resolver(() => AllianceType)
export class AllianceResolver {
  constructor(
    private readonly allianceService: AllianceService,
    private readonly allianceLoader: AllianceLoader
  ) {}

  @Query(() => [AllianceType])
  alliances() {
    return this.allianceService.findAll().then((ids) =>
      ids.map((id) => ({
        id,
      }))
    );
  }

  @Query(() => AllianceType, { nullable: true })
  alliance(@Args('id', { type: () => ID }) id: number) {
    return this.allianceLoader.load(id);
  }

  @ResolveReference()
  resolveReference(reference: { id: number }) {
    return this.allianceLoader.load(reference.id);
  }
}
