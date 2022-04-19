const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

const devConfig = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.resolve("src"),
        },
    },
});

module.exports = devConfig;
