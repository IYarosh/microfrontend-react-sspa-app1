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

    const rxjsExternals = {
        externals: [/^rxjs\/?.*$/]
    };

    console.log( webpackMerge.smart(defaultConfig, rxjsExternals, {
        mode: "development",
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
        ]
    }));
    return webpackMerge.smart(defaultConfig, rxjsExternals, {
        mode: "development",
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
        ]
    })
}