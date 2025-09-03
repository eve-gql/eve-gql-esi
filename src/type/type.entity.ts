import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

export class Type {
  id: number;
  name: string;
  group_id?: number;
  published?: boolean;
  description?: string;
  volume?: number;
  mass?: number;
}
