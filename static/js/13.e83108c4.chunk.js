webpackJsonp([13],{3088:function(t,e,n){"use strict";function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function a(i,r){try{var o=e[i](r),l=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(l).then(function(t){a("next",t)},function(t){a("throw",t)});t(l)}return a("next")})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(534),c=n.n(l),s=n(0),u=n.n(s),d=n(171),p=n(535),f=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),h=[{title:"Th\xf4ng tin",dataIndex:"stt"},{title:"C\xe2u h\u1ecfi",dataIndex:"stt"},{title:"Tr\u1ea3 l\u1eddi",dataIndex:"stt"}],m=[{title:"STT",dataIndex:"stt"},{title:"T\xean ng\u01b0\u1eddi",dataIndex:"stt"},{title:"Th\u1eddi gian \u0111\u1eb7t",dataIndex:"stt"},{title:"Gi\xe1 \u0111\u1eb7t",dataIndex:"stt"},{title:"Duy tr\xec tr\u01b0\u1edbc h\u1ea1n",dataIndex:"stt"},{title:"Rate",dataIndex:"stt"},{title:"H\u1ea1ng",dataIndex:"stt"},{title:"Tr\u1ea1ng th\xe1i",dataIndex:"stt"}],g=[{title:"Th\xf4ng tin",dataIndex:"stt"},{title:"C\xe2u h\u1ecfi",dataIndex:"stt"},{title:"Tr\u1ea3 l\u1eddi",dataIndex:"stt"},{title:"Tr\u1ea3 l\u1eddi",dataIndex:"stt"}],y=[{key:1,stt:1}],b=function(t){function e(t){var n=this;i(this,e);var o=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.componentDidMount=a(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.getListAgency();case 1:case"end":return t.stop()}},t,n)})),o.getListAgency=a(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,n)})),o.state={loading:!1},o}return o(e,t),f(e,[{key:"render",value:function(){var t=this.state.loading;return u.a.createElement("div",null,u.a.createElement(d.d,{type:"inner",className:"mb-5",title:"Xem chi ti\u1ebft C\xe2u h\u1ecfi"},u.a.createElement(d.p,{className:"mb-5",bordered:!0,pagination:!1,dataSource:y,columns:h,scroll:{x:900},loading:t}),u.a.createElement(d.d,{type:"inner",className:"mb-5",title:"N\u1ed9i dung c\xe2u h\u1ecfi"}),u.a.createElement(d.d,{type:"inner",className:"mb-5",title:"N\u1ed9i dung L\u1eddi gi\u1ea3i"})),u.a.createElement(d.d,{type:"inner",className:"mb-5",title:"Danh s\xe1ch \u0111\u1ec1 xu\u1ea5t"},u.a.createElement(d.p,{bordered:!0,pagination:{defaultPageSize:p.a.limit,showSizeChanger:!0,pageSizeOptions:["10","20","50"]},dataSource:y,columns:m,scroll:{x:900},loading:t})),u.a.createElement(d.d,{type:"inner",title:"N\u1ed9i dung Tin nh\u1eafn"},u.a.createElement(d.p,{bordered:!0,pagination:{defaultPageSize:p.a.limit,showSizeChanger:!0,pageSizeOptions:["10","20","50"]},dataSource:y,columns:g,scroll:{x:900},loading:t})))}}]),e}(u.a.Component);e.default=b}});
//# sourceMappingURL=13.e83108c4.chunk.js.map