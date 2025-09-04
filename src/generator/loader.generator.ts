import { generate, GeneratorFunction } from './generator';
import { GeneratorConfig } from './generator.config';

export const generateLoader: GeneratorFunction = ({ singular, key }: GeneratorConfig) => {
  const template = `import { Injectable } from '@nestjs/common';
import { Loader } from 'src/loader/loader';
import { ${singular} } from './${singular.toLowerCase()}.entity';
import { ${singular}Service } from './${singular.toLowerCase()}.service';

@Injectable()
export class ${singular}Loader extends Loader<${key}, ${singular}> {
  constructor(private readonly service: ${singular}Service) {
    super(service);
  }
}
`;

  return generate(singular, 'loader', template);
};
