import { generate, GeneratorFunction } from '../generator';
import template from './type.template';

export const generateType: GeneratorFunction = ({ key, name, fields }) =>
  generate({
    forEntity: name.singular.startCase,
    fileType: 'type',
    template: template({ key, name, fields }),
  });
