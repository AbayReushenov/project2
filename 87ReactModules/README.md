2-1 npm init
Achtung!!! (package.json):

 "main": "./src/index.js",
  "scripts": {
    "create_webpack_please" : "webpack",

//------
full version:
{
  "name": "modul_and_react_lesson_87_ivan_petrichenko",
  "version": "1.0.0",
  "description": "Modul and React Lesson grpm Ivan Petrichenko #87",
  "main": "./src/index.js",
  "scripts": {
    "create_webpack_please" : "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Abay Reushenov <abay.reushenov@gmail.com>",
  "license": "MIT"
}
//----------
2.2 npm run create_webpack_please
// или любое что вы сюда прописали в package.json

2.3 конфигурировать webpack

webpack.config.js
//------
'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'app',
  },
    watch: true,
    watchOptions: {
    poll: 1000 // Check for changes every second
    },
    devtool: "source-map"
}
//------
2.4 запускаем
npx webpack
// => на экране:
//-------------------------------------------
iMac-Abay:87ReactModules reushenov$ npx webpack

webpack is watching the files…

Hash: cc3017050b8f1d4fb7a7
Version: webpack 4.44.0
Time: 139ms
Built at: 2020-08-04 7:11:40
        Asset      Size  Chunks                   Chunk Names
    bundle.js  6.04 KiB    main  [emitted]        main
bundle.js.map  5.69 KiB    main  [emitted] [dev]  main
Entrypoint main = bundle.js bundle.js.map
[./src/index.js] 422 bytes {main} [built]
[./src/script.js] 1.19 KiB {main} [built]
//---------------------------------------------
запускаем bindle.js
// =>
400 300 5
button
///-------------

2.5.1 babel (https://babeljs.io/docs/en/usage)

npm install --save-dev @babel/core @babel/cli @babel/preset-env

//=>
//----------
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN modul_and_react_lesson_87_ivan_petrichenko@1.0.0 No repository field.

+ @babel/core@7.11.0
+ @babel/preset-env@7.11.0
+ @babel/cli@7.10.5
added 297 packages from 147 contributors and audited 297 packages in 43.323s

6 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
//---------------------

2.5.2 npm install --save @babel/polyfill
//=>
//----------------------
npm WARN modul_and_react_lesson_87_ivan_petrichenko@1.0.0 No repository field.

+ @babel/polyfill@7.10.4
added 2 packages from 1 contributor and audited 299 packages in 6.274s

6 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
//-----------------------------
2.5.3 Creating a config file named babel.config.json in the root of your project with this content:

babel.config.json:
//-----------
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
//--------------

2.5.4 And running this command to compile all your code from the src directory to lib:
./node_modules/.bin/babel src --out-dir lib

You can use the npm package runner that comes with npm@5.2.0 
to shorten that command by replacing 

./node_modules/.bin/babel with 

npx babel

//=> мой вариант
iMac-Abay:87ReactModules reushenov$ ./node_modules/.bin/babel src --out-dir lib
Successfully compiled 2 files with Babel (5371ms).

//=> создана папка lib (/87ReactModules/lib)
//=> lib/index.js
//=> lib/script.js

2.6 меняем 
webpack.config.js

entry: './lib/index.js',

и перезапускаем 
$ npx webpack

//=>
//-----------------
webpack is watching the files…

Hash: caa3bf1461c17df1d5b6
Version: webpack 4.44.0
Time: 111ms
Built at: 2020-08-04 7:52:52
        Asset      Size  Chunks                   Chunk Names
    bundle.js  6.71 KiB    main  [emitted]        main
bundle.js.map  7.06 KiB    main  [emitted] [dev]  main
Entrypoint main = bundle.js bundle.js.map
[./lib/index.js] 1.4 KiB {main} [built]
[./lib/script.js] 1.29 KiB {main} [built]
//-----------Успех-------------
2.7 Проверяем
dist/bundle.js

//=> 400 300 5
//=> button
//-----------Успех-------------
2.8  переходим к созданию react app
через
npm create-react-app
https://www.npmjs.com/package/create-react-app

$ npm create-react-app -g
// => установим глобально с -g
//=> в оригинале $ npm create-react-app
//----------------------------------
Usage: npm <command>

where <command> is one of:
    access, adduser, audit, bin, bugs, c, cache, ci, cit,
    clean-install, clean-install-test, completion, config,
    create, ddp, dedupe, deprecate, dist-tag, docs, doctor,
    edit, explore, fund, get, help, help-search, hook, i, init,
    install, install-ci-test, install-test, it, link, list, ln,
    login, logout, ls, org, outdated, owner, pack, ping, prefix,
    profile, prune, publish, rb, rebuild, repo, restart, root,
    run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, team, test, token, tst, un,
    uninstall, unpublish, unstar, up, update, v, version, view,
    whoami

npm <command> -h  quick help on <command>
npm -l            display full usage info
npm help <term>   search for help on <term>
npm help npm      involved overview

Specify configs in the ini-formatted file:
    /Users/reushenov/.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@6.14.7 /usr/local/lib/node_modules/npm
//---------------------------------------------
2.8.2
переходим на github
https://github.com/facebook/create-react-app#readme

Quick Overview
// только 3 команды
npx create-react-app my-app
cd my-app
npm start
//------
//==>
//------------------------------
$ npx create-react-app my-app
cd my-app
//-----
npx: установлен 98 в 16.285s

Creating a new React app in /Users/reushenov/FrontEnder/Udemy/project2/87ReactModules/my-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...
// --
uccess! Created my-app at /Users/reushenov/FrontEnder/Udemy/project2/87ReactModules/my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start

Happy hacking!
//---------$ npm start//////////
//=> \/-------------


> my-app@0.1.0 start /Users/reushenov/FrontEnder/Udemy/project2/87ReactModules/my-app
> react-scripts start


There might be a problem with the project dependency tree.
It is likely not a bug in Create React App, but something you need to fix locally.

The react-scripts package provided by Create React App requires a dependency:

  "eslint": "^6.6.0"

Don't try to install it manually: your package manager does it automatically.
However, a different version of eslint was detected higher up in the tree:

  /Users/reushenov/node_modules/eslint (version: 7.5.0) 

Manually installing incompatible versions is known to cause hard-to-debug issues.

If you would prefer to ignore this check, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That will permanently disable this message but you might encounter other issues.

To fix the dependency tree, try following the steps below in the exact order:

  1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
  2. Delete node_modules in your project folder.
  3. Remove "eslint" from dependencies and/or devDependencies in the package.json file in your project folder.
  4. Run npm install or yarn, depending on the package manager you use.

In most cases, this should be enough to fix the problem.
If this has not helped, there are a few other things you can try:

  5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
     This may help because npm has known issues with package hoisting which may get resolved in future versions.

  6. Check if /Users/reushenov/node_modules/eslint is outside your project directory.
     For example, you might have accidentally installed something in your home folder.

  7. Try running npm ls eslint in your project folder.
     This will tell you which other package (apart from the expected react-scripts) installed eslint.

If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That would permanently disable this preflight check in case you want to proceed anyway.

P.S. We know this message is long but please read the steps above :-) We hope you find them helpful!

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! my-app@0.1.0 start: `react-scripts start`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the my-app@0.1.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/reushenov/.npm/_logs/2020-08-04T05_26_00_361Z-debug.log

// Summary:
(https://create-react-app.dev/docs/getting-started/#quick-start)
Все заработало когда был удален каталог /Users/reushenov/node-modules
и запуск произошел по команде 

$ yarn create react-app my-app
$ cd my-app
$ yarn start

//-----
Quick Start:
npx create-react-app my-app
cd my-app
npm start
//----
If you've previously installed
create-react-app globally via 
    npm install -g create-react-app
, we recommend you uninstall the package using 
    npm uninstall -g create-react-app
to ensure that npx always uses the latest version
Then open http://localhost:3000/ to see your app.

Get Started Immediately
You don’t need to install or configure tools like webpack or Babel.
They are preconfigured and hidden so that you can focus on the code.

#haiku
npm start or yarn start
npm test or yarn test
npm run build or yarn build

