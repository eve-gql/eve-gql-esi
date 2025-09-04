import { Module } from '@nestjs/common';
import { GroupResolver } from './group.resolver';
import { GroupFieldResolver } from './group.field.resolver';
import { GroupService } from './group.service';
import { GroupLoader } from './group.loader';
import { EsiModule } from 'src/esi/esi.module';

@Module({
  imports: [EsiModule],
  providers: [GroupService, GroupLoader, GroupResolver, GroupFieldResolver],
  exports: [GroupResolver, GroupFieldResolver],
})
export class GroupModule {}
