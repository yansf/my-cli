const path = require('path');
const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}`);
const glob = require('glob');

let _entry = {};
let _plugins = [];
const files = glob.sync('./src/webapp/views/**/*.entry.js');
for(let item of files){
    const entryKey = item.match(/.+\/(\w+-\w+)\.entry.js$/)[1];
    _entry[entryKey] = item;
    _plugins.push(new HtmlWebpackPlugin({
        filename: "dist",
        template: ""
    }));
}

const webpackConfig={
    entry: _entry
}
// module.exports = merge(webpackConfig,_mergeConfig);   