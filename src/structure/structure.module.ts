import { Module } from '@nestjs/common';
import { StructureResolver } from './structure.resolver';
import { StructureService } from './structure.service';

@Module({
  providers: [StructureResolver, StructureService],
})
export class StructureModule {}
