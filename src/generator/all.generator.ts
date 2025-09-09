import { generateEntity } from './entity/entity.generator';
import { generateFieldResolver } from './field.resolver.generator';
import { generateLoader } from './loader.generator';
import { generateResolver } from './resolver.generator';
import { generateService } from './service.generator';
import { generateType } from './type.generator';

export const generateAll = [
  generateEntity,
  generateService,
  generateLoader,
  generateType,
  generateResolver,
  generateFieldResolver,
];
