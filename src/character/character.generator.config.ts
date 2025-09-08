import { generateAll } from 'src/generator/all.generator';
import { GeneratorConfig } from 'src/generator/generator-config';
import { generateSingularResolver } from 'src/generator/singular.resolver.generator';

export default {
  singular: {
    name: 'Character',
    on: [
      {
        on: 'Alliance',
        from: 'creator_id',
        as: 'creator',
      },
      {
        on: 'Corporation',
        from: 'creator_id',
        as: 'creator',
      },
      {
        on: 'Corporation',
        from: 'ceo_id',
        as: 'ceo',
      },
    ],
  },
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
  generators: [...generateAll, generateSingularResolver],
} as GeneratorConfig;
