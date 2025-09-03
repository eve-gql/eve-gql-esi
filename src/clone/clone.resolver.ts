import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Clone } from './clone.entity';
import { CloneService } from './clone.service';

@Resolver(() => Clone)
export class CloneResolver {
  constructor(private readonly cloneService: CloneService) {}

  @Query(() => [Clone])
  clones() {
    return this.cloneService.findAll();
  }

  @Query(() => Clone, { nullable: true })
  clone(@Args('clone_id', { type: () => Number }) clone_id: number) {
    return this.cloneService.findOne(clone_id);
  }

  @ResolveReference()
  resolveReference(reference: { clone_id: number }) {
    return this.cloneService.findOne(reference.clone_id);
  }
}
