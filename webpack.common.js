const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const commonConfig = {
    entry: {
        app: "./src/index.tsx",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("public", "index.html"),
        }),
    ],
    output: {
        path: path.resolve("build"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: "/node_modules/",
                use: ["ts-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        plugins: [new TsconfigPathsPlugin()],
    },
};

module.exports = commonConfig;
