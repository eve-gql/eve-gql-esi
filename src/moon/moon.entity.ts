import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Moon {
  @Field(() => Int)
  moon_id: number;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  system_id?: number;
}
