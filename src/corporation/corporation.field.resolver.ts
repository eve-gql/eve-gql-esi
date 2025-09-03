import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Corporation } from './corporation.entity';
import { CorporationLoader } from './corporation.loader';
import { FieldResolver } from 'src/graphql/field-resolver';

@Resolver(() => Corporation)
export class CorporationFieldResolver extends FieldResolver<Corporation> {
  constructor(private readonly corporationLoader: CorporationLoader) {
    super(corporationLoader);
  }

  @ResolveField(() => Number)
  async id(@Parent() corporation: Corporation) {
    return this.getField<number>(corporation, 'id');
  }

  @ResolveField(() => Number)
  async corporation_id(@Parent() corporation: Corporation) {
    return this.getField<number>(corporation, 'id');
  }

  @ResolveField(() => Number, { nullable: true })
  async alliance_id(@Parent() corporation: Corporation) {
    return this.getField<number>(corporation, 'alliance_id');
  }

  @ResolveField(() => Number)
  async ceo_id(@Parent() corporation: Corporation) {
    return this.getField<number>(corporation, 'ceo_id');
  }

  @ResolveField(() => Number)
  async creator_id(@Parent() corporation: Corporation) {
    return this.getField<number>(corporation, 'creator_id');
  }

  @ResolveField(() => String, { nullable: true })
  async date_founded(@Parent() corporation: Corporation) {
    return this.getField<string>(corporation, 'date_founded');
  }

  @ResolveField(() => String, { nullable: true })
  async description(@Parent() corporation: Corporation) {
    return this.getField<string>(corporation, 'description');
  }

  @ResolveField(() => Number, { nullable: true })
  async faction_id(@Parent() corporation: Corporation) {
    return this.getField<number>(corporation, 'faction_id');
  }

  @ResolveField(() => Number, { nullable: true })
  async home_station_id(@Parent() corporation: Corporation) {
    return this.getField<number>(corporation, 'home_station_id');
  }

  @ResolveField(() => Number)
  async member_count(@Parent() corporation: Corporation) {
    return this.getField<number>(corporation, 'member_count');
  }

  @ResolveField()
  async name(@Parent() corporation: Corporation) {
    return this.getField<string>(corporation, 'name');
  }

  @ResolveField(() => Number, { nullable: true })
  async shares(@Parent() corporation: Corporation) {
    return this.getField<number>(corporation, 'shares');
  }

  @ResolveField(() => Number)
  async tax_rate(@Parent() corporation: Corporation) {
    return this.getField<number>(corporation, 'tax_rate');
  }

  @ResolveField()
  async ticker(@Parent() corporation: Corporation) {
    return this.getField<string>(corporation, 'ticker');
  }

  @ResolveField(() => String, { nullable: true })
  async url(@Parent() corporation: Corporation) {
    return this.getField<string>(corporation, 'url');
  }

  @ResolveField(() => Boolean, { nullable: true })
  async war_eligible(@Parent() corporation: Corporation) {
    return this.getField<boolean>(corporation, 'war_eligible');
  }
}
