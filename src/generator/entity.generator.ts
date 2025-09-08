import * as os from 'os';
import { generate, GeneratorFunction } from './generator';
import { EsiResponseField } from './generator-config';

const fieldTemplate = (name: string, field: EsiResponseField) => {
  if (typeof field === 'string') return `  ${name}: ${field};`;
  return `  ${name}${field.required === false ? '?' : ''}: ${field.type};`;
};

export const generateEntity: GeneratorFunction = ({ singular, key, esiResponse }) => {
  const template = `export class ${singular.name}{
  id: ${key};
${Object.keys(esiResponse)
  .map((field) => fieldTemplate(field, esiResponse[field]))
  .join(os.EOL)}
}
`;

  return generate({ forEntity: singular.name, fileType: 'entity', template });
};
