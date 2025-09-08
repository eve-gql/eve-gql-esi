import { Module } from '@nestjs/common';
import { CharacterResolver } from './character.resolver';
import { CharacterService } from './character.service';
import { EsiModule } from 'src/esi/esi.module';
import { CharacterLoader } from './character.loader';
import { CharacterFieldResolver } from './character.field.resolver';
import { AllianceModule } from 'src/alliance/alliance.module';
import { CorporationModule } from 'src/corporation/corporation.module';
import { CorporationCeoResolver } from './corporation.ceo.resolver';
import { CorporationCreatorResolver } from './corporation.creator.resolver';
import { AllianceCreatorResolver } from './alliance.creator.resolver';

@Module({
  imports: [EsiModule, AllianceModule, CorporationModule],
  providers: [
    CharacterService,
    CharacterLoader,
    CharacterResolver,
    CharacterFieldResolver,
    AllianceCreatorResolver,
    CorporationCeoResolver,
    CorporationCreatorResolver,
  ],
  exports: [
    CharacterLoader,
    CharacterResolver,
    CharacterFieldResolver,
    AllianceCreatorResolver,
    CorporationCeoResolver,
    CorporationCreatorResolver,
  ],
})
export class CharacterModule {}
