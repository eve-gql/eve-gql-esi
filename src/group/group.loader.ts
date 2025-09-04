import { GroupService } from './group.service';
import { Group } from './group.entity';
import { Injectable } from '@nestjs/common';
import { Loader } from 'src/loader/loader';

@Injectable()
export class GroupLoader extends Loader<number, Group> {
  constructor(private readonly groupService: GroupService) {
    super(groupService);
  }
}
