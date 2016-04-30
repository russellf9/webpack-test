const path = require('path');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');


const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

const common = {
    entry: "./src/hello",
    output: {
        path: PATHS.build,
        publicPath: 'assets',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.js', '.ts']
    },
    module: {
        loaders: [{
            test: /\.ts/, loaders: ['ts-loader'],
            exclude: /node_modules/
        }]
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
           // new webpack.HotModuleReplacementPlugin(),
            new NpmInstallPlugin({
                save: true // --save
            })
        ]
    });
}


if (TARGET === 'build') {
    module.exports = merge(common, {});
}