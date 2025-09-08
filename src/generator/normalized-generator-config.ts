import { GeneratorFunction } from './generator';
import { EsiResponseFieldType, GeneratorConfig } from './generator-config';

export type NormalizedResolverOnConfig = { on: string; as?: string; from?: string };

export type NormalizedResolverConfig = {
  name: string;
  on: NormalizedResolverOnConfig[];
};

export type NormalizedSingularConfig = NormalizedResolverConfig;
export type NormalizedPluralConfig = NormalizedResolverConfig;

export type NormalizedEsiResponseField = {
  type: EsiResponseFieldType;
  required: boolean;
};

export interface NormalizedGeneratorConfig {
  key: 'number' | 'string';
  singular: NormalizedSingularConfig;
  plural: NormalizedPluralConfig;
  esiResponse: Record<string, NormalizedEsiResponseField>;
  generators: GeneratorFunction[];
}

export const normalize = (config: GeneratorConfig): NormalizedGeneratorConfig => ({
  key: config.key || 'number',
  singular: {
    name: typeof config.singular === 'string' ? config.singular : config.singular.name,
    on:
      typeof config.singular !== 'string'
        ? config.singular.on.map((on) => ({
            on: typeof on === 'string' ? on : on.on,
            as:
              typeof on === 'string'
                ? typeof config.singular === 'string'
                  ? config.singular
                  : config.singular.name
                : on.as,
            from: typeof on === 'string' ? 'id' : on.from,
          }))
        : [],
  },
  plural: {
    name: config.plural
      ? typeof config.plural === 'string'
        ? config.plural
        : config.plural.name
      : `${typeof config.singular === 'string' ? config.singular : config.singular.name}s`,
    on:
      config.plural && typeof config.plural !== 'string'
        ? config.plural.on.map((on) => ({
            on: typeof on === 'string' ? on : on.on,
            as:
              typeof on === 'string'
                ? config.plural
                  ? typeof config.plural === 'string'
                    ? config.plural
                    : config.plural.name
                  : `${typeof config.singular === 'string' ? config.singular : config.singular.name}s`
                : on.as,
            from: typeof on === 'string' ? 'id' : on.from,
          }))
        : [],
  },
  esiResponse: Object.keys(config.esiResponse).reduce(
    (a, c) => {
      a[c] = {
        type:
          typeof config.esiResponse[c] === 'string'
            ? (config.esiResponse[c] as EsiResponseFieldType)
            : (config.esiResponse[c] as NormalizedEsiResponseField).type,
        required:
          typeof config.esiResponse[c] === 'string'
            ? true
            : (config.esiResponse[c] as NormalizedEsiResponseField).required,
      };
      return a;
    },
    {} as Record<string, NormalizedEsiResponseField>
  ),
  generators: config.generators,
});
