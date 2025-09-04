import { GeneratorFunction } from './generator';

export type EsiResponseFieldType = 'boolean' | 'number' | 'string';

export type EsiResponseField =
  | {
      type: EsiResponseFieldType;
      required?: boolean;
    }
  | EsiResponseFieldType;

export interface GeneratorConfig {
  singular: string;
  plural?: string;
  key: 'number' | 'string';
  esiResponse: Record<string, EsiResponseField>;
  generators: GeneratorFunction[];
}
