import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Contract } from './contract.entity';
import { ContractService } from './contract.service';

@Resolver(() => Contract)
export class ContractResolver {
  constructor(private readonly contractService: ContractService) {}

  @Query(() => [Contract])
  contracts() {
    return this.contractService.findAll();
  }

  @Query(() => Contract, { nullable: true })
  contract(@Args('contract_id', { type: () => Number }) contract_id: number) {
    return this.contractService.findOne(contract_id);
  }

  @ResolveReference()
  resolveReference(reference: { contract_id: number }) {
    return this.contractService.findOne(reference.contract_id);
  }
}
