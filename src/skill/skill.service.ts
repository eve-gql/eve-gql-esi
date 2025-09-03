import { Injectable } from '@nestjs/common';
import { Skill } from './skill.entity';
import axios from 'axios';

@Injectable()
export class SkillService {
  async findAll(): Promise<number[]> {
    // ESI skill endpoint requires authentication, so this is a placeholder
    return [];
  }

  async findOne(skill_id: number): Promise<Skill | undefined> {
    // ESI skill endpoint requires authentication, so this is a placeholder
    return undefined;
  }
}
