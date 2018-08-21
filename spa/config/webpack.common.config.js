"use strict";
//TODO Разбить конфиг на dev,prod и common части. Разобраться с оптимизацией
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: "/../src/index.tsx",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules:[
            {
                test: /\.ts(x?)$/,
                enforce: "pre",
                use: "tslint-loader"
            },
            {
                test: /\.ts(x?)$/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: MiniCssExtractPlugin.loader({
                    use: ["css-loader"]
                })
            },
            {
                test: /\.less$/,
                use: MiniCssExtractPlugin.loader({
                    use: ["css-loader", "less-loader"]
                })
            },
            {
                test: /\.(jpg|jpeg|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=./img/[name].[ext]'
            },
            {
                test: /\.(ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ['lodash'],
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/../src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
    ]
};