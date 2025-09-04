import { Resolver, ResolveField, Parent, Directive } from '@nestjs/graphql';
import { GroupType } from '../group/group.type';
import { TypeType } from './type.type';
import { TypeLoader } from './type.loader';

@Resolver(() => GroupType)
export class TypeGroupResolver {
  constructor(private readonly typeLoader: TypeLoader) {}

  @ResolveField(() => [TypeType])
  types(@Parent() group: GroupType): Promise<TypeType[]> {
    return this.typeLoader.loadMany(group.types).then((r) => r as TypeType[]);
  }
}
