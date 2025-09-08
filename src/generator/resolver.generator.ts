import { generate, GeneratorFunction } from './generator';

export const generateResolver: GeneratorFunction = ({ singular, plural, key }) => {
  const template = `import { Resolver, Query, Args, ResolveReference, ID } from '@nestjs/graphql';
import { ${singular.name}Loader } from './${singular.name.toLowerCase()}.loader';
import { ${singular.name}Service } from './${singular.name.toLowerCase()}.service';
import { ${singular.name}Type } from './${singular.name.toLowerCase()}.type';

@Resolver(() => ${singular.name}Type)
export class ${singular.name}Resolver {
  constructor(
    private readonly service: ${singular.name}Service,
    private readonly loader: ${singular.name}Loader
  ) {}

  @Query(() => [${singular.name}Type])
  ${plural.name.toLowerCase()}() {
    return this.service.findAll().then((ids) =>
      ids.map((id) => ({
        id,
      }))
    );
  }

  @Query(() => ${singular.name}Type, { nullable: true })
  ${singular.name.toLowerCase()}(@Args('id', { type: () => ID }) id: ${key}) {
    return this.loader.load(id);
  }

  @ResolveReference()
  resolveReference(reference: { id: ${key} }) {
    return this.loader.load(reference.id);
  }
}
`;

  return generate({ forEntity: singular.name, fileType: 'resolver', template });
};
