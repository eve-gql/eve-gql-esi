import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AllianceIcon {
  @Field()
  px128x128: string;

  @Field()
  px64x64: string;
}
