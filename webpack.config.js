var webpack = require('webpack'),
    path = require('path');
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
    }
};