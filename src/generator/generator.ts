import * as fs from 'fs';
import { NormalizedGeneratorConfig } from './normalized-generator-config';
import kebabCase from 'lodash.kebabcase';

export type GeneratorFunction = (config: NormalizedGeneratorConfig) => string | string[];

export const generate = ({
  forEntity,
  fileName,
  fileType,
  template,
}: {
  forEntity: string;
  fileName?: string;
  fileType: string;
  template: string;
}) => {
  const relativePath = `src/${kebabCase(forEntity)}/${(fileName || kebabCase(forEntity)).toLowerCase()}.${fileType}.ts`;
  const absolutePath = `${process.cwd()}/${relativePath}`;
  fs.rmSync(absolutePath, { force: true });
  fs.writeFileSync(absolutePath, template);
  return relativePath;
};
