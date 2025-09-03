import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Character {
  @Field(() => Int)
  character_id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  corporation_id?: number;

  @Field({ nullable: true })
  alliance_id?: number;
}
