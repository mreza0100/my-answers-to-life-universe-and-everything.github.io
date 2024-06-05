(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{4131:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-me",function(){return n(8576)}])},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};u=e,s=Promise,(null!=s&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](u):u instanceof s)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i({},r,e));var u,s;var l=r=i({},r,t);if(l.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(l.suspense)return n(l);r.loadableGenerated&&delete(r=i({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,o(n,r);delete r.ssr}return n(r)};u(n(7294));var a=u(n(4302));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=i},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,o=(u=n(7294))&&u.__esModule?u:{default:u},s=n(7161),l=n(6319);var c=[],d=[],f=!1;function h(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,i;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var i=this;this._timeout=setTimeout((function(){i._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),i&&r(t,i),e}();function p(e){return function(e,t){var n=function(){if(!i){var t=new b(e,r);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=o.default.lazy(r.loader));var i=null;if(!f&&!r.suspense){var u=r.webpack?r.webpack():r.modules;u&&d.push((function(e){var t=!0,r=!1,i=void 0;try{for(var a,o=u[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value;if(-1!==e.indexOf(s))return n()}}catch(l){r=!0,i=l}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}))}var c=r.suspense?function(e,t){return o.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=o.default.useContext(l.LoadableContext),u=s.useSubscription(i);return o.default.useImperativeHandle(t,(function(){return{retry:i.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),o.default.useMemo((function(){return u.loading||u.error?o.default.createElement(r.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:i.retry}):u.loaded?o.default.createElement(function(e){return e&&e.__esModule?e.default:e}(u.loaded),e):null}),[e,u])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",o.default.forwardRef(c)}(h,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}p.preloadAll=function(){return new Promise((function(e,t){y(c).then(e,t)}))},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};y(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=p.preloadReady;var m=p;t.default=m},8576:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(4515);t.default=function(){return(0,r.jsx)(i.Xg,{PAGE_SEO:{title:"Mamzi Khosravi - About Me",description:"Software developer and thinker",keywords:"Mamzi Khosravi Software Engineering Thinker Philosophy",author:"Mamzi Khosravi"},home:!0,children:(0,r.jsxs)("section",{className:"container px-3 md:pb-20 md:pt-10 pt-20",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(i.xv,{title:!0,className:"mb-5 mt-10 dark:text-sky-400 text-sky-600",children:"I'm Mamzi"}),(0,r.jsxs)(i.xv,{className:"text-s mb-5",children:["This is an open source blog hosted by Github Pages using",(0,r.jsx)("a",{href:"https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss",children:"[this template]"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{children:"Why I made this blog?"}),(0,r.jsx)("span",{children:"This is my personal Doctrine as the guide to Life, Universe and everything. I have decided to make this manifesto online so others may use in variant ways for themselves. I have to point out that unfortunately this doctrine is not yet completed. You see, because the answer to Life, Universe and everything is everything, it cannot finish anytime soon and it will be permanently under construction. So thank you for your patience, I strive to write and grow it as I change my obsession and fit it into this wild picture."})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h2",{children:"FAQ"}),(0,r.jsxs)(i.aV,{children:[(0,r.jsxs)("li",{children:["What are the quotes I see in between text?",(0,r.jsx)(i.aV,{children:(0,r.jsx)("li",{children:"Every quote has a reference link that you can check out. But it's mostly Spinoza"})})]}),(0,r.jsxs)("li",{children:["Why Spinoza",(0,r.jsx)(i.aV,{children:(0,r.jsxs)("li",{children:["I have restructured Spinoza's Ethics as to fit into the picture of the ultimate question. His way of thinking and the Doctrine of him is spectacularly magnificent and wondering. It's been one of the best guides I have found to explain how life and universe works. This is a mental framework which helps you understand reality. If you are interested to know more, you can read",(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/everything/spinoza-ethics",children:"spinoza and ethics"})]})})]})]})]})]})})}},4515:function(e,t,n){"use strict";n.d(t,{Xg:function(){return i},xv:function(){return a},Ee:function(){return u},aV:function(){return o},e9:function(){return s}});var r=n(5152),i=(0,r.default)((function(){return Promise.all([n.e(228),n.e(13),n.e(874),n.e(171),n.e(643)]).then(n.bind(n,8788))}),{loadableGenerated:{webpack:function(){return[8788]}}}),a=(0,r.default)((function(){return n.e(980).then(n.bind(n,6980))}),{loadableGenerated:{webpack:function(){return[6980]}}}),u=(0,r.default)((function(){return n.e(28).then(n.bind(n,3028))}),{loadableGenerated:{webpack:function(){return[3028]}}}),o=((0,r.default)((function(){return n.e(199).then(n.bind(n,2199))}),{loadableGenerated:{webpack:function(){return[2199]}}}),(0,r.default)((function(){return n.e(70).then(n.bind(n,7070))}),{loadableGenerated:{webpack:function(){return[7070]}}})),s=(0,r.default)((function(){return n.e(534).then(n.bind(n,534))}),{loadableGenerated:{webpack:function(){return[534]}}});(0,r.default)((function(){return n.e(162).then(n.bind(n,162))}),{loadableGenerated:{webpack:function(){return[162]}}}),(0,r.default)((function(){return n.e(354).then(n.bind(n,7354))}),{loadableGenerated:{webpack:function(){return[7354]}}}),(0,r.default)((function(){return Promise.all([n.e(7),n.e(931)]).then(n.bind(n,931))}),{loadableGenerated:{webpack:function(){return[931]}}})},5152:function(e,t,n){e.exports=n(638)},8217:function(e,t,n){"use strict";var r=n(6086),i=n(7294);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,a=i.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=a[0];var u=a[1];return a=e.value,e.getCurrentValue===t&&e.subscribe===n||(a=t(),u({getCurrentValue:t,subscribe:n,value:a})),i.useDebugValue(a),i.useEffect((function(){function e(){if(!i){var e=t();u((function(i){return i.getCurrentValue!==t||i.subscribe!==n||i.value===e?i:r({},i,{value:e})}))}}var i=!1,a=n(e);return e(),function(){i=!0,a()}}),[t,n]),a}},7161:function(e,t,n){"use strict";e.exports=n(8217)}},function(e){e.O(0,[774,888,179],(function(){return t=4131,e(e.s=t);var t}));var t=e.O();_N_E=t}]);