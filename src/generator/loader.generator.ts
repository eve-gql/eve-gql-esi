import { generate, GeneratorFunction } from './generator';

export const generateLoader: GeneratorFunction = ({ singular, key }) => {
  const template = `import { Injectable } from '@nestjs/common';
import { Loader } from 'src/loader/loader';
import { ${singular.name} } from './${singular.name.toLowerCase()}.entity';
import { ${singular.name}Service } from './${singular.name.toLowerCase()}.service';

@Injectable()
export class ${singular.name}Loader extends Loader<${key}, ${singular.name}> {
  constructor(private readonly service: ${singular.name}Service) {
    super(service);
  }
}
`;

  return generate({ forEntity: singular.name, fileType: 'loader', template });
};
