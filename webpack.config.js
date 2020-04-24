//Node
const path = require('path'); //Nos permite acceder a donde estamos en las carpetas. Ya sea local o en la nube.
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Archivo necesario para trabajar con HTML.
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = { //Aqui se tiene toda la configuración de lo que va a suceder. Modulo para exportar.
    entry: './src/index.js', //Punto de entrada, ahi vive el código inicial
    output: { //A donde se va a mandar el proyecto ya compilado listo para producción
        path: path.resolve(__dirname, 'dist'), //Hacia donde se va a enviar. Resolve es para saber donde se encuentra. __dirname para crear una carpeta 'dist' cuando sepa donde se encuentre.
        filename: 'main.js', //Archivo listo para producción
    },
    resolve:{ //Extensiones a utilizar en el proyecto
        extensions: ['.js'],
    },
    module: { //Modulo con las reglas necesarias para utilizar. En este caso, babel.
        rules: [
            {
                //Estructura de babel
                test: /\,js?$/, //Permite identificar los archivos según se encuentran en nuestro entorno
                exclude: /node_modules/, //Excluir la carpeta de node modules
                use: {
                    loader: 'babel-loader' //loader como configuración establecida
                }
            }
        ]
    },
    plugins: [ //plugins a utilizar
        new HtmlWebpackPlugin( //Permite trabajar con los archivos HTML
            {
                inject: true, //Inyectar un valor a un archivo html
                template: './public/index.html', //Donde se encuentra el Template principal
                filename: './index.html' //El nombre que tendrá el archivo
            }
        ),
        new CopyWebpackPlugin([{
            from: './src/styles/styles.css',
            to: ''
        }])
    ]
}