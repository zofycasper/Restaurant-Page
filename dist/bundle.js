(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(81),r=n.n(a),o=n(645),i=n.n(o)()(r());i.push([e.id,"body {\n    padding: 0px;\n    margin: 0px;\n}\n\n.nav {\n    background-color: green;\n    display: grid;\n    grid-template-columns: 5rem 5rem 5rem;\n    justify-content: center;\n}\n\n.main {\n    display: grid;\n    padding: 0px 10rem 0px 10rem;\n}\n\n.footer {\n    background-color: aqua;\n}\n\n#content {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 5rem 1fr 5rem;\n}\n\n.home {\n    display: grid;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n}\n\nh2 {\n    font-size: 5rem;\n    display: grid;\n    align-items: center;\n    margin: 2rem 0px;\n    background-color: bisque;\n}\n\n.menu,\n.contact {\n    display: grid;\n    text-align: center;\n    grid-template-rows: 5fr 10fr;\n}\n\n.menu-content {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n    grid-template-rows: repeat(auto-fit, 1fr);\n    align-items: start;\n    gap: 2rem;\n    padding: 2rem;\n}\n\n.card {\n    display: grid;\n    text-align: center;\n    align-content: center;\n    justify-content: center;\n    grid-template-rows: auto auto;\n}\n\n/* .card img {\n    \n} */\n\np {\n    text-align: center;\n}\n\ndiv > img {\n    width: 30rem;\n    height: 320px;\n}\n\n.contact-content {\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,a);a.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=a(e,r),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=document.createElement("div"),t=document.createElement("h2"),a=document.createElement("div"),r=document.createElement("h3"),o=document.createElement("p"),i=document.createElement("div"),c=document.createElement("h3"),s=document.createElement("p");e.classList.add("home"),t.textContent="Shaxian Delicacies",r.textContent="Just the Right Food",o.textContent="Shaxian Delicacies, which have their roots in South East China's Shaxian District, comprise a variety of traditional Chinese treats such Fried Pork Dumplings, Salted Duck Gizzard, and Signature Peanut Sauce Noodle.",c.textContent="Our Location:",s.textContent="123 Forest Drive, Forestville, Maine",e.appendChild(t),e.appendChild(a),e.appendChild(i),a.appendChild(r),a.appendChild(o),i.appendChild(c),i.appendChild(s);const d=e;class l{constructor(e){this.section=e,this.elementList=[]}append(e){this.clear(),this.section.appendChild(e),this.elementList.push(e),this.print()}create(e,t){const n=document.createElement(e);return n.textContent=t,n.setAttribute("id",`${t}`),n.classList.add(`${t}button`),this.elementList.push(n),n}update(){for(const e of this.elementList)console.log(e),this.section.appendChild(e)}clear(){this.section.textContent=""}print(){console.log(this.section)}}const p=n.p+"7b865087f54269571b56.jpg",u=n.p+"4540189dc8eb67f111f8.jpg",m=n.p+"4b52a23be37e5777c718.jpg",h=n.p+"2285cbf6f76a2308c151.jpg",f=document.createElement("div");f.classList.add("menu");const g=document.createElement("h2");g.textContent="Menu",f.appendChild(g);const v=document.createElement("div");v.classList.add("menu-content"),f.appendChild(v),new l(f);const y=new class{constructor(e){this.dishType=e,this.dishList=[]}add(e,t,n){let a={};a.name=e,a.price=t,a.pic=n,this.dishList.push(a)}}("normal");y.add("Peanut Butter Mixed Noodle",5,p),y.add("Wonton Soup",6,u),y.add("Fried Wonton",6,m),y.add("Steamed Dumplings",8,h);const C=y.dishList;console.log(y),console.log(C);for(let e in C){const t=document.createElement("div");t.setAttribute("id",`${C[e].name}`),t.classList.add("card");const n=new Image,a=document.createElement("div");a.classList.add("disc");const r=document.createElement("p"),o=document.createElement("p");r.classList.add("dish-name"),o.classList.add("dish-price"),n.src=`${C[e].pic}`,n.setAttribute("id",`${C[e].name}`),r.textContent=`${C[e].name}`,o.textContent=`$${C[e].price}`,t.appendChild(n),t.appendChild(a),a.appendChild(r),a.appendChild(o),v.appendChild(t)}const x=f,b=document.createElement("div");b.classList.add("contact");const E=document.createElement("h2");E.textContent="Contact",b.appendChild(E);const L=document.createElement("div");L.classList.add("contact-content"),b.appendChild(L);const w=new class{constructor(e){this.contactList=[],this.type=e}add(e,t,n,a){const r={};return r.name=e,r.position=t,r.email=n,r.number=a,this.contactList.push(r),r}}("contact");w.add("John","chef","zzz@qqq.com","555-666-999"),w.add("David","manager","lll@ddd.com","232-644-559"),w.add("Mike","waiter","yyy@ddd.com","335-655-969");const S=w.contactList;console.log(S);for(let e in S){const t=document.createElement("div");t.setAttribute("id",`${S[e].position}`);const n=document.createElement("p");n.classList.add("card-name"),n.textContent=`${S[e].name}`;const a=document.createElement("p");a.classList.add("card-position"),a.textContent=`${S[e].position}`;const r=document.createElement("p");r.classList.add("card-email"),r.textContent=`${S[e].email}`;const o=document.createElement("p");o.classList.add("card-number"),o.textContent=`${S[e].number}`,t.appendChild(n),t.appendChild(a),t.appendChild(r),t.appendChild(o),L.appendChild(t)}const $=b;var T=n(379),j=n.n(T),M=n(795),A=n.n(M),D=n(569),k=n.n(D),F=n(565),I=n.n(F),P=n(216),q=n.n(P),N=n(589),z=n.n(N),O=n(426),Z={};Z.styleTagTransform=z(),Z.setAttributes=I(),Z.insert=k().bind(null,"head"),Z.domAPI=A(),Z.insertStyleElement=q(),j()(O.Z,Z),O.Z&&O.Z.locals&&O.Z.locals;const H=document.getElementById("content"),B=document.createElement("div"),J=document.createElement("div"),R=document.createElement("div"),U=new l(B);B.classList.add("nav"),U.create("button","Home"),U.create("button","Menu"),U.create("button","Contact"),U.update(),new l(J),J.classList.add("footer");const W=new l(R);W.append(d),R.classList.add("main"),H.appendChild(B),H.appendChild(R),H.appendChild(J),document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(()=>{console.log(e.innerText);let t=e.innerText;return"Menu"==t?W.append(x):"Home"==t?W.append(d):W.append($)}))}))})()})();