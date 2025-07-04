const path = require('path');

module.exports = {
  entry: './src/index.js',           // Точка входа
  output: {
    filename: 'bundle.js',           // Имя выходного файла
    path: path.resolve(__dirname, 'dist'),  // Куда его класть
  },
  mode: 'development',               // Режим сборки (можно 'production')
};