import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => Int)
  skill_id: number;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  level?: number;
}
