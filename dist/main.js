(()=>{"use strict";var n={562:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --black: black;\n  --dark-grey: darkgrey;\n  --grey: grey;\n  --light-grey: lightgrey;\n  --white: whitesmoke;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 100px 50px 1fr 50px;\n  min-height: 100vh;\n}\n\n.container,\n.header {\n  grid-template-columns: 200px 1fr;\n}\n\n.header {\n  display: grid;\n  grid-template-rows: 1fr;\n  background-color: black;\n  grid-column: 1/3;\n  color: var(--white);\n}\n\n.menu {\n  background-color: var(--dark-grey);\n  grid-row: 2/4;\n  padding: 15px 0px;\n}\n\n.menu > li {\n  list-style: none;\n  padding: 5px 15px;\n  margin: 10px;\n}\n\n.menu > li:hover {\n  background-color: var(--grey);\n  border: none;\n  border-radius: 5px;\n}\n\n.main {\n  background-color: var(--light-grey);\n  grid-row: 2/4;\n  padding: 15px 30px;\n}\n\n.main > .mainContent {\n  display: grid;\n  grid-template: auto/ 1fr;\n  grid-auto-rows: auto;\n}\n\n.footer {\n  background-color: var(--black);\n  grid-column: 1/-1;\n  text-align: center;\n  display: table;\n}\n\n.footerTitle {\n  vertical-align: middle;\n  color: var(--white);\n  display: table-cell;\n}\n\n.headerTitle {\n  justify-self: center;\n  align-self: center;\n  color: var(--white);\n}\n",""]);const c=i},861:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".addTaskBtn {\n  background-color: transparent;\n  text-align: center;\n  vertical-align: center;\n  width: 100px;\n  padding: 5px 10px;\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(562),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var g=t(861),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),e()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;const v={container:document.querySelector(".container"),getContainer(){return this.container},getMain:()=>document.querySelector(".main")};!function(){const n=v.getContainer(),e=document.createElement("div");e.classList.add("header");const t=document.createElement("h1");t.classList.add("headerTitle"),t.innerHTML="<i class='fa-solid fa-star'></i> Todo List",e.appendChild(t);const r=function(){const n=document.createElement("div");n.classList.add("menu"),document.createElement("ul");const e=document.createElement("li");e.classList.add("menuSelectionItem"),e.innerHTML="<i class='fa-brands fa-wordpress'></i> Inbox",n.appendChild(e);const t=document.createElement("li");t.classList.add("menuSelectionItem"),t.innerHTML="<i class='fa-solid fa-camera-retro'></i> Today",n.appendChild(t);const r=document.createElement("li");return r.classList.add("menuSelectionItem"),r.innerHTML="<i class='fa-solid fa-truck-fast'></i> This Week",n.appendChild(r),n}(),a=document.createElement("div");a.classList.add("main");const o=document.createElement("div");o.classList.add("footer");const i=document.createElement("h3");i.classList.add("footerTitle"),i.innerText="Hello Footers",o.appendChild(i),n.appendChild(e),n.appendChild(r),n.appendChild(a),n.appendChild(o)}(),function(){const n=v.getMain();n.classList.add("main");const e=document.createElement("h2");e.classList.add("mainTitle"),e.innerText="Default";const t=document.createElement("ul");t.classList.add("mainContent");const r=document.createElement("button");r.classList.add("addTaskBtn"),r.addEventListener("click",(n=>function(n){console.log(n.target.parentNode)}(n))),r.innerHTML="<i class='fa-solid fa-plus'></i> Add Task",t.appendChild(r),n.appendChild(e),n.append(t)}()})()})();