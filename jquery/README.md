1. instal jquery
    $ npm i jquery --save

=> + jquery@3.5.1
added 785 packages from 346 contributors and audited 785 packages in 68.336s

2. include in script.js the code:
    - import 'jquery';

3. webpack :
    $ npx webpack

4. script.js

import 'jquery';

const btn = $('#btn');

console.log(btn);

5. Classified selectors:
    http://jquery.page2page.ru/index.php5/%D0%A1%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%8B

6. Timeloader for jquery
$(document).ready(function() {
    // code
});