(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["packs/dynamicPolyfills"],{"1zUv":function(e,n,l){"use strict";l.r(n);(function(e){l("4mDm");l("5s+n");l("UxlC");l("3bBZ");l("Kz25");var n=l("Bndk");var t=l("lSUT");var s=()=>{if(!Object(n["b"])())return t["whenReady"].fail("Browser does not support the APIs needed to render React");return t["whenReady"].succeed()};var i=e=>{var{test:n,load:l}=e;if(n)return Promise.resolve();return l()};var o=[{test:"fetch"in window,load:()=>Promise.all([l.e("npm.classlist.js"),l.e("npm.element-closest-polyfill"),l.e("npm.element-matches-polyfill"),l.e("npm.intersection-observer"),l.e("dynamic-polyfills")]).then(l.bind(null,"bZMm"))},{test:"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&"isIntersecting"in window.IntersectionObserverEntry.prototype,load:()=>Promise.all([l.e("npm.classlist.js"),l.e("npm.element-closest-polyfill"),l.e("npm.element-matches-polyfill"),l.e("npm.intersection-observer"),l.e("dynamic-polyfills")]).then(l.t.bind(null,"Wr5T",7))},{test:function(){try{var n=new e.URL("b","http://a");n.pathname="c%20d";return"http://a/c%20d"===n.href&&n.searchParams}catch(l){return false}}(),load:()=>Promise.all([l.e("npm.classlist.js"),l.e("npm.element-closest-polyfill"),l.e("npm.element-matches-polyfill"),l.e("npm.intersection-observer"),l.e("dynamic-polyfills")]).then(l.t.bind(null,"T1qB",7))},{test:"scrollBehavior"in document.documentElement.style,load:()=>Promise.all([l.e("npm.classlist.js"),l.e("npm.element-closest-polyfill"),l.e("npm.element-matches-polyfill"),l.e("npm.intersection-observer"),l.e("dynamic-polyfills")]).then(l.t.bind(null,"dwco",7)).then(e=>{var{default:n}=e;return n.polyfill()})},{test:Element.prototype.matches,load:()=>Promise.all([l.e("npm.classlist.js"),l.e("npm.element-closest-polyfill"),l.e("npm.element-matches-polyfill"),l.e("npm.intersection-observer"),l.e("dynamic-polyfills")]).then(l.t.bind(null,"AqrU",7))},{test:"classList"in document.createElement("_")&&"replace"in document.createElement("_").classList,load:()=>Promise.all([l.e("npm.classlist.js"),l.e("npm.element-closest-polyfill"),l.e("npm.element-matches-polyfill"),l.e("npm.intersection-observer"),l.e("dynamic-polyfills")]).then(l.t.bind(null,"5yqK",7))},{test:Element.prototype.closest,load:()=>Promise.all([l.e("npm.classlist.js"),l.e("npm.element-closest-polyfill"),l.e("npm.element-matches-polyfill"),l.e("npm.intersection-observer"),l.e("dynamic-polyfills")]).then(l.t.bind(null,"3FeN",7))}];Promise.all(o.map(i)).then(s)}).call(this,l("yLpj"))}},[["1zUv","runtime","npm.core-js","npm.react","npm.object-assign","npm.webpack","npm.react-dom","npm.scheduler","npm.futurelearn","npm.hypernova","DesignSystem-Structure-KeyInfo-KeyInfoLink-index~Partials-DegreesCtaWrapper-index~Partials-StepComme~086dae54"]]]);