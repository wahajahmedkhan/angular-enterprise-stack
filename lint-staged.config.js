const path = require('path');

module.exports = {
  '**/*.{ts,js,json,html,md}': files => [
    nxFormat(files),
    prettierFormat(files),
  ],
  '**/*.scss': files => [
    `stylelint --fix ${files.map(f => `"${f}"`).join(' ')}`,
  ],
};

function relativePaths(absolutePaths) {
  const cwd = process.cwd();

  return absolutePaths.map(file => path.relative(cwd, file));
}

// temporarily disabled until Nx fixes Prettier 3 compatibility
function nxFormat(input) {
  const files = relativePaths(input).join(', ');

  return `nx format:write --files ${files}`;
}

function prettierFormat(input) {
  const files = relativePaths(input).join(' ');

  return `npx prettier --write --list-different ${files}`;
}
