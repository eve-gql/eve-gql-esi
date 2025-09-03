import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { TypeType } from './type.type';
import { TypeService } from './type.service';
import { TypeLoader } from './type.loader';

@Resolver(() => TypeType)
export class TypeResolver {
  constructor(
    private readonly typeService: TypeService,
    private readonly typeLoader: TypeLoader
  ) {}

  @Query(() => [TypeType])
  types() {
    return this.typeService.findAll().then((ids) =>
      ids.map((id) => ({
        id,
      }))
    );
  }

  @Query(() => TypeType, { nullable: true })
  type(@Args('id', { type: () => Number }) id: number) {
    return this.typeLoader.load(id);
  }

  @ResolveReference()
  resolveReference(reference: { id: number }) {
    return this.typeLoader.load(reference.id);
  }
}
