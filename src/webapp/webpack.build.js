var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

var staticDir = './target/classes/static/';

module.exports = {
    context: __dirname + "/js",
    entry: "./app.js",
    output: {
        path: staticDir,
        filename: "/bundle.js"
    },
    plugins: [
        new CopyWebpackPlugin([

            // Copy directory contents to {output}/to/directory/
            { from: __dirname + "/index.html", to: "./" },

            { from: __dirname + "/css", to: "./css"},

            { from: __dirname + "/templates", to: "./templates"}
        ]),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
};