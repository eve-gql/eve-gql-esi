import { generate, GeneratorFunction } from './generator';
import upperFirst from 'lodash.upperfirst';
import kebabCase from 'lodash.kebabcase';

export const generateSingularResolver: GeneratorFunction = ({ singular }) => {
  return singular.on.map(({ on, as, from }) => {
    const template = `import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { FieldResolver } from 'src/graphql/field-resolver';
import { ${on}Loader } from '../${on.toLowerCase()}/${on.toLowerCase()}.loader';
import { ${on}Type } from '../${on.toLowerCase()}/${on.toLowerCase()}.type';
import { ${singular.name}Loader } from './${singular.name.toLowerCase()}.loader';
import { ${singular.name}Type } from './${singular.name.toLowerCase()}.type';

@Resolver(() => ${on}Type)
export class ${on}${upperFirst(as)}Resolver extends FieldResolver<${on}Type> {
  constructor(
    private readonly parentLoader: ${on}Loader,
    private readonly loader: ${singular.name}Loader,
  ) {
    super(parentLoader);  
  }

  @ResolveField(() => ${singular.name}Type)
  async ${as}(@Parent() parent: ${on}Type) {
    return this.getField<number>(parent, '${from}').then((id) => this.loader.load(id));
  }
}
`;
    return generate({
      forEntity: singular.name,
      fileName: `${on.toLowerCase()}.${kebabCase(as)}`,
      fileType: 'resolver',
      template,
    });
  });
};
