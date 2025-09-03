import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Planet {
  @Field(() => Int)
  planet_id: number;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  system_id?: number;
}
