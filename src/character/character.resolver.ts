import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Character } from './character.entity';
import { CharacterService } from './character.service';

@Resolver(() => Character)
export class CharacterResolver {
  constructor(private readonly characterService: CharacterService) {}

  @Query(() => [Character])
  characters() {
    return this.characterService.findAll();
  }

  @Query(() => Character, { nullable: true })
  character(@Args('character_id', { type: () => Number }) character_id: number) {
    return this.characterService.findOne(character_id);
  }

  @ResolveReference()
  resolveReference(reference: { character_id: number }) {
    return this.characterService.findOne(reference.character_id);
  }
}
