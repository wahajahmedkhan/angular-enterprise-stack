import * as path from 'node:path';
import * as webpack from 'webpack';
import { VersionJsonPlugin } from './tools/webpack-plugins/version-json';
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
const { VERSION } = require('./webpack.common');

const { CI_COMMIT_REF_SLUG, CI_COMMIT_SHORT_SHA } = process.env;

// eslint-disable-next-line import/no-default-export
export default (config: webpack.Configuration): webpack.Configuration => {
  config.plugins = [
    ...(config?.plugins ?? []),
    new VersionJsonPlugin({
      commitRef: CI_COMMIT_REF_SLUG ?? 'HEAD',
      commitSha: CI_COMMIT_SHORT_SHA ?? '',
      version: VERSION,
    }),
    new GeneratePackageJsonPlugin(
      {
        version: VERSION,
      },
      {
        useInstalledVersions: true,
        resolveContextPaths: [__dirname],
        sourcePackageFilenames: [path.join(__dirname, 'package.json')],
        forceWebpackVersion: 'webpack5',
        excludeDependencies: ['@nest/core', '@nest/common', 'tslib'],
      },
    ),
  ];

  return config;
};
