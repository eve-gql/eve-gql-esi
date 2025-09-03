import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Fitting } from './fitting.entity';
import { FittingService } from './fitting.service';

@Resolver(() => Fitting)
export class FittingResolver {
  constructor(private readonly fittingService: FittingService) {}

  @Query(() => [Fitting])
  fittings() {
    return this.fittingService.findAll();
  }

  @Query(() => Fitting, { nullable: true })
  fitting(@Args('fitting_id', { type: () => Number }) fitting_id: number) {
    return this.fittingService.findOne(fitting_id);
  }

  @ResolveReference()
  resolveReference(reference: { fitting_id: number }) {
    return this.fittingService.findOne(reference.fitting_id);
  }
}
