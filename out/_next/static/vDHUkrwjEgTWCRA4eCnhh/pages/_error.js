(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/0+H":function(e,n,t){"use strict";n.__esModule=!0,n.isInAmpMode=o,n.useAmp=function(){return o(s.default.useContext(i.AmpStateContext))};var r,s=(r=t("q1tI"))&&r.__esModule?r:{default:r},i=t("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,r=e.hybrid,s=void 0!==r&&r,i=e.hasQuery;return t||s&&(void 0!==i&&i)}},"1HF/":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return t("Y0NT")}])},"48fX":function(e,n,t){var r=t("qhzo");e.exports=function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}},"4vJz":function(e,n){e.exports={order:6,breakpointMedia:"(min-width: 1920px)",srcSets:[{extension:"webp",srcSet:{"1x":"https://images.csssr.com/insecure/dpr:0.3333/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.l-44b6d198.png@webp","2x":"https://images.csssr.com/insecure/dpr:0.6666/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.l-44b6d198.png@webp","3x":"https://images.csssr.com/insecure/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.l-44b6d198.png@webp"}},{extension:"png",srcSet:{"1x":"https://images.csssr.com/insecure/dpr:0.3333/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.l-44b6d198.png@png","2x":"https://images.csssr.com/insecure/dpr:0.6666/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.l-44b6d198.png@png","3x":"https://images.csssr.com/insecure/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.l-44b6d198.png@png"}}]}},"5fIB":function(e,n,t){var r=t("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,n,t){"use strict";n.__esModule=!0,n.defaultHead=p,n.default=void 0;var r=a(t("q1tI")),s=a(t("Xuae")),i=t("lwAK"),o=t("FYa8"),c=t("/0+H");function a(e){return e&&e.__esModule?e:{default:e}}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[r.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function u(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===r.default.Fragment?e.concat(r.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)}),[])):e.concat(n)}var m=["name","httpEquiv","charSet","itemProp"];function l(e,n){return e.reduce((function(e,n){var t=r.default.Children.toArray(n.props.children);return e.concat(t)}),[]).reduce(u,[]).reverse().concat(p(n.inAmpMode)).filter(function(){var e=new Set,n=new Set,t=new Set,r={};return function(s){var i=!0;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){var o=s.key.slice(s.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(s.type){case"title":case"base":n.has(s.type)?i=!1:n.add(s.type);break;case"meta":for(var c=0,a=m.length;c<a;c++){var p=m[c];if(s.props.hasOwnProperty(p))if("charSet"===p)t.has(p)?i=!1:t.add(p);else{var u=s.props[p],l=r[p]||new Set;l.has(u)?i=!1:(l.add(u),r[p]=l)}}}return i}}()).reverse().map((function(e,n){var t=e.key||n;return r.default.cloneElement(e,{key:t})}))}var d=(0,s.default)();function g(e){var n=e.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(o.HeadManagerContext.Consumer,null,(function(t){return r.default.createElement(d,{reduceComponentsToState:l,handleStateChange:t,inAmpMode:(0,c.isInAmpMode)(e)},n)}))})))}g.rewind=d.rewind;var h=g;n.default=h},C3QP:function(e,n,t){"use strict";var r=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]])}return t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.PictureSmart=n.Picture=void 0;const i=s(t("q1tI")),o=t("Zkqm");n.Picture=({sources:e,alt:n,className:t,testid:r})=>{const s=e[e.length-1],c=s.srcSets[s.srcSets.length-1].srcSet;return i.default.createElement("picture",{className:t},e.map(({breakpointMedia:e,srcSets:n})=>n.map(({extension:n,srcSet:t})=>i.default.createElement("source",{key:`${e}_${n}`,media:null===e?void 0:e,type:`image/${n}`,srcSet:o.getSrcSetString(t)}))),i.default.createElement("img",{srcSet:o.getSrcSetString(c),src:c["1x"],"data-testid":r,alt:n}))},n.PictureSmart=e=>{const{requireImages:t}=e,s=r(e,["requireImages"]),c=t.keys().map(t),a=o.getSources(c);return i.default.createElement(n.Picture,Object.assign({sources:a},s))}},FIeo:function(e,n){e.exports={order:0,breakpointMedia:"(max-width: 767px)",srcSets:[{extension:"webp",srcSet:{"1x":"https://images.csssr.com/insecure/dpr:0.3333/plain/https://school.csssr.com/_next/static/public/images/error/500/mobile.all-a8c69e6d.png@webp","2x":"https://images.csssr.com/insecure/dpr:0.6666/plain/https://school.csssr.com/_next/static/public/images/error/500/mobile.all-a8c69e6d.png@webp","3x":"https://images.csssr.com/insecure/plain/https://school.csssr.com/_next/static/public/images/error/500/mobile.all-a8c69e6d.png@webp"}},{extension:"png",srcSet:{"1x":"https://images.csssr.com/insecure/dpr:0.3333/plain/https://school.csssr.com/_next/static/public/images/error/500/mobile.all-a8c69e6d.png@png","2x":"https://images.csssr.com/insecure/dpr:0.6666/plain/https://school.csssr.com/_next/static/public/images/error/500/mobile.all-a8c69e6d.png@png","3x":"https://images.csssr.com/insecure/plain/https://school.csssr.com/_next/static/public/images/error/500/mobile.all-a8c69e6d.png@png"}}]}},FYa8:function(e,n,t){"use strict";var r;n.__esModule=!0,n.HeadManagerContext=void 0;var s=((r=t("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);n.HeadManagerContext=s},HKEl:function(e,n,t){var r={"./desktop.l.png":"4vJz","./desktop.m.png":"sWuJ","./desktop.s.png":"a6Sx","./mobile.all.png":"FIeo","./tablet.all.png":"ckxL"};function s(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id="HKEl"},MOvG:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getBreakpointMedia=void 0,n.getBreakpointMedia=e=>{let n="";return e.minWidth&&(n+=`(min-width: ${e.minWidth}px)`),e.minWidth&&e.maxWidth&&(n+=" and "),e.maxWidth&&(n+=`(max-width: ${e.maxWidth}px)`),n}},T0f4:function(e,n){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},Xuae:function(e,n,t){"use strict";var r=t("/GRZ"),s=t("qXWd"),i=t("i2R6"),o=t("48fX"),c=t("tCBg"),a=t("T0f4"),p=t("mPvQ");function u(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=a(e);if(n){var s=a(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return c(this,t)}}n.__esModule=!0,n.default=void 0;var m=t("q1tI"),l=!1;n.default=function(){var e,n=new Set;function t(t){e=t.props.reduceComponentsToState(p(n),t.props),t.props.handleStateChange&&t.props.handleStateChange(e)}return(function(c){o(p,c);var a=u(p);function p(e){var i;return r(this,p),i=a.call(this,e),l&&(n.add(s(i)),t(s(i))),i}return i(p,null,[{key:"rewind",value:function(){var t=e;return e=void 0,n.clear(),t}}]),i(p,[{key:"componentDidMount",value:function(){n.add(this),t(this)}},{key:"componentDidUpdate",value:function(){t(this)}},{key:"componentWillUnmount",value:function(){n.delete(this),t(this)}},{key:"render",value:function(){return null}}]),p}(m.Component))}},Xwqz:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getSrcSetString=void 0,n.getSrcSetString=e=>Object.entries(e).map(([e,n])=>`${n} ${e}`).join(", ")},Y0NT:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return x}));var r=t("q1tI"),s=t.n(r),i=t("pKU3"),o=t("qKvR"),c=t("h4VS"),a=t("C3QP"),p=t("5D9J");function u(){var e=Object(c.a)(["\n  & img {\n    width: 100%;\n    height: 100%;\n  }\n"]);return u=function(){return e},e}var m=s.a.createElement;function l(){var e=Object(c.a)(["\n  ","\n"]);return l=function(){return e},e}var d=Object(p.a)((function(e){var n=e.className,r=t("HKEl");return m(a.PictureSmart,{className:n,requireImages:r,alt:"500"})}))(l(),(function(){return Object(o.css)(u())})),g=t("8Kt/"),h=t.n(g),f=t("yV78"),b=s.a.createElement,x=function(e){var n=e.classNames;return b("div",{className:n},b(h.a,null,b("title",null,"\u041e\u0439-\u0451\u0439! \u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. | CSSSR"),b("meta",{name:"description",content:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u0437\u0430\u0439\u0442\u0438 \u043f\u043e\u0437\u0436\u0435."}),b("link",{rel:"shortcut icon",href:"/icons/favicon/favicon.ico"})),b(o.Global,{styles:f.b}),b(i.ErrorPage,{title:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",subTitle:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437 \u0438\u043b\u0438 \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438 \u043f\u043e \u043f\u043e\u0447\u0442\u0435 <a href='mailto:launch@csssr.com'>launch@csssr.com</a>",Img:d}))}},Zkqm:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("ooyl");Object.defineProperty(n,"backgroundCss",{enumerable:!0,get:function(){return r.backgroundCss}});var s=t("MOvG");Object.defineProperty(n,"getBreakpointMedia",{enumerable:!0,get:function(){return s.getBreakpointMedia}});var i=t("Xwqz");Object.defineProperty(n,"getSrcSetString",{enumerable:!0,get:function(){return i.getSrcSetString}});var o=t("qDsV");Object.defineProperty(n,"getSources",{enumerable:!0,get:function(){return o.getSources}});var c=t("ykgW");Object.defineProperty(n,"getOriginal",{enumerable:!0,get:function(){return c.getOriginal}})},a6Sx:function(e,n){e.exports={order:4,breakpointMedia:"(min-width: 1280px) and (max-width: 1359px)",srcSets:[{extension:"webp",srcSet:{"1x":"https://images.csssr.com/insecure/dpr:0.3333/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.s-19f7dbfd.png@webp","2x":"https://images.csssr.com/insecure/dpr:0.6666/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.s-19f7dbfd.png@webp","3x":"https://images.csssr.com/insecure/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.s-19f7dbfd.png@webp"}},{extension:"png",srcSet:{"1x":"https://images.csssr.com/insecure/dpr:0.3333/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.s-19f7dbfd.png@png","2x":"https://images.csssr.com/insecure/dpr:0.6666/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.s-19f7dbfd.png@png","3x":"https://images.csssr.com/insecure/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.s-19f7dbfd.png@png"}}]}},ckxL:function(e,n){e.exports={order:3,breakpointMedia:"(min-width: 768px) and (max-width: 1279px)",srcSets:[{extension:"webp",srcSet:{"1x":"https://images.csssr.com/insecure/dpr:0.3333/plain/https://school.csssr.com/_next/static/public/images/error/500/tablet.all-11533a8c.png@webp","2x":"https://images.csssr.com/insecure/dpr:0.6666/plain/https://school.csssr.com/_next/static/public/images/error/500/tablet.all-11533a8c.png@webp","3x":"https://images.csssr.com/insecure/plain/https://school.csssr.com/_next/static/public/images/error/500/tablet.all-11533a8c.png@webp"}},{extension:"png",srcSet:{"1x":"https://images.csssr.com/insecure/dpr:0.3333/plain/https://school.csssr.com/_next/static/public/images/error/500/tablet.all-11533a8c.png@png","2x":"https://images.csssr.com/insecure/dpr:0.6666/plain/https://school.csssr.com/_next/static/public/images/error/500/tablet.all-11533a8c.png@png","3x":"https://images.csssr.com/insecure/plain/https://school.csssr.com/_next/static/public/images/error/500/tablet.all-11533a8c.png@png"}}]}},kG2m:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,n,t){"use strict";var r;n.__esModule=!0,n.AmpStateContext=void 0;var s=((r=t("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});n.AmpStateContext=s},mPvQ:function(e,n,t){var r=t("5fIB"),s=t("rlHP"),i=t("KckH"),o=t("kG2m");e.exports=function(e){return r(e)||s(e)||i(e)||o()}},ooyl:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.backgroundCssSmart=n.backgroundCss=void 0;const r=t("Zkqm");n.backgroundCss=(e,n)=>n.map(n=>{return(e=>n=>null===e?n:`@media ${e} { ${n} }`)(n.breakpointMedia)(((e,n)=>{const t=n.reduce((n,t)=>{const r=((e,n)=>"webp"===n?`html.webp ${e}`:e)(e,t.extension);return n["1x"].push(`${r} { background-image: url(${t.srcSet["1x"]}); }`),n["2x"].push(`${r} { background-image: url(${t.srcSet["2x"]}); }`),n["3x"].push(`${r} { background-image: url(${t.srcSet["3x"]}); }`),n},{"1x":[],"2x":[],"3x":[]});return`\n${t["1x"].join(" ")}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { ${t["2x"].join(" ")} }\n@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) { ${t["3x"].join(" ")} }\n`})(e,n.srcSets))}).join(" "),n.backgroundCssSmart=(e,t)=>{const s=t.keys().map(t),i=r.getSources(s);return n.backgroundCss(e,i)}},qDsV:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getSources=void 0,n.getSources=e=>{const n=[...e];return n.sort((e,n)=>e.order-n.order),n.map(e=>({breakpointMedia:e.breakpointMedia,srcSets:e.srcSets}))}},qXWd:function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,n){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},sWuJ:function(e,n){e.exports={order:5,breakpointMedia:"(min-width: 1360px) and (max-width: 1919px)",srcSets:[{extension:"webp",srcSet:{"1x":"https://images.csssr.com/insecure/dpr:0.3333/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.m-c37324f4.png@webp","2x":"https://images.csssr.com/insecure/dpr:0.6666/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.m-c37324f4.png@webp","3x":"https://images.csssr.com/insecure/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.m-c37324f4.png@webp"}},{extension:"png",srcSet:{"1x":"https://images.csssr.com/insecure/dpr:0.3333/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.m-c37324f4.png@png","2x":"https://images.csssr.com/insecure/dpr:0.6666/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.m-c37324f4.png@png","3x":"https://images.csssr.com/insecure/plain/https://school.csssr.com/_next/static/public/images/error/500/desktop.m-c37324f4.png@png"}}]}},tCBg:function(e,n,t){var r=t("C+bE"),s=t("qXWd");e.exports=function(e,n){return!n||"object"!==r(n)&&"function"!==typeof n?s(e):n}},yV78:function(e,n,t){"use strict";t.d(n,"b",(function(){return p}));var r=t("h4VS"),s=t("qKvR");function i(){var e=Object(r.a)(["\n  ","\n  ","\n  ","\n"]);return i=function(){return e},e}function o(){var e=Object(r.a)(["\n  .picture {\n    grid-column: 2 / span 7;\n    grid-row: 2 / span 10;\n    margin-top: 1.5rem;\n    z-index: -1;\n    height: 51.5rem;\n\n    & img {\n      width: 100%;\n      height: auto;\n      object-fit: contain;\n    }\n  }\n\n  @media (min-width: 1360px) and (max-width: 1919px) {\n    .picture {\n      height: 38.5rem;\n    }\n  }\n\n  @media (min-width: 1280px) and (max-width: 1359px) {\n    .picture {\n      height: 35.5rem;\n    }\n  }\n\n  @media (min-width: 768px) and (max-width: 1279px) {\n    .picture {\n      height: 27rem;\n    }\n  }\n\n  @media (max-width: 767px) {\n    .picture {\n      grid-column: 1 / span 6;\n      grid-row: 2;\n      height: 16.5rem;\n    }\n  }\n"]);return o=function(){return e},e}function c(){var e=Object(r.a)(["\n  & {\n    padding-bottom: 4rem;\n  }\n\n  &.error-code_500 h2 {\n    grid-column: 9 / span 4;\n  }\n\n  .logo {\n    grid-column: 2 / span 2;\n    margin-top: 5.25rem;\n    width: 11.5rem;\n    height: 2.875rem;\n    color: black;\n  }\n\n  a.font_burger-menu {\n    margin-top: 0;\n    padding-bottom: 0;\n    height: 3rem;\n  }\n\n  h1 {\n    margin-top: 3.875rem;\n    grid-column: 2 / span 7;\n    grid-row: 1;\n  }\n\n  h2{\n    grid-column: 10 / span 2;\n  }\n\n  h2 {\n    margin-top: -3.1875rem;\n    grid-row: 2;\n  }\n\n  .navList {\n    grid-column: 10 / span 2;\n    grid-row: 4;\n    margin-top: 1rem;\n  }\n\n  .menu {\n    margin-bottom: 1rem;\n  }\n\n  .menu-item{\n    font-family: 'Roboto', 'Arial', sans-serif;\n    font-weight: 900;\n    font-size: 0.875rem;\n    line-height: 1.5rem;\n    letter-spacing: 0.04rem;\n    text-transform: uppercase;\n    text-decoration: none;\n    color: #a9a9A9;\n  }\n\n  .code-wrapper {\n    grid-column: 2 / span 6;\n    grid-row: 2 / span 10;\n    margin-top: 2.5rem;\n    width: calc(100% + 1rem);\n    height: 25rem;\n  }\n\n  .arrow-wrapper {\n    grid-column: 10 / span 1;\n    grid-row: 3;\n    margin-top: 1.5rem;\n    width: 0.625rem;\n    height: 3.875rem;\n  }\n\n  @media (min-width: 1360px) and (max-width: 1919px) {\n    .navList {\n      grid-column: 10 / span 3;\n    }\n\n    .code-wrapper {\n      margin-top: 3.5rem;\n      width: 41.75rem;\n      height: 18.625rem;\n    }\n  }\n\n  @media (min-width: 1280px) and (max-width: 1359px) {\n    .navList {\n      grid-column: 10 / span 3;\n    }\n\n    .code-wrapper {\n      margin-top: 2.5rem;\n      width: 41.75rem;\n      height: 18.625rem;\n    }\n\n    .arrow-wrapper {\n      grid-column: 10 / span 1;\n      grid-row: 3;\n      margin-top: 0;\n      padding-top: 1.5rem;\n      width: 0.625rem;\n      height: 5.375rem;\n    }\n  }\n\n  @media (min-width: 768px) and (max-width: 1279px) {\n    .navList {\n      grid-column: 10 / span 3;\n    }\n\n    h1 {\n      margin-top: 5.6875rem;\n    }\n\n    h2 {\n      margin-top: -2.375rem;\n    }\n\n    .code-wrapper {\n      margin-top: 2.5rem;\n      width: 30.5rem;\n      height: 13.625rem;\n    }\n  }\n\n  @media (max-width: 767px) {\n    & {\n      padding-bottom: 2.875rem;\n    }\n\n    &.error-code_500 h2 {\n      grid-column: 1 / span 4;\n    }\n\n    &.error-code_500 .code-wrapper {\n      margin-top: 0;\n      margin-left: 0;\n      width: 17.875rem;\n      height: 8.5rem;\n      width: 18.75rem;\n      height: 8.9375rem;\n    }\n\n   .logo {\n      grid-column: 1 / span 3;\n      margin-top: 3.625rem;\n      width: 10rem;\n      height: 2.5rem;\n      color: black;\n    }\n\n    h1 {\n      grid-column: 1 / span 6;\n      grid-row: 1;\n      margin-top: 3.6875rem;\n    }\n\n    h2 {\n      margin-top: 2.625rem;\n      grid-column: 1 / span 2;\n      grid-row: 3;\n    }\n\n    .navList {\n      grid-column: 1 / span 4;\n      grid-row: 5;\n      margin-top: 0.1875rem;\n    }\n\n    .arrow-wrapper {\n      grid-column: 1;\n      grid-row: 4;\n      margin-top: 0;\n      padding-top: 0rem;\n      width: 0.625rem;\n      height: 3.0625rem;\n    }\n\n    .code-wrapper {\n      grid-column: 1 / span 5;\n      grid-row: 2;\n      margin-top: 3.5625rem;\n      margin-left: 0.1875rem;\n      width: 16.125rem;\n      height: 7.25rem;\n    }\n  }\n"]);return c=function(){return e},e}function a(){var e=Object(r.a)(["\n  .font_h1-slab {\n    font-family: 'Roboto Slab', 'Georgia', serif;\n    font-size: 4rem;\n    font-weight: 300;\n    line-height: 5rem;\n    color: #000000;\n  }\n\n  .font_subhead-slab {\n    font-family: 'Roboto Slab', 'Georgia', serif;\n    font-size: 2rem;\n    font-weight: 300;\n    line-height: 3rem;\n    color: #4a4a4a;\n  }\n\n  .font_burger-menu {\n    font-family: 'Roboto', 'Arial', sans-serif;\n    font-size: 1rem;\n    font-weight: 900;\n    line-height: 3rem;\n    letter-spacing: 0.05rem;\n    text-transform: uppercase;\n    color: #4a4a4a;\n    text-decoration: none;\n  }\n\n  @media (min-width: 768px) and (max-width: 1279px) {\n    .font_h1-slab {\n      font-size: 2rem;\n      line-height: 3rem;\n    }\n\n    .font_subhead-slab {\n      font-size: 1.125rem;\n      line-height: 2rem;\n    }\n  }\n\n  @media (max-width: 767px) {\n    .font_h1-slab {\n      font-size: 2rem;\n      line-height: 3rem;\n    }\n\n    .font_subhead-slab {\n      font-size: 1.125rem;\n      line-height: 2rem;\n    }\n  }\n"]);return a=function(){return e},e}var p=Object(s.css)(a()),u=Object(s.css)(c()),m=Object(s.css)(o());n.a=function(){return Object(s.css)(i(),p,u,m)}},ykgW:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getOriginal=void 0,n.getOriginal=e=>e.srcSets[e.srcSets.length-1].srcSet["3x"]}},[["1HF/",0,1,3,4]]]);