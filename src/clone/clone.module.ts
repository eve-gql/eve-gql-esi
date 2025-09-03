import { Module } from '@nestjs/common';
import { CloneResolver } from './clone.resolver';
import { CloneService } from './clone.service';

@Module({
  providers: [CloneResolver, CloneService],
})
export class CloneModule {}
