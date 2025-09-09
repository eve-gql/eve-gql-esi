import { generate, GeneratorFunction } from '../generator';
import template from './entity.template';

export const generateEntity: GeneratorFunction = ({ singular, key, esiResponse }) => {
  const fields = Object.keys(esiResponse).map((field) => ({
    name: field,
    type: esiResponse[field].type,
    required: esiResponse[field].required,
  }));

  return generate({
    forEntity: singular.name,
    fileType: 'entity',
    template: template({ name: singular.name, key, fields }),
  });
};
