const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    // Do something...
    devServer: {
        port:3000,
        open: false
    },
    plugins: [new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    entry:{
        main:"./src/index.js"
    },
    output: {
        filename: "script/bundle.js"
    }
};