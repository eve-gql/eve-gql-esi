import { Injectable } from '@nestjs/common';
import { Group } from './group.entity';
import { EsiService } from 'src/esi/esi.service';
import { WithId } from 'src/decorators/with-id';

@Injectable()
export class GroupService {
  constructor(private readonly esiService: EsiService) {}

  public findAll() {
    return this.esiService.groups();
  }

  @WithId()
  public findOne(id: number): Promise<Group> {
    return this.esiService.group(id);
  }
}
