const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};

module.exports = commonConfig;
