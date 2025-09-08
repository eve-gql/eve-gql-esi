import * as os from 'os';
import { generate, GeneratorFunction } from './generator';
import { EsiResponseField } from './generator-config';
import { fieldTypeToGraphqlType } from './field-type-to-graphql-type';

const fieldResolverTemplate = (typeName: string, fieldName: string, field: EsiResponseField) => {
  const fieldType = typeof field === 'string' ? field : field.type;
  const required = typeof field === 'string' ? true : field.required;

  return `    @ResolveField(() => ${fieldTypeToGraphqlType[fieldType]}${required ? '' : ', { nullable: true }'})${
    fieldName.endsWith('_id')
      ? `
    @Directive('@inaccessible')`
      : ''
  }
    async ${fieldName}(@Parent() parent: ${typeName}Type) {
      return this.getField<${fieldType}>(parent, '${fieldName}');
    }`;
};

export const generateFieldResolver: GeneratorFunction = ({ singular, key, esiResponse }) => {
  const template = `import { Directive, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { FieldResolver } from 'src/graphql/field-resolver';
import { ${singular.name}Type } from './${singular.name.toLowerCase()}.type';
import { ${singular.name}Loader } from './${singular.name.toLowerCase()}.loader';
  
  @Resolver(() => ${singular.name}Type)
  export class ${singular.name}FieldResolver extends FieldResolver<${singular.name}Type> {
    constructor(private readonly loader: ${singular.name}Loader) {
      super(loader);
    }

${fieldResolverTemplate(singular.name, 'id', key)}

${Object.keys(esiResponse)
  .map((field) => fieldResolverTemplate(singular.name, field, esiResponse[field]))
  .join(`${os.EOL}${os.EOL}`)}
}
`;

  return generate({ forEntity: singular.name, fileType: 'field.resolver', template });
};
