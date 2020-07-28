AbayReushenov Web Programming Framework
Thank you for choosing AbayReushenov

INSTALLATION "Slider ready made" by "https://github.com/ganlanyuan/tiny-slider"

Lesson 82. 
 
0. node -v
   npm -v
   npm init 
   => "package.json" 

   sudo npm install --save-dev webpack webpack-cli
   sudo npm i -g webpack webpack-cli
   make: "webpack.config.js"
                    'use strict';

                    let path = require('path');

                    module.exports = {
                    mode: 'development',
                    entry: './script.js',
                    output: {
                        filename: 'bundle.js',
                        path: path.resolve(__dirname, 'dist/js')
                    },
                    watch: true,

                    devtool: "source-map",

                    module: {},
                    };
    $ npx webpack


1. sudo npm install tiny-slider --save
2. add css link
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css">
<!--[if (lt IE 9)]><script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.helper.ie8.js"></script><![endif]-->
3. add markup
<div class="my-slider">
  <div></div>
  <div></div>
  <div></div>
</div>
<!-- or ul.my-slider > li -->

4. Call tns()
<script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>
<!-- NOTE: prior to v2.2.1 tiny-slider.js need to be in <body> -->
 
or  Import tns via webpack or rollup:
webpack method:
// yourScript.js
import { tns } from "./node_modules/tiny-slider/src/tiny-slider"

5. make:

webpack.config.js
//-----------
'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: './script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    watch: true,

    devtool: "source-map",

    module: {},
};

// $ webpack
//---------

6. npx webpack

7. Check index.html:
install: "bandle.js"
delete:  "script.js"

8. install in script.js

tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true
  });
  - options can change.
  - see in github.
 



