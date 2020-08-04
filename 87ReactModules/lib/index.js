"use strict";

var _script = _interopRequireWildcard(require("./script"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import {btn, Slider as Sl} from './script'
// import * as total from './script'
// import Slider, {button} from './script' // for: "export default Slider"
// import React, {Component} from 'react'
// import './index.css'
//нам нужен webpack
// SKIP_PREFLIGHT_CHECK=true
const slider = new _script.default(400, 300, 5); // 400 300 5

slider.ktoEstyYa();
console.log((0, _script.button)());