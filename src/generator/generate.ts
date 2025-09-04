import * as fs from 'fs';
import * as os from 'os';
import allianceConfig from 'src/alliance/alliance.config';
import characterConfig from 'src/character/character.config';
import corporationConfig from 'src/corporation/corporation.config';

fs.rmSync(`${process.cwd()}/.gitignore`, { force: true });

const generated: string[] = [];

allianceConfig.generators.forEach((generator) => generated.push(generator(allianceConfig)));
corporationConfig.generators.forEach((generator) => generated.push(generator(corporationConfig)));
characterConfig.generators.forEach((generator) => generated.push(generator(characterConfig)));

if (process.argv.slice(2)[0] === '-r') {
  generated.forEach((filePath) => fs.rmSync(`${process.cwd()}/${filePath}`, { force: true }));
}

fs.copyFileSync(`${process.cwd()}/.gitignore.template`, `${process.cwd()}/.gitignore`);
fs.appendFileSync(`${process.cwd()}/.gitignore`, generated.join(os.EOL));
