import { Module } from '@nestjs/common';
import { MoonResolver } from './moon.resolver';
import { MoonService } from './moon.service';

@Module({
  providers: [MoonResolver, MoonService],
})
export class MoonModule {}
