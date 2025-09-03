import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Constellation {
  @Field(() => Int)
  constellation_id: number;

  @Field()
  name: string;

  @Field(() => Int)
  region_id: number;
}
