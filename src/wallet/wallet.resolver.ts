import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Wallet } from './wallet.entity';
import { WalletService } from './wallet.service';

@Resolver(() => Wallet)
export class WalletResolver {
  constructor(private readonly walletService: WalletService) {}

  @Query(() => [Wallet])
  wallets() {
    return this.walletService.findAll();
  }

  @Query(() => Wallet, { nullable: true })
  wallet(@Args('wallet_id', { type: () => Number }) wallet_id: number) {
    return this.walletService.findOne(wallet_id);
  }

  @ResolveReference()
  resolveReference(reference: { wallet_id: number }) {
    return this.walletService.findOne(reference.wallet_id);
  }
}
