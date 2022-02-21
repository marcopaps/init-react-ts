const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const devConfig = merge(common, {
    mode: "development",
    devTool: "inline-source-map",
    devServer: {
        static: {
            directory: path.resolve("src"),
        },
    },
});

module.exports = devConfig;
