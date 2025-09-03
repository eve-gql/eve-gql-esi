import { Module } from '@nestjs/common';
import { BlueprintResolver } from './blueprint.resolver';
import { BlueprintService } from './blueprint.service';

@Module({
  providers: [BlueprintResolver, BlueprintService],
})
export class BlueprintModule {}
