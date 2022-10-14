// const VueLoaderPlugin = require('vue-loader/dist/plugin'); //17버전에서는 실행 오류...
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval', //eval 하는 이유 build 할 때 속도 업
    resolve: {
        extensions: ['.js', '.vue']
    },
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/, 
                use: [ 'vue-style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    },
    devServer: {
        publicPath: '/dist',
        port: 8080,
        hot: true
    }
}