module.exports = {
    devtool: 'inline-source-map',
    entry: './app/App.js',
    output: {
        path: require("path").resolve("./public"),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    },
    sassLoader: {
        includePaths: [__dirname + '/node_modules/react-toolbox']
    }
}
