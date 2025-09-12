import { generateAll } from 'src/generator/all.generator';
import { GeneratorConfig } from 'src/generator/generator-config';

export default {
  singular: 'Type',
  esiResponse: {
    name: 'string',
    group_id: { type: 'number', required: false },
    published: { type: 'boolean', required: false },
    description: { type: 'string', required: false },
    volume: { type: 'number', required: false },
    mass: { type: 'number', required: false },
  },
  generators: generateAll,
} as GeneratorConfig;
