import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Asset } from './asset.entity';
import { AssetService } from './asset.service';

@Resolver(() => Asset)
export class AssetResolver {
  constructor(private readonly assetService: AssetService) {}

  @Query(() => [Asset])
  assets() {
    return this.assetService.findAll();
  }

  @Query(() => Asset, { nullable: true })
  asset(@Args('asset_id', { type: () => Number }) asset_id: number) {
    return this.assetService.findOne(asset_id);
  }

  @ResolveReference()
  resolveReference(reference: { asset_id: number }) {
    return this.assetService.findOne(reference.asset_id);
  }
}
