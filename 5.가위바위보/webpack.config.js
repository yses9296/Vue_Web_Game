const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
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
        // static: {
        //     directory: path.join(__dirname, 'dist'),
        // },
        // devMiddleware: {
        //     publicPath: '/dist',
        // },

        // hot: true,
        // host: "localhost",
        // port: 8080
        devMiddleware: {
            publicPath: '/dist/'
        },
        static: {
            directory: path.resolve(__dirname)
        },
        hot: true,
    }
}