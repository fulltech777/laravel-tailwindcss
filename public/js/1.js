(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+SZM":function(t,e,s){"use strict";var a={components:{Logo:s("lrC8").a},data:function(){return{open:!1}},methods:{handleFocusOut:function(){this.open=!1}},props:{routes:Array}},r=s("KHd+"),l={components:{YayHeader:Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"flex items-center justify-between flex-wrap bg-gray-100 px-6 py-2 border-b border-blue-100 shadow-lg mb-4"},[s("div",{staticClass:"flex items-center flex-no-shrink text-white mr-6"},[s("logo",{staticClass:"h-8"})],1),t._v(" "),s("div",{staticClass:"block lg:hidden"},[s("button",{staticClass:"flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white",on:{click:function(e){t.open=!t.open}}},[s("svg",{staticClass:"h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("title",[t._v("Menu")]),t._v(" "),s("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])]),t._v(" "),s("div",{staticClass:"block w-full flex-grow lg:flex lg:items-center lg:w-auto",class:t.open?"block":"hidden",attrs:{tabindex:"0"},on:{focusout:t.handleFocusOut}},[s("div",{staticClass:"text-sm lg:flex-grow"},t._l(t.routes,(function(e){return s("inertia-link",{key:e.route,staticClass:"block mt-4 lg:inline-block lg:mt-0 mr-4",attrs:{href:t.route(e.route)}},[t._v("\n                "+t._s(e.label)+"\n            ")])})),1),t._v(" "),s("div",[s("inertia-link",{staticClass:"inline-block text-sm px-4 py-2 leading-none border rounded hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0",attrs:{href:t.route("logout"),method:"post"}},[t._v("Logout")])],1)])])}),[],!1,null,null,null).exports}},i=Object(r.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative"},[s("yay-header",{attrs:{routes:t.$page.routes}}),t._v(" "),t.$page.flash.success?s("span",{staticClass:"flex rounded shadow-xlw-100 p-5 m-5 bg-blue-500  text-white font-bold"},[t._v(t._s(t.$page.flash.success))]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},0:function(t,e){},DORU:function(t,e,s){"use strict";var a={props:{links:Array}},r=s("KHd+"),l=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-6 -mb-1 flex flex-wrap"},[t._l(t.links,(function(e,a){return[null===e.url?s("div",{key:a,staticClass:"mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400",class:{"ml-auto":"Next"===e.label}},[t._v("\n            "+t._s(e.label)+"\n        ")]):s("inertia-link",{key:a,staticClass:"mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500",class:{"bg-white":e.active,"ml-auto":"Next"===e.label},attrs:{href:e.url}},[t._v(t._s(e.label))])]}))],2)}),[],!1,null,null,null);e.a=l.exports},Xd28:function(t,e,s){"use strict";var a={props:{title:{type:String}}},r=s("KHd+"),l=Object(r.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rounded border shadow-lg m-5 p-5 bg-white"},[this.title?e("h2",{staticClass:"text-lg mb-5 font-bold text-lg text-gray-700"},[this._v("\n        "+this._s(this.title)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},Z84v:function(t,e,s){"use strict";var a={props:{loading:Boolean}},r=s("KHd+"),l=Object(r.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"flex items-center",attrs:{disabled:this.loading}},[this.loading?e("div",{staticClass:"btn-spinner mr-2"}):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},lrC8:function(t,e,s){"use strict";var a={},r=s("KHd+"),l=Object(r.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 668.68 153.6"}},[e("defs"),e("g",{attrs:{"data-name":"Group 9"}},[e("g",{attrs:{fill:"#333","data-name":"Group 5"}},[e("path",{attrs:{d:"M223.36 59l13.47 24.33L250.35 59h8.34l-18.04 31.17v17.35h-7.72V90.03L214.96 59z","data-name":"Path 15"}}),e("path",{attrs:{d:"M263.95 107.52L283.49 59h6.3l19.47 48.52h-8.14l-5.19-13.19h-18.72l-5.06 13.19zm22.69-39.97l-8.06 21.1h15.85z","data-name":"Path 16"}}),e("path",{attrs:{d:"M322.85 59l13.47 24.33L349.84 59h8.34l-18.04 31.17v17.35h-7.72V90.03L314.45 59z","data-name":"Path 17"}}),e("path",{attrs:{d:"M373.9 107.52V59.07h4.72v48.45z","data-name":"Path 18"}}),e("path",{attrs:{d:"M443.46 107.52V67.68l-17.7 30.82h-2.8l-17.77-30.82v39.84h-4.71V59h4.85l19 33.22 19-33.22h4.85v48.52z","data-name":"Path 19"}}),e("path",{attrs:{d:"M464.91 107.52L485.21 59h3.9l20.29 48.52h-5.13L498 92.35h-21.8l-6.22 15.17zm22.28-42.91l-9.98 23.98h19.7z","data-name":"Path 20"}}),e("path",{attrs:{d:"M561.13 100.48q-6.77 7.38-15.51 7.38a19.54 19.54 0 01-9.05-2.12 23.95 23.95 0 01-7.19-5.6 26.35 26.35 0 01-4.74-7.89 24.78 24.78 0 01-1.71-9.05 26.22 26.22 0 011.67-9.3 25.35 25.35 0 014.65-7.82 22.57 22.57 0 017.1-5.4 20.3 20.3 0 019-2.02 24.85 24.85 0 016.45.79 20.01 20.01 0 015.19 2.18 17.23 17.23 0 014 3.35 20.16 20.16 0 012.87 4.27l-3.69 2.46a15.67 15.67 0 00-6.21-6.62 17.62 17.62 0 00-8.68-2.12 15.4 15.4 0 00-7.28 1.7 17.58 17.58 0 00-5.54 4.55 20.78 20.78 0 00-3.52 6.49 23.56 23.56 0 00-1.22 7.55 21.82 21.82 0 001.4 7.79 20.8 20.8 0 003.86 6.46 18.7 18.7 0 005.78 4.4 16.01 16.01 0 007.2 1.64 17 17 0 007.93-1.95 24.12 24.12 0 007.24-6.11v-8.13H550.4v-3.69h14.83v23.85h-4.1z","data-name":"Path 21"}}),e("path",{attrs:{d:"M617.5 103.28v4.24h-32.6V59h31.98v4.24h-27.26v17.5h23.78v4.02h-23.78v18.52z","data-name":"Path 22"}}),e("path",{attrs:{d:"M664.04 68.1a14.75 14.75 0 00-5.5-3.77 20.06 20.06 0 00-7.76-1.43c-4.33 0-7.47.8-9.43 2.43a8.09 8.09 0 00-2.93 6.59 7.27 7.27 0 00.78 3.59 6.84 6.84 0 002.46 2.42 17.8 17.8 0 004.23 1.78q2.57.75 6.05 1.5a69.45 69.45 0 016.97 1.81 19.28 19.28 0 015.26 2.53 10.44 10.44 0 013.35 3.76 11.7 11.7 0 011.17 5.5 12.36 12.36 0 01-1.3 5.81 11.62 11.62 0 01-3.63 4.1 16.23 16.23 0 01-5.53 2.43 29.5 29.5 0 01-6.97.78 28.63 28.63 0 01-19.48-7.03l2.32-3.9a21.54 21.54 0 007.18 4.75 25.11 25.11 0 0010.04 1.94q5.81 0 9.1-2.08a6.97 6.97 0 003.27-6.32 7.25 7.25 0 00-.92-3.8 8 8 0 00-2.77-2.66 19.4 19.4 0 00-4.61-1.94c-1.84-.55-3.98-1.1-6.39-1.64-2.55-.6-4.78-1.21-6.7-1.85a17.45 17.45 0 01-4.82-2.4 9.4 9.4 0 01-2.93-3.44 11.2 11.2 0 01-1-4.95 13.7 13.7 0 011.27-5.99 11.86 11.86 0 013.55-4.37 16.51 16.51 0 015.47-2.66 24.95 24.95 0 017-.92 23.7 23.7 0 018.58 1.46 23.3 23.3 0 016.87 4.14z","data-name":"Path 23"}})]),e("g",{attrs:{"data-name":"Group 7"}},[e("g",{attrs:{fill:"#61bbff","data-name":"Group 6"}},[e("path",{attrs:{d:"M147.61 86.67a47.06 47.06 0 01-77.33 36.27l-21.33 21.33h133.11a4.04 4.04 0 004.04-4.04V33.1a4.04 4.04 0 00-4.04-4.03h-17.9L136.6 56.64a46.88 46.88 0 0111.02 30.03z","data-name":"Path 24"}}),e("path",{attrs:{d:"M100.3 48.2a38.26 38.26 0 00-30.02 62.24l53.8-53.8a38.08 38.08 0 00-23.78-8.44z","data-name":"Path 25"}})])]),e("g",{attrs:{fill:"#333","data-name":"Group 8",transform:"translate(-698.4 -289.55)"}},[e("path",{attrs:{d:"M855.55 438.24v4.91h19.73a13.37 13.37 0 0013.37-13.37V322.65a13.37 13.37 0 00-13.37-13.37h-43.43v4.91l4.82-.96c0-.01-.44-2.18-1.94-9.92a30.38 30.38 0 00-1.58-5.73 11.86 11.86 0 00-5.86-6.5c-2.75-1.3-5.57-1.52-8.83-1.53h-49.87a26.6 26.6 0 00-6.04.56 11.64 11.64 0 00-7.3 4.9 22.5 22.5 0 00-2.93 8.3c-1.5 7.74-1.93 9.91-1.94 9.92l4.82.96v-4.91h-43.43a13.37 13.37 0 00-13.37 13.37v107.13a13.37 13.37 0 0013.37 13.37h143.78v-9.82H711.77a3.55 3.55 0 01-3.55-3.55V322.65a3.55 3.55 0 013.55-3.54h43.43a4.91 4.91 0 004.82-3.95l1.94-9.99a21.31 21.31 0 011.03-3.87c.57-1.22.61-1.1 1.01-1.36a11.77 11.77 0 014.6-.57h49.86a17.47 17.47 0 013.8.3c1.16.36.98.34 1.37.79a14.16 14.16 0 011.45 4.71c1.5 7.76 1.94 9.97 1.95 9.99a4.9 4.9 0 004.82 3.94h43.43a3.55 3.55 0 013.55 3.55v107.13a3.55 3.55 0 01-3.55 3.55h-19.73z","data-name":"Path 26"}}),e("path",{attrs:{d:"M836.41 376.22H832a38.46 38.46 0 11-11.27-27.2 38.33 38.33 0 0111.27 27.2h8.84a47.3 47.3 0 10-47.3 47.3 47.3 47.3 0 0047.3-47.3z","data-name":"Path 27"}}),e("path",{attrs:{d:"M857.77 311.97a4.91 4.91 0 00-6.95 0l-30.45 30.45a4.73 4.73 0 00-.63.96 50.69 50.69 0 015.83 4.91l1.14 1.48a4.46 4.46 0 00.61-.4l30.45-30.45a4.91 4.91 0 000-6.95z","data-name":"Path 28"}}),e("path",{attrs:{d:"M734.63 441.37l31.7-31.7a4.42 4.42 0 10-6.26-6.26l-31.7 31.7a4.42 4.42 0 006.26 6.26","data-name":"Path 29"}}),e("circle",{attrs:{cx:"5.22",cy:"5.22",r:"5.22","data-name":"Ellipse 1",transform:"translate(718.7 331.91)"}}),e("path",{attrs:{d:"M843.95 305.2h27.63a4.91 4.91 0 000-9.82h-27.63a4.91 4.91 0 000 9.82","data-name":"Path 30"}})])])])}),[],!1,null,null,null);e.a=l.exports},"pF+r":function(t,e,s){"use strict";var a={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:[String,Array]},label:String,errors:{type:Array,default:function(){return[]}}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},r=s("KHd+"),l=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.label?s("label",{staticClass:"form-label",attrs:{for:t.id}},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),s("input",t._b({ref:"input",staticClass:"form-input",class:{error:t.errors.length},attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t.errors.length?s("div",{staticClass:"form-error"},[t._v(t._s(t.errors[0]))]):t._e()])}),[],!1,null,null,null);e.a=l.exports},uuSo:function(t,e,s){"use strict";s.r(e);var a=s("+SZM"),r=s("Xd28"),l=s("DORU"),i={props:{video:{type:Object,default:function(){return{}}},displayTitle:{type:Boolean,default:!1}}},n=s("KHd+"),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.video?s("table",{staticClass:"flex table table-auto w-full text-xs"},[t.displayTitle?s("tr",[s("td",[t._v("Filename")]),t._v(" "),s("td",[s("strong",[t._v(t._s(t.video.original_name))])])]):t._e(),t._v(" "),s("tr",[s("td",[t._v("Duration")]),t._v(" "),s("td",[t._v(t._s(t.video.duration))])]),t._v(" "),s("tr",[s("td",[t._v("Framerate")]),t._v(" "),s("td",[t._v("\n            "+t._s(Math.round(t.video.framerate))+"\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Dimensions")]),t._v(" "),s("td",[t._v(t._s(t.video.width)+"x"+t._s(t.video.height))])]),t._v(" "),s("tr",[s("td",[t._v("Codec")]),t._v(" "),s("td",[t._v("\n            "+t._s(t.video.codec)+"\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Uploaded")]),t._v(" "),s("td",[t._v("\n            "+t._s(t.video.uploaded_at)+"\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("4K")]),t._v(" "),s("td",[t._v("\n            "+t._s(1==t.video["4k"]?"Yes":"No")+"\n        ")])]),t._v(" "),s("tr",[s("td",[t._v("Size")]),t._v(" "),s("td",[t._v(t._s(t.video.size)+" MB")])])]):t._e()}),[],!1,null,null,null).exports,d=s("8OJ3"),c={name:"VideoPlayer",props:{poster:{type:String,required:!0},src:{type:String,required:!0},autoplay:{type:Boolean,default:!0},controls:{type:Boolean,default:!0}},watch:{src:function(t,e){t!=e&&this.player&&(this.player.src({type:"video/mp4",src:t}),this.player.poster(this.poster))}},data:function(){return{options:{poster:this.poster,autoplay:!0,muted:!0,controls:this.controls,loop:!0,fluid:!0,sources:[{src:this.src,type:"video/mp4"}]},player:null,preload:"metadata"}},mounted:function(){this.player=Object(d.a)(this.$refs.videoPlayer,this.options,(function(){}))},beforeDestroy:function(){this.player&&this.player.dispose()}},u=Object(n.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("video",{ref:"videoPlayer",staticClass:"video-js"})}),[],!1,null,null,null).exports,v=s("C3Jg"),h=s("pF+r"),p={components:{LoadingButton:s("Z84v").a,VideoMetainfo:o,VideoPlayer:u,TagsInput:v.a,TextInput:h.a},props:["selected"],data:function(){return{sending:!1}},computed:{buttonTitle:function(){return console.log(this.selected),this.selected.status<=1?"Submit For Review":"Update"}},methods:{closeSelected:function(){this.$emit("close")},submit:function(){var t=this;this.sending=!0,this.$inertia.post(this.route("video.store"),this.selected).then((function(e){t.sending=!1,0==Object.keys(t.$page.errors).length&&t.closeSelected()})).catch((function(t){console.log(t)}))}}},f={components:{VideoMetainfo:o,EditForm:Object(n.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.selected?s("div",{staticClass:"fixed min-h-screen md:min-h-0 md:max-h-screen bottom-0 top-0 right-0 w-full md:w-2/4 bg-white shadow-2xl p-5 md:my-12 z-50 block"},[s("button",{staticClass:"md:absolute rounded-full bg-blue-500 hover:bg-blue-800 text-white md:-ml-5 md:-mt-5 top-0 left-0 shadow-xl hover:shadow-lg",on:{click:t.closeSelected}},[s("svg",{staticClass:"h-10 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),s("path",{attrs:{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}})])]),t._v(" "),s("div",{staticClass:"overflow-y-auto md:max-h-full"},[s("div",{staticClass:"border-b py-2"},[t.selected?s("video-player",{attrs:{src:t.selected.preview,poster:t.selected.thumbnail,id:t.selected.file_uuid}}):t._e()],1),t._v(" "),s("div",{staticClass:"border-b py-2"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("text-input",{staticClass:"mt-5",attrs:{errors:t.$page.errors.title,label:"Title",type:"text",autofocus:"",placeholder:"Video Title",autocapitalize:"off"},model:{value:t.selected.title,callback:function(e){t.$set(t.selected,"title",e)},expression:"selected.title"}}),t._v(" "),s("div",{staticClass:"mt-5"},[s("label",{staticClass:"form-label",attrs:{for:"description"}},[t._v("Description:")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.selected.description,expression:"selected.description"}],staticClass:"form-input",class:{error:t.$page.errors.description},attrs:{id:"description",placeholder:"Add video description."},domProps:{value:t.selected.description},on:{input:function(e){e.target.composing||t.$set(t.selected,"description",e.target.value)}}}),t._v(" "),t.$page.errors.description?s("div",{staticClass:"form-error"},[t._v("\n                        "+t._s(t.$page.errors.description[0])+"\n                    ")]):t._e()]),t._v(" "),s("div",{staticClass:"mt-5"},[s("label",{staticClass:"form-label",attrs:{for:"description"}},[t._v("Keywords:")]),t._v(" "),s("tags-input",{class:{error:t.$page.errors.keywords},attrs:{"element-id":"keywords",placeholder:"Add Keywords",limit:50,"add-tags-on-blur":"","add-tags-on-comma":""},model:{value:t.selected.keywords,callback:function(e){t.$set(t.selected,"keywords",e)},expression:"selected.keywords"}}),t._v(" "),t.$page.errors.keywords?s("div",{staticClass:"form-error"},[t._v("\n                        "+t._s(t.$page.errors.keywords[0])+"\n                    ")]):t._e()],1),t._v(" "),s("loading-button",{staticClass:"btn btn-primary",attrs:{loading:t.sending,type:"submit",disabled:t.sending}},[t._v(t._s(t.buttonTitle))])],1)]),t._v(" "),s("div",{staticClass:"border-b py-2"},[s("h3",{staticClass:"font-bold mb-2"},[t._v("Video MetaInformation")]),t._v(" "),s("video-metainfo",{attrs:{video:t.selected,"display-title":""}})],1)])]):t._e()}),[],!1,null,null,null).exports},data:function(){return{current:null}},props:{videos:{type:Object},status:{type:Object},currentStatus:{default:null}},methods:{setCurrent:function(t){this.current=t}}},m=Object(n.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex"},[s("div",[s("ul",{staticClass:"flex flex-wrap text-xs mb-5 mt-2 items-center uppercase"},[s("li",{staticClass:"mr-1 text-gray-600"},[t._v("\n                Filter By Status:\n            ")]),t._v(" "),s("li",{staticClass:"m-1"},[s("inertia-link",{staticClass:"btn btn-primary-outline",class:{active:null==t.currentStatus},attrs:{href:t.route("video.show")}},[t._v("All")])],1),t._v(" "),t._l(t.status,(function(e,a,r){return s("li",{key:a,staticClass:"mx-1"},[s("inertia-link",{staticClass:"btn btn-primary-outline",class:{active:t.currentStatus==a},attrs:{href:t.route("video.show",{status:a})}},[t._v(t._s(e))])],1)}))],2),t._v(" "),s("table",{staticClass:"table table-fixed flex w-full"},[t._m(0),t._v(" "),s("tbody",t._l(t.videos.data,(function(e){return s("tr",{key:e.id,staticClass:"border-b"},[s("td",{staticClass:"p-2"},[s("img",{attrs:{src:e.thumbnail}})]),t._v(" "),s("td",{staticClass:"p-2"},[t._v("\n                        "+t._s(e.title?e.title:e.original_name)+"\n                        "),e.description?s("small",{staticClass:"text-xs block"},[t._v(t._s(e.description))]):t._e()]),t._v(" "),s("td",{staticClass:"p-2"}),t._v(" "),s("td",{staticClass:"p-2"},[s("video-metainfo",{attrs:{video:e}})],1),t._v(" "),s("td",{staticClass:"p-2"},[s("span",{staticClass:"rounded text-xs text-gray-700 border-gray-700 border py-1 px-2"},[t._v(t._s(t.status[e.status]))])]),t._v(" "),s("td",{staticClass:"p-2"},[s("button",{staticClass:"btn btn-primary",on:{click:function(s){return t.setCurrent(e)}}},[t._v("\n                            View / Edit\n                        ")])])])})),0)])]),t._v(" "),t.current?s("edit-form",{attrs:{selected:t.current},on:{close:function(e){t.current=null}}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("th",{staticClass:"w-1/12"},[t._v("Media")]),t._v(" "),s("th",[t._v("Title")]),t._v(" "),s("th",[t._v("Releases")]),t._v(" "),s("th",[t._v("Metadata")]),t._v(" "),s("th",[t._v("Status")]),t._v(" "),s("th")])}],!1,null,null,null).exports,_={layout:a.a,metaInfo:{title:"Index"},components:{Card:r.a,Pagination:l.a,TableList:m},props:{videos:Object,status:Object,currentStatus:String},data:function(){return{sending:!1,form:{documents:[]},selected:null}},methods:{submit:function(){for(var t=this,e=new FormData,s=0;s<this.$refs.documents.files.length;s++){var a=this.$refs.documents.files[s];e.append("documents["+s+"]",a)}this.sending=!0,this.$inertia.post("/kyc",e).then((function(){t.sending=!1,t.$refs.documents.value=null}))}}},b=Object(n.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-start"},[e("card",{class:this.selected?"w-2/4":"w-full",attrs:{title:"Videos"}},[e("table-list",{attrs:{videos:this.videos,status:this.status,currentStatus:this.currentStatus}}),this._v(" "),e("Pagination",{attrs:{links:this.videos.links}})],1)],1)}),[],!1,null,null,null);e.default=b.exports}}]);