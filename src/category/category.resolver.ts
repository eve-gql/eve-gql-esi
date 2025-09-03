import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  categories() {
    return this.categoryService.findAll();
  }

  @Query(() => Category, { nullable: true })
  category(@Args('category_id', { type: () => Number }) category_id: number) {
    return this.categoryService.findOne(category_id);
  }

  @ResolveReference()
  resolveReference(reference: { category_id: number }) {
    return this.categoryService.findOne(reference.category_id);
  }
}
