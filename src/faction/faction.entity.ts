import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Faction {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  faction_id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  is_unique?: boolean;

  @Field({ nullable: true })
  militia_corporation_id?: number;
}
