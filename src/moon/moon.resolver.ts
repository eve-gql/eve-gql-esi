import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Moon } from './moon.entity';
import { MoonService } from './moon.service';

@Resolver(() => Moon)
export class MoonResolver {
  constructor(private readonly moonService: MoonService) {}

  @Query(() => [Moon])
  moons() {
    return this.moonService.findAll();
  }

  @Query(() => Moon, { nullable: true })
  moon(@Args('moon_id', { type: () => Number }) moon_id: number) {
    return this.moonService.findOne(moon_id);
  }

  @ResolveReference()
  resolveReference(reference: { moon_id: number }) {
    return this.moonService.findOne(reference.moon_id);
  }
}
