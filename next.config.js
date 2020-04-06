const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
cssLoaderGetLocalIdent = require("css-loader/lib/getLocalIdent.js");

module.exports = withCss(withSass({
    distDir: 'dist',
    cssModules: true,
    cssLoaderOptions: {
        localIdentName: '[local]___[hash:base64:5]',
        getLocalIdent: (context, localIdentName, localName, options) => {
            let hz = context.resourcePath.replace(context.rootContext, "");
            if (/node_modules/.test(hz)) {
                return localName;
            } else {
                return cssLoaderGetLocalIdent(
                    context,
                    localIdentName,
                    localName,
                    options
                );
            }
        }
    },
    webpack(config, option) {
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