const path = require('path');

module.exports = {
    entry: {
        app: './web/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            ["@babel/plugin-proposal-class-properties", { "loose": true }]
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    }
};