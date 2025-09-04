import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Corporation } from '../corporation/corporation.entity';
import { Contact } from './contact.entity';
import { ContactService } from './contact.service';

@Resolver(() => Corporation)
export class ContactCorporationResolver {
  constructor(private readonly contactService: ContactService) {}

  @ResolveField(() => [Contact])
  async getContacts(@Parent() corporation: Corporation): Promise<Contact[]> {
    return this.contactService.findByCorporationId(corporation.id);
  }
}
