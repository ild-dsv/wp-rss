const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	name: 'server',
	target: 'node',
	entry: './src/server/render.js',
	mode: 'production',
	output: {
		filename: 'prod-server-bundle.js',
		path: path.resolve(__dirname, '../build'),
		libraryTarget: 'commonjs2',
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
					{
						loader: 'css-loader/locals',
						options: {
							modules: true,
							localIdentName: '[hash:base64:5]',
							minimize: true,
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
							name: '/images/[name].[ext]',
							emitFile: false,
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
    externals: [nodeExternals()],
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1,
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
	],
};
