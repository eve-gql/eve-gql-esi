import { generate, GeneratorFunction } from './generator';
import { GeneratorConfig } from './generator.config';

export const generateService: GeneratorFunction = ({ singular, plural }: GeneratorConfig) => {
  const template = `import { Injectable } from '@nestjs/common';
import { WithId } from 'src/decorators/with-id';
import { EsiService } from 'src/esi/esi.service';

@Injectable()
export class ${singular}Service {
  constructor(private readonly esiService: EsiService) {}

  public findAll() {
    return this.esiService.${(plural || `${singular}s`).toLowerCase()}();
  }

  @WithId()
  public findOne(id: number) {
    return this.esiService.${singular.toLowerCase()}(id);
  }
}
`;

  return generate(singular, 'service', template);
};
