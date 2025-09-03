import { Resolver, Query, Args } from '@nestjs/graphql';
import { AllianceIcon } from './alliance-icon.entity';
import { AllianceIconService } from './alliance-icon.service';

@Resolver(() => AllianceIcon)
export class AllianceIconResolver {
  constructor(private readonly allianceIconService: AllianceIconService) {}

  @Query(() => AllianceIcon, { nullable: true })
  allianceIcon(@Args('alliance_id', { type: () => Number }) alliance_id: number) {
    return this.allianceIconService.findByAllianceId(alliance_id);
  }
}
