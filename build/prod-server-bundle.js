module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=23)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("@babel/runtime/helpers/objectSpread")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("webpack-flush-chunks")},function(e,t){e.exports=require("react-universal-component/server")},function(e,t){e.exports=require("@babel/runtime/helpers/extends")},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("redux-devtools-extension")},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(14),a=r(15),c=r(9),s=r(10),u=r(16),l=r.n(u),p=r(7),m=r(17),d=r(1),f=r.n(d),h=r(2),v=r.n(h),E=r(3),y=r.n(E),b=r(4),g=r.n(b),x=r(5),S=r.n(x);var O=function(e){var t=e.title,r=void 0===t?"React SSR":t,n=e.description,i=void 0===n?"Sample for SSR":n,a=e.image,s=void 0===a?"https://i.imgur.com/lvzUVyf.jpg":a,u=e.children;return o.a.createElement(c.Helmet,{encodeSpecialCharacters:!0},o.a.createElement("meta",{"http-equiv":"",content:"IE=edge"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.a.createElement("meta",{description:"description",content:i}),o.a.createElement("meta",{description:"description",content:i}),o.a.createElement("meta",{description:"og:title",content:r}),o.a.createElement("meta",{description:"og:description",content:i}),o.a.createElement("meta",{description:"og:image",content:s}),o.a.createElement("link",{rel:"shortcut icon",href:"https://res.cloudinary.com/riangle/image/upload/v1531060402/favicon_zxkyaz.ico",type:"image/x-icon"}),o.a.createElement("link",{rel:"icon",sizes:"192x192",href:"https://i.imgur.com/mMOR6Y7.png"}),o.a.createElement("link",{rel:"apple-touch-icon-precomposed",href:"https://i.imgur.com/mMOR6Y7.png"}),u&&u,o.a.createElement("title",null,r))},_=function(e){function t(){return f()(this,t),y()(this,g()(t).apply(this,arguments))}return S()(t,e),v()(t,[{key:"render",value:function(){var e=this.props.route;return o.a.createElement("div",null,o.a.createElement(O,null),Object(p.renderRoutes)(e.routes))}}]),t}(n.Component),R=r(18),F=r.n(R),q=r(19),D=r.n(q),k=r(8),j=r.n(k),T=r(12),I=r.n(T),C=r(20),P=r.n(C),w=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=I()(j.a.mark(function t(r){var n;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:"REQUEST_REPOSITORIES",payload:{isDoneFetch:e}}),t.next=4,P.a.get("".concat("https://api.github.com/search","/repositories?q=stars:>=10000+language:go&sort=stars&order=desc"));case 4:n=t.sent,r({type:"RECEIVE_REPOSITORIES",payload:{isDoneFetch:e,data:n.data.items,errors:null}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r({type:"RECEIVE_REPOSITORIES",payload:{isDoneFetch:e,data:[],errors:t.t0}});case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},N=function(e){var t=e.name,r=e.html_url,n=e.description,i=e.stargazers_count;return o.a.createElement("div",{className:"respository-item"},o.a.createElement("span",{className:"respository-item__name"},t),o.a.createElement("span",{className:"respository-item__link"},r),o.a.createElement("span",{className:"respository-item__star"},i),o.a.createElement("p",{className:"respository-item__desc"},n))},H=function(e){function t(){return f()(this,t),y()(this,g()(t).apply(this,arguments))}return S()(t,e),v()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchRepositories;e.isDoneFetch||t()}},{key:"componentWillUnmount",value:function(){this.props.refreshDoneFetch()}},{key:"render",value:function(){var e=this.props,t=e.isFetching,r=e.repositories,n=e.errors;return t?o.a.createElement("div",null,"Loading...."):n?o.a.createElement("div",null,JSON.stringify(n,null,4)):o.a.createElement("div",{className:"repository-container"},o.a.createElement("div",null,"Repo LeaderBoard"),r.map(function(e){return o.a.createElement(N,F()({key:e.id},e))}))}}]),t}(n.Component);D()(H,"fetchData",function(e){console.log("fetchData");return e.dispatch(w(!0))});var M=Object(s.connect)(function(e){var t=e.repositories;return{isFetching:t.isFetching,repositories:t.repositories,errors:t.errors,isDoneFetch:t.isDoneFetch}},function(e){return{fetchRepositories:function(){return e(w())},refreshDoneFetch:function(){return e(function(){var e=I()(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"REFRESH_DONE_FETCH",payload:{isDoneFetch:!1}});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())}}})(H),z=function(e){function t(){return f()(this,t),y()(this,g()(t).apply(this,arguments))}return S()(t,e),v()(t,[{key:"render",value:function(){return o.a.createElement("div",null,"About")}}]),t}(n.Component),A=r(21),L=[{component:_,routes:[{path:"/",exact:!0,component:M},{path:"/home",component:M},{path:"/about",component:z},{path:"*",component:function(e){function t(){return f()(this,t),y()(this,g()(t).apply(this,arguments))}return S()(t,e),v()(t,[{key:"render",value:function(){return o.a.createElement("div",null,"Page404",o.a.createElement(A.Link,{to:"/"},"Back to Home"))}}]),t}(n.Component)}]}],U=r(6),V=r(13),Y=r.n(V),B=r(22),J=r(11),Q=r.n(J),W={isDoneFetch:!1,isFetching:!1,repositories:[],errors:null},G=Object(U.combineReducers)({repositories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(console.log("------action------",t.type),t.type){case"REQUEST_REPOSITORIES":return Q()({},e,{isFetching:!0,repositories:[],errors:null,isDoneFetch:t.payload.isDoneFetch});case"RECEIVE_REPOSITORIES":return Q()({},e,{isDoneFetch:t.payload.isDoneFetch,repositories:t.payload.data,errors:t.payload.errors,isFetching:!1});case"REFRESH_DONE_FETCH":return Q()({},e,{isDoneFetch:t.payload.isDoneFetch});default:return e}}}),K=function(e){return e?Object(U.createStore)(G,{},Object(U.applyMiddleware)(Y.a)):Object(U.createStore)(G,window.__INITIAL_STATE__,Object(B.composeWithDevTools)(Object(U.applyMiddleware)(Y.a)))};t.default=function(e){var t=e.clientStats;return function(e,r){var n={},u=Object(p.matchRoutes)(L,e.url),d=K(!0),f=u.map(function(e){var t=e.route,r=t.component.fetchData;return console.log(t.component.fetchData),r instanceof Function?r(d):Promise.resolve(null)});return Promise.all(f).then(function(u){var f=Object(i.renderToString)(o.a.createElement(s.Provider,{store:d},o.a.createElement(a.StaticRouter,{location:e.url,context:n},o.a.createElement("div",null,Object(p.renderRoutes)(L))))),h=c.Helmet.renderStatic(),v=l()(t,{chunkNames:Object(m.flushChunkNames)()}),E=v.js,y=v.styles,b=v.cssHash,g=n.status||200;if(400===n.status&&console.error("Error 404: ",e.originalUrl),n.url){var x=n.status||302;r.redirect(x,n.url)}else r.setHeader("Cache-Control","public, max-age=2628000"),r.status(g).send("<!DOCTYPE html>\n          <html lang=".concat("en",">\n            <head>\n              ").concat(y,"\n              ").concat(h.title,"\n              ").concat(h.meta.toString(),"\n              ").concat(h.link.toString(),'\n            </head>\n            <body>\n              <div id="react-root">\n                ').concat(f,"\n              </div>\n              <script>\n                window.__INITIAL_STATE__ = ").concat(JSON.stringify(d.getState()),"\n              <\/script>\n              ").concat(E,"\n              ").concat(b,"\n            </body>\n          </html>"))})}}}]);