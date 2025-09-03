import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Fitting {
  @Field(() => Int)
  fitting_id: number;

  @Field(() => Int)
  character_id: number;

  @Field()
  name: string;
}
