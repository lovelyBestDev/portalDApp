(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{102:function(e,t,n){},105:function(e,t){},112:function(e,t){},116:function(e,t,n){e.exports=n.p+"static/media/MM.4b5363f6.png"},117:function(e,t,n){e.exports=n.p+"static/media/WC.8557551d.png"},120:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),o=n(77),i=n.n(o),l=n(54),c=n(25),u=n(31),s=n(447),m=n(448),p=n(10),h=n(199),f=n(47),d=n(75),v=n(78),y=(n(102),[{inputs:[{internalType:"address",name:"_to",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"getAllHistory",outputs:[{components:[{internalType:"string",name:"fullName",type:"string"},{internalType:"address",name:"wallet",type:"address"},{internalType:"string",name:"telegram",type:"string"},{internalType:"string",name:"twitter",type:"string"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"txn",type:"string"}],internalType:"struct portalContract.HistoryInfo[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"_txn",type:"string"}],name:"putNewHistory",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_fullName",type:"string"},{internalType:"string",name:"_telName",type:"string"},{internalType:"string",name:"_twiName",type:"string"}],name:"transfer",outputs:[],stateMutability:"payable",type:"function"}]),g=n(79),E=n(80),w=(n(104),{injected:new g.a({supportedChainIds:[56,97]}),walletConnect:new E.a({rpcUrl:"https://mainnet.infura.io/v3/".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).INFURA_KEY),bridge:"https://bridge.walletconnect.org",qrcode:!0})}),B=function(e){return a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"header-text"},"Portal Dapp"),a.a.createElement("div",{className:"btn-init btn-connectWallet",onClick:function(){return e.connectWallet()}},"Connect Wallet"))},N=function(e){return a.a.createElement("select",{id:"amount",className:"select",value:e.amount,onChange:function(t){return e.changeValue(t)}},a.a.createElement("option",{value:"BNB_0.5"},"0.5 BNB"),a.a.createElement("option",{value:"BNB_0.75"},"0.75 BNB"),a.a.createElement("option",{value:"BNB_1"},"1 BNB"),a.a.createElement("option",{value:"BNB_1.25"},"1.25 BNB"),a.a.createElement("option",{value:"BNB_1.5"},"1.5 BNB"),a.a.createElement("option",{value:"BNB_1.75"},"1.75 BNB"),a.a.createElement("option",{value:"BNB_2"},"2 BNB"),a.a.createElement("option",{value:"BNB_2.25"},"2.25 BNB"),a.a.createElement("option",{value:"BNB_2.5"},"2.5 BNB"),a.a.createElement("option",{value:"BNB_2.75"},"2.75 BNB"),a.a.createElement("option",{value:"BNB_3"},"3 BNB"),a.a.createElement("option",{value:"BNB_3.25"},"3.25 BNB"),a.a.createElement("option",{value:"BNB_3.5"},"3.5 BNB"),a.a.createElement("option",{value:"BNB_3.75"},"3.75 BNB"),a.a.createElement("option",{value:"BNB_4"},"4 BNB"),a.a.createElement("option",{value:"BNB_4.25"},"4.25 BNB"),a.a.createElement("option",{value:"BNB_4.5"},"4.5 BNB"),a.a.createElement("option",{value:"BNB_4.75"},"4.75 BNB"),a.a.createElement("option",{value:"BNB_5"},"5 BNB"))},b=function(e){return a.a.createElement("div",{className:"input-board"},a.a.createElement("input",{className:"input-init",type:"text",placeholder:"Full Name (Required)",id:"fullName",value:e.fullName,onChange:function(t){return e.changeValue(t)}}),a.a.createElement("input",{className:"input-init",type:"text",placeholder:"Telegram Username (Optional)",id:"telegram",value:e.telegram,onChange:function(t){return e.changeValue(t)}}),a.a.createElement("input",{className:"input-init",type:"text",placeholder:"Twitter Username (Optional)",id:"twitter",value:e.twitter,onChange:function(t){return e.changeValue(t)}}),a.a.createElement(N,{amount:e.amount,changeValue:function(t){return e.changeValue(t)}}),a.a.createElement("div",{className:"btn-init btn-submit",onClick:function(){e.submit()}},"Submit"))},x=function(e){return a.a.createElement("div",{className:"middle"},a.a.createElement("div",{className:"middle-text-1"},"Portal Dapp"),a.a.createElement("div",{className:"middle-text-2"},"Invest",a.a.createElement("br",null),"Track",a.a.createElement("br",null),"Network"),a.a.createElement("div",{className:"middle-text-2"},"Invest"),a.a.createElement("div",{className:"middle-text-3"},"Launching Q4 2022"),a.a.createElement("div",{className:"middle-text-4"},"Private Sale | Seed Round 1"),a.a.createElement(b,{fullName:e.fullName,telegram:e.telegram,twitter:e.twitter,amount:e.amount,submit:function(){e.submit()},changeValue:function(t){e.changeValue(t)}}))},_=n(445),L=function(e){return a.a.createElement("div",{className:"display-table"},a.a.createElement("div",{className:"table-board"},a.a.createElement(_.a,{style:{width:"100%"}},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{style:{width:"3%"}},"#"),a.a.createElement("th",{style:{width:"12%"}},"Name"),a.a.createElement("th",{style:{width:"32%"}},"Wallet Address"),a.a.createElement("th",{style:{width:"12%"}},"Telegram"),a.a.createElement("th",{style:{width:"11%"}},"Twitter"),a.a.createElement("th",{style:{width:"9%"}},"Amount"),a.a.createElement("th",{style:{width:"20%"}},"Txn"))),a.a.createElement("tbody",null,e.history.length>0?e.history.map(function(e,t){if(t<4){var n=e.wallet_address;n=n.slice(0,11)+" ..... "+n.slice(37);var r=e.txn;return r=r.slice(0,11)+" ..... "+r.slice(62),a.a.createElement("tr",null,a.a.createElement("td",null,t+1),a.a.createElement("td",null,e.name),a.a.createElement("td",null,n),a.a.createElement("td",null,e.telegram),a.a.createElement("td",null,e.twitter),a.a.createElement("td",null,e.amount),a.a.createElement("td",null,r))}}):null))))},O=function(e){return a.a.createElement("div",{className:"footer"},a.a.createElement("div",{className:"footer-text"},"Private Sale | Seed Round 1 Investors"),a.a.createElement(L,{history:e.history}))};function j(){j=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new b(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return _()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=w(i,n);if(l){if(l===s)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=c;var s={};function m(){}function p(){}function h(){}var f={};l(f,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(x([])));v&&v!==t&&n.call(v,a)&&(f=v);var y=h.prototype=m.prototype=Object.create(f);function g(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,l){var c=u(e[a],e,o);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,i,l)},function(e){r("throw",e,i,l)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,l)})}l(c.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function B(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function b(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(B,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=h,l(y,"constructor",h),l(h,"constructor",p),p.displayName=l(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(E.prototype),l(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(c(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),l(y,i,"Generator"),l(y,a,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,b.prototype={constructor:b,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var T=function(){var e=Object(d.b)(),t=e.chainId,o=e.account,i=e.activate,g=e.active,E=e.library,N=Object(v.a)(["getBalance",o,"latest"],{fetcher:function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[0],o=n.slice(1);return e[a].apply(e,Object(u.a)(o))}}(E)}).data,b=window.ethereum,_=Object(r.useState)(""),L=Object(c.a)(_,2),T=L[0],k=L[1],C=Object(r.useState)("-"),S=Object(c.a)(C,2),P=S[0],F=S[1],I=Object(r.useState)("-"),M=Object(c.a)(I,2),A=M[0],V=M[1],W=Object(r.useState)(.5),G=Object(c.a)(W,2),H=G[0],R=G[1],U=Object(r.useState)([]),Y=Object(c.a)(U,2),D=Y[0],q=Y[1],J=Object(r.useState)(!1),K=Object(c.a)(J,2),Q=K[0],z=K[1],X=new p.providers.Web3Provider(b).getSigner(),Z=new h.b("0x235EeA8771A7185c29175a9Cf3379C641B3B28a0",y,X);console.log(g,t,o);var $=function(){var e=Object(l.a)(j().mark(function e(){var n;return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==(""===T?(console.log("You did not enter your full name"),!1):b?""===o?(console.log("The wallet is not connected."),!1):97!==t?(console.log("Make sure that you selected binance test net"),!1):!(parseFloat(f.a.utils.formatEther(N)).toPrecision(6)<parseFloat(H))||(console.log("Your balance is not enough."),!1):(console.log("Make sure you have Metamask installed!"),!1))){e.next=9;break}return e.next=3,Z.transfer(T,P,A,{value:f.a.utils.parseEther("0.001")});case 3:return n=e.sent,e.next=6,n.wait();case 6:return e.next=8,Z.putNewHistory(n.hash);case 8:ee();case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(l.a)(j().mark(function e(){var t,n,r;return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.getAllHistory();case 2:for(t=e.sent,console.log(t),n=[],r=0;r<t.length;r++)n.push({name:t[r].fullName,wallet_address:t[r].wallet,telegram:"@"+t[r].telegram,twitter:"@"+t[r].twitter,amount:f.a.utils.formatEther(t[r].amount),txn:t[r].txn});q(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){o&&t&&97===t&&ee()},[o,t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(B,{connectWallet:function(){z(!0)}}),a.a.createElement(x,{fullName:T,telegram:"-"!==P?P:"",twitter:"-"!==A?A:"",amount:"BNB_"+H,submit:$,changeValue:function(e){switch(e.target.id){case"fullName":k(e.target.value);break;case"telegram":F(e.target.value);break;case"twitter":V(e.target.value);break;case"amount":R(e.target.value.split("_")[1])}}}),a.a.createElement(O,{history:D}),a.a.createElement(s.a,{className:"connectWalletModal",show:Q,onHide:function(){z(!1)}},a.a.createElement(s.a.Header,{closeButton:!0},a.a.createElement(s.a.Title,null,"Connect a wallet")),a.a.createElement(s.a.Body,null,a.a.createElement(m.a,{className:"walletButton",onClick:function(){i(w.injected),z(!1)}},a.a.createElement("img",{src:n(116),height:"30px",width:"30px",style:{marginRight:"20px"}}),"Metamask"),a.a.createElement(m.a,{className:"walletButton",onClick:function(){i(w.walletConnect),z(!1)}},a.a.createElement("img",{src:n(117),height:"40px",width:"40px"}),"Wallet Connect"))))};var k=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,null))},C=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,446)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})};n(118);i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d.a,{getLibrary:function(e){var t=new f.a.providers.Web3Provider(e);return t.pollingInterval=8e3,t}},a.a.createElement(k,null)))),C()},95:function(e,t,n){e.exports=n(120)}},[[95,8,6]]]);
//# sourceMappingURL=main.503ec498.chunk.js.map