const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const getLocalIdent = require("@zeit/next-css/node_modules/css-loader/lib/getLocalIdent.js");
if (typeof require !== 'undefined') {
    /**
     * 与antd整合时如果使用按需加载组件样式，服务端会报以下错误：
     *      "/work/palmg/website-standard-with-next/node_modules/antd/lib/style/index.css:6
     *      @font-face {
     *      Invalid or unexpected token"
     * 主要原因是加载器使用错误，用if语句中这一段代码可以修复。
     * @param file
     */
    require.extensions['.css'] = file => {
    }
}

module.exports = withCSS(withSass({
    distDir: 'dist', //工作&打包文件生成路径
    cssModules: true,
    cssLoaderOptions: {
        camelCase: true,
        localIdentName: "[local]___[hash:base64:5]",
        getLocalIdent: (context, localIdentName, localName, options) => {
            let hz = context.resourcePath.replace(context.rootContext, "");
            if (/node_modules/.test(hz)) {
                return localName;
            } else {
                return getLocalIdent(
                    context,
                    localIdentName,
                    localName,
                    options
                );
            }
        }
    },
    webpack: function (config, opt) {
        const originalEntry = config.entry;
        config.entry = async () => {
            const entries = await originalEntry();
            if (
                entries['main.js'] &&
                !entries['main.js'].includes('./config/polyfills.js')
            ) {
                entries['main.js'].unshift('./config/polyfills.js')
            }
            return entries
        };
        //解析图片，图片位置放static目录下
        config.module.rules.push({
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
                }
            ]
        });
        return config
    }
}))