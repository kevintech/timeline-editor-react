const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2'
    },
    optimization: {
		splitChunks: {
            chunks: "initial",
			cacheGroups: {
				commons: {
					minChunks: 1,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
				},
				vendor: {
					test: /node_modules/,
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    externals: {
        react: 'commonjs react'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};
