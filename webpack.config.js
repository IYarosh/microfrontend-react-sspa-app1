const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfigEnv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: "microfrontend-react-sspa",
        projectName: "app1",
        webpackConfigEnv
    })

    const webpackConfig = webpackMerge.smart(defaultConfig, {
        mode: "development",
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
        ],
        externals: {}
    });
    webpackConfig.plugins.shift();

    return webpackConfig;
}