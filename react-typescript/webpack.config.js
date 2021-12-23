const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { LoaderOptionsPlugin } = require('webpack');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader', //junção do babel com o webpack
                exclude: /node_modules/
            }
        ]
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