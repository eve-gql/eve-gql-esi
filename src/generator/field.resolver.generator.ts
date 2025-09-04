import * as os from 'os';
import { generate, GeneratorFunction } from './generator';
import { EsiResponseField, GeneratorConfig } from './generator.config';
import { fieldTypeToGraphqlType } from './fieldTypeToGraphqlType';

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

export const generateFieldResolver: GeneratorFunction = ({
  singular,
  key,
  esiResponse,
}: GeneratorConfig) => {
  const template = `import { Directive, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { FieldResolver } from 'src/graphql/field-resolver';
import { ${singular}Type } from './${singular.toLowerCase()}.type';
import { ${singular}Loader } from './${singular.toLowerCase()}.loader';
  
  @Resolver(() => ${singular}Type)
  export class ${singular}FieldResolver extends FieldResolver<${singular}Type> {
    constructor(private readonly loader: ${singular}Loader) {
      super(loader);
    }

${fieldResolverTemplate(singular, 'id', key)}

${Object.keys(esiResponse)
  .map((field) => fieldResolverTemplate(singular, field, esiResponse[field]))
  .join(`${os.EOL}${os.EOL}`)}
}
`;

  return generate(singular, 'field.resolver', template);
};
