(()=>{"use strict";var r={669:(r,n,e)=>{e.d(n,{Z:()=>i});var t=e(645),o=e.n(t)()((function(r){return r[1]}));o.push([r.id,".news {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n}\r\n\r\n.news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 47%;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #edede9;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: 'Roboto', sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.1) rotate(2deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(233, 196, 106, 0.7);\r\n    color: #264653;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #edede9;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n    font-family: 'Bebas Neue', cursive;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n    font-family: 'Bebas Neue', cursive;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #e76f51;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #e76f51;;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #edede9;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n\r\n@media (max-width: 1330px) {\r\n    .news__item {\r\n        width: 88%;\r\n    }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n    .news__item {\r\n        width: 98%;\r\n    }\r\n}\r\n",""]);const i=o},501:(r,n,e)=>{e.d(n,{Z:()=>i});var t=e(645),o=e.n(t)()((function(r){return r[1]}));o.push([r.id,".sources {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    height: 235px;\r\n    overflow: auto;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.sources::-webkit-scrollbar-track {\r\n    padding: 2px 0;\r\n    background-color: #e9c46a;\r\n    border-radius: 5px;\r\n}\r\n\r\n.sources::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n\r\n.sources::-webkit-scrollbar-thumb {\r\n    border-radius: 5px;\r\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #e76f51;\r\n}\r\n\r\n.source__item {\r\n    background: none;\r\n    border: 2px solid #e9c46a;\r\n    width: 30%;\r\n    min-width: 310px;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 20px;\r\n    color: #f4a261;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #e76f51;\r\n    color: #e76f51;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #e76f51;\r\n    transform: scale(1.01);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n    .source__item {\r\n        width: 45%;\r\n    }\r\n}\r\n\r\n@media (max-width: 675px) {\r\n    .source__item {\r\n        width: 95%;\r\n    }\r\n}\r\n",""]);const i=o},767:(r,n,e)=>{e.d(n,{Z:()=>i});var t=e(645),o=e.n(t)()((function(r){return r[1]}));o.push([r.id,"* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  margin: 0 2px;\r\n}\r\n\r\nbody {\r\n    color: #fff;\r\n    background: #264653;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nheader {\r\n    padding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\n    font-family: 'Bebas Neue', cursive;\r\n    font-size: 100px;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    color: #e76f51;\r\n}\r\n\r\nmain {\r\n    flex: 1 1 auto;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 20px;\r\n}\r\nfooter .copyright {\r\n    font-size: 14px;\r\n    color: #e76f51;\r\n    text-align: center;\r\n}\r\nfooter .copyright a {\r\n    color: #e76f51;\r\n    transition: color 0.5s;\r\n}\r\nfooter .copyright a:hover {\r\n    color: #f4a261;\r\n}\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n\r\nfooter .icon {\r\n    height: 30px;\r\n}\r\n\r\n@media (max-width: 490px) {\r\n    header h1 {\r\n        font-size: 60px;\r\n    }\r\n  }\r\n",""]);const i=o},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<r.length;a++){var c=[].concat(r[a]);t&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},379:(r,n,e)=>{var t,o=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),i=[];function s(r){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===r){n=e;break}return n}function a(r,n){for(var e={},t=[],o=0;o<r.length;o++){var a=r[o],c=n.base?a[0]+n.base:a[0],d=e[c]||0,l="".concat(c," ").concat(d);e[c]=d+1;var u=s(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:h(p,n),references:1}),t.push(l)}return t}function c(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var s=o(r.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var d,l=(d=[],function(r,n){return d[r]=n,d.filter(Boolean).join("\n")});function u(r,n,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),s=r.childNodes;s[n]&&r.removeChild(s[n]),s.length?r.insertBefore(i,s[n]):r.appendChild(i)}}function p(r,n,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var f=null,m=0;function h(r,n){var e,t,o;if(n.singleton){var i=m++;e=f||(f=c(n)),t=u.bind(null,e,i,!1),o=u.bind(null,e,i,!0)}else e=c(n),t=p.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=a(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var o=s(e[t]);i[o].references--}for(var c=a(r,n),d=0;d<e.length;d++){var l=s(e[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=c}}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),e.nc=void 0,(()=>{var r;!function(r){r[r.OK=200]="OK",r[r.Unauthorized=401]="Unauthorized",r[r.NotFound=404]="NotFound"}(r||(r={}));var n=e(379),t=e.n(n),o=e(669);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var i=e(501);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;class s{constructor(){this.news=new class{draw(r){const n=r.length>=10?r.filter(((r,n)=>n<10)):r,e=document.createDocumentFragment(),t=document.querySelector("#newsItemTemp"),o=document.querySelector(".news");n.forEach(((r,n)=>{const o=t.content.cloneNode(!0),i=o.querySelector(".news__item"),s=o.querySelector(".news__meta-photo"),a=o.querySelector(".news__meta-author"),c=o.querySelector(".news__meta-date"),d=o.querySelector(".news__description-title"),l=o.querySelector(".news__description-source"),u=o.querySelector(".news__description-content"),p=o.querySelector(".news__read-more a");n%2&&i.classList.add("alt"),s.style.backgroundImage=`url(${r.urlToImage||"./assets/news_placeholder.svg"})`,a.textContent=r.author||r.source.name,c.textContent=r.publishedAt.slice(0,10).split("-").reverse().join("-"),d.textContent=r.title,l.textContent=r.source.name,u.textContent=r.description,p.setAttribute("href",r.url),e.append(o)})),o.innerHTML="",o.appendChild(e)}},this.sources=new class{draw(r){const n=document.createDocumentFragment(),e=document.querySelector("#sourceItemTemp"),t=document.querySelector(".sources");r.forEach((r=>{const t=e.content.cloneNode(!0),o=t.querySelector(".source__item-name"),i=t.querySelector(".source__item");o.textContent=r.name,i.setAttribute("data-source-id",r.id),n.append(t)})),t.append(n)}}}drawNews(r){const n=(null==r?void 0:r.articles)?null==r?void 0:r.articles:[];this.news.draw(n)}drawSources(r){const n=(null==r?void 0:r.sources)?null==r?void 0:r.sources:[];this.sources.draw(n)}}var a=e(767);t()(a.Z,{insert:"head",singleton:!1}),a.Z.locals,e.p,e.p,e.p,(new class{constructor(){this.controller=new class extends class extends class{constructor(r,n){this.baseLink=r,this.options=n}getResp({endpoint:r,options:n={}},e=(()=>{console.error("No callback for GET response")})){this.load("GET",r,e,n)}errorHandler(n){if(n.status!==r.OK)throw n.status!==r.Unauthorized&&n.status!==r.NotFound||console.log(`Sorry, but there is ${n.status} error: ${n.statusText}`),Error(n.statusText);return n}makeUrl(r,n){const e=Object.assign(Object.assign({},this.options),r);let t=`${this.baseLink}${n}?`;return Object.keys(e).forEach((r=>{t+=`${r}=${e[r]}&`})),t.slice(0,-1)}load(r,n,e,t={}){fetch(this.makeUrl(t,n),{method:r}).then(this.errorHandler).then((r=>r.json())).then((r=>e(r))).catch((r=>console.error(r)))}}{constructor(){super("https://nodenews.up.railway.app/",{apiKey:"bcef95138bc34d5390bfbdc1f4e63e51"})}}{getSources(r){super.getResp({endpoint:"sources"},r)}getNews(r,n){let e=r.target;const t=r.currentTarget;for(;e!==t;){if(e.classList.contains("source__item")){const r=e.getAttribute("data-source-id");return void(t.getAttribute("data-source")!==r&&(t.setAttribute("data-source",r),super.getResp({endpoint:"everything",options:{sources:r}},n)))}e=e.parentNode}}},this.view=new s}start(){var r;null===(r=document.querySelector(".sources"))||void 0===r||r.addEventListener("click",(r=>this.controller.getNews(r,(r=>{this.view.drawNews(r)})))),this.controller.getSources((r=>{this.view.drawSources(r)}))}}).start()})()})();