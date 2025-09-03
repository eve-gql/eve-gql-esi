import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Faction {
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
