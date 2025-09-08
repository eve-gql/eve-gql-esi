import * as fs from 'fs';
import { glob } from 'glob';
import * as os from 'os';
import { GeneratorConfig } from './generator-config';
import { normalize, NormalizedGeneratorConfig } from './normalized-generator-config';

fs.rmSync(`${process.cwd()}/.gitignore`, { force: true });

glob('**/**/*.generator.config.ts')
  .then((generatorConfigs) =>
    Promise.all(generatorConfigs.map((generatorConfig) => import(generatorConfig)))
  )
  .then((generatorConfigs: { default: GeneratorConfig }[]) =>
    generatorConfigs.map((generatorConfig) => generatorConfig.default)
  )
  .then((generatorConfigs) => generatorConfigs.map(normalize))
  .then((generatorConfigs) =>
    generatorConfigs.flatMap((generatorConfig) =>
      generatorConfig.generators.map((generatorFunction) => generatorFunction(generatorConfig))
    )
  )
  .then((generatedFiles) => generatedFiles.flat())
  .then((generatedFiles) => generatedFiles.filter((generatedFile) => !!generatedFile))
  .then((generatedFiles) => generatedFiles.sort((a, b) => a.localeCompare(b)))
  .then((generatedFiles) => {
    if (process.argv.slice(2)[0] === '-r') {
      generatedFiles.forEach((filePath) =>
        fs.rmSync(`${process.cwd()}/${filePath}`, { force: true })
      );
    }

    fs.copyFileSync(`${process.cwd()}/.gitignore.template`, `${process.cwd()}/.gitignore`);
    fs.appendFileSync(`${process.cwd()}/.gitignore`, generatedFiles.join(os.EOL));
  });
