let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let env = process.env.NODE_ENV.trim();

let resolve = (dir) => path.join(__dirname, dir);

module.exports = {
    entry: {
        index: "./app/index.js",
        vendor: ['react', 'react-dom', 'react-redux', 'redux', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash:8].js"
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
                use: ExtractTextPlugin.extract({
                    use:['css-loader', { // 自动补全css3前缀 postcss
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    }, 'less-loader']
                })
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
        https: true,
        hot: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:7000',
                pathRewrite: {'^/api': ''}
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve('app')
        }
    },
    plugins: [
        new ExtractTextPlugin('build.min.css'),
        new HtmlWebpackPlugin({
            template: path.resolve('index.html'),
            title: 'React Webapp',
            // favicon: path.resolve(__dirname, 'r.jpg')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': { // 这是给 React / Redux 打包用的
                NODE_ENV: JSON.stringify('production')
            },
            // ================================
            // 配置开发全局常量
            // ================================
            __DEV__: env === 'development',
            __PROD__: env === 'production',
        })
    ]
};

if(process.env.NODE_ENV === 'production') { // 生产环境
    console.log('production');
}