const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const OfflinePlugin = require('offline-plugin')

const extractSass = new ExtractTextPlugin({
	filename: '[name].[contenthash].css',
});

module.exports = {
	entry: {
		main: resolve(__dirname, '../app'),
		vendor: [
			'react',
			'react-dom',
			'react-redux',
			'react-router-dom',
			'redux',
			'redux-thunk',
		],
	},
	devtool: '#source-map',
	output: {
		filename: '[name].[chunkhash].js',
		path: resolve(__dirname, '../dist'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: [resolve(__dirname, '../app')],
				use: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [
						{ loader: 'css-loader', options: { minimize: true } },
						{ loader: 'sass-loader' }
					],
				})
			}
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		extractSass,
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false,
				screw_ie8: true,
				unused: true,
				dead_code: true,
			},
			sourceMap: true,
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'redux-react-starter',
			template: 'webpack/template.html',
		}),
		// new OfflinePlugin({
		//   ServiceWorker: {
		//     navigateFallbackURL: '/',
		//   },
		//   AppCache: false,
		// }),
	],
};
