(function(e){function t(t){for(var o,r,i=t[0],l=t[1],s=t[2],p=0,b=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==c[l]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},c={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vuestagram/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a88":function(e,t,n){"use strict";n("db78")},"36eb":function(e,t,n){"use strict";n("4867")},"37d0":function(e,t,n){},4867:function(e,t,n){},"4fa3":function(e,t,n){},"511d":function(e,t,n){"use strict";n("37d0")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c=n("cf05"),a=n.n(c),r={class:"header"},i={class:"header-button-left"},l={class:"header-button-right"},s=Object(o["f"])("img",{src:a.a,class:"logo"},null,-1),u={key:1,class:"footer"},p={class:"footer-button-plus"},b=Object(o["f"])("label",{for:"file",class:"input-plus"},"+",-1);function d(e,t,n,c,a,d){var f=this,j=Object(o["p"])("Container");return Object(o["l"])(),Object(o["e"])(o["a"],null,[Object(o["f"])("div",r,[Object(o["f"])("ul",i,[1==this.containerStep?(Object(o["l"])(),Object(o["e"])("li",{key:0,onClick:t[0]||(t[0]=function(e){f.containerStep=0})},"Cancel")):Object(o["d"])("",!0),2==this.containerStep?(Object(o["l"])(),Object(o["e"])("li",{key:1,onClick:t[1]||(t[1]=function(e){f.containerStep=1})},"Cancel")):Object(o["d"])("",!0)]),Object(o["f"])("ul",l,[1==this.containerStep?(Object(o["l"])(),Object(o["e"])("li",{key:0,onClick:t[2]||(t[2]=function(e){f.containerStep=2})},"Next")):Object(o["d"])("",!0),2==this.containerStep?(Object(o["l"])(),Object(o["e"])("li",{key:1,onClick:t[3]||(t[3]=function(){return d.publish&&d.publish.apply(d,arguments)})},"발행")):Object(o["d"])("",!0)]),s]),Object(o["h"])(j,{postData:a.postData,containerStep:a.containerStep,uploadImageUrl:a.uploadImageUrl,selectedFilter:a.selectedFilter,onGetText:t[4]||(t[4]=function(e){return f.postText=e})},null,8,["postData","containerStep","uploadImageUrl","selectedFilter"]),0==this.containerStep?(Object(o["l"])(),Object(o["e"])("button",{key:0,type:"button",class:"view-more-btn",onClick:t[5]||(t[5]=function(e){return d.viewMore()})},"더보기")):Object(o["d"])("",!0),0==this.containerStep?(Object(o["l"])(),Object(o["e"])("div",u,[Object(o["f"])("ul",p,[Object(o["f"])("input",{onChange:t[6]||(t[6]=function(){return d.uploadImage&&d.uploadImage.apply(d,arguments)}),type:"file",id:"file",class:"inputfile"},null,32),b])])):Object(o["d"])("",!0)],64)}var f=n("5530"),j=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("b0c0"),{class:"container"}),m={key:0},g={key:1},O={class:"filters"},h={key:2},v={class:"write"};function k(e,t,n,c,a,r){var i=Object(o["p"])("Post"),l=Object(o["p"])("FilterBox");return Object(o["l"])(),Object(o["e"])("div",j,[0==n.containerStep?(Object(o["l"])(),Object(o["e"])("div",m,[(Object(o["l"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(n.postData,(function(e,t){return Object(o["l"])(),Object(o["c"])(i,{key:t,postData:n.postData[t],i:t},null,8,["postData","i"])})),128))])):Object(o["d"])("",!0),1==n.containerStep?(Object(o["l"])(),Object(o["e"])("div",g,[Object(o["f"])("div",{class:Object(o["j"])("upload-image ".concat(a.selectedFilter)),style:Object(o["k"])({backgroundImage:"url(".concat(n.uploadImageUrl,")")})},null,6),Object(o["f"])("div",O,[(Object(o["l"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(a.filters,(function(e,t){return Object(o["l"])(),Object(o["c"])(l,{uploadImageUrl:n.uploadImageUrl,key:t,filter:e},{default:Object(o["s"])((function(){return[Object(o["g"])(Object(o["q"])(e),1)]})),_:2},1032,["uploadImageUrl","filter"])})),128))])])):Object(o["d"])("",!0),2==n.containerStep?(Object(o["l"])(),Object(o["e"])("div",h,[Object(o["f"])("div",{class:Object(o["j"])("upload-image ".concat(a.selectedFilter)),style:Object(o["k"])({backgroundImage:"url(".concat(n.uploadImageUrl,")")})},null,6),Object(o["f"])("div",v,[Object(o["f"])("textarea",{class:"write-box",onInput:t[0]||(t[0]=function(t){return e.$emit("getText",t.target.value)})},null,32)])])):Object(o["d"])("",!0)])}n("a9e3"),n("4de4");var y={class:"post"},I={class:"post-header"},S={class:"profile-name"},w={class:"post-content"},D={class:"date"};function F(e,t,n,c,a,r){return Object(o["l"])(),Object(o["e"])("div",y,[Object(o["f"])("div",I,[Object(o["f"])("div",{class:"profile",style:Object(o["k"])({backgroundImage:"url(".concat(n.postData.userImage,")")})},null,4),Object(o["f"])("span",S,Object(o["q"])(n.postData.name),1)]),Object(o["f"])("div",{class:Object(o["j"])(["post-body",n.postData.filter]),style:Object(o["k"])({backgroundImage:"url(".concat(n.postData.postImage,")")}),onClick:t[0]||(t[0]=function(t){return e.$store.commit("likePhoto",n.i)})},null,6),Object(o["f"])("div",w,[Object(o["f"])("p",null,Object(o["q"])(e.$store.state.likes[n.i])+" Likes",1),Object(o["f"])("p",null,[Object(o["f"])("strong",null,Object(o["q"])(n.postData.name),1),Object(o["g"])(" "+Object(o["q"])(n.postData.content),1)]),Object(o["f"])("p",D,Object(o["q"])(n.postData.date),1)])])}var x={name:"Post",props:{postData:Object,i:Number}},U=(n("d731"),n("6b0d")),P=n.n(U);const C=P()(x,[["render",F]]);var M=C;function A(e,t,n,c,a,r){return Object(o["l"])(),Object(o["e"])("div",{class:Object(o["j"])("filter-item ".concat(n.filter)),style:Object(o["k"])({backgroundImage:"url(".concat(n.uploadImageUrl,")")}),onClick:t[0]||(t[0]=function(){return r.selectFilter&&r.selectFilter.apply(r,arguments)})},[Object(o["o"])(e.$slots,"default")],6)}var N={name:"FilterBox",props:{uploadImageUrl:String,filter:String},methods:{selectFilter:function(){this.emitter.emit("selectFilter",this.filter)}}};n("511d");const _=P()(N,[["render",A]]);var q=_,T={components:{Post:M,FilterBox:q},props:{postData:Array,containerStep:Number,uploadImageUrl:String},data:function(){return{filters:["aden","_1977","brannan","brooklyn","clarendon","earlybird","gingham","hudson","inkwell","kelvin","lark","lofi","maven","mayfair","moon","nashville","perpetua","reyes","rise","slumber","stinson","toaster","valencia","walden","willow","xpro2"],selectedFilter:""}},mounted:function(){var e=this;this.emitter.on("selectFilter",(function(t){e.selectedFilter=t}))}};n("36eb");const $=P()(T,[["render",k]]);var B=$,L=[{name:"Kim Hyun",userImage:"https://placeimg.com/100/100/arch",postImage:"https://placeimg.com/640/480/arch",likes:36,date:"May 15",liked:!1,content:"오늘 무엇을 했냐면요 아무것도 안했어요 😫",filter:"perpetua"},{name:"John Doe",userImage:"https://placeimg.com/200/200/people",postImage:"https://placeimg.com/640/480/people",likes:20,date:"Apr 20",liked:!1,content:"흔한 자랑스타그램",filter:"clarendon"},{name:"Minny",userImage:"https://placeimg.com/100/100/animals",postImage:"https://placeimg.com/640/480/animals",likes:49,date:"Apr 4",liked:!1,content:"우리집 개는 화장실 물도 내림",filter:"lofi"}],J=n("bc3a"),R=n.n(J),E=n("5502"),G={name:"App",components:{Container:B},data:function(){return{postData:L,more:0,containerStep:0,uploadImageUrl:"",postText:"",selectedFilter:"",counter:0}},mounted:function(){var e=this;this.emitter.on("selectFilter",(function(t){e.selectedFilter=t}))},methods:Object(f["a"])(Object(f["a"])({viewMore:function(){var e=this;R.a.get("https://codingapple1.github.io/vue/more".concat(this.more,".json")).then((function(t){console.log(t.data),e.postData.push(t.data),e.more++})).catch((function(e){console.log(e)}))},uploadImage:function(e){var t=e.target.files,n=URL.createObjectURL(t[0]);this.uploadImageUrl=n,this.containerStep++},publish:function(){var e={name:"Lee Yujin",userImage:"https://placeimg.com/100/100/nature",postImage:this.uploadImageUrl,likes:0,date:"Nov 17",liked:!1,content:this.postText,filter:this.selectedFilter};this.postData.unshift(e),this.containerStep=0}},Object(E["c"])(["likePhoto","setMore","changeName","changeAge"])),Object(E["b"])(["getData"])),computed:Object(f["a"])(Object(f["a"])({name:function(){return this.$store.state.name}},Object(E["d"])(["name","age","likes"])),Object(E["d"])({"작명":"name"}))};n("1a88");const H=P()(G,[["render",d]]);var K=H,Y=n("1344"),z=Object(E["a"])({state:function(){return{name:"yujin",age:20,likes:[36,29,49],liked:[!1,!1,!1],more:{},postData:L}},mutations:{changeName:function(e){e.name="lee"},changeAge:function(e,t){e.age+=t},likePhoto:function(e,t){0==e.liked[t]?(e.likes[t]++,e.liked[t]=!0):(e.likes[t]--,e.liked[t]=!1)},setMore:function(e,t){e.more=t}},actions:{getData:function(e){R.a.get("https://codingapple1.github.io/vue/more0.json").then((function(t){console.log(t.data),e.commit("setMore",t.data)}))}}}),Q=z,V=n("9483");Object(V["a"])("".concat("/vuestagram/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var W=Object(Y["a"])(),X=Object(o["b"])(K);X.config.globalProperties.emitter=W,X.use(Q).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d731:function(e,t,n){"use strict";n("4fa3")},db78:function(e,t,n){}});
//# sourceMappingURL=app.8dfb2139.js.map