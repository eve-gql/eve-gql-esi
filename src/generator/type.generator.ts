import * as os from 'os';
import { generate, GeneratorFunction } from './generator';
import { EsiResponseField } from './generator-config';
import { fieldTypeToGraphqlType } from './field-type-to-graphql-type';

const fieldTemplate = (fieldName: string, field: EsiResponseField) => {
  const fieldType = typeof field === 'string' ? field : field.type;
  const required = typeof field === 'string' ? true : field.required;

  return `  @Field(() => ${fieldTypeToGraphqlType[fieldType]}${required ? '' : ', { nullable: true }'})${
    fieldName.endsWith('_id')
      ? `
  @Directive('@inaccessible')`
      : ''
  }
  ${fieldName}${required ? '' : '?'}: ${fieldType};`;
};

export const generateType: GeneratorFunction = ({ singular, key, esiResponse }) => {
  const template = `import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
  
@ObjectType('${singular.name}')
export class ${singular.name}Type {
  @Field(() => ID)
  id: ${key};

${Object.keys(esiResponse)
  .map((field) => fieldTemplate(field, esiResponse[field]))
  .join(`${os.EOL}${os.EOL}`)}
}
`;

  return generate({ forEntity: singular.name, fileType: 'type', template });
};
