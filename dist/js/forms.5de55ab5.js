(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forms"],{"014b":function(t,e,n){"use strict";var r=n("e53d"),o=n("07e3"),i=n("8e60"),a=n("63b6"),u=n("9138"),c=n("ebfd").KEY,s=n("294c"),l=n("dbdb"),f=n("45f2"),p=n("62a0"),b=n("5168"),m=n("ccb9"),d=n("6718"),h=n("47ee"),v=n("9003"),y=n("e4ae"),g=n("f772"),x=n("241e"),w=n("36c3"),S=n("1bc3"),k=n("aebd"),O=n("a159"),_=n("0395"),j=n("bf0b"),E=n("9aa9"),P=n("d9f6"),F=n("c3a1"),L=j.f,C=P.f,T=_.f,M=r.Symbol,V=r.JSON,A=V&&V.stringify,D="prototype",N=b("_hidden"),$=b("toPrimitive"),z={}.propertyIsEnumerable,I=l("symbol-registry"),q=l("symbols"),R=l("op-symbols"),G=Object[D],J="function"==typeof M&&!!E.f,H=r.QObject,B=!H||!H[D]||!H[D].findChild,W=i&&s((function(){return 7!=O(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=L(G,e);r&&delete G[e],C(t,e,n),r&&t!==G&&C(G,e,r)}:C,K=function(t){var e=q[t]=O(M[D]);return e._k=t,e},Y=J&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},Q=function(t,e,n){return t===G&&Q(R,e,n),y(t),e=S(e,!0),y(n),o(q,e)?(n.enumerable?(o(t,N)&&t[N][e]&&(t[N][e]=!1),n=O(n,{enumerable:k(0,!1)})):(o(t,N)||C(t,N,k(1,{})),t[N][e]=!0),W(t,e,n)):C(t,e,n)},U=function(t,e){y(t);var n,r=h(e=w(e)),o=0,i=r.length;while(i>o)Q(t,n=r[o++],e[n]);return t},X=function(t,e){return void 0===e?O(t):U(O(t),e)},Z=function(t){var e=z.call(this,t=S(t,!0));return!(this===G&&o(q,t)&&!o(R,t))&&(!(e||!o(this,t)||!o(q,t)||o(this,N)&&this[N][t])||e)},tt=function(t,e){if(t=w(t),e=S(e,!0),t!==G||!o(q,e)||o(R,e)){var n=L(t,e);return!n||!o(q,e)||o(t,N)&&t[N][e]||(n.enumerable=!0),n}},et=function(t){var e,n=T(w(t)),r=[],i=0;while(n.length>i)o(q,e=n[i++])||e==N||e==c||r.push(e);return r},nt=function(t){var e,n=t===G,r=T(n?R:w(t)),i=[],a=0;while(r.length>a)!o(q,e=r[a++])||n&&!o(G,e)||i.push(q[e]);return i};J||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(R,n),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),W(this,t,k(1,n))};return i&&B&&W(G,t,{configurable:!0,set:e}),K(t)},u(M[D],"toString",(function(){return this._k})),j.f=tt,P.f=Q,n("6abf").f=_.f=et,n("355d").f=Z,E.f=nt,i&&!n("b8e3")&&u(G,"propertyIsEnumerable",Z,!0),m.f=function(t){return K(b(t))}),a(a.G+a.W+a.F*!J,{Symbol:M});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ot=0;rt.length>ot;)b(rt[ot++]);for(var it=F(b.store),at=0;it.length>at;)d(it[at++]);a(a.S+a.F*!J,"Symbol",{for:function(t){return o(I,t+="")?I[t]:I[t]=M(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){B=!0},useSimple:function(){B=!1}}),a(a.S+a.F*!J,"Object",{create:X,defineProperty:Q,defineProperties:U,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var ut=s((function(){E.f(1)}));a(a.S+a.F*ut,"Object",{getOwnPropertySymbols:function(t){return E.f(x(t))}}),V&&a(a.S+a.F*(!J||s((function(){var t=M();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))}))),"JSON",{stringify:function(t){var e,n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!Y(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Y(e))return e}),r[1]=e,A.apply(V,r)}}),M[D][$]||n("35e8")(M[D],$,M[D].valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},"0395":function(t,e,n){var r=n("36c3"),o=n("6abf").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?u(t):o(r(t))}},"0894":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("title-bar",{attrs:{"title-stack":t.titleStack}}),n("hero-bar",[t._v("\n    Forms\n    "),n("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v("\n      Dashboard\n    ")])],1),n("section",{staticClass:"section is-main-section"},[n("card-component",{attrs:{title:"Forms",icon:"ballot"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("b-field",{attrs:{label:"From",horizontal:""}},[n("b-field",[n("b-input",{attrs:{icon:"account",placeholder:"Name",name:"name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("b-field",[n("b-input",{attrs:{icon:"email",type:"email",placeholder:"E-mail",name:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1),n("b-field",{attrs:{message:"Do not enter the leading zero",horizontal:""}},[n("b-field",[n("p",{staticClass:"control"},[n("a",{staticClass:"button is-static"},[t._v("\n                +44\n              ")])]),n("b-input",{attrs:{type:"tel",name:"phone",expanded:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)],1),n("b-field",{attrs:{label:"Department",horizontal:""}},[n("b-select",{attrs:{placeholder:"Select a department",required:""},model:{value:t.form.department,callback:function(e){t.$set(t.form,"department",e)},expression:"form.department"}},t._l(t.departments,(function(e,r){return n("option",{key:r,domProps:{value:e}},[t._v("\n              "+t._s(e)+"\n            ")])})),0)],1),n("hr"),n("b-field",{attrs:{label:"Subject",message:"Message subject",horizontal:""}},[n("b-input",{attrs:{placeholder:"e.g. Partnership proposal",required:""},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})],1),n("b-field",{attrs:{label:"Question",message:"Your question. Max 255 characters",horizontal:""}},[n("b-input",{attrs:{type:"textarea",placeholder:"Explain how we can help you",maxlength:"255",required:""},model:{value:t.form.question,callback:function(e){t.$set(t.form,"question",e)},expression:"form.question"}})],1),n("hr"),n("b-field",{attrs:{horizontal:""}},[n("b-field",{attrs:{grouped:""}},[n("div",{staticClass:"control"},[n("b-button",{attrs:{"native-type":"submit",type:"is-primary"}},[t._v("Submit")])],1),n("div",{staticClass:"control"},[n("b-button",{attrs:{type:"is-primary is-outlined"},on:{click:t.reset}},[t._v("Reset")])],1)])],1)],1)]),n("card-component",{attrs:{title:"Custom elements",icon:"ballot-outline"}},[n("b-field",{staticClass:"has-check",attrs:{label:"Checkbox",horizontal:""}},[n("checkbox-picker",{attrs:{options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"},type:"is-primary"},model:{value:t.customElementsForm.checkbox,callback:function(e){t.$set(t.customElementsForm,"checkbox",e)},expression:"customElementsForm.checkbox"}})],1),n("hr"),n("b-field",{staticClass:"has-check",attrs:{label:"Radio",horizontal:""}},[n("radio-picker",{attrs:{options:{one:"One",two:"Two"}},model:{value:t.customElementsForm.radio,callback:function(e){t.$set(t.customElementsForm,"radio",e)},expression:"customElementsForm.radio"}})],1),n("hr"),n("b-field",{attrs:{label:"Switch",horizontal:""}},[n("b-switch",{model:{value:t.customElementsForm.switch,callback:function(e){t.$set(t.customElementsForm,"switch",e)},expression:"customElementsForm.switch"}},[t._v("\n          Default\n        ")])],1),n("hr"),n("b-field",{attrs:{label:"File",horizontal:""}},[n("file-picker",{model:{value:t.customElementsForm.file,callback:function(e){t.$set(t.customElementsForm,"file",e)},expression:"customElementsForm.file"}})],1)],1)],1)],1)},o=[],i=n("5d58"),a=n.n(i),u=n("67bb"),c=n.n(u);function s(t){return s="function"===typeof c.a&&"symbol"===typeof a.a?function(t){return typeof t}:function(t){return t&&"function"===typeof c.a&&t.constructor===c.a&&t!==c.a.prototype?"symbol":typeof t},s(t)}function l(t){return l="function"===typeof c.a&&"symbol"===s(a.a)?function(t){return s(t)}:function(t){return t&&"function"===typeof c.a&&t.constructor===c.a&&t!==c.a.prototype?"symbol":s(t)},l(t)}var f=n("1e1d"),p=n("6df7"),b=n("9e86"),m=n.n(b),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{attrs:{grouped:"","group-multiline":""}},t._l(t.options,(function(e,r){return n("div",{key:r,staticClass:"control"},[n("b-checkbox",{attrs:{"native-value":r,type:t.type},on:{input:t.input},model:{value:t.newValue,callback:function(e){t.newValue=e},expression:"newValue"}},[t._v("\n      "+t._s(e)+"\n    ")])],1)})),0)},h=[],v={name:"CheckboxPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{default:[]}},data:function(){return{newValue:[]}},created:function(){this.newValue=this.value},methods:{input:function(){this.$emit("input",this.newValue)}},watch:{value:function(t){this.newValue=t}}},y=v,g=n("2877"),x=Object(g["a"])(y,d,h,!1,null,null,null),w=x.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{attrs:{grouped:"","group-multiline":""}},t._l(t.options,(function(e,r){return n("div",{key:r,staticClass:"control"},[n("b-radio",{attrs:{"native-value":r,type:t.type},on:{input:t.input},model:{value:t.newValue,callback:function(e){t.newValue=e},expression:"newValue"}},[t._v("\n      "+t._s(e)+"\n    ")])],1)})),0)},k=[],O={name:"RadioPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{default:null}},data:function(){return{newValue:null}},created:function(){this.newValue=this.value},methods:{input:function(){this.$emit("input",this.newValue)}},watch:{value:function(t){this.newValue=t}}},_=O,j=Object(g["a"])(_,S,k,!1,null,null,null),E=j.exports,P=n("3b73"),F=n("503b"),L={name:"Forms",components:{HeroBar:F["a"],FilePicker:P["a"],RadioPicker:E,CheckboxPicker:w,CardComponent:p["a"],TitleBar:f["a"]},data:function(){return{isLoading:!1,form:{name:null,email:null,phone:null,department:null,subject:null,question:null},customElementsForm:{checkbox:[],radio:null,switch:!0,file:null},departments:["Business Development","Marketing","Sales"]}},computed:{titleStack:function(){return["Admin","Forms"]}},methods:{submit:function(){},reset:function(){this.form=m()(this.form,(function(t){return t&&"object"===l(t)?[]:null})),this.$buefy.snackbar.open({message:"Reset successfully",queue:!1})}}},C=L,T=Object(g["a"])(C,r,o,!1,null,null,null);e["default"]=T.exports},"0fc9":function(t,e,n){var r=n("3a38"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},1654:function(t,e,n){"use strict";var r=n("71c1")(!0);n("30f1")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"241e":function(t,e,n){var r=n("25eb");t.exports=function(t){return Object(r(t))}},"242e":function(t,e,n){var r=n("72af"),o=n("ec69");function i(t,e){return t&&r(t,e,o)}t.exports=i},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"30f1":function(t,e,n){"use strict";var r=n("b8e3"),o=n("63b6"),i=n("9138"),a=n("35e8"),u=n("481b"),c=n("8f60"),s=n("45f2"),l=n("53e2"),f=n("5168")("iterator"),p=!([].keys&&"next"in[].keys()),b="@@iterator",m="keys",d="values",h=function(){return this};t.exports=function(t,e,n,v,y,g,x){c(n,e,v);var w,S,k,O=function(t){if(!p&&t in P)return P[t];switch(t){case m:return function(){return new n(this,t)};case d:return function(){return new n(this,t)}}return function(){return new n(this,t)}},_=e+" Iterator",j=y==d,E=!1,P=t.prototype,F=P[f]||P[b]||y&&P[y],L=F||O(y),C=y?j?O("entries"):L:void 0,T="Array"==e&&P.entries||F;if(T&&(k=l(T.call(new t)),k!==Object.prototype&&k.next&&(s(k,_,!0),r||"function"==typeof k[f]||a(k,f,h))),j&&F&&F.name!==d&&(E=!0,L=function(){return F.call(this)}),r&&!x||!p&&!E&&P[f]||a(P,f,L),u[e]=L,u[_]=h,y)if(w={values:j?L:O(d),keys:g?L:O(m),entries:C},x)for(S in w)S in P||i(P,S,w[S]);else o(o.P+o.F*(p||E),e,w);return w}},"32fc":function(t,e,n){var r=n("e53d").document;t.exports=r&&r.documentElement},"335c":function(t,e,n){var r=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"36c3":function(t,e,n){var r=n("335c"),o=n("25eb");t.exports=function(t){return r(o(t))}},"3a38":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"3b4a":function(t,e,n){var r=n("0b07"),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=o},"45f2":function(t,e,n){var r=n("d9f6").f,o=n("07e3"),i=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"47ee":function(t,e,n){var r=n("c3a1"),o=n("9aa9"),i=n("355d");t.exports=function(t){var e=r(t),n=o.f;if(n){var a,u=n(t),c=i.f,s=0;while(u.length>s)c.call(t,a=u[s++])&&e.push(a)}return e}},"481b":function(t,e){t.exports={}},"50ed":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5168:function(t,e,n){var r=n("dbdb")("wks"),o=n("62a0"),i=n("e53d").Symbol,a="function"==typeof i,u=t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))};u.store=r},"53e2":function(t,e,n){var r=n("07e3"),o=n("241e"),i=n("5559")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},5559:function(t,e,n){var r=n("dbdb")("keys"),o=n("62a0");t.exports=function(t){return r[t]||(r[t]=o(t))}},"5b4e":function(t,e,n){var r=n("36c3"),o=n("b447"),i=n("0fc9");t.exports=function(t){return function(e,n,a){var u,c=r(e),s=o(c.length),l=i(a,s);if(t&&n!=n){while(s>l)if(u=c[l++],u!=u)return!0}else for(;s>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},"5d58":function(t,e,n){t.exports=n("d8d6")},"62a0":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},6718:function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("b8e3"),a=n("ccb9"),u=n("d9f6").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},"67bb":function(t,e,n){t.exports=n("f921")},"69d3":function(t,e,n){n("6718")("asyncIterator")},"6abf":function(t,e,n){var r=n("e6f3"),o=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"6c1c":function(t,e,n){n("c367");for(var r=n("e53d"),o=n("35e8"),i=n("481b"),a=n("5168")("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<u.length;c++){var s=u[c],l=r[s],f=l&&l.prototype;f&&!f[a]&&o(f,a,s),i[s]=i.Array}},"71c1":function(t,e,n){var r=n("3a38"),o=n("25eb");t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),c=r(n),s=u.length;return c<0||c>=s?t?"":void 0:(i=u.charCodeAt(c),i<55296||i>56319||c+1===s||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536)}}},"72af":function(t,e,n){var r=n("99cd"),o=r();t.exports=o},"765d":function(t,e,n){n("6718")("observable")},"7e90":function(t,e,n){var r=n("d9f6"),o=n("e4ae"),i=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){o(t);var n,a=i(e),u=a.length,c=0;while(u>c)r.f(t,n=a[c++],e[n]);return t}},8436:function(t,e){t.exports=function(){}},"872a":function(t,e,n){var r=n("3b4a");function o(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}t.exports=o},"8f60":function(t,e,n){"use strict";var r=n("a159"),o=n("aebd"),i=n("45f2"),a={};n("35e8")(a,n("5168")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},9138:function(t,e,n){t.exports=n("35e8")},"99cd":function(t,e){function n(t){return function(e,n,r){var o=-1,i=Object(e),a=r(e),u=a.length;while(u--){var c=a[t?u:++o];if(!1===n(i[c],c,i))break}return e}}t.exports=n},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},"9e86":function(t,e,n){var r=n("872a"),o=n("242e"),i=n("badf");function a(t,e){var n={};return e=i(e,3),o(t,(function(t,o,i){r(n,o,e(t,o,i))})),n}t.exports=a},a159:function(t,e,n){var r=n("e4ae"),o=n("7e90"),i=n("1691"),a=n("5559")("IE_PROTO"),u=function(){},c="prototype",s=function(){var t,e=n("1ec9")("iframe"),r=i.length,o="<",a=">";e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+a+"document.F=Object"+o+"/script"+a),t.close(),s=t.F;while(r--)delete s[c][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(u[c]=r(t),n=new u,u[c]=null,n[a]=t):n=s(),void 0===e?n:o(n,e)}},b447:function(t,e,n){var r=n("3a38"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},bf0b:function(t,e,n){var r=n("355d"),o=n("aebd"),i=n("36c3"),a=n("1bc3"),u=n("07e3"),c=n("794b"),s=Object.getOwnPropertyDescriptor;e.f=n("8e60")?s:function(t,e){if(t=i(t),e=a(e,!0),c)try{return s(t,e)}catch(n){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},c207:function(t,e){},c367:function(t,e,n){"use strict";var r=n("8436"),o=n("50ed"),i=n("481b"),a=n("36c3");t.exports=n("30f1")(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},c3a1:function(t,e,n){var r=n("e6f3"),o=n("1691");t.exports=Object.keys||function(t){return r(t,o)}},ccb9:function(t,e,n){e.f=n("5168")},d8d6:function(t,e,n){n("1654"),n("6c1c"),t.exports=n("ccb9").f("iterator")},dbdb:function(t,e,n){var r=n("584a"),o=n("e53d"),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e6f3:function(t,e,n){var r=n("07e3"),o=n("36c3"),i=n("5b4e")(!1),a=n("5559")("IE_PROTO");t.exports=function(t,e){var n,u=o(t),c=0,s=[];for(n in u)n!=a&&r(u,n)&&s.push(n);while(e.length>c)r(u,n=e[c++])&&(~i(s,n)||s.push(n));return s}},ebfd:function(t,e,n){var r=n("62a0")("meta"),o=n("f772"),i=n("07e3"),a=n("d9f6").f,u=0,c=Object.isExtensible||function(){return!0},s=!n("294c")((function(){return c(Object.preventExtensions({}))})),l=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},f=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[r].w},b=function(t){return s&&m.NEED&&c(t)&&!i(t,r)&&l(t),t},m=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:p,onFreeze:b}},f921:function(t,e,n){n("014b"),n("c207"),n("69d3"),n("765d"),t.exports=n("584a").Symbol}}]);
//# sourceMappingURL=forms.5de55ab5.js.map