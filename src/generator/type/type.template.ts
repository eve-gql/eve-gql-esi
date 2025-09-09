import Handlebars from 'handlebars';
import { NormalizedField, NormalizedName } from '../normalized-generator-config';

interface TypeTemplateFields {
  key: string;
  name: {
    singular: NormalizedName;
    plural: NormalizedName;
  };
  fields: NormalizedField[];
}

const typeTemplate = `import { ObjectType, Field, ID } from '@nestjs/graphql';
  
@ObjectType('{{name.singular.startCase}}')
export class {{name.singular.startCase}}Type {
  @Field(() => ID)
  id: {{key}};
{{#each fields}}

  @Field(() => {{graphqlType}}{{#unless required}}, { nullable: true }{{/unless}})
  {{name}}{{#unless required}}?{{/unless}}: {{type}};
{{/each}}
}
`;

export default Handlebars.compile<TypeTemplateFields>(typeTemplate);
