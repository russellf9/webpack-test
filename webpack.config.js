const path = require('path');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');



module.exports = {
    context: __dirname + '/app',
    entry: {
        index: './app'
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/ }
        ]
    },
    devServer: {
        contentBase: __dirname + '/build',

        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,


        stats: 'errors-only',

        host: process.env.HOST,
        port: process.env.PORT
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new NpmInstallPlugin({
            save: true // --save
        })
    ]
};