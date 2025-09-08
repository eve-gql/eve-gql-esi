import { generate, GeneratorFunction } from './generator';

export const generateService: GeneratorFunction = ({ singular, plural }) => {
  const template = `import { Injectable } from '@nestjs/common';
import { WithId } from 'src/decorators/with-id';
import { EsiService } from 'src/esi/esi.service';

@Injectable()
export class ${singular.name}Service {
  constructor(private readonly esiService: EsiService) {}

  public findAll() {
    return this.esiService.${plural.name.toLowerCase()}();
  }

  @WithId()
  public findOne(id: number) {
    return this.esiService.${singular.name.toLowerCase()}(id);
  }
}
`;

  return generate({ forEntity: singular.name, fileType: 'service', template });
};
