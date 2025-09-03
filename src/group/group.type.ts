import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';

@ObjectType('Group')
export class GroupType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  category_id?: number;

  @Field({ nullable: true })
  published?: boolean;

  @Field(() => [Int])
  @Directive('@inaccessible')
  typeIds: number[];
}
