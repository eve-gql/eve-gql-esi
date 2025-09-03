import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Blueprint } from './blueprint.entity';
import { BlueprintService } from './blueprint.service';

@Resolver(() => Blueprint)
export class BlueprintResolver {
  constructor(private readonly blueprintService: BlueprintService) {}

  @Query(() => [Blueprint])
  blueprints() {
    return this.blueprintService.findAll();
  }

  @Query(() => Blueprint, { nullable: true })
  blueprint(@Args('blueprint_id', { type: () => Number }) blueprint_id: number) {
    return this.blueprintService.findOne(blueprint_id);
  }

  @ResolveReference()
  resolveReference(reference: { blueprint_id: number }) {
    return this.blueprintService.findOne(reference.blueprint_id);
  }
}
