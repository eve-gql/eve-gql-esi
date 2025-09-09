import Handlebars from 'handlebars';
import { NormalizedName } from '../normalized-generator-config';

interface LoaderTemplateFields {
  key: string;
  name: NormalizedName;
}

const loaderTemplate = `import { Injectable } from '@nestjs/common';
import { Loader } from 'src/loader/loader';
import { {{name.startCase}} } from './{{name.kebabCase}}.entity';
import { {{name.startCase}}Service } from './{{name.kebabCase}}.service';

@Injectable()
export class {{name.startCase}}Loader extends Loader<{{key}}, {{name.startCase}}> {
  constructor(private readonly service: {{name.startCase}}Service) {
    super(service);
  }
}
`;

export default Handlebars.compile<LoaderTemplateFields>(loaderTemplate);
