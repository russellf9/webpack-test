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
    entry: './app/hello.ts',
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: ['ts-loader'],
                include: PATHS.app
            }
        ]
    }

};

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

