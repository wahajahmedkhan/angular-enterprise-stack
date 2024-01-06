import * as webpack from 'webpack';
import { VersionJsonPlugin } from './tools/webpack-plugins/version-json';

const pJson = require('./package.json');

type AppConfig = {
  appName: string;
  coreApiUrl?: string;
  isProd: boolean;
  webAppHost?: string;
};

const {
  CI,
  CI_COMMIT_TAG,
  CI_COMMIT_REF_SLUG,
  CI_COMMIT_SHORT_SHA,
  CI_PIPELINE_ID = '0000',
} = process.env;

// if we're on CI and the commit tag does not contain a semver regex
if (
  CI === 'true' &&
  /^v[0-9]+\.[0-9]+\.[0-9]+/.test(CI_COMMIT_TAG ?? '') === false
) {
  pJson.version = `${pJson.version}.${CI_PIPELINE_ID}`;
}

export const VERSION = pJson.version;

export const ROOT_DIR = __dirname;

export function getCommonConfig(
  webpackConfig: webpack.Configuration,
  appConfig: AppConfig,
): webpack.Configuration {
  const { module } = webpackConfig;
  const moduleRules = getModuleRules();
  const plugins = getCommonPlugins(appConfig);

  const rules = [...(module?.rules ?? []), ...moduleRules];

  return {
    ...webpackConfig,
    mode: appConfig.isProd ? 'production' : 'development',
    output: {
      ...webpackConfig.output,
      assetModuleFilename: appConfig.isProd
        ? 'assets/[contenthash][ext]'
        : 'assets/[name][ext]',
      hashDigestLength: 10,
    },
    plugins: [...(webpackConfig.plugins ?? []), ...plugins],
    module: {
      ...module,
      rules,
    },
  };
}

function getModuleRules(): Array<webpack.RuleSetRule> {
  return [];
}

function getCommonPlugins(
  commonConfig: AppConfig,
): Array<webpack.WebpackPluginInstance> {
  const { appName, coreApiUrl = '/api/', webAppHost, isProd } = commonConfig;

  return [
    new webpack.DefinePlugin({
      ENV_IS_PROD: isProd,
      // ENV_API_VERSION: JSON.stringify(pJson.devDependencies['@shared/api']),
      ENV_CORE_API_URL: JSON.stringify(coreApiUrl),
      ENV_WEBAPP_URL: JSON.stringify(webAppHost),
      ENV_APP_NAME: JSON.stringify(appName),
      ENV_APP_VERSION: JSON.stringify(pJson.version),
    }),

    new VersionJsonPlugin({
      commitRef: CI_COMMIT_REF_SLUG ?? 'HEAD',
      commitSha: CI_COMMIT_SHORT_SHA ?? '',
      version: VERSION,
    }),
  ];
}
