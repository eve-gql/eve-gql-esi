import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Station } from './station.entity';
import { StationService } from './station.service';

@Resolver(() => Station)
export class StationResolver {
  constructor(private readonly stationService: StationService) {}

  @Query(() => [Station])
  stations() {
    return this.stationService.findAll();
  }

  @Query(() => Station, { nullable: true })
  station(@Args('station_id', { type: () => Number }) station_id: number) {
    return this.stationService.findOne(station_id);
  }

  @ResolveReference()
  resolveReference(reference: { station_id: number }) {
    return this.stationService.findOne(reference.station_id);
  }
}
