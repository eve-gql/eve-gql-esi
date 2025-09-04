import * as os from 'os';
import { generate, GeneratorFunction } from './generator';
import { EsiResponseField, GeneratorConfig } from './generator.config';
import { fieldTypeToGraphqlType } from './fieldTypeToGraphqlType';

const fieldTemplate = (fieldName: string, field: EsiResponseField) => {
  const fieldType = typeof field === 'string' ? field : field.type;
  const required = typeof field === 'string' ? true : field.required;

  return `  @Field(() => ${fieldTypeToGraphqlType[fieldType]}${required ? '' : ', { nullable: true }'})
  ${fieldName}${required ? '' : '?'}: ${fieldType};`;
};

export const generateType: GeneratorFunction = ({
  singular,
  key,
  esiResponse,
}: GeneratorConfig) => {
  const template = `import { ObjectType, Field, ID } from '@nestjs/graphql';
  
@ObjectType('${singular}')
export class ${singular}Type {
  @Field(() => ID)
  id: ${key};

${Object.keys(esiResponse)
  .map((field) => fieldTemplate(field, esiResponse[field]))
  .join(`${os.EOL}${os.EOL}`)}
}
`;

  return generate(singular, 'type', template);
};
