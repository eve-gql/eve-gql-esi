import { generate, GeneratorFunction } from '../generator';
import template from './field-resolver.template';

export const generateFieldResolver: GeneratorFunction = ({ key, name, fields }) =>
  generate({
    forEntity: name.singular.startCase,
    fileType: 'field.resolver',
    template: template({ key, name, fields }),
  });
