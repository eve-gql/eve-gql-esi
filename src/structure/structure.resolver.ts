import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Structure } from './structure.entity';
import { StructureService } from './structure.service';

@Resolver(() => Structure)
export class StructureResolver {
  constructor(private readonly structureService: StructureService) {}

  @Query(() => [Structure])
  structures() {
    return this.structureService.findAll();
  }

  @Query(() => Structure, { nullable: true })
  structure(@Args('structure_id', { type: () => Number }) structure_id: number) {
    return this.structureService.findOne(structure_id);
  }

  @ResolveReference()
  resolveReference(reference: { structure_id: number }) {
    return this.structureService.findOne(reference.structure_id);
  }
}
