import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Cursor } from './cursor';

@ObjectType()
export class Pagination {
  @Field(() => Int, { nullable: true })
  first?: number;

  @Field(() => Cursor, { nullable: true })
  after?: string;

  @Field(() => Int, { nullable: true })
  last?: number;

  @Field(() => Cursor, { nullable: true })
  before?: string;
}
