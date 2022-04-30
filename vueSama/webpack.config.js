const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    resolve: {
        extensions: [".js"]
    },
    //...
    devServer: {

        port: 8080,
        proxy:{
            '/api':{
                target:'http//localhost:3000',
                pathRewrite:{'^/api': ''},
                secure: false,
                changeOrigin:true
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,
                    "css-loader"],
            },
            {
                test: /\.vue$/i,
                loader: 'vue-loader',
                exclude:/node_modules/
            },
            {
                test: /\.js$/i,
                loader: 'babel-loader',
                exclude:/node_modules/
            }

        ],
    },
    entry: {
        main:"./src/index.js"
    },
    // output: {
    //     filename: "script/bundle.js"
    // }
};