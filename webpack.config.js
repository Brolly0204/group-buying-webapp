let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let hello = 'hello react';
module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|svg|ttf|eot)$/,
                use: 'url-loader?limit=8192'
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        noInfo: true,
        hot: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:7000',
                pathRewrite: {'^/api': ''}
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('index.html'),
            title: 'React Webapp'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
               liwenli: "234",
               REG: JSON.stringify(hello)
        })
    ]
};

if(process.env.NODE_ENV === 'production') { // 生产环境clea
    console.log('production');
}