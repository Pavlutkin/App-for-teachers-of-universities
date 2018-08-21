"use strict";
//TODO Разбить конфиг на dev,prod и common части. Разобраться с оптимизацией
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.tsx",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
    ],
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
            // {
            //     test: /\.css$/,
            //     use: new MiniCssExtractPlugin.loader({
            //         use: ["css-loader"]
            //     })
            // },
            // {
            //     test: /\.less$/,
            //     use: new MiniCssExtractPlugin.loader({
            //         use: ["css-loader", "less-loader"]
            //     })
            // },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader", "less-loader"
                ]
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
    }
};