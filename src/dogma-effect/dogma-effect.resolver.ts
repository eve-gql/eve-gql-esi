import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { DogmaEffect } from './dogma-effect.entity';
import { DogmaEffectService } from './dogma-effect.service';

@Resolver(() => DogmaEffect)
export class DogmaEffectResolver {
  constructor(private readonly dogmaEffectService: DogmaEffectService) {}

  @Query(() => [DogmaEffect])
  dogmaEffects() {
    return this.dogmaEffectService.findAll();
  }

  @Query(() => DogmaEffect, { nullable: true })
  dogmaEffect(@Args('effect_id', { type: () => Number }) effect_id: number) {
    return this.dogmaEffectService.findOne(effect_id);
  }

  @ResolveReference()
  resolveReference(reference: { effect_id: number }) {
    return this.dogmaEffectService.findOne(reference.effect_id);
  }
}
