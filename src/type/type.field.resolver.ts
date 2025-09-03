import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Type } from './type.entity';
import { FieldResolver } from 'src/graphql/field-resolver';
import { TypeLoader } from './type.loader';

@Resolver(() => Type)
export class TypeFieldResolver extends FieldResolver<Type> {
  constructor(private readonly typeLoader: TypeLoader) {
    super(typeLoader);
  }

  @ResolveField(() => Number)
  async id(@Parent() type: Type) {
    return this.getField<number>(type, 'id');
  }

  @ResolveField(() => String)
  async name(@Parent() type: Type) {
    return this.getField<string>(type, 'name');
  }

  @ResolveField(() => Number, { nullable: true })
  async group_id(@Parent() type: Type) {
    return this.getField<number>(type, 'group_id');
  }

  @ResolveField(() => Boolean, { nullable: true })
  async published(@Parent() type: Type) {
    return this.getField<boolean>(type, 'published');
  }

  @ResolveField(() => String, { nullable: true })
  async description(@Parent() type: Type) {
    return this.getField<string>(type, 'description');
  }

  @ResolveField(() => Number, { nullable: true })
  async volume(@Parent() type: Type) {
    return this.getField<number>(type, 'volume');
  }

  @ResolveField(() => Number, { nullable: true })
  async mass(@Parent() type: Type) {
    return this.getField<number>(type, 'mass');
  }
}
