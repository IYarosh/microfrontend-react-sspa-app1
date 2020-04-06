// const webpackMerge = require("webpack-merge");
// const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = (webpackConfigEnv) => {
//     const defaultConfig = singleSpaDefaults({
//         orgName: "microfrontend-react-sspa",
//         projectName: "app1",
//         webpackConfigEnv
//     })

//     const webpackConfig = webpackMerge.smart(defaultConfig, {
//         mode: "development",
//         plugins: [
//             new HtmlWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
//         ]
//     });
//     webpackConfig.plugins.shift();
//     console.log(webpackConfig);

//     return webpackConfig;
// }

module.exports = {
    entry: path.resolve(__dirname, 'src/microfrontend-react-sspa-app1.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'microfrontend-react-sspa-app1.js',
        libraryTarget: "system"
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
}