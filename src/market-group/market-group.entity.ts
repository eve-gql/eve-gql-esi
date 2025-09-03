import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MarketGroup {
  @Field(() => Int)
  market_group_id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  parent_group_id?: number;

  @Field({ nullable: true })
  description?: string;
}
