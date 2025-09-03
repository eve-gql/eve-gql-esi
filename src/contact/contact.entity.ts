import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Contact {
  @Field(() => Int)
  contact_id: number;

  @Field()
  contact_type: string;

  @Field()
  is_blocked: boolean;

  @Field()
  is_watched: boolean;

  @Field(() => [Int])
  label_ids: number[];

  @Field(() => Float)
  standing: number;
}
