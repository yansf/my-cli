const pluginName = 'AfterWebpackPlugin';

class AfterWebpackPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, compilation => {
            console.log("webpack 构建过程开始！");
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName,htmlData =>{
                console.log(htmlData)
                let _html = htmlData.html;
                _html = _html.replace(/components:/g,"../../../components");
                htmlData.html = _html;
            })
        });
    }
}
module.exports = AfterWebpackPlugin;