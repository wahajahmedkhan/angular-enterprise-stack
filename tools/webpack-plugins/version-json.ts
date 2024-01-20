import { Compilation, Compiler, WebpackPluginInstance } from 'webpack';

type VersionJsonPluginOptions = {
  commitRef: string;
  commitSha: string;
  version: string;
};

/**
 * This webpack plugin generates a version.json file
 */
export class VersionJsonPlugin implements WebpackPluginInstance {
  constructor(private readonly options: VersionJsonPluginOptions) {}

  apply(compiler: Compiler) {
    const pluginName = VersionJsonPlugin.name;
    const { RawSource } = compiler.webpack.sources;

    compiler.hooks.thisCompilation.tap(pluginName, compilation => {
      compilation.hooks.processAssets.tap(
        {
          name: pluginName,
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
        },
        () => {
          const content = JSON.stringify(this.options, null, 2);

          // Adding new asset to the compilation, so it would be automatically
          // generated by the webpack in the output directory.
          compilation.emitAsset('version.json', new RawSource(content));
        },
      );
    });
  }
}