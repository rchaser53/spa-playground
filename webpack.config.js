const path = require('path');

const TsLintConfig = {
  fix: true,
  configFile: 'tslint.json',
};
const VueTsLintConfig = {
  ...TsLintConfig,
  fix: false,
};

module.exports = {
  mode: 'development',
	entry: './src/index.ts',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.vue', '.js', '.css'],
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		}
	},
	module: {
		rules: [
    {
      enforce: 'pre',
      test: /\.ts$/,
      loader: 'tslint-loader',
      exclude: /(node_modules)/,
      options: TsLintConfig,
    },
    {
      test: /\.ts$/,
      exclude: /node_modules|vue\/src/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          ts: 'ts-loader',

        },
        preLoaders: {
          ts: `tslint-loader?${JSON.stringify(VueTsLintConfig)}`,
        },
      }
    }]
	},
	devServer: {
		historyApiFallback: {
			rewrites: [{ from: /vee\$/, to: '/vee' }, { from: /element\$/, to: '/element' }]
		},
		// open: true,
		port: 3000,
		host: "localhost",
	},
	devtool: 'inline-source-map'
};