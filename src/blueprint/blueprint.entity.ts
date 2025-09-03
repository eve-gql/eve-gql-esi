import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Blueprint {
  @Field(() => Int)
  blueprint_id: number;

  @Field(() => Int)
  type_id: number;

  @Field(() => Int)
  quantity: number;

  @Field({ nullable: true })
  location_id?: number;

  @Field({ nullable: true })
  location_type?: string;
}
