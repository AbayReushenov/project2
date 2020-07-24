AbayReushenov Web Programming Framework
Thank you for choosing AbayReushenov

INSTALLATION

Lesson 76. Как превратить код ES6+ в старый формат ES5. Babel, Core.js и
полифиллы

1. Траснлитер
- перекодировка с возможностью для использования старыми браузерами
- Babel: https://babeljs.io/
2 methods:
1. traslit each file.
2. use https://babeljs.io/docs/en/usage


npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill

package.json adding (info from https://browserl.ist)
 "browserslist": [
    "> 1%"
  ],

webpack.config.js adding:
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }

terminal$ npm i --save-dev babel-loader

==>> + babel-loader@8.1.0
added 20 packages from 17 contributors and audited 538 packages in 8.493s

adding core-js Library (https://github.com/zloirock/core-js):
it is icluded :
Modular standard library for JavaScript. Includes polyfills for ECMAScript up to 2020

terminal$ npm i --save-dev core-js

Thats all!
use USAGE part of your plugins.

2. Полифиллы 
- замена кода новой версии на код в старой транскрпиции

3. Don't forget reunstall : npx webpack

4. If a polyfill isn't works accurate
What to do?
example: 
We are looking for "es6-promise" in Google
Then install it in our project.
There are "https://www.npmjs.com/package/es6-promise" for "es6-promise"
so : $ npm install es6-promise
=> + es6-promise@4.2.8
added 1 package from 1 contributor and audited 540 packages in 7.482s

Then adding in snippet in our js code (Auto-polyfill):
require('es6-promise').polyfill();

Copy in scripts: require('es6-promise').polyfill(); 
Alternatively:
require('es6-promise/auto');

5. Looking for "for each" polifill
Google: => https://www.npmjs.com/package/nodelist-foreach-polyfill

=> $ npm i nodelist-foreach-polyfill
{
    to break webpack =>: Cntrl-C
}
=> + nodelist-foreach-polyfill@1.2.0
added 1 package from 1 contributor and audited 541 packages in 10.092s

Then adding in snippet in our js code :
=> import 'nodelist-foreach-polyfill';