import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { AllianceType } from '../alliance/alliance.type';
import { Contact } from './contact.entity';
import { ContactService } from './contact.service';

@Resolver(() => AllianceType)
export class ContactAllianceResolver {
  constructor(private readonly contactService: ContactService) {}

  @ResolveField(() => [Contact])
  async getContacts(@Parent() alliance: AllianceType): Promise<Contact[]> {
    return this.contactService.findByAllianceId(alliance.id);
  }
}
