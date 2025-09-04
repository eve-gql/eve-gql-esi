import { generate, GeneratorFunction } from './generator';
import { GeneratorConfig } from './generator.config';

export const generateResolver: GeneratorFunction = ({ singular, key }: GeneratorConfig) => {
  const template = `import { Resolver, Query, Args, ResolveReference, ID } from '@nestjs/graphql';
import { ${singular}Loader } from './${singular.toLowerCase()}.loader';
import { ${singular}Service } from './${singular.toLowerCase()}.service';
import { ${singular}Type } from './${singular.toLowerCase()}.type';

@Resolver(() => ${singular}Type)
export class ${singular}Resolver {
  constructor(
    private readonly service: ${singular}Service,
    private readonly loader: ${singular}Loader
  ) {}

  @Query(() => [${singular}Type])
  ${singular.toLowerCase()}s() {
    return this.service.findAll().then((ids) =>
      ids.map((id) => ({
        id,
      }))
    );
  }

  @Query(() => ${singular}Type, { nullable: true })
  ${singular.toLowerCase()}(@Args('id', { type: () => ID }) id: ${key}) {
    return this.loader.load(id);
  }

  @ResolveReference()
  resolveReference(reference: { id: ${key} }) {
    return this.loader.load(reference.id);
  }
}
  `;

  return generate(singular, 'resolver', template);
};
