import { Module } from '@nestjs/common';
import { TypeResolver } from './type.resolver';
import { TypeService } from './type.service';
import { TypeGroupResolver } from './type.group.resolver';
import { TypeLoader } from './type.loader';
import { EsiModule } from 'src/esi/esi.module';

@Module({
  imports: [EsiModule],
  providers: [TypeService, TypeLoader, TypeResolver, TypeGroupResolver],
  exports: [TypeResolver, TypeGroupResolver],
})
export class TypeModule {}
