import { generateAll } from 'src/generator/all.generator';
import { GeneratorConfig } from 'src/generator/generator.config';

export const allianceConfig: GeneratorConfig = {
  singular: 'Alliance',
  key: 'number',
  esiResponse: {
    creator_corporation_id: 'number',
    creator_id: 'number',
    date_founded: 'string',
    executor_corporation_id: {
      type: 'number',
      required: false,
    },
    faction_id: {
      type: 'number',
      required: false,
    },
    name: 'string',
    ticker: 'string',
  },
  generators: generateAll,
};

export default allianceConfig;
