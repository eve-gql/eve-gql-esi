import { Module } from '@nestjs/common';
import { GroupResolver } from './group.resolver';
import { GroupService } from './group.service';
import { GroupLoader } from './group.loader';
import { EsiModule } from 'src/esi/esi.module';

@Module({
  imports: [EsiModule],
  providers: [GroupService, GroupLoader, GroupResolver],
  exports: [GroupResolver],
})
export class GroupModule {}
