1. уствнавливаем webpack
инициализация:
$ npm init
{
  "name": "react_modules_test",
  "version": "1.0.0",
  "description": "\"Testing use React\"",
  "main": "./src/index.js",
  "scripts": {
    "test": "Test"
  },
  "author": "Abay Reushenov",
  "license": "ISC"
}
2. config webpack.config.js
//-----
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
//---
$ npm install webpack webpack-cli --save-dev
$ npx webpack

3. исправление ошибок
(node:7458) Warning: To load an ES module, set "type": "module" in the package.json
open : package.json
add:  "type": "module"

4. дополнительно плагины:
(https://webpack.js.org/plugins/uglifyjs-webpack-plugin/)

$ npm install uglifyjs-webpack-plugin --save-dev

webpack.config.js :

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

webpack.config.js
module.exports = {
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};

5. Дополнительно :
Babel для совместимости всех видов браузеров
https://babeljs.io/
=> docs => Usage Guide
install:
$ npm install --save-dev @babel/core @babel/cli @babel/preset-env
$ npm install --save @babel/polyfill

Creating a config file named babel.config.json in the root of your project with this content:
add in webpack.config.js:
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.4",
      }
    ]
  ]
}



And running this command to compile all your code from the src directory to lib:

./node_modules/.bin/babel src --out-dir lib

Copy
You can use the npm package runner that comes with npm@5.2.0 to shorten that command by replacing ./node_modules/.bin/babel with npx babel

6. npm install --save-dev @babel/preset-env

7. запуск babel: 
$ npx babel src --out-dir src

8. create-react-app:( -g)

npx create-react-app my-app 
cd my-app
npm start

