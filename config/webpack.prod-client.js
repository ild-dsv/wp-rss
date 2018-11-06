const path = require('path');
const webpack = require('webpack');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
	name: 'client',
	entry: {
		vendor: ['react', 'react-dom'],
		main: ['@babel/polyfill','./src/client/main.js'],
	},
	mode: 'production',
	output: {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendor',
					chunks: 'initial',
					minChunks: 2,
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
                        loader: 'babel-loader',
                        options: {
                            "presets": [
                              [
                                "@babel/preset-env",
                                {
                                  "targets": {
                                    "browsers": ["last 2 versions"]
                                  },
                                  "debug": false
                                }
                              ],
                              "@babel/preset-react"
                            ],
                            "plugins": [
                              "@babel/plugin-proposal-object-rest-spread",
                              "@babel/plugin-proposal-class-properties",
                              "@babel/plugin-transform-runtime"
                            ]
                          }
                          
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					ExtractCssChunks.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[hash:base64:5]',
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
						},
					},
				],
			},
			{
				test: /\.(jpg|svg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.md$/,
				use: [
					{
						loader: 'markdown-with-front-matter-loader',
					},
				],
			},
		],
	},
	plugins: [
		new ExtractCssChunks({
			filename: '[name].css',
			chunkFilename: '[name]-[hash:8].css',
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: { discardComments: { removeAll: true } },
			canPrint: true,
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				WEBPACK: true,
			},
		}),
		new UglifyJSPlugin(),
		new CompressionPlugin({
			algorithm: 'gzip',
		}),
		new BrotliPlugin(),
	],
};