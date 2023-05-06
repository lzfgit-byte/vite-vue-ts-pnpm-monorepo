import { readFileSync, renameSync } from 'node:fs';
import { emptyDirSync, ensureDirSync, ensureFileSync } from 'fs-extra/esm';

const pckPath = `${process.cwd()}/package.json`;

const upVersion = () => {
  ensureFileSync(pckPath);
  const data = readFileSync(pckPath);
  const pckJson = JSON.parse(data);
  const version = pckJson.version;
  const tgzPath = `${process.cwd()}/power-frontend-${version}.tgz`;
  ensureFileSync(tgzPath);
  const toPath = `${process.cwd()}/lib`;
  ensureDirSync(toPath);
  emptyDirSync(`${process.cwd()}/lib`);
  renameSync(tgzPath, `${process.cwd()}/lib/power-frontend-${version}.tgz`);
};
upVersion();
