import { generateAll } from 'src/generator/all.generator';
import { GeneratorConfig } from 'src/generator/generator-config';
import { generatePluralResolver } from 'src/generator/plural.resolver.generator';

export default {
  singular: 'Corporation',
  plural: {
    name: 'Corporations',
    on: ['Alliance'],
  },
  esiResponse: {
    alliance_id: {
      type: 'number',
      required: false,
    },
    ceo_id: 'number',
    creator_id: 'number',
    date_founded: {
      type: 'string',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    faction_id: {
      type: 'number',
      required: false,
    },
    home_station_id: {
      type: 'number',
      required: false,
    },
    member_count: 'number',
    name: 'string',
    shares: {
      type: 'number',
      required: false,
    },
    tax_rate: 'number',
    ticker: 'string',
    url: {
      type: 'string',
      required: false,
    },
    war_eligible: {
      type: 'boolean',
      required: false,
    },
  },
  generators: [...generateAll, generatePluralResolver],
} as GeneratorConfig;
