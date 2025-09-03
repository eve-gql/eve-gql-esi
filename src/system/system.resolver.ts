import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { System } from './system.entity';
import { SystemService } from './system.service';

@Resolver(() => System)
export class SystemResolver {
  constructor(private readonly systemService: SystemService) {}

  @Query(() => [System])
  systems() {
    return this.systemService.findAll();
  }

  @Query(() => System, { nullable: true })
  system(@Args('system_id', { type: () => Number }) system_id: number) {
    return this.systemService.findOne(system_id);
  }

  @ResolveReference()
  resolveReference(reference: { system_id: number }) {
    return this.systemService.findOne(reference.system_id);
  }
}
