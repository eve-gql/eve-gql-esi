import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class System {
  @Field(() => Int)
  system_id: number;

  @Field()
  name: string;

  @Field(() => Int)
  constellation_id: number;

  @Field(() => Int)
  region_id: number;

  @Field(() => Float)
  security_status: number;
}
