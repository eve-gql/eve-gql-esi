import { Module } from '@nestjs/common';
import { StarResolver } from './star.resolver';
import { StarService } from './star.service';

@Module({
  providers: [StarResolver, StarService],
})
export class StarModule {}
