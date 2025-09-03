import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { MarketOrder } from './market-order.entity';
import { MarketOrderService } from './market-order.service';

@Resolver(() => MarketOrder)
export class MarketOrderResolver {
  constructor(private readonly marketOrderService: MarketOrderService) {}

  @Query(() => [MarketOrder])
  marketOrders() {
    return this.marketOrderService.findAll();
  }

  @Query(() => MarketOrder, { nullable: true })
  marketOrder(@Args('order_id', { type: () => Number }) order_id: number) {
    return this.marketOrderService.findOne(order_id);
  }

  @ResolveReference()
  resolveReference(reference: { order_id: number }) {
    return this.marketOrderService.findOne(reference.order_id);
  }
}
