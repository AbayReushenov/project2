var dist =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_modules_moduleA1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/modules/moduleA1 */ \"./src/modules/moduleA1.js\");\n/* harmony import */ var _src_modules_moduleA2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/modules/moduleA2 */ \"./src/modules/moduleA2.js\");\n/* harmony import */ var _src_modules_moduleA3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/modules/moduleA3 */ \"./src/modules/moduleA3.js\");\n/* harmony import */ var _src_modules_moduleA4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/modules/moduleA4 */ \"./src/modules/moduleA4.js\");\n/* harmony import */ var _src_modules_moduleA5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/modules/moduleA5 */ \"./src/modules/moduleA5.js\");\n/* harmony import */ var _src_modules_moduleA6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/modules/moduleA6 */ \"./src/modules/moduleA6.js\");\n/* harmony import */ var _src_modules_moduleA7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/modules/moduleA7 */ \"./src/modules/moduleA7.js\");\n/* harmony import */ var _src_modules_moduleA8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/modules/moduleA8 */ \"./src/modules/moduleA8.js\");\n/* harmony import */ var _src_modules_moduleA9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/modules/moduleA9 */ \"./src/modules/moduleA9.js\");\n/* harmony import */ var _src_modules_moduleA10__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/modules/moduleA10 */ \"./src/modules/moduleA10.js\");\n \n \n \n \n \n \n \n \n \n \n\nconst m = [_src_modules_moduleA1__WEBPACK_IMPORTED_MODULE_0__[\"a1\"], _src_modules_moduleA2__WEBPACK_IMPORTED_MODULE_1__[\"a1\"], _src_modules_moduleA3__WEBPACK_IMPORTED_MODULE_2__[\"a1\"], _src_modules_moduleA4__WEBPACK_IMPORTED_MODULE_3__[\"a1\"], _src_modules_moduleA5__WEBPACK_IMPORTED_MODULE_4__[\"a1\"], _src_modules_moduleA6__WEBPACK_IMPORTED_MODULE_5__[\"a1\"], _src_modules_moduleA7__WEBPACK_IMPORTED_MODULE_6__[\"a1\"], _src_modules_moduleA8__WEBPACK_IMPORTED_MODULE_7__[\"a1\"], _src_modules_moduleA9__WEBPACK_IMPORTED_MODULE_8__[\"a1\"], _src_modules_moduleA10__WEBPACK_IMPORTED_MODULE_9__[\"a1\"]]\nlet sumM = m.reduce(function(a, b) {\n    return a + b;\n}); \nconsole.log(`\\n\\nconst m = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10]\\n\\n\nlet sumM = m.reduce(function(a, b) {\\n\n    return a + b;\\n\n});\\n\\n `)\nconsole.log('Sum of 10 elements :' + m +' is: '+ sumM) \nalert(\"hello world!\")\n// let a = 1,\n// b = 2,\n// c = 3\n// d = [a, b, c]\n// console.log(d) // => [ 1, 2, 3 ]\n\n// var total = [0, 1, 2, 3].reduce(function(a, b) {\n//     return a + b;\n//   });   // total == 6\n\n\n\n//# sourceURL=webpack://dist/./src/index.js?");

/***/ }),

/***/ "./src/modules/moduleA1.js":
/*!*********************************!*\
  !*** ./src/modules/moduleA1.js ***!
  \*********************************/
/*! exports provided: a1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a1\", function() { return a1; });\nlet a1 = Math.random() * 1000\nconsole.log('Math.random() * 1000 =' + a1)\n\n\n//# sourceURL=webpack://dist/./src/modules/moduleA1.js?");

/***/ }),

/***/ "./src/modules/moduleA10.js":
/*!**********************************!*\
  !*** ./src/modules/moduleA10.js ***!
  \**********************************/
/*! exports provided: a1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a1\", function() { return a1; });\nlet a1 = Math.pow(333, 1/3)\nconsole.log('the cube root of 333 , Math.pow(3, 1/3) :' + a1)\n\n\n//# sourceURL=webpack://dist/./src/modules/moduleA10.js?");

/***/ }),

/***/ "./src/modules/moduleA2.js":
/*!*********************************!*\
  !*** ./src/modules/moduleA2.js ***!
  \*********************************/
/*! exports provided: a1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a1\", function() { return a1; });\nlet a1 = Math.pow(2,5)\nconsole.log('Math.pow(2,5) =' + a1)\n\n\n//# sourceURL=webpack://dist/./src/modules/moduleA2.js?");

/***/ }),

/***/ "./src/modules/moduleA3.js":
/*!*********************************!*\
  !*** ./src/modules/moduleA3.js ***!
  \*********************************/
/*! exports provided: a1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a1\", function() { return a1; });\nlet a1 = Math.round(203.6)\nconsole.log('round to the nearest integer: Math.round(203.6) =' + a1)\n\n\n//# sourceURL=webpack://dist/./src/modules/moduleA3.js?");

/***/ }),

/***/ "./src/modules/moduleA4.js":
/*!*********************************!*\
  !*** ./src/modules/moduleA4.js ***!
  \*********************************/
/*! exports provided: a1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a1\", function() { return a1; });\nlet a1 = Math.ceil(203.1)\nconsole.log('round up to an integer: Math.ceil(203.1)' + a1)\n\n\n//# sourceURL=webpack://dist/./src/modules/moduleA4.js?");

/***/ }),

/***/ "./src/modules/moduleA5.js":
/*!*********************************!*\
  !*** ./src/modules/moduleA5.js ***!
  \*********************************/
/*! exports provided: a1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a1\", function() { return a1; });\nlet a1 = Math.floor(206.6)\nconsole.log('round down to an integer: Math.floor(206.6)=' + a1)\n\n\n//# sourceURL=webpack://dist/./src/modules/moduleA5.js?");

/***/ }),

/***/ "./src/modules/moduleA6.js":
/*!*********************************!*\
  !*** ./src/modules/moduleA6.js ***!
  \*********************************/
/*! exports provided: a1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a1\", function() { return a1; });\nlet a1 = Math.abs(-55000.06)\nconsole.log('Math.abs(-55000.06)' + a1)\n\n\n//# sourceURL=webpack://dist/./src/modules/moduleA6.js?");

/***/ }),

/***/ "./src/modules/moduleA7.js":
/*!*********************************!*\
  !*** ./src/modules/moduleA7.js ***!
  \*********************************/
/*! exports provided: a1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a1\", function() { return a1; });\nlet x = [12, -34, 23],\ny = [90, 0, -390],\nz = [ 890, -0.98, 67889, 90001, 8],\nq = [...z,...y,...x, 45, 120000],\n a1 = Math.max( ...q )\n\nconsole.log(\"q  :\" + q)\nconsole.log('a1 = Math.max( ...q ):' + a1)\nconsole.log(\"[x, y, z] : \" + x, y, z)\nconsole.log('Math.max( ...x,...y,...z) :' + Math.max( ...x,...y,...z))\n\n\n//# sourceURL=webpack://dist/./src/modules/moduleA7.js?");

/***/ }),

/***/ "./src/modules/moduleA8.js":
/*!*********************************!*\
  !*** ./src/modules/moduleA8.js ***!
  \*********************************/
/*! exports provided: a1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a1\", function() { return a1; });\nlet x = [12, -34, 23],\ny = [90, 0, -390],\nz = [ 890, -0.98, 67889, 90001, 8],\nq = [...z,...y,...x, 45, 120000],\n a1 = Math.min( ...q )\n\nconsole.log(\"q  :\" + q)\nconsole.log('a1 = Math.min( ...q ):' + a1)\nconsole.log(\"[x, y, z] : \" + x, y, z)\nconsole.log('Math.min( ...x,...y,...z) :' + Math.min( ...x,...y,...z))\n\n\n//# sourceURL=webpack://dist/./src/modules/moduleA8.js?");

/***/ }),

/***/ "./src/modules/moduleA9.js":
/*!*********************************!*\
  !*** ./src/modules/moduleA9.js ***!
  \*********************************/
/*! exports provided: a1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a1\", function() { return a1; });\nlet a1 = Math.sqrt(1000) \nconsole.log('Math.sqrt(1000)  =' + a1)\n\n\n//# sourceURL=webpack://dist/./src/modules/moduleA9.js?");

/***/ })

/******/ });