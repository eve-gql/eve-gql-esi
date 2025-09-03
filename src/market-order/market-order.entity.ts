import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class MarketOrder {
  @Field(() => Int)
  order_id: number;

  @Field(() => Int)
  type_id: number;

  @Field(() => Int)
  location_id: number;

  @Field(() => Int)
  volume_total: number;

  @Field(() => Int)
  volume_remain: number;

  @Field(() => Float)
  price: number;

  @Field()
  is_buy_order: boolean;
}
