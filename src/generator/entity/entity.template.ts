import Handlebars from 'handlebars';

interface EntityTemplateFields {
  name: string;
  key: string;
  fields: {
    name: string;
    type: string;
    required: boolean;
  }[];
}

const entityTemplate = `export class {{name}} {
  id: {{key}};
  {{#each fields}}
  {{name}}{{#unless required}}?{{/unless}}: {{type}};
  {{/each}}
};
`;

export default Handlebars.compile<EntityTemplateFields>(entityTemplate);
