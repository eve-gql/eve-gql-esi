import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Asset {
  @Field(() => Int)
  asset_id: number;

  @Field(() => Int)
  type_id: number;

  @Field(() => Int)
  quantity: number;

  @Field({ nullable: true })
  location_id?: number;

  @Field({ nullable: true })
  location_type?: string;
}
