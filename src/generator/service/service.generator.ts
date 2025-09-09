import { generate, GeneratorFunction } from '../generator';
import template from './service.template';

export const generateService: GeneratorFunction = ({ name }) =>
  generate({
    forEntity: name.singular.startCase,
    fileType: 'service',
    template: template({ name }),
  });
