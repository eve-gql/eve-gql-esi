import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Star } from './star.entity';
import { StarService } from './star.service';

@Resolver(() => Star)
export class StarResolver {
  constructor(private readonly starService: StarService) {}

  @Query(() => [Star])
  stars() {
    return this.starService.findAll();
  }

  @Query(() => Star, { nullable: true })
  star(@Args('star_id', { type: () => Number }) star_id: number) {
    return this.starService.findOne(star_id);
  }

  @ResolveReference()
  resolveReference(reference: { star_id: number }) {
    return this.starService.findOne(reference.star_id);
  }
}
