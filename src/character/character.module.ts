import { Module } from '@nestjs/common';
import { CharacterResolver } from './character.resolver';
import { CharacterService } from './character.service';
import { EsiModule } from 'src/esi/esi.module';
import { CharacterLoader } from './character.loader';
import { CharacterFieldResolver } from './character.field.resolver';
import { CorporationModule } from 'src/corporation/corporation.module';
import { CorporationCeoResolver } from './corporation.ceo.resolver';
import { CorporationCreatorResolver } from './corporation.creator.resolver';

@Module({
  imports: [EsiModule, CorporationModule],
  providers: [
    CharacterService,
    CharacterLoader,
    CharacterFieldResolver,
    CharacterResolver,
    CorporationCeoResolver,
    CorporationCreatorResolver,
  ],
  exports: [
    CharacterResolver,
    CharacterFieldResolver,
    CorporationCeoResolver,
    CorporationCreatorResolver,
  ],
})
export class CharacterModule {}
