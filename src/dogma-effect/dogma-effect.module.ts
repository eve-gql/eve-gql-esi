import { Module } from '@nestjs/common';
import { DogmaEffectResolver } from './dogma-effect.resolver';
import { DogmaEffectService } from './dogma-effect.service';

@Module({
  providers: [DogmaEffectResolver, DogmaEffectService],
})
export class DogmaEffectModule {}
