import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver } from '@nestjs/apollo';
import { FactionModule } from './faction/faction.module';
import { AllianceModule } from './alliance/alliance.module';
import { CorporationModule } from './corporation/corporation.module';
import { AllianceIconModule } from './alliance-icon/alliance-icon.module';
import { ContactModule } from './contact/contact.module';
import { EsiModule } from './esi/esi.module';
import { GroupModule } from './group/group.module';
import { TypeModule } from './type/type.module';
import { CharacterModule } from './character/character.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      autoSchemaFile: { path: 'schema.gql', federation: 2 },
    }),
    AuthModule,
    EsiModule,
    AllianceModule,
    AllianceIconModule,
    ContactModule,
    CorporationModule,
    FactionModule,
    GroupModule,
    TypeModule,
    CharacterModule,
  ],
})
export class AppModule {}
