import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { AllianceType } from './alliance.type';
import { AllianceLoader } from './alliance.loader';
import { FieldResolver } from 'src/graphql/field-resolver';

@Resolver(() => AllianceType)
export class AllianceFieldResolver extends FieldResolver<AllianceType> {
  constructor(private readonly allianceLoader: AllianceLoader) {
    super(allianceLoader);
  }

  @ResolveField(() => Number)
  async id(@Parent() alliance: AllianceType) {
    return this.getField<number>(alliance, 'id');
  }

  @ResolveField(() => Number)
  async creator_corporation_id(@Parent() alliance: AllianceType) {
    return this.getField<number>(alliance, 'creator_corporation_id');
  }

  @ResolveField(() => Number)
  async creator_id(@Parent() alliance: AllianceType) {
    return this.getField<number>(alliance, 'creator_id');
  }

  @ResolveField(() => String)
  async date_founded(@Parent() alliance: AllianceType) {
    return this.getField<string>(alliance, 'date_founded');
  }

  @ResolveField(() => Number, { nullable: true })
  async executor_corporation_id(@Parent() alliance: AllianceType) {
    return this.getField<number>(alliance, 'executor_corporation_id');
  }

  @ResolveField(() => Number, { nullable: true })
  async faction_id(@Parent() alliance: AllianceType) {
    return this.getField<number>(alliance, 'faction_id');
  }

  @ResolveField(() => String)
  async name(@Parent() alliance: AllianceType) {
    return this.getField<string>(alliance, 'name');
  }

  @ResolveField(() => String)
  async ticker(@Parent() alliance: AllianceType) {
    return this.getField<string>(alliance, 'ticker');
  }
}
