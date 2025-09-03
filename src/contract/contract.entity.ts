import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Contract {
  @Field(() => Int)
  contract_id: number;

  @Field(() => Int)
  issuer_id: number;

  @Field(() => Int)
  assignee_id: number;

  @Field(() => Float)
  price: number;

  @Field()
  status: string;
}
