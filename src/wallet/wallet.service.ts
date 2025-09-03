import { Injectable } from '@nestjs/common';
import { Wallet } from './wallet.entity';
import axios from 'axios';

@Injectable()
export class WalletService {
  async findAll(): Promise<number[]> {
    // ESI wallet endpoint requires authentication, so this is a placeholder
    return [];
  }

  async findOne(wallet_id: number): Promise<Wallet | undefined> {
    // ESI wallet endpoint requires authentication, so this is a placeholder
    return undefined;
  }
}
