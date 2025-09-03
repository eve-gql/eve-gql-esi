import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { DogmaAttribute } from './dogma-attribute.entity';
import { DogmaAttributeService } from './dogma-attribute.service';

@Resolver(() => DogmaAttribute)
export class DogmaAttributeResolver {
  constructor(private readonly dogmaAttributeService: DogmaAttributeService) {}

  @Query(() => [DogmaAttribute])
  dogmaAttributes() {
    return this.dogmaAttributeService.findAll();
  }

  @Query(() => DogmaAttribute, { nullable: true })
  dogmaAttribute(@Args('attribute_id', { type: () => Number }) attribute_id: number) {
    return this.dogmaAttributeService.findOne(attribute_id);
  }

  @ResolveReference()
  resolveReference(reference: { attribute_id: number }) {
    return this.dogmaAttributeService.findOne(reference.attribute_id);
  }
}
