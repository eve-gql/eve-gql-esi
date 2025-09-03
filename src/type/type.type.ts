import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Type')
export class TypeType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  group_id?: number;

  @Field({ nullable: true })
  published?: boolean;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  volume?: number;

  @Field({ nullable: true })
  mass?: number;
}
