webpackJsonp([6],{3085:function(t,e,n){"use strict";function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function a(i,r){try{var o=e[i](r),d=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(d).then(function(t){a("next",t)},function(t){a("throw",t)});t(d)}return a("next")})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var d=n(534),l=n.n(d),c=n(0),u=n.n(c),s=n(171),f=n(535),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),h=[{title:"STT",dataIndex:"stt"},{title:"ID b\xe1o c\xe1o",dataIndex:"name"},{title:"T\xean c\xe2u h\u1ecfi",dataIndex:"email"},{title:"L\u1edbp",dataIndex:"phone"},{title:"M\xf4n",dataIndex:"address"},{title:"Gi\xe1 ch\u1ed1t",dataIndex:"stt"},{title:"Th\u1eddi gian \u0111\u0103ng",dataIndex:"name"},{title:"Th\u1eddi h\u1ea1n",dataIndex:"email"},{title:"Ng\u01b0\u1eddi h\u1ecfi",dataIndex:"phone"},{title:"S\u1ed1 ti\u1ec1n \u0111\xe3 n\u1ea1p",dataIndex:"address"},{title:"S\u1ed1 c\xe2u h\u1ecfi",dataIndex:"stt"},{title:"S\u1ed1 ng\xe0y \u0111\u0103ng k\xed",dataIndex:"name"},{title:"Ng\u01b0\u1eddi tr\u1ea3 l\u1eddi",dataIndex:"email"},{title:"S\u1ed1 ti\u1ec1n \u0111\xe3 r\xfat",dataIndex:"phone"},{title:"S\u1ed1 c\xe2u h\u1ecfi nh\u1eadn",dataIndex:"address"},{title:"S\u1ed1 ng\xe0y \u0111\u0103ng k\xed",dataIndex:"stt"},{title:"Ng\u01b0\u1eddi b\xe1o c\xe1o",dataIndex:"name"},{title:"Th\u1eddi gian",dataIndex:"email"},{title:"N\u1ed9i dung",dataIndex:"phone"},{title:"Tr\u1ea1ng th\xe1i",dataIndex:"address"},{title:"Ng\u01b0\u1eddi x\u1eed l\xfd",dataIndex:"address"},{title:"Xem chi ti\u1ebft",dataIndex:"address"}],x=function(t){function e(t){var n=this;i(this,e);var o=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.componentDidMount=a(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.getListAgency();case 1:case"end":return t.stop()}},t,n)})),o.getListAgency=a(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,n)})),o.state={loading:!1},o}return o(e,t),p(e,[{key:"render",value:function(){var t=this.state.loading;return u.a.createElement("div",null,u.a.createElement(s.d,{type:"inner",title:"B\xe1o c\xe1o"},u.a.createElement(s.o,{pagination:{defaultPageSize:f.a.limit,showSizeChanger:!0,pageSizeOptions:["10","20","50"]},columns:h,scroll:{x:900},loading:t})))}}]),e}(u.a.Component);e.default=x}});
//# sourceMappingURL=6.d5544d09.chunk.js.map