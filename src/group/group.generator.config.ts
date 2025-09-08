import { generateAll } from 'src/generator/all.generator';
import { GeneratorConfig } from 'src/generator/generator-config';

export default {
  singular: 'Group',
  esiResponse: {
    group_id: 'number',
    name: 'string',
    category_id: 'number',
    published: 'boolean',
    types: 'number[]',
  },
  generators: generateAll,
} as GeneratorConfig;
