import { generateEntity } from './entity/entity.generator';
import { generateFieldResolver } from './field-resolver/field-resolver.generator';
import { generateLoader } from './loader/loader.generator';
import { generateResolver } from './resolver.generator';
import { generateService } from './service/service.generator';
import { generateType } from './type/type.generator';

export const generateAll = [
  generateEntity,
  generateService,
  generateLoader,
  generateType,
  generateResolver,
  generateFieldResolver,
];
