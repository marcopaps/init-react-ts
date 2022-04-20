const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

const devConfig = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve("public"),
        },
    },
});

module.exports = devConfig;
