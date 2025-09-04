import { Module } from '@nestjs/common';
import { CharacterResolver } from './character.resolver';
import { CharacterService } from './character.service';
import { EsiModule } from 'src/esi/esi.module';
import { CharacterLoader } from './character.loader';
import { CharacterFieldResolver } from './character.field.resolver';

@Module({
  imports: [EsiModule],
  providers: [CharacterService, CharacterLoader, CharacterFieldResolver, CharacterResolver],
  exports: [CharacterResolver, CharacterFieldResolver],
})
export class CharacterModule {}
