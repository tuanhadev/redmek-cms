webpackJsonp([10],{3109:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(172),u=n.n(c),s=n(0),l=n.n(s),f=n(173),p=n(262),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=[{title:"H\u1ec7 s\u1ed1 A",dataIndex:"stt"},{title:"H\u1ec7 s\u1ed1 B",dataIndex:"name"},{title:"H\u1ec7 s\u1ed1 l\u1edbp",dataIndex:"email"},{title:"H\u1ec7 s\u1ed1 m\xf4n",dataIndex:"phone"},{title:"H\u1ec7 s\u1ed1 th\u1eddi gian \u0111\u0103ng",dataIndex:"address"},{title:"H\u1ec7 s\u1ed1 th\u1eddi h\u1ea1n",dataIndex:"city"},{title:"H\u1ec7 s\u1ed1 d\u1ecbch v\u1ee5",dataIndex:"created_at"}],y=function(e){function t(e){var n=this;a(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.componentDidMount=r(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i.getListAgency();case 1:case"end":return e.stop()}},e,n)})),i.getListAgency=r(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,n)})),i.state={loading:!1},i}return i(t,e),d(t,[{key:"render",value:function(){var e=this.state.loading;return l.a.createElement("div",null,l.a.createElement(f.d,{type:"inner",title:"T\u1ec9 l\u1ec7 chia th\u01b0\u1edfng"},l.a.createElement(f.o,{pagination:{defaultPageSize:p.a.limit,showSizeChanger:!0,pageSizeOptions:["10","20","50"]},columns:h,scroll:{x:900},loading:e})))}}]),t}(l.a.Component);t.default=y}});
//# sourceMappingURL=10.6ee59402.chunk.js.map