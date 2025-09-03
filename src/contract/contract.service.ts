import { Injectable } from '@nestjs/common';
import { Contract } from './contract.entity';
import axios from 'axios';

@Injectable()
export class ContractService {
  async findAll(): Promise<number[]> {
    // ESI contract endpoint requires authentication, so this is a placeholder
    return [];
  }

  async findOne(contract_id: number): Promise<Contract | undefined> {
    // ESI contract endpoint requires authentication, so this is a placeholder
    return undefined;
  }
}
