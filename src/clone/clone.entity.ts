import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Clone {
  @Field(() => Int)
  clone_id: number;

  @Field(() => Int)
  character_id: number;

  @Field({ nullable: true })
  location_id?: number;
}
