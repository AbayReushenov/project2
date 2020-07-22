import {one, two} from './module.js';

console.log(`${one} and ${two}`);

import {one as first} from './module.js';

console.log(`this is next type to call var from other module: ${first}`);


import {default as sayHi } from './module.js';
sayHi();