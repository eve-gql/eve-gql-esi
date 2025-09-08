import { GeneratorFunction } from './generator';

export type ResolverOnConfig = { on: string; as?: string; from?: string };

export type ResolverConfig = {
  name: string;
  on?: (string | ResolverOnConfig)[];
};

export type SingularConfig = ResolverConfig | string;
export type PluralConfig = ResolverConfig | string;

export type EsiResponseFieldType = 'boolean' | 'number' | 'number[]' | 'string';

export type EsiResponseField =
  | {
      type: EsiResponseFieldType;
      required?: boolean;
    }
  | EsiResponseFieldType;

export interface GeneratorConfig {
  key?: 'number' | 'string';
  singular: SingularConfig;
  plural?: PluralConfig;
  esiResponse: Record<string, EsiResponseField>;
  generators: GeneratorFunction[];
}
