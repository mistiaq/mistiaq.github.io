/*!
 * PSPDFKit for Web 2023.4.0 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2023 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
(self.webpackChunkPSPDFKit=self.webpackChunkPSPDFKit||[]).push([[4516],{14516:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Conformance:()=>a,GdPicture:()=>_,GdPictureClientNative:()=>O,GdPictureWorker:()=>P});var n=r(84121),o=r(50974);const s="pspdfkit-lib/gdpicture-7a46d8716af33da4a74d2750fe22e8fe32214715",i=`${s}/initDotnet.js`;let a;function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e){e[e.pdf_a_1a=0]="pdf_a_1a",e[e.pdf_a_1b=1]="pdf_a_1b",e[e.pdf_a_2a=2]="pdf_a_2a",e[e.pdf_a_2u=3]="pdf_a_2u",e[e.pdf_a_2b=4]="pdf_a_2b",e[e.pdf_a_3a=5]="pdf_a_3a",e[e.pdf_a_3u=6]="pdf_a_3u",e[e.pdf_a_3b=7]="pdf_a_3b",e[e.pdf_a_4=8]="pdf_a_4",e[e.pdf_a_4e=9]="pdf_a_4e",e[e.pdf_a_4f=10]="pdf_a_4f"}(a||(a={}));const d="/create.pdf",l="/save.pdf",u="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope;let p=null,b=null;function m(e){let t;(0,o.kG)(b,"GdPicture WebAssembly is not loaded.");for(var r=arguments.length,n=new Array(r>1?r-1:0),s=1;s<r;s++)n[s-1]=arguments[s];for(const e of n)t=Object.assign(n[0],e);const i=JSON.stringify(c({type:e},t)),a=JSON.parse(b.CommandHandler(i));if(!a.success)throw new Error(a.errorReason+": "+a.errorMessage+"\n"+a.error);return a}class _{async _mountCustomFonts(e,t){(0,o.kG)(p,"WebAssembly module not loaded."),p.FS.mkdir(t);{const r=u?p.FS.filesystems.WORKERFS:p.FS.filesystems.MEMFS;p.FS.mount(r,{blobs:e},t)}}async loadModule(e,t,r,n){const{Assemblies:o,Module:a}=await async function(e){let t;if("string"!=typeof e)throw new Error("GdPicture WASM loader not implemented");return({initDotnet:t}=await import(`${e}${i}`)),t(`${"string"==typeof e?e:e.baseUrl}${s}`)}(e);b=o.GdPictureWasm.API,p=a,m("gdpicture/setLicense",{origin:t},{licenseKey:r||"DEMO_PSPDFKIT_WEB"});const f=n?"/fonts":"";n&&!p.FS.analyzePath(f).exists&&(await this._mountCustomFonts(n,f),m("gdpicture/setFonts",{fontPaths:[f]}))}toPdf(e,t){p.FS.writeFile(d,new Uint8Array(e));const r={file:l};t&&t in a&&(r.conformance=t);try{return m("gdpicture/process",{input:{file:d},output:r}),p.FS.readFile(l).buffer}finally{try{p.FS.unlink(l)}catch(e){}}}}var y=r(35369),g=r(81414),h=r.n(g);const P=class{constructor(e){let{baseUrl:t,mainThreadOrigin:r,licenseKey:s,customFonts:i}=e;(0,n.Z)(this,"requests",(0,y.D5)()),(0,n.Z)(this,"nextRequestId",1),(0,n.Z)(this,"handleMessage",(e=>{const t=e.data,r=this.requests.get(t.id);(0,o.kG)(r,`No request was made for id ${t.id}.`);const{resolve:n,reject:s}=r;if(this.requests=this.requests.delete(t.id),t.error){const e=new o.p2(t.error);e.callArgs=t.callArgs,s(e)}else n(t.result)})),this.worker=new(h()),this.worker.onmessage=this.handleMessage,this.moduleLoadPromise=this.sendRequest("loadModule",[t,r,s,i])}toPdf(e,t){let r;return t&&(r=t.replace("pdf","pdf_").replaceAll("-","_")),this.sendRequest("toPdf",[e,r])}destroy(){var e;null===(e=this.worker)||void 0===e||e.terminate(),this.worker=null}async sendRequest(e,t){(0,o.kG)(this.worker,"GdPictureClient has been destroyed"),this.moduleLoadPromise&&await this.moduleLoadPromise;const r=this.worker;return new Promise(((n,o)=>{const s=this.assignId(),i=[...t].filter((e=>e instanceof ArrayBuffer));r.postMessage({id:s,action:e,args:t},i),this.requests=this.requests.set(s,{resolve:n,reject:o})}))}assignId(){const e=this.nextRequestId;return this.nextRequestId=this.nextRequestId+1,e}};const O=class{constructor(e){let{baseUrl:t,mainThreadOrigin:r,licenseKey:n,customFonts:o}=e;this.gdPicture=new _,this.moduleLoadPromise=this.gdPicture.loadModule(t,r,n,o)}async toPdf(e,t){let r;return this.moduleLoadPromise&&await this.moduleLoadPromise,t&&(r=t.replace("pdf","pdf_").replaceAll("-","_")),this.gdPicture.toPdf(e,r)}destroy(){}}},81414:(e,t,r)=>{e.exports=function(){return r(69855)('/*!\n * PSPDFKit for Web 2023.4.0 (https://pspdfkit.com/web)\n *\n * Copyright (c) 2016-2023 PSPDFKit GmbH. All rights reserved.\n *\n * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW\n * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.\n * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.\n * This notice may not be removed from this file.\n *\n * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/\n */(()=>{"use strict";const e=function e(t){let r;return r=t instanceof Error?t:new Error(t),Object.setPrototypeOf(r,e.prototype),r};e.prototype=Object.create(Error.prototype,{name:{value:"PSPDFKitError",enumerable:!1}});const t=e;function r(e,r){if(!e)throw new t(`Assertion failed: ${r||"Condition not met"}\\n\\nFor further assistance, please go to: https://pspdfkit.com/support/request`)}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}function a(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",\'[tabindex]:not([tabindex^="-"])\'].join(",");new WeakMap;const i="pspdfkit-lib/gdpicture-7a46d8716af33da4a74d2750fe22e8fe32214715",s=`${i}/initDotnet.js`;let f;function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e){e[e.pdf_a_1a=0]="pdf_a_1a",e[e.pdf_a_1b=1]="pdf_a_1b",e[e.pdf_a_2a=2]="pdf_a_2a",e[e.pdf_a_2u=3]="pdf_a_2u",e[e.pdf_a_2b=4]="pdf_a_2b",e[e.pdf_a_3a=5]="pdf_a_3a",e[e.pdf_a_3u=6]="pdf_a_3u",e[e.pdf_a_3b=7]="pdf_a_3b",e[e.pdf_a_4=8]="pdf_a_4",e[e.pdf_a_4e=9]="pdf_a_4e",e[e.pdf_a_4f=10]="pdf_a_4f"}(f||(f={}));const u="/create.pdf",p="/save.pdf",d="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope;let b=null,y=null;function _(e){let t;r(y,"GdPicture WebAssembly is not loaded.");for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];for(const e of o)t=Object.assign(o[0],e);const i=JSON.stringify(l({type:e},t)),s=JSON.parse(y.CommandHandler(i));if(!s.success)throw new Error(s.errorReason+": "+s.errorMessage+"\\n"+s.error);return s}const m=new class{async _mountCustomFonts(e,t){r(b,"WebAssembly module not loaded."),b.FS.mkdir(t);{const r=d?b.FS.filesystems.WORKERFS:b.FS.filesystems.MEMFS;b.FS.mount(r,{blobs:e},t)}}async loadModule(e,t,r,n){const{Assemblies:o,Module:a}=await async function(e){let t;if("string"!=typeof e)throw new Error("GdPicture WASM loader not implemented");return({initDotnet:t}=await import(`${e}${s}`)),t(`${"string"==typeof e?e:e.baseUrl}${i}`)}(e);y=o.GdPictureWasm.API,b=a,_("gdpicture/setLicense",{origin:t},{licenseKey:r||"DEMO_PSPDFKIT_WEB"});const f=n?"/fonts":"";n&&!b.FS.analyzePath(f).exists&&(await this._mountCustomFonts(n,f),_("gdpicture/setFonts",{fontPaths:[f]}))}toPdf(e,t){b.FS.writeFile(u,new Uint8Array(e));const r={file:p};t&&t in f&&(r.conformance=t);try{return _("gdpicture/process",{input:{file:u},output:r}),b.FS.readFile(p).buffer}finally{try{b.FS.unlink(p)}catch(e){}}}},g=self;g.global=g,g.module={},g.onmessage=async e=>{let t,r,{data:n}=e;try{const e=await m[n.action](...n.args);if(t={id:n.id,result:e},Array.isArray(e)){const t=e.filter((e=>e instanceof ArrayBuffer));t.length>0&&(r=t)}e instanceof ArrayBuffer&&(r=[e])}catch(e){const o=[...n.args].filter((e=>e instanceof ArrayBuffer));o.length>0&&(r=o),t={id:n.id,error:e.message||e.toString(),callArgs:n.args}}g.postMessage(t,r)}})();',null)}}}]);