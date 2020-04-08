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
    webpackConfig.plugins.shift(); // Remove Clean plugin to save dist folder and be able to download bundle from root project

    return webpackConfig;
}

// Generated Webpack config: 
// {
//     "entry": "D:\\OSPanel\\domains\\microfrontend\\custom-microfrontend\\SingleSPA\\microfrontend-react-sspa-app1\\src\\microfrontend-react-sspa-app1.js",
//     "output": {
//       "filename": "microfrontend-react-sspa-app1.js",
//       "libraryTarget": "system",
//       "path": "D:\\OSPanel\\domains\\microfrontend\\custom-microfrontend\\SingleSPA\\microfrontend-react-sspa-app1\\dist",
//       "jsonpFunction": "webpackJsonp_app1"
//     },
//     "module": {
//       "rules": [
//         {
//           "parser": {
//             "system": false
//           }
//         },
//         {
//           "test": {
            
//           },
//           "exclude": {
            
//           },
//           "use": {
//             "loader": "babel-loader"
//           }
//         },
//         {
//           "test": {
            
//           },
//           "include": {
            
//           },
//           "use": [
//             {
//               "loader": "style-loader"
//             },
//             {
//               "loader": "css-loader",
//               "options": {
//                 "modules": false
//               }
//             }
//           ]
//         }
//       ]
//     },
//     "devtool": "sourcemap",
//     "devServer": {
//       "headers": {
//         "Access-Control-Allow-Origin": "*"
//       },
//       "disableHostCheck": true
//     },
//     "externals": {
        
//     },
//     "plugins": [
//       {
//         "opts": {
//           "analyzerMode": "disabled",
//           "analyzerHost": "127.0.0.1",
//           "reportFilename": "report.html",
//           "defaultSizes": "parsed",
//           "openAnalyzer": true,
//           "generateStatsFile": false,
//           "statsFilename": "stats.json",
//           "statsOptions": null,
//           "excludeAssets": null,
//           "logLevel": "info",
//           "startAnalyzer": true,
//           "analyzerPort": 8888
//         },
//         "server": null,
//         "logger": {
//           "activeLevels": {
            
//           }
//         }
//       },
//       {
//         "options": {
//           "globOptions": {
//             "cwd": "D:\\OSPanel\\domains\\microfrontend\\custom-microfrontend\\SingleSPA\\microfrontend-react-sspa-app1\\src",
//             "ignore": [
//               "**/*.test.js",
//               "**/*.spec.js",
//               "**/*.js.snap",
//               "**/test-setup.js",
//               "**/*.stories.js"
//             ]
//           },
//           "patterns": [
//             "**/*.*"
//           ],
//           "failOnUnused": false
//         },
//         "globOptions": {
//           "ignore": [
//             "**/*.test.js",
//             "**/*.spec.js",
//             "**/*.js.snap",
//             "**/test-setup.js",
//             "**/*.stories.js"
//           ],
//           "cwd": "D:\\OSPanel\\domains\\microfrontend\\custom-microfrontend\\SingleSPA\\microfrontend-react-sspa-app1\\src"
//         }
//       },
//       {
//         "options": {
//           "template": "D:\\OSPanel\\domains\\microfrontend\\custom-microfrontend\\SingleSPA\\microfrontend-react-sspa-app1\\index.html",
//           "templateContent": false,
//           "filename": "index.html",
//           "hash": false,
//           "inject": "body",
//           "scriptLoading": "blocking",
//           "compile": true,
//           "favicon": false,
//           "minify": "auto",
//           "cache": true,
//           "showErrors": true,
//           "chunks": "all",
//           "excludeChunks": [
            
//           ],
//           "chunksSortMode": "auto",
//           "meta": {
            
//           },
//           "base": false,
//           "title": "Webpack App",
//           "xhtml": false
//         },
//         "version": 4
//       }
//     ],
//     "mode": "development"
//   }