var myApp =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modulA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modulA */ \"./modules/modulA.js\");\n/* harmony import */ var _modules_modulB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modulB */ \"./modules/modulB.js\");\n\n\n\nObject(_modules_modulA__WEBPACK_IMPORTED_MODULE_0__[\"myFunction\"])(\"Hello module A\", 3)\n\nlet pI = new _modules_modulB__WEBPACK_IMPORTED_MODULE_1__[\"Point\"](2,3)\nconsole.log(`Distanse from point(0,0) to point (2,3) is ${pI.distance()}`)\n\nconsole.log(\"Everything okay!\")\n\n//# sourceURL=webpack://myApp/./index.js?");

/***/ }),

/***/ "./modules/modulA.js":
/*!***************************!*\
  !*** ./modules/modulA.js ***!
  \***************************/
/*! exports provided: myFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myFunction\", function() { return myFunction; });\n\nconst f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };\n\nconst myFunction3 = (npm_init, n) => {\n    n++\n    console.log(\"npm_init\")\n    console.log(`Factorial of ${n} is ${f(n)}`)\n    myFunction4(npm_init, n)\n}\n\nconst myFunction2 = function innerName(whatAboutWebpack, k){\n    k++\n    console.log(\"whatAboutWebpack\")\n    console.log(`Factorial of ${k} is ${f(k)}`)\n    myFunction3(whatAboutWebpack, k)\n}\n\nconst myFunction = function(studyJavascript, b) {\n    b++\n    console.log(\"studyJavascript\")\n    console.log(`Factorial of ${b} is ${f(b)}`)\n    myFunction2(studyJavascript, b)\n}\n\n// const i =\"Module A\"\n// const j = 1\n\n// myFunction(i , j)\n\n// functions declaration\n// Function expressions can include names, which is useful for recursion.\n\nfunction myFunction4(packageDotJson, m) {\n    m++\n    console.log(\"packageDotJson\")\n    console.log(`Factorial of ${m} is ${f(m)}`)\n    console.log(packageDotJson)\n }\n\n \n\n\n\n//# sourceURL=webpack://myApp/./modules/modulA.js?");

/***/ }),

/***/ "./modules/modulB.js":
/*!***************************!*\
  !*** ./modules/modulB.js ***!
  \***************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Point\", function() { return Point; });\n\n\nclass Point {           // By convention, class names are capitalized.\n    constructor(x, y) { // Constructor function to initialize new instances.\n        this.x = x;     // This keyword is the new object being initialized.\n        this.y = y;     // Store function arguments as object properties.\n    }                   // No return is necessary in constructor functions\n    \n    distance() {\n        return Math.sqrt(     // Return the square root of x2 + y2.\n            this.x * this.x + // this refers to the Point object on which\n            this.y * this.y   // the distance method is invoked. \n        );\n    }\n}\n\n// Use the Point() constructor function with \"new\" to create Point objects \n// let p = new Point(1, 1);    // The geometric point (1,1).\n// // Now use a method of the Point object p \n// console.log(p.distance()) // => Math.SQRT2 = 1.4142135623730951\n\n\n\n\n\n//# sourceURL=webpack://myApp/./modules/modulB.js?");

/***/ })

/******/ });