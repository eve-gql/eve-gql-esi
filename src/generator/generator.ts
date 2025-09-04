import * as fs from 'fs';
import { GeneratorConfig } from './generator.config';

export type GeneratorFunction = (config: GeneratorConfig) => string;

export const generate = (singular: string, fileType: string, template: string) => {
  const relativePath = `src/${singular.toLowerCase()}/${singular.toLowerCase()}.${fileType}.ts`;
  const absolutePath = `${process.cwd()}/${relativePath}`;
  fs.rmSync(absolutePath, { force: true });
  fs.writeFileSync(absolutePath, template);
  return relativePath;
};
