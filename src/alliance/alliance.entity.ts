import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

export class Alliance {
  id: number;
  creator_corporation_id: number;
  creator_id: number;
  date_founded: string;
  executor_corporation_id?: number;
  faction_id?: number;
  name: string;
  ticker: string;
}
