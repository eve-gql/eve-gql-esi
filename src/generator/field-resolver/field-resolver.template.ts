import Handlebars from 'handlebars';
import { NormalizedField, NormalizedName } from '../normalized-generator-config';

interface FieldResolverTemplateFields {
  key: string;
  name: {
    singular: NormalizedName;
  };
  fields: NormalizedField[];
}

const fieldResolverTemplate = `import { ID, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { FieldResolver } from 'src/graphql/field-resolver';
import { {{name.singular.startCase}}Type } from './{{name.singular.kebabCase}}.type';
import { {{name.singular.startCase}}Loader } from './{{name.singular.kebabCase}}.loader';
  
@Resolver(() => {{name.singular.startCase}}Type)
export class {{name.singular.startCase}}FieldResolver extends FieldResolver<{{name.singular.startCase}}Type> {
  constructor(private readonly loader: {{name.singular.startCase}}Loader) {
    super(loader);
  }

  @ResolveField(() => ID)
  async id(@Parent() parent: {{name.singular.startCase}}Type) {
    return this.getField<{{key}}>(parent, 'id');
  }
{{#each fields}}

  @ResolveField(() => {{graphqlType}}{{#unless required}}, { nullable: true }{{/unless}})
  async {{name}}(@Parent() parent: {{../name.singular.startCase}}Type) {
    return this.getField<{{type}}>(parent, '{{name}}');
  }
{{/each}}
}
`;

export default Handlebars.compile<FieldResolverTemplateFields>(fieldResolverTemplate);
