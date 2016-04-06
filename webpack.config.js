var webpack = require('webpack');
module.exports = {

    entry: './app.ts',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    // turn on sourcemaps
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    // add minification
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css'},
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }

};