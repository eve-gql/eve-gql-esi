import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType('Alliance')
export class AllianceType {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  creator_corporation_id: number;

  @Field(() => Int)
  creator_id: number;

  @Field()
  date_founded: string;

  @Field(() => Int, { nullable: true })
  executor_corporation_id?: number;

  @Field(() => Int, { nullable: true })
  faction_id?: number;

  @Field()
  name: string;

  @Field()
  ticker: string;
}
