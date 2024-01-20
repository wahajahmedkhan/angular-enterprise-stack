import * as fs from 'node:fs';
import * as path from 'node:path';

const WORKSPACE_ROOT = path.join(__dirname, '..', '..');

const targetDir = path.join(
  WORKSPACE_ROOT,
  'node_modules',
  '@angular-enterprise-stack',
);
const targetLink = path.join(targetDir, 'styles');
const sourceDir = path.join(WORKSPACE_ROOT, 'libs', 'styles', 'libs');

if (fs.existsSync(targetLink)) {
  console.info(`symlink ${targetLink} already exists`);
  process.exit(0);
}

fs.mkdirSync(targetDir, { recursive: true });
fs.symlinkSync(sourceDir, targetLink);

console.log(`successfully symlinked ${targetLink} \n\tto ${sourceDir}`);
