import { ObjectType, Field, Int, Float, ID } from '@nestjs/graphql';

@ObjectType()
export class Corporation {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  corporation_id: number;

  @Field(() => Int, { nullable: true })
  alliance_id?: number;

  @Field(() => Int)
  ceo_id: number;

  @Field(() => Int)
  creator_id: number;

  @Field({ nullable: true })
  date_founded: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => Int, { nullable: true })
  faction_id: number;

  @Field(() => Int, { nullable: true })
  home_station_id: number;

  @Field(() => Int)
  member_count: number;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  shares: number;

  @Field(() => Float)
  tax_rate: number;

  @Field()
  ticker: string;

  @Field({ nullable: true })
  url: string;

  @Field({ nullable: true })
  war_eligible: boolean;
}
