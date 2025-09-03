import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Region {
  @Field(() => Int)
  region_id: number;

  @Field()
  name: string;
}
