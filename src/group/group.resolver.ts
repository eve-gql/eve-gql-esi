import { Resolver, Query, Args, ResolveReference, ID } from '@nestjs/graphql';
import { GroupType } from './group.type';
import { GroupService } from './group.service';
import { GroupLoader } from './group.loader';

@Resolver(() => GroupType)
export class GroupResolver {
  constructor(
    private readonly groupService: GroupService,
    private readonly groupLoader: GroupLoader
  ) {}

  @Query(() => [GroupType])
  groups() {
    return this.groupService.findAll().then((ids) =>
      ids.map((id) => ({
        id,
      }))
    );
  }

  @Query(() => GroupType, { nullable: true })
  group(@Args('id', { type: () => ID }) id: number) {
    return this.groupLoader.load(id).then((group) => ({ ...group, typeIds: group.types }));
  }

  @ResolveReference()
  resolveReference(reference: { id: number }) {
    return this.groupLoader
      .load(reference.id)
      .then((group) => ({ ...group, typeIds: group.types }));
  }
}
