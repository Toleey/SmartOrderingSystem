(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/food2/food2"],{"07c4":function(t,e,n){"use strict";var r=n("5d29"),i=n.n(r);i.a},"07e9":function(t,e,n){"use strict";n.r(e);var r=n("76c3"),i=n("8b7f");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("07c4");var o,a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=s.exports},"5d29":function(t,e,n){},"76c3":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"8b7f":function(t,e,n){"use strict";n.r(e);var r=n("be77"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=i.a},a1e6:function(t,e,n){"use strict";(function(t){n("9a05");r(n("66fd"));var e=r(n("07e9"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},be77:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),i=(u(n("dd48")),n("26cb"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,r,i,u,o){try{var a=t[u](o),s=a.value}catch(c){return void n(c)}a.done?e(s):Promise.resolve(s).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var u=t.apply(e,n);function a(t){o(u,r,i,a,s,"next",t)}function s(t){o(u,r,i,a,s,"throw",t)}a(void 0)}))}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={data:function(){return{typeList:[],itemList:[],shoppingList:[],itemId:"",shopList:[{id:1,name:"房山店",location:"北京市房山区窦店镇"}],totalPrice:0,discountPrice:0,payList:[]}},onLoad:function(){this.getAllTypes(),this.getAllItems()},methods:c(c({},(0,i.mapMutations)(["storeListToPay"])),{},{toSettlement:function(){var e=this;this.itemList.forEach((function(t){t.num>0&&(e.payList.push(t),console.log(e.payList))})),this.storeListToPay(this.payList),t.navigateTo({url:"../settlement/settlement"})},numAdd:function(t){var e=this;this.itemList.forEach((function(n){t==n.id&&(++n.num,e.totalPrice+=n.price)}))},numMinus:function(t){var e=this;this.itemList.forEach((function(n){t==n.id&&(0==n.num?alert("再减就没有了！"):(--n.num,e.totalPrice-=n.price))}))},getAllTypes:function(){var e=this;return a(r.default.mark((function n(){var i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$myRequest({url:"/type/getAllTypes"});case 2:i=n.sent,200==i.statusCode?e.typeList=i.data:t.showToast({title:"请求有误"});case 4:case"end":return n.stop()}}),n)})))()},getAllItems:function(){var e=this;return a(r.default.mark((function n(){var i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$myRequest({url:"/item/getAllItems"});case 2:i=n.sent,200==i.statusCode?(e.itemList=i.data,console.log(e.itemList)):t.showToast({title:"请求有误"});case 4:case"end":return n.stop()}}),n)})))()},getTypeItem:function(e){var n=this;return a(r.default.mark((function i(){var u;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.$myRequest({url:"/item/getTypeItem?typeId="+e});case 2:u=r.sent,200==u.statusCode?n.itemList=u.data:t.showToast({title:"请求有误"});case 4:case"end":return r.stop()}}),i)})))()},countItem:function(t){this.shoppingList.push(t),this.countPrice(t)}}),computed:c(c({},(0,i.mapState)({})),(0,i.mapGetters)([""]))};e.default=l}).call(this,n("543d")["default"])}},[["a1e6","common/runtime","common/vendor"]]]);