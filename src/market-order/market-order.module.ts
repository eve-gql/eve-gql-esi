import { Module } from '@nestjs/common';
import { MarketOrderResolver } from './market-order.resolver';
import { MarketOrderService } from './market-order.service';

@Module({
  providers: [MarketOrderResolver, MarketOrderService],
})
export class MarketOrderModule {}
