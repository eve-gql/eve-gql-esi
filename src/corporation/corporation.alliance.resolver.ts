import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { AllianceType } from '../alliance/alliance.type';
import { CorporationType } from './corporation.type';
import { CorporationAllianceService } from './corporation.alliance.service';

@Resolver(() => AllianceType)
export class CorporationAllianceResolver {
  constructor(private readonly corporationAllianceService: CorporationAllianceService) {}

  @ResolveField(() => [CorporationType])
  async corporations(@Parent() alliance: AllianceType) {
    return this.corporationAllianceService.findByAllianceId(alliance.id).then((ids) =>
      ids.map((id) => ({
        id,
      }))
    );
  }
}
