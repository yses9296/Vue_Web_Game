// const VueLoaderPlugin = require('vue-loader/dist/plugin'); //17버전에서는 실행 오류...
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    }
}