import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactAllianceResolver } from './contact.alliance.resolver';

@Module({
  providers: [ContactService, ContactAllianceResolver],
  exports: [ContactAllianceResolver],
})
export class ContactModule {}
