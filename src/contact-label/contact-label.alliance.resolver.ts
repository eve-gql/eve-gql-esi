import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { AllianceType } from '../alliance/alliance.type';
import { ContactLabel } from './contact-label.entity';
import { ContactLabelService } from './contact-label.service';

@Resolver(() => AllianceType)
export class ContactLabelAllianceResolver {
  constructor(private readonly contactLabelService: ContactLabelService) {}

  @ResolveField(() => [ContactLabel])
  async getContactLabels(@Parent() alliance: AllianceType): Promise<ContactLabel[]> {
    return this.contactLabelService.findByAllianceId(alliance.id);
  }
}
