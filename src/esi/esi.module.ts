import { Module } from '@nestjs/common';
import { EsiService } from './esi.service';

@Module({
  providers: [EsiService],
  exports: [EsiService],
})
export class EsiModule {}
