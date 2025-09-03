import { Module } from '@nestjs/common';
import { DogmaAttributeResolver } from './dogma-attribute.resolver';
import { DogmaAttributeService } from './dogma-attribute.service';

@Module({
  providers: [DogmaAttributeResolver, DogmaAttributeService],
})
export class DogmaAttributeModule {}
