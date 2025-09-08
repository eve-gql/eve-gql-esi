import { generate, GeneratorFunction } from './generator';
import startCase from 'lodash.startcase';
import kebabCase from 'lodash.kebabcase';

export const generatePluralResolver: GeneratorFunction = ({ singular, plural }) => {
  return plural.on.map(({ on, as, from }) => {
    const template = `import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { ${on}Type } from '../${on.toLowerCase()}/${on.toLowerCase()}.type';
import { ${singular.name}Type } from './${singular.name.toLowerCase()}.type';
import { ${singular.name}${on}Service } from './${singular.name.toLowerCase()}.${on.toLowerCase()}.service';

@Resolver(() => ${on}Type)
export class ${on}${startCase(as)}Resolver {
  constructor(private readonly ${singular.name.toLowerCase()}${on}Service: ${singular.name}${on}Service) {}

  @ResolveField(() => [${singular.name}Type])
  async ${as}(@Parent() ${on.toLowerCase()}: ${on}Type) {
    return this.${singular.name.toLowerCase()}${on}Service.findBy${on}${startCase(from)}(${on.toLowerCase()}.${from}).then((ids) =>
      ids.map((id) => ({
        id,
      }))
    );
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
