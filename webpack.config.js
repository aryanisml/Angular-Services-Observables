
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var helpers = require('./helpers');

module.exports = 
{

    entry: 
    {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: 
    {
        extensions: ['.ts', '.js']
    },

    output: 
    { 
        path: helpers.root('dist'),
        publicPath: '/', 
        filename: '[name].js', 
        chunkFilename: '[id].chunk.js'
    },

    module: 
    {
        rules: 
        [
            {
                test: /\.ts$/,
                loaders: 
                [
                    {
                        loader: 'awesome-typescript-loader',
                        options: 
                        {
                            configFileName: helpers.root('src', 'tsconfig.json')
                        }
                    },
                    {
                        loader: 'angular2-template-loader'
                    }
                ]
            }, 
        
            {
                test: /\.html$/,
                include: helpers.root('src'),
                loader: 'html-loader'
            },

            // Global Styles: Just move the file into assets folder. Script Tag to be manually added to index.html
            {
                test: /\.(css)$/,
                include: helpers.root('src/style'),
                loader: 'file-loader?name=assets/styles/[name].[ext]'
            },
           
            // Component Styles: Bundle into app.css and ask webpack to add script tag into index.html
            {
                test: /\.(css)$/,
                include: helpers.root('src/components'),
                loaders : 
                [
                    'to-string-loader',
                    'css-loader'
                ]
            },
            
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            }
        ]
    },

    plugins: 
    [
         // Workaround for angular/angular#11580
         new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/, helpers.root('./src'), { // location of your src
            } // a map of your routes
            ),
        
        new webpack.optimize.CommonsChunkPlugin(
                {
                    name: ['app', 'vendor', 'polyfills']
                }
            ),
            
        new HtmlWebpackPlugin({template: 'src/index.html'})       
    ],
    
    devtool: 'cheap-module-eval-source-map', 
    
    devServer: 
    { 
        inline: true,
        port: 80,
        historyApiFallback: true, 
        stats: 'minimal'
    }
};
