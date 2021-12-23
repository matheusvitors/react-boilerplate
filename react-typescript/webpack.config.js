const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { LoaderOptionsPlugin } = require('webpack');

module.exports = {
    entry: ['./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx']
	},
    devServer: {
        port: 3030
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html'
        })
    ]
}
