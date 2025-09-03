import { Module } from '@nestjs/common';
import { MarketGroupResolver } from './market-group.resolver';
import { MarketGroupService } from './market-group.service';

@Module({
  providers: [MarketGroupResolver, MarketGroupService],
})
export class MarketGroupModule {}
