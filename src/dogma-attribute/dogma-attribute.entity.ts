import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class DogmaAttribute {
  @Field(() => Int)
  attribute_id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Float, { nullable: true })
  default_value?: number;
}
