(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(u.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},u=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,u=t.hasQuery;return n||o&&(void 0!==u&&u)}},"/GRZ":function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"48fX":function(t,e,n){var r=n("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"7eYB":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),u=n("lwAK"),a=n("FYa8"),i=n("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var s=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?u=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?u=!1:e.add(o.type);break;case"meta":for(var i=0,c=s.length;i<c;i++){var f=s[i];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?u=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;p.has(l)?u=!1:(p.add(l),r[f]=p)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,o.default)();function y(t){var e=t.children;return(r.default.createElement(u.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(t)},e)}))})))}y.rewind=d.rewind;var v=y;e.default=v},"C+bE":function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.HeadManagerContext=o},KckH:function(t,e,n){var r=n("7eYB");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},RNiq:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),u=n("8Kt/"),a=n.n(u),i=o.a.createElement;e.default=function(){return i(a.a,null,i("meta",{httpEquiv:"refresh",content:"0; URL='/ru'"}),i("script",{dangerouslySetInnerHTML:{__html:'window.location.replace("/ru")'}}))}},T0f4:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),u=n("i2R6"),a=n("48fX"),i=n("tCBg"),c=n("T0f4"),f=n("mPvQ");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}e.__esModule=!0,e.default=void 0;var s=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(i){a(f,i);var c=l(f);function f(t){var u;return r(this,f),u=c.call(this,t),p&&(e.add(o(u)),n(o(u))),u}return u(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(s.Component))}},i2R6:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),u=n("KckH"),a=n("kG2m");t.exports=function(t){return r(t)||o(t)||u(t)||a()}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},qhzo:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},tCBg:function(t,e,n){var r=n("C+bE"),o=n("qXWd");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);