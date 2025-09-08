import { generateAll } from 'src/generator/all.generator';
import { GeneratorConfig } from 'src/generator/generator.config';

export const characterConfig: GeneratorConfig = {
  singular: 'Character',
  key: 'number',
  esiResponse: {
    alliance_id: {
      type: 'number',
      required: false,
    },
    birthday: 'string',
    bloodline_id: 'number',
    corporation_id: 'number',
    description: {
      type: 'string',
      required: false,
    },
    faction_id: {
      type: 'number',
      required: false,
    },
    gender: 'string',
    name: 'string',
    race_id: 'number',
    security_status: {
      type: 'number',
      required: false,
    },
    title: {
      type: 'string',
      required: false,
    },
  },
  generators: generateAll,
};

export default characterConfig;
