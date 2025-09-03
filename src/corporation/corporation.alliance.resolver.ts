import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { AllianceType } from '../alliance/alliance.type';
import { CorporationService } from './corporation.service';
import { Corporation } from './corporation.entity';

@Resolver(() => AllianceType)
export class CorporationAllianceResolver {
  constructor(private readonly corporationService: CorporationService) {}

  @ResolveField(() => [Corporation])
  async corporations(@Parent() alliance: AllianceType) {
    return this.corporationService.findByAllianceId(alliance.id).then((ids) =>
      ids.map((id) => ({
        id,
      }))
    );
  }
}
