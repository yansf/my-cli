const CopyPlugin = require('copy-webpack-plugin');
const {join} = require('path');
module.exports = {
    plugins: [
        new CopyPlugin([
            {
                from: join(__dirname,"../",'/src/webapp/views/layout.html'),
                to: '../views/layout.html'
            },
            {
                from: join(__dirname,"../",'/src/webapp/components'),
                to: '../components',
                transform(){
                    // html hint
                    //minify
                }
            }
        ],{
            copyUnmodified: true,
            ignore: ['*.js','*.css']
        }),
    ],
}