import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Corporation } from '../corporation/corporation.entity';
import { ContactLabel } from './contact-label.entity';
import { ContactLabelService } from './contact-label.service';

@Resolver(() => Corporation)
export class ContactLabelCorporationResolver {
  constructor(private readonly contactLabelService: ContactLabelService) {}

  @ResolveField(() => [ContactLabel])
  async getContactLabels(@Parent() corporation: Corporation): Promise<ContactLabel[]> {
    return this.contactLabelService.findByCorporationId(corporation.id);
  }
}
