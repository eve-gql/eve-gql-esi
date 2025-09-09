import Handlebars from 'handlebars';
import { NormalizedName } from '../normalized-generator-config';

interface ServiceTemplateFields {
  name: {
    singular: NormalizedName;
    plural: NormalizedName;
  };
}

const serviceTemplate = `import { Injectable } from '@nestjs/common';
import { WithId } from 'src/decorators/with-id';
import { EsiService } from 'src/esi/esi.service';

@Injectable()
export class {{name.singular.startCase}}Service {
  constructor(private readonly esiService: EsiService) {}

  public findAll() {
    return this.esiService.{{name.plural.camelCase}}();
  }

  @WithId()
  public findOne(id: number) {
    return this.esiService.{{name.singular.camelCase}}(id);
  }
}
`;

export default Handlebars.compile<ServiceTemplateFields>(serviceTemplate);
