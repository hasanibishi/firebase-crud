(()=>{"use strict";var e,r,t,o={},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={id:e,loaded:!1,exports:{}};return o[e](t,t.exports,n),t.loaded=!0,t.exports}n.m=o,e=[],n.O=(r,t,o,a)=>{if(!t){var i=1/0;for(l=0;l<e.length;l++){for(var[t,o,a]=e[l],s=!0,d=0;d<t.length;d++)(!1&a||i>=a)&&Object.keys(n.O).every(e=>n.O[e](t[d]))?t.splice(d--,1):(s=!1,a<i&&(i=a));s&&(e.splice(l--,1),r=o())}return r}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[t,o,a]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((r,t)=>(n.f[t](e,r),r),[])),n.u=e=>e+".3f0def46b026875ab446.js",n.miniCssF=e=>"styles.9e21e8b641093820cfe0.css",n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="firebase-crud:",n.l=(e,o,a,i)=>{if(r[e])r[e].push(o);else{var s,d;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==t+a){s=c;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=e),r[e]=[o];var f=(t,o)=>{s.onerror=s.onload=null,clearTimeout(p);var a=r[e];if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach(e=>e(o)),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),d&&document.head.appendChild(s)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="",(()=>{var e={666:0};n.f.j=(r,t)=>{var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(666!=r){var a=new Promise((t,a)=>o=e[r]=[t,a]);t.push(o[2]=a);var i=n.p+n.u(r),s=new Error;n.l(i,t=>{if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}},"chunk-"+r,r)}else e[r]=0},n.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,[i,s,d]=t,l=0;for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(d)var u=d(n);for(r&&r(t);l<i.length;l++)n.o(e,a=i[l])&&e[a]&&e[a][0](),e[i[l]]=0;return n.O(u)},t=self.webpackChunkfirebase_crud=self.webpackChunkfirebase_crud||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();