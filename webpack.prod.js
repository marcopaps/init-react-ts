const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const prodConfig = merge(common, {
    mode: "production",
});

module.exports = prodConfig;
