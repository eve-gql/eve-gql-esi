import { generate, GeneratorFunction } from '../generator';
import template from './loader.template';

export const generateLoader: GeneratorFunction = ({ key, name }) => {
  return generate({
    forEntity: name.singular.startCase,
    fileType: 'loader',
    template: template({ key, name: name.singular }),
  });
};
