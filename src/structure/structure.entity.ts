import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Structure {
  @Field(() => Int)
  structure_id: number;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  system_id?: number;

  @Field({ nullable: true })
  type_id?: number;
}
