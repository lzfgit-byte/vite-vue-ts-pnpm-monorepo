import { readFileSync, writeFileSync } from 'node:fs';
import { ensureFileSync } from 'fs-extra/esm';

const pckPath = `${process.cwd()}/package.json`;

const upVersion = () => {
  ensureFileSync(pckPath);
  const data = readFileSync(pckPath);
  const pckJson = JSON.parse(data);
  const version = pckJson.version;
  const vers = version.split('.');
  vers[2] = parseInt(vers[2]) + 1;
  pckJson.version = vers.join('.');
  writeFileSync(pckPath, JSON.stringify(pckJson, null, 2));
};
upVersion();
