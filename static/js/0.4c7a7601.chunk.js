webpackJsonp([0],{3099:function(t,e,n){"use strict";function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function a(i,r){try{var o=e[i](r),l=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(l).then(function(t){a("next",t)},function(t){a("throw",t)});t(l)}return a("next")})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(534),d=n.n(l),s=n(0),c=n.n(s),u=n(171),f=n(535),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),h=u.q.TabPane,x=[{title:"",dataIndex:"stt"},{title:"To\xe1n",dataIndex:"stt"},{title:"V\u1eadt l\xfd",dataIndex:"stt"},{title:"H\xf3a h\u1ecdc",dataIndex:"stt"},{title:"Sinh h\u1ecdc",dataIndex:"stt"},{title:"Ti\u1ebfng Anh",dataIndex:"stt"},{title:"KHXH",dataIndex:"stt"},{title:"Kh\xe1c",dataIndex:"stt"},{title:"T\u1ed5ngs\u1ed1",dataIndex:"stt"},{title:"%",dataIndex:"stt"},{title:"T\u1ed5ng t\u1eeb 1-11-2020",dataIndex:"stt"},{title:"% t\u1eeb 1-11",dataIndex:"stt"},{title:"H\xf4m nay",dataIndex:"stt"},{title:"% H\xf4m nay",dataIndex:"stt"}],g=[{title:"Th\u1eddi gian \u0111\u0103ng",dataIndex:"stt"},{title:"0:00 \u2013 1:00",dataIndex:"stt"},{title:"1:00 \u2013 2:00",dataIndex:"stt"},{title:"2:00 \u2013 3:00",dataIndex:"stt"},{title:"3:00 \u2013 4:00",dataIndex:"stt"},{title:"4:00 \u2013 5:00",dataIndex:"stt"},{title:"5:00 \u2013 6:00",dataIndex:"stt"},{title:"6:00 \u2013 7:00",dataIndex:"stt"},{title:"7:00 \u2013 8:00",dataIndex:"stt"},{title:"8:00 \u2013 9:00",dataIndex:"stt"},{title:"9:00 \u2013 10:00",dataIndex:"stt"},{title:"10:00 \u2013 11:00",dataIndex:"stt"},{title:"11:00 \u2013 12:00",dataIndex:"stt"},{title:"12:00 \u2013 13:00",dataIndex:"stt"}],I=[{key:1,stt:1}],y=function(t){function e(t){var n=this;i(this,e);var o=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.componentDidMount=a(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.getListAgency();case 1:case"end":return t.stop()}},t,n)})),o.getListAgency=a(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,n)})),o.state={loading:!1},o}return o(e,t),p(e,[{key:"render",value:function(){var t=this.state.loading;return c.a.createElement("div",null,c.a.createElement(u.d,{type:"inner",title:"S\u1ed1 li\u1ec7u c\xe2u h\u1ecfi"},c.a.createElement(u.q,{defaultActiveKey:"1"},c.a.createElement(h,{tab:"Th\xf4ng tin c\xe2u h\u1ecfi theo M\xf4n-L\u1edbp",key:"1"},c.a.createElement(u.p,{bordered:!0,pagination:{defaultPageSize:f.a.limit,showSizeChanger:!0,pageSizeOptions:["10","20","50"]},columns:x,dataSource:I,scroll:{x:900},loading:t})),c.a.createElement(h,{tab:"Th\xf4ng tin c\xe2u h\u1ecfi theo Th\u1eddi gian \u0111\u0103ng- Th\u1eddi h\u1ea1n - Tr\u1ea1ng th\xe1i",key:"2"},c.a.createElement(u.p,{bordered:!0,pagination:{defaultPageSize:f.a.limit,showSizeChanger:!0,pageSizeOptions:["10","20","50"]},columns:g,dataSource:I,scroll:{x:900},loading:t})))))}}]),e}(c.a.Component);e.default=y}});
//# sourceMappingURL=0.4c7a7601.chunk.js.map