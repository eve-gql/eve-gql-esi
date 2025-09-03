import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Star {
  @Field(() => Int)
  star_id: number;

  @Field()
  name: string;

  @Field(() => Float, { nullable: true })
  age?: number;

  @Field(() => Float, { nullable: true })
  luminosity?: number;

  @Field(() => Float, { nullable: true })
  temperature?: number;
}
