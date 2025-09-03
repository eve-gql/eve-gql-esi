import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ContactLabel {
  @Field(() => Int)
  label_id: number;

  @Field()
  label_name: string;
}
