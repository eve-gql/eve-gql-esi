import * as os from 'os';
import { generate, GeneratorFunction } from './generator';
import { EsiResponseField, GeneratorConfig } from './generator.config';

const fieldTemplate = (name: string, field: EsiResponseField) => {
  if (typeof field === 'string') return `  ${name}: ${field};`;
  return `  ${name}${field.required === false ? '?' : ''}: ${field.type};`;
};

export const generateEntity: GeneratorFunction = ({
  singular,
  key,
  esiResponse,
}: GeneratorConfig) => {
  const template = `export class ${singular}{
  id: ${key};
${Object.keys(esiResponse)
  .map((field) => fieldTemplate(field, esiResponse[field]))
  .join(os.EOL)}
}
`;

  return generate(singular, 'entity', template);
};
