import { generate, GeneratorFunction } from '../generator';
import template from './entity.template';

export const generateEntity: GeneratorFunction = ({ singular, key, fields }) =>
  generate({
    forEntity: singular.name,
    fileType: 'entity',
    template: template({ name: singular.name, key, fields }),
  });
