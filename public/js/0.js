(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+SZM":function(t,e,a){"use strict";var s={components:{Logo:a("lrC8").a},data:function(){return{open:!1}},methods:{handleFocusOut:function(){this.open=!1}},props:{routes:Array}},n=a("KHd+"),r={components:{YayHeader:Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"flex items-center justify-between flex-wrap bg-gray-100 px-6 py-2 border-b border-blue-100 shadow-lg mb-4"},[a("div",{staticClass:"flex items-center flex-no-shrink text-white mr-6"},[a("logo",{staticClass:"h-8"})],1),t._v(" "),a("div",{staticClass:"block lg:hidden"},[a("button",{staticClass:"flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white",on:{click:function(e){t.open=!t.open}}},[a("svg",{staticClass:"h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("title",[t._v("Menu")]),t._v(" "),a("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])]),t._v(" "),a("div",{staticClass:"block w-full flex-grow lg:flex lg:items-center lg:w-auto",class:t.open?"block":"hidden",attrs:{tabindex:"0"},on:{focusout:t.handleFocusOut}},[a("div",{staticClass:"text-sm lg:flex-grow"},t._l(t.routes,(function(e){return a("inertia-link",{key:e.route,staticClass:"block mt-4 lg:inline-block lg:mt-0 mr-4",attrs:{href:t.route(e.route)}},[t._v("\n                "+t._s(e.label)+"\n            ")])})),1),t._v(" "),a("div",[a("inertia-link",{staticClass:"inline-block text-sm px-4 py-2 leading-none border rounded hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0",attrs:{href:t.route("logout"),method:"post"}},[t._v("Logout")])],1)])])}),[],!1,null,null,null).exports}},l=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative"},[a("yay-header",{attrs:{routes:t.$page.routes}}),t._v(" "),t.$page.flash.success?a("span",{staticClass:"flex rounded shadow-xlw-100 p-5 m-5 bg-blue-500  text-white font-bold"},[t._v(t._s(t.$page.flash.success))]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},"KHd+":function(t,e,a){"use strict";function s(t,e,a,s,n,r,l,i){var o,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=a,u._compiled=!0),s&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),l?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},u._ssrRegister=o):n&&(o=i?function(){n.call(this,this.$root.$options.shadowRoot)}:n),o)if(u.functional){u._injectStyles=o;var d=u.render;u.render=function(t,e){return o.call(e),d(t,e)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,o):[o]}return{exports:t,options:u}}a.d(e,"a",(function(){return s}))},Xd28:function(t,e,a){"use strict";var s={props:{title:{type:String}}},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rounded border shadow-lg m-5 p-5 bg-white"},[this.title?e("h2",{staticClass:"text-lg mb-5 font-bold text-lg text-gray-700"},[this._v("\n        "+this._s(this.title)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},Z84v:function(t,e,a){"use strict";var s={props:{loading:Boolean}},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"flex items-center",attrs:{disabled:this.loading}},[this.loading?e("div",{staticClass:"btn-spinner mr-2"}):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},lrC8:function(t,e,a){"use strict";var s={},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 668.68 153.6"}},[e("defs"),e("g",{attrs:{"data-name":"Group 9"}},[e("g",{attrs:{fill:"#333","data-name":"Group 5"}},[e("path",{attrs:{d:"M223.36 59l13.47 24.33L250.35 59h8.34l-18.04 31.17v17.35h-7.72V90.03L214.96 59z","data-name":"Path 15"}}),e("path",{attrs:{d:"M263.95 107.52L283.49 59h6.3l19.47 48.52h-8.14l-5.19-13.19h-18.72l-5.06 13.19zm22.69-39.97l-8.06 21.1h15.85z","data-name":"Path 16"}}),e("path",{attrs:{d:"M322.85 59l13.47 24.33L349.84 59h8.34l-18.04 31.17v17.35h-7.72V90.03L314.45 59z","data-name":"Path 17"}}),e("path",{attrs:{d:"M373.9 107.52V59.07h4.72v48.45z","data-name":"Path 18"}}),e("path",{attrs:{d:"M443.46 107.52V67.68l-17.7 30.82h-2.8l-17.77-30.82v39.84h-4.71V59h4.85l19 33.22 19-33.22h4.85v48.52z","data-name":"Path 19"}}),e("path",{attrs:{d:"M464.91 107.52L485.21 59h3.9l20.29 48.52h-5.13L498 92.35h-21.8l-6.22 15.17zm22.28-42.91l-9.98 23.98h19.7z","data-name":"Path 20"}}),e("path",{attrs:{d:"M561.13 100.48q-6.77 7.38-15.51 7.38a19.54 19.54 0 01-9.05-2.12 23.95 23.95 0 01-7.19-5.6 26.35 26.35 0 01-4.74-7.89 24.78 24.78 0 01-1.71-9.05 26.22 26.22 0 011.67-9.3 25.35 25.35 0 014.65-7.82 22.57 22.57 0 017.1-5.4 20.3 20.3 0 019-2.02 24.85 24.85 0 016.45.79 20.01 20.01 0 015.19 2.18 17.23 17.23 0 014 3.35 20.16 20.16 0 012.87 4.27l-3.69 2.46a15.67 15.67 0 00-6.21-6.62 17.62 17.62 0 00-8.68-2.12 15.4 15.4 0 00-7.28 1.7 17.58 17.58 0 00-5.54 4.55 20.78 20.78 0 00-3.52 6.49 23.56 23.56 0 00-1.22 7.55 21.82 21.82 0 001.4 7.79 20.8 20.8 0 003.86 6.46 18.7 18.7 0 005.78 4.4 16.01 16.01 0 007.2 1.64 17 17 0 007.93-1.95 24.12 24.12 0 007.24-6.11v-8.13H550.4v-3.69h14.83v23.85h-4.1z","data-name":"Path 21"}}),e("path",{attrs:{d:"M617.5 103.28v4.24h-32.6V59h31.98v4.24h-27.26v17.5h23.78v4.02h-23.78v18.52z","data-name":"Path 22"}}),e("path",{attrs:{d:"M664.04 68.1a14.75 14.75 0 00-5.5-3.77 20.06 20.06 0 00-7.76-1.43c-4.33 0-7.47.8-9.43 2.43a8.09 8.09 0 00-2.93 6.59 7.27 7.27 0 00.78 3.59 6.84 6.84 0 002.46 2.42 17.8 17.8 0 004.23 1.78q2.57.75 6.05 1.5a69.45 69.45 0 016.97 1.81 19.28 19.28 0 015.26 2.53 10.44 10.44 0 013.35 3.76 11.7 11.7 0 011.17 5.5 12.36 12.36 0 01-1.3 5.81 11.62 11.62 0 01-3.63 4.1 16.23 16.23 0 01-5.53 2.43 29.5 29.5 0 01-6.97.78 28.63 28.63 0 01-19.48-7.03l2.32-3.9a21.54 21.54 0 007.18 4.75 25.11 25.11 0 0010.04 1.94q5.81 0 9.1-2.08a6.97 6.97 0 003.27-6.32 7.25 7.25 0 00-.92-3.8 8 8 0 00-2.77-2.66 19.4 19.4 0 00-4.61-1.94c-1.84-.55-3.98-1.1-6.39-1.64-2.55-.6-4.78-1.21-6.7-1.85a17.45 17.45 0 01-4.82-2.4 9.4 9.4 0 01-2.93-3.44 11.2 11.2 0 01-1-4.95 13.7 13.7 0 011.27-5.99 11.86 11.86 0 013.55-4.37 16.51 16.51 0 015.47-2.66 24.95 24.95 0 017-.92 23.7 23.7 0 018.58 1.46 23.3 23.3 0 016.87 4.14z","data-name":"Path 23"}})]),e("g",{attrs:{"data-name":"Group 7"}},[e("g",{attrs:{fill:"#61bbff","data-name":"Group 6"}},[e("path",{attrs:{d:"M147.61 86.67a47.06 47.06 0 01-77.33 36.27l-21.33 21.33h133.11a4.04 4.04 0 004.04-4.04V33.1a4.04 4.04 0 00-4.04-4.03h-17.9L136.6 56.64a46.88 46.88 0 0111.02 30.03z","data-name":"Path 24"}}),e("path",{attrs:{d:"M100.3 48.2a38.26 38.26 0 00-30.02 62.24l53.8-53.8a38.08 38.08 0 00-23.78-8.44z","data-name":"Path 25"}})])]),e("g",{attrs:{fill:"#333","data-name":"Group 8",transform:"translate(-698.4 -289.55)"}},[e("path",{attrs:{d:"M855.55 438.24v4.91h19.73a13.37 13.37 0 0013.37-13.37V322.65a13.37 13.37 0 00-13.37-13.37h-43.43v4.91l4.82-.96c0-.01-.44-2.18-1.94-9.92a30.38 30.38 0 00-1.58-5.73 11.86 11.86 0 00-5.86-6.5c-2.75-1.3-5.57-1.52-8.83-1.53h-49.87a26.6 26.6 0 00-6.04.56 11.64 11.64 0 00-7.3 4.9 22.5 22.5 0 00-2.93 8.3c-1.5 7.74-1.93 9.91-1.94 9.92l4.82.96v-4.91h-43.43a13.37 13.37 0 00-13.37 13.37v107.13a13.37 13.37 0 0013.37 13.37h143.78v-9.82H711.77a3.55 3.55 0 01-3.55-3.55V322.65a3.55 3.55 0 013.55-3.54h43.43a4.91 4.91 0 004.82-3.95l1.94-9.99a21.31 21.31 0 011.03-3.87c.57-1.22.61-1.1 1.01-1.36a11.77 11.77 0 014.6-.57h49.86a17.47 17.47 0 013.8.3c1.16.36.98.34 1.37.79a14.16 14.16 0 011.45 4.71c1.5 7.76 1.94 9.97 1.95 9.99a4.9 4.9 0 004.82 3.94h43.43a3.55 3.55 0 013.55 3.55v107.13a3.55 3.55 0 01-3.55 3.55h-19.73z","data-name":"Path 26"}}),e("path",{attrs:{d:"M836.41 376.22H832a38.46 38.46 0 11-11.27-27.2 38.33 38.33 0 0111.27 27.2h8.84a47.3 47.3 0 10-47.3 47.3 47.3 47.3 0 0047.3-47.3z","data-name":"Path 27"}}),e("path",{attrs:{d:"M857.77 311.97a4.91 4.91 0 00-6.95 0l-30.45 30.45a4.73 4.73 0 00-.63.96 50.69 50.69 0 015.83 4.91l1.14 1.48a4.46 4.46 0 00.61-.4l30.45-30.45a4.91 4.91 0 000-6.95z","data-name":"Path 28"}}),e("path",{attrs:{d:"M734.63 441.37l31.7-31.7a4.42 4.42 0 10-6.26-6.26l-31.7 31.7a4.42 4.42 0 006.26 6.26","data-name":"Path 29"}}),e("circle",{attrs:{cx:"5.22",cy:"5.22",r:"5.22","data-name":"Ellipse 1",transform:"translate(718.7 331.91)"}}),e("path",{attrs:{d:"M843.95 305.2h27.63a4.91 4.91 0 000-9.82h-27.63a4.91 4.91 0 000 9.82","data-name":"Path 30"}})])])])}),[],!1,null,null,null);e.a=r.exports},"pF+r":function(t,e,a){"use strict";var s={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:[String,Array]},label:String,errors:{type:Array,default:function(){return[]}}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.label?a("label",{staticClass:"form-label",attrs:{for:t.id}},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),a("input",t._b({ref:"input",staticClass:"form-input",class:{error:t.errors.length},attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t.errors.length?a("div",{staticClass:"form-error"},[t._v(t._s(t.errors[0]))]):t._e()])}),[],!1,null,null,null);e.a=r.exports},z2RF:function(t,e,a){"use strict";a.r(e);var s=a("+SZM"),n=a("Xd28"),r=a("pF+r"),l=a("Z84v"),i={layout:s.a,metaInfo:{title:"Index"},components:{Card:n.a,TextInput:r.a,LoadingButton:l.a},data:function(){return{sending:!1,form:{documents:[]}}},methods:{submit:function(){for(var t=this,e=new FormData,a=0;a<this.$refs.documents.files.length;a++){var s=this.$refs.documents.files[a];e.append("documents["+a+"]",s)}this.sending=!0,this.$inertia.post("/kyc",e).then((function(){t.sending=!1,t.$refs.documents.value=null}))}}},o=a("KHd+"),u=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full flex"},[a("card",{staticClass:"w-full",attrs:{title:"Please verify your identity"}},[a("p",{staticClass:"mb-5"},[t._v("\n            Before processing your payout and any other data modification\n            requests we require that you verify your identity.\n        ")]),t._v(" "),a("h3",{staticClass:"font-bold mb-2"},[t._v("\n            We require the following documents to be submitted:\n            "),a("sup",{staticClass:"font-bold text-red-500"},[t._v("1")])]),t._v(" "),a("ul",{staticClass:"list-inside list-disc mb-5"},[a("li",[t._v("\n                Proof of identity, only a valid passport or id card is\n                acceptable as proof of identity.\n            ")]),t._v(" "),a("li",[t._v("Completed w8-ben form")])]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",[a("label",{staticClass:"form-label",attrs:{for:"documents"}},[t._v("Documents:")]),t._v(" "),a("input",{ref:"documents",staticClass:"form-input",class:{error:Object.keys(t.$page.errors).length},attrs:{id:"documents",type:"file",multiple:"multiple"}}),t._v(" "),Object.keys(t.$page.errors).length?a("div",{staticClass:"form-error"},[t._v("\n                    "+t._s(t.$page.errors[Object.keys(t.$page.errors)][0])+"\n                ")]):t._e()]),t._v(" "),a("div",{staticClass:"px-10 py-5 flex justify-between items-center"},[a("loading-button",{staticClass:"btn-blue",attrs:{loading:t.sending,type:"submit"}},[t._v("Upload")])],1)]),t._v(" "),a("p",{staticClass:"text-xs"},[a("sup",{staticClass:"font-bold text-red-500"},[t._v("1")]),t._v(" - We may ask you to\n            submit additional documents.\n        ")])])],1)}),[],!1,null,null,null);e.default=u.exports}}]);