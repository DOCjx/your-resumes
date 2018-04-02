const   path = require('path'), // 导入路径包
        webpack = require('webpack'),//导入webpack
        HtmlWebpackPlugin = require('html-webpack-plugin'),//导入自定义html模板插件
        ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        index: [
            './src/app/index.js'
        ],
        vendors: [
            './src/vendor/bootstrap-3.3.6/js/bootstrap.min.js',
            './src/vendor/jquery.hash/jquery.hash.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    resolve: {
        alias: {
            app: path.resolve(__dirname, './src/core/'),
            utils: path.resolve(__dirname, './src/core/utils.js'),
        }
    },
    module: {
        loaders: [{
            test: require.resolve('jquery'),
            exclude: /^node_modules$/,
            loader:'expose-loader?$!expose-loader?jQuery'
        },{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loader: 'babel-loader?compact=false'
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })),
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
        }, {
            test: /\.tpl$/,
            exclude: /^node_modules$/,
            loader: 'handlebars-loader',
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8000,
        inline: true,
        hot: true
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        //热更新
        new webpack.HotModuleReplacementPlugin(),
        //压缩代码
        // new webpack.optimize.UglifyJsPlugin({minimize:true}),
        //把入口文件vendors数组指定的第三方包打包成verdors.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        //用于生成html文件，可定义多个
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'//Load a custom template 可以套用你自定义的模版
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};