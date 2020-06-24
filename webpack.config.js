
/*webpack: Para cada tipo de arquivo eu vou converter o codigo de uma maneira diferente
.
o webpack identifica o tipo de arquivo e ativa um loader para cada um*/

const path = require('path');

module.exports =
{
    entry: path.resolve(__dirname, 'src', 'index.js'), //arquivo main
    output: {
        path: path.resolve(__dirname, 'public'), //oonde as coisas vao ser gravadas depois de trsnapiladas
        filename: 'bundle.js'

    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/, //propriedade obrigatoria
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }

            },

            {
                test: /\.css$/, //propriedade obrigatoria
                exclude: /node_modules/,
                use: 
                [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },
            {
                test: /.*\.(gif|png|ico?n|jpe?g)$/i, //propriedade obrigatoria
                use: 
                {
                    loader: 'file-loader'
                }
            }
        ]

    }
}