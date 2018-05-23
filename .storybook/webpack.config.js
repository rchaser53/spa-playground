const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.resolve.extensions.push(".ts");
  defaultConfig.resolve.alias = {
    'vue$': 'vue/dist/vue.esm.js',
    '~src': path.resolve('src')
  };
  defaultConfig.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      }
    ],
  })

  const vueLoader = defaultConfig.module.rules.find((rule) => {
    return rule.loader.includes('vue-loader')
  });
  vueLoader.options = {
    loaders: {
      ts: 'ts-loader',
    }
  }

  return defaultConfig;
};