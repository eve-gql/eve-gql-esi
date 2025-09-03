import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => Int)
  category_id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  published?: boolean;
}
