const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client',
		'webpack/hot/only-dev-server',
		resolve(__dirname, 'hotReload'),
	],
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname),
		publicPath: '/',
	},
	context: resolve(__dirname, '../app'),
	devtool: '#eval',
	devServer: {
		hot: true,
		host: '0.0.0.0',
		contentBase: resolve(__dirname, '../assets'),
		publicPath: '/',
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: [resolve(__dirname, '../app'), resolve(__dirname)],
				use: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' }, // creates style nodes from JS strings
					{ loader: 'css-loader' }, // translates CSS into CommonJS
					{ loader: 'sass-loader' } // compiles Sass to CSS
				]
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			title: 'redux-react-starter',
			template: '../webpack/template.html',
		}),
	],
	performance: { hints: false },
};
