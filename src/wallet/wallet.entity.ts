import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Wallet {
  @Field(() => Int)
  wallet_id: number;

  @Field(() => Int)
  character_id: number;

  @Field(() => Float)
  balance: number;
}
