const path = require('path');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};


const common = {
    context: PATHS.app,
    entry: {
        index: './app'
    },
    output: {
        path: PATHS.build,
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/ }
        ]
    }
};

// Note: `start` will be the package json cmd called

// Default configuration
if (TARGET === 'start' || !TARGET) {

    module.exports = merge(common, {

        devtool: 'eval-source-map',

        devServer: {
            contentBase: PATHS.build,

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
    });
}


if (TARGET === 'build') {
    module.exports = merge(common, {});
}