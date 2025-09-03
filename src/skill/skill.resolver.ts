import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { Skill } from './skill.entity';
import { SkillService } from './skill.service';

@Resolver(() => Skill)
export class SkillResolver {
  constructor(private readonly skillService: SkillService) {}

  @Query(() => [Skill])
  skills() {
    return this.skillService.findAll();
  }

  @Query(() => Skill, { nullable: true })
  skill(@Args('skill_id', { type: () => Number }) skill_id: number) {
    return this.skillService.findOne(skill_id);
  }

  @ResolveReference()
  resolveReference(reference: { skill_id: number }) {
    return this.skillService.findOne(reference.skill_id);
  }
}
