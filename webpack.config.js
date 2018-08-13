var uglifyjs = require('uglifyjs-webpack-plugin');
module.exports = {
    entry:{
        index:'./src/js/index.js',
    },
    output:{
        path:__dirname + '/out',
        filename:'bundle.js',
        publicPath:'../../out/'
    },
    // devServer:{
    //     // historyApiFallback:true,
    //     hot:true,
    //     inline:true,
    //     progress:true,
    //     port:9090, //端口你可以自定义
    // },
    module:{
        rules:[
            {test:/.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/.jpg|.png$/,use:['url-loader?limit=60&name=images/[name].[ext]']},
            {test:/.mp3$/,use:['file-loader?name=/[name].[ext]']},
            {test:/.js$/,use:['babel-loader']},
        ]
    },
    plugins:[
        new uglifyjs(),
    ],
    mode:'development',
}