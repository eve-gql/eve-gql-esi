import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { AllianceType } from '../alliance/alliance.type';
import { AllianceIconService } from './alliance-icon.service';
import { AllianceIcon } from './alliance-icon.entity';

@Resolver(() => AllianceType)
export class AllianceIconAllianceResolver {
  constructor(private readonly allianceIconService: AllianceIconService) {}

  @ResolveField(() => AllianceIcon)
  async icon(@Parent() alliance: AllianceType) {
    return this.allianceIconService.findByAllianceId(alliance.id);
  }
}
