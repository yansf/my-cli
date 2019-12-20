const path = require('path');
const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || "development";
const _modeFlag = _mode == "production" ? true : false;
const _mergeConfig = require(`./config/webpack.${_mode}`);
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AfterWebpackPlugin =require('./config/AfterWebpackPlugin');
const {
    join
} = require('path');

let _entry = {};
let _plugins = [];
const files = glob.sync('./src/webapp/views/**/*.entry.js');
for (let item of files) {
    const entryKey = item.match(/.+\/(\w+-\w+)\.entry.js$/)[1];
    _entry[entryKey] = item;
    const [dist, template] = entryKey.split('-');
    _plugins.push(new HtmlWebpackPlugin({
        filename: `../views/${dist}/pages/${template}.html`,
        template: `src/webapp/views/${dist}/pages/${template}.html`,
        inject: true,
        chunks: ['runtime', "common", entryKey],
        minify: {
            removeComments: _modeFlag,
            collapseWhitespace: _modeFlag
        }
    }));
}

const webpackConfig = {
    entry: _entry,
    output: {
        path: join(__dirname, "./dist/assets"),
        filename: "scripts/[name]-[hash:5].js",
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }],
    },
    // watch: !_modeFlag,
    plugins: [
        ..._plugins,
        new AfterWebpackPlugin()
      ]
}
module.exports = merge(webpackConfig, _mergeConfig);