(function(){'use strict';var f;function aa(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var l=aa(this),ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},u={};try{u.__proto__=ca;n=u.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var x=m;
function y(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(x)x(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ha=b.prototype};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var da=this||self;function A(a,b){return a.x*b.x+a.y*b.y}function B(a,b){return C(b,A(a,b))}function C(a,b){return E(a.x*b,a.y*b)}function E(a,b){return{x:a,y:void 0!==b?b:a}};function F(a,b,c){a=parseInt(a.getAttribute(b),10);isNaN(a)&&(a=c);return a}function G(a,b,c){a=parseFloat(a.getAttribute(b));isFinite(a)||(a=c);return a};function H(a,b){return window.setTimeout(a,b)};function I(a,b,c){c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d);return d}function ea(a,b){b=void 0===b?null:b;var c=void 0===c?null:c;H(function(){var d=I("autoplayended",a,b);c&&c(d)},1)}function fa(a,b){function c(d){a.removeEventListener("attached",c);b(d)}a.addEventListener("attached",c)}function ha(a){var b=!1,c=null;return function(){b=!0;c||(b&&(a(),b=!1),c=H(function(){c=null;b&&(a(),b=!1)},250))}};var K=["-ms-","-moz-","-webkit-",""];function L(a,b,c){var d=void 0===d?!1:d;for(var e,k,g=0;g<K.length;g++)e=K[g]+b,k=(d?K[g]:"")+c,a.style.setProperty(e,k)};function M(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")}function ia(a){if(M(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&M(a))return a;return null}function N(a,b,c,d){d=(void 0===d?"":d)||b;a.hasAttribute(b)?(a=a.getAttribute(b),c.setAttribute(d,a)):c.removeAttribute(d)}function ja(a){return(a=a.hasAttribute("exit-urls")?a.getAttribute("exit-urls"):"")?a.split(",").map(function(b){return b.trim()}):[]};function O(a){this.g=a}O.prototype.toString=function(){return this.g.toString()};O.prototype.i=!0;O.prototype.h=function(){return this.g.toString()};var Q;try{new URL("s://g"),Q=!0}catch(a){Q=!1}var ka=Q,la={};function R(a){var b=[];if(a){a=a.split(",");for(var c=0;c<a.length;c++)if(!/^[\s\xa0]*$/.test(a[c])){var d=b,e=d.push;var k=a[c];k=k.trim();k=window.Enabler?window.Enabler.getUrl(k):k;var g=document.createElement("gwd-image");g.setAttribute("source",k);e.call(d,g)}}return b}function S(a,b){for(var c=0;c<a.length;c++){var d=a[c];"gwd-image"==d.tagName.toLowerCase()&&(null!=b?d.setAttribute("scaling",b):d.removeAttribute("scaling"))}}function ma(a,b){return"left"==a||"backwards"==a?-b:b}
function na(a,b){return(a%b+b)%b};function oa(a){var b=a.currentIndex-1;return b-b%a.frameSnapInterval}function pa(a){this.g=a;this.h=null;this.i=!1}
function T(a,b,c,d){c=void 0===c?"forwards":c;if(a.g.frameCount&&null==a.h){if(d){var e=Math.floor(b/d);b=d}else e=a.g.frameCount,b/=e;var k=[],g=oa(a.g);d=g;for(var h=0;h<e;h++)0<h&&(d=na(d+ma(c,1),a.g.frameCount)),k.push(d);c=function(){if(k.length){var q=k.shift();a.i=!0;a.g.goToFrame(q+1);a.i=!1;I("frameautoplayed",a.g,{id:q+1})}else qa(a,!0),a.g.goToFrame(g+1)};a.h=window.setInterval(c,b);setTimeout(c,1)}}
function qa(a,b){b=void 0===b?!1:b;!a.i&&a.h&&(window.clearInterval(a.h),ea(a.g,{completed:b}),a.h=null)};var ra=["pause-front-media","resume-next-media"];function U(){var a=HTMLElement.call(this)||this;a.i=[];a.g=null;a.j=0;a.u=1;a.G=new pa(a);a.ka=!1;a.ma=!1;return a}y(U,HTMLElement);f=U.prototype;f.attributeChangedCallback=function(a,b,c){switch(a){case "pause-front-media":this.ka="true"==c;break;case "resume-next-media":this.ma="true"==c}};f.gwdIsLoaded=function(){return!0};f.gwdLoad=function(){};f.goToFrame=function(a,b){this.stopRotation();0!=this.j&&(a>this.j?a=this.j:1>a&&(a=1),this.ia(a,b))};
f.ia=function(a){this.g=a-1};function sa(a,b,c,d){if(null!=a.g){var e=a.u;e=na(a.g+ma(b,void 0===e?1:e),a.u*Math.ceil(a.j/a.u));!d&&("forwards"==b&&e<a.g||"backwards"==b&&e>a.g)||a.goToFrame(e+1,c)}}f.goBackwards=function(a,b){sa(this,"backwards",void 0===a?"slide":a,void 0===b?!0:b)};f.goForwards=function(a,b){sa(this,"forwards",void 0===a?"slide":a,void 0===b?!0:b)};f.rotateOnce=function(a,b){T(this.G,void 0===a?0:a,b)};f.stopRotation=function(){qa(this.G)};
f.getFrame=function(a){if(0!=this.j)return this.i[a-1]};f.ua=function(a){var b=a.length;a=a.splice(0,b);for(var c=0;c<b;c++){var d=a[c];"frameshown"==d?I(d,this,{id:this.currentIndex}):I(d,this)}};l.Object.defineProperties(U.prototype,{currentIndex:{configurable:!0,enumerable:!0,get:function(){return 0<this.j?this.g+1:void 0}},frameSnapInterval:{configurable:!0,enumerable:!0,get:function(){return this.u}},frameCount:{configurable:!0,enumerable:!0,get:function(){return this.j}}});
l.Object.defineProperties(U,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return ra}}});var ta="images scaling frame-width frame-height frame-snap-interval num-frames-to-display offset start-frame swipe-axis pause-front-media resume-next-media autoplay-duration autoplay-step-interval disable-gesture exit-urls has-navigation navigation-highlight navigation-thumbnails swipe-threshold-ratio swipe-committed-threshold-ratio transition-duration".split(" ");
function V(){var a=U.call(this)||this;a.T=!1;a.h=null;a.U=null;a.P=!1;a.B=E(0);a.C=null;a.s=!1;a.m=null;a.fa=a.Aa.bind(a);a.ha=a.Ca.bind(a);a.ca=a.ya.bind(a);a.ea=a.za.bind(a);a.ga=a.Ba.bind(a);a.Y=a.va.bind(a);a.sa=a.Fa.bind(a);a.ra=a.Ea.bind(a);a.qa=a.Da.bind(a);a.aa=a.wa.bind(a);a.ja=a.xa.bind(a);a.la=ha(a.ta.bind(a));a.O=I.bind(null,"firstinteraction",a);a.V=!1;a.J=[];a.F=a.ua.bind(a,a.J);a.W=0;a.X=0;a.M=0;a.pa=0;a.oa=0;a.S=1;a.N=[];a.R=0;a.na=1;a.Ga=.7;a.K=0;a.L=!1;a.D=E(0);a.A=E(0);a.o=null;
a.ba=-1;a.v=-1;a.Z=[];a.H=E(-1,-1);a.l=E(1,0);a.I=!1;return a}y(V,U);f=V.prototype;
f.connectedCallback=function(){if(!this.I){if(this.P=this.hasAttribute("images"))for(;this.firstChild;)this.removeChild(this.firstChild);var a=document.createElement("gwd-gesture");a.className="gesture";this.C=a;this.I=!0}a=this.C;a.addEventListener("pointerover",this.ha,!1);a.addEventListener("pointerout",this.fa,!1);a.addEventListener("pointermove",this.ca,!1);a.addEventListener("track",this.sa,!1);a.addEventListener("trackend",this.ra,!1);a.addEventListener("tap",this.qa,!1);this.addEventListener("frametap",
this.aa,!1);this.addEventListener("swipefinished",this.da,!1);this.addEventListener("transitionend",this.F,!1);this.addEventListener("webkitTransitionEnd",this.F,!1);this.gwdIsLoaded()||((a=ia(this))?a.gwdIsLoaded()&&this.gwdLoad():this.gwdLoad());window.addEventListener("resize",this.la,!1)};
f.disconnectedCallback=function(){window.removeEventListener("resize",this.la,!1);var a=this.C;a.removeEventListener("pointerover",this.ha,!1);a.removeEventListener("pointerout",this.fa,!1);a.removeEventListener("pointermove",this.ca,!1);a.removeEventListener("track",this.sa,!1);a.removeEventListener("trackend",this.ra,!1);a.removeEventListener("tap",this.qa,!1);this.removeEventListener("frametap",this.aa,!1);this.removeEventListener("swipefinished",this.da,!1);this.removeEventListener("transitionend",
this.F);this.removeEventListener("webkitTransitionEnd",this.F)};
f.attributeChangedCallback=function(a,b,c,d){if(this.I)switch(a){case "images":this.i=R(this.getAttribute("images"));ua(this);W(this);break;case "scaling":S(this.i,this.getAttribute("scaling"));break;case "has-navigation":case "navigation-highlight":case "navigation-thumbnails":va(this);W(this);break;case "transition-duration":case "exit-urls":case "autoplay-duration":case "autoplay-step-interval":X(this);break;case "frame-width":case "frame-height":case "frame-snap-interval":case "num-frames-to-display":case "swipe-axis":X(this);W(this);
break;case "disable-gesture":case "offset":case "start-frame":case "swipe-threshold-ratio":case "swipe-committed-threshold-ratio":W(this);break;default:U.prototype.attributeChangedCallback.call(this,a,b,c,d)}else U.prototype.attributeChangedCallback.call(this,a,b,c,d)};
function X(a){var b=F(a,"num-frames-to-display",1),c=F(a,"frame-snap-interval",1),d=F(a,"transition-duration",600),e=F(a,"frame-width",-1),k=F(a,"frame-height",-1),g=G(a,"autoplay-duration",3E3),h=G(a,"autoplay-step-interval",0);a.H.x=e;a.H.y=k;e="y"===a.getAttribute("swipe-axis");a.l=E(e?0:1,e?1:0);-1!=A(a.H,a.l)?b=-1:0<b&&c>b&&(c=b);a.Z=ja(a);a.v=b;a.u=c;a.M=d;a.W=g;a.X=h}
function W(a){var b=E(a.clientWidth,a.clientHeight);a.o&&(b.y-=36,a.U.style.height=b.y+"px");var c=G(a,"swipe-threshold-ratio",.1),d=G(a,"swipe-committed-threshold-ratio",.5),e=a.l,k=a.v,g=a.H,h=a.i,q=parseInt(a.getAttribute("offset"),10);isNaN(q)&&(q=0);q=C(e,q);g=E(-1==g.x?b.x:g.x,-1==g.y?b.y:g.y);if(a.hasAttribute("offset")){a:{var r=g.x,p=g.y,z=!0;if(a.hasAttribute("clamp-frame-size-to-image")){var v=a.getAttribute("clamp-frame-size-to-image");"true"==v?z=!0:"false"==v&&(z=!1)}if(z)if(v=a.hasAttribute("scaling")?
a.getAttribute("scaling"):"contain",z="contain"==v,!z&&"none"!=v||0==r||0==p)h={width:r,height:p};else{for(var J=v=-1,za=h.length,P=0;P<za;P++){var t=h[P];if("img"!=t.tagName.toLowerCase()&&"gwd-image"!=t.tagName.toLowerCase()){h={width:r,height:p};break a}var w=t.assetWidth?t.assetWidth:t.naturalWidth,D=t.assetHeight?t.assetHeight:t.naturalHeight;0<w&&0<D&&(z?w/D<r/p?(t=w/D*p,w=p):(t=r,w=D/w*r):(t=w,w=D),v=Math.max(v,t),J=Math.max(J,w))}h={width:-1!=v?Math.min(r,v):r,height:-1!=J?Math.min(p,J):p}}else h=
{width:r,height:p}}1==e.x?g.x=h.width:g.y=h.height}1<k&&(h=C(e,k-1),h=E(h.x*q.x,h.y*q.y),h=B(E((b.x-h.x)/k,(b.y-h.y)/k),e),h.x&&(g.x=h.x),h.y&&(g.y=h.y));h=2<k?1+Math.ceil(k/2-1):1;r=parseInt(a.getAttribute("start-frame"),10);isNaN(r)&&(r=h);h=B(E(g.x+q.x,g.y+q.y),e);p=1+2*Math.floor((A(e,b)-A(e,g))/(2*A(e,h)));if(1>p||!isFinite(p))p=1;b=E((b.x-g.x)/2,(b.y-g.y)/2);0<k&&0==k%2&&(e=B(E(g.x+q.x,g.y+q.y),e),b.x-=.5*e.x,b.y-=.5*e.y,p+=1);e=a.hasAttribute("disable-gesture");a.A=g;a.D=b;a.S=p;a.K=A(h,a.l);
a.na=r;a.s=e;a.pa=A(a.A,a.l)*c;a.oa=A(a.A,a.l)*d;c=B(a.D,E(a.l.y,a.l.x));for(e=0;e<a.j;e++)d=a.i[e].style,d.left=c.x+"px",d.top=c.y+"px",d.width=a.A.x+"px",d.height=a.A.y+"px",c.x+=h.x,c.y+=h.y;a.B=E(0);a.h&&(Y(a,0,0,0),c=B(a.D,a.l),a.h.style.left=c.x+"px",a.h.style.top=c.y+"px");a.g=null;a.goToFrame(a.na,"none")}f.gwdIsLoaded=function(){return this.T};
f.gwdLoad=function(){if(!this.T&&!this.h){if(this.P)var a=R(this.getAttribute("images"));else{a=this.childNodes;for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];e.nodeType==Node.ELEMENT_NODE&&b.push(e)}a=b}this.i=a;ua(this)}};f.goBackwards=function(a,b){return U.prototype.goBackwards.call(this,a,void 0===b?!1:b)};f.goForwards=function(a,b){return U.prototype.goForwards.call(this,a,void 0===b?!1:b)};
f.ia=function(a,b){var c=this.u;var d=this.j;var e=this.v;--a;a=a-a%c+Math.floor((c-1)/2);0>a?a=0:a>=d&&(a=d-1);1<e&&(c=a-Math.floor((e-1)/2),e=c+e-1,0>c&&e<d-1&&(a+=Math.min(-c,d-e-1)),e>=d&&0<c&&(a-=Math.min(e-d+1,c)));d=a;if(null!=this.g&&this.g!=d){if(this.ka)for(e=Array.prototype.slice.call(this.i[this.g].querySelectorAll("video, gwd-youtube, audio,gwd-video,gwd-audio")),a=0;a<e.length;a++)c=e[a],c.pause&&c.pause();if(this.ma)for(e=Array.prototype.slice.call(this.i[d].querySelectorAll("video, gwd-youtube, audio,gwd-video,gwd-audio")),
a=0;a<e.length;a++)c=e[a],c.play&&c.play()}e=this.g;this.g=d;d=C(this.l,-this.K*this.g);Y(this,"none"!=b?this.M:0,d.x,d.y);this.B=d;if(this.R)for(b=Math.floor((this.S-1)/2),d=0;d<this.S;d++)if(a=this.g-b+d,!(0>a||a>=this.j||this.N[a]||(this.N[a]=!0,--this.R))){this.J.push("allframesviewed");break}e!=this.g&&(wa(this,this.g+1),this.J.push("frameshown"),this.J.push("swipefinished"));this.V||this.F()};
function Y(a,b,c,d){a.V=0<b;L(a.h,"transition","transform "+b+"ms");L(a.h,"transform","translate3d("+c+"px,"+d+"px,0)")}
function ua(a){if(a.I){for(;a.firstChild;)a.removeChild(a.firstChild);a.o=null;a.h&&(a.h.removeEventListener("pageload",a.ja,!1),a.h.removeEventListener("mouseover",a.ga,!0),a.h.removeEventListener("mouseout",a.ea,!0),a.h.removeEventListener("click",a.Y,!0));for(var b=a.i,c=document.createElement("gwd-page"),d=0;d<b.length;d++){var e=b[d];L(e,"user-select","none");e.classList.add("frame");c.appendChild(e)}fa(c,c.gwdLoad.bind(c));a.h=c;a.h.className="container";a.h.addEventListener("pageload",a.ja,
!1);a.h.addEventListener("mouseover",a.ga,!0);a.h.addEventListener("mouseout",a.ea,!0);a.h.addEventListener("click",a.Y,!0);S(a.i,a.getAttribute("scaling"));a.j=a.i.length;b=a.ownerDocument.createElement("div");a.U=b;b.className="matte";b.appendChild(a.h);a.appendChild(a.U);a.appendChild(a.C)}}f.da=function(){L(this.h,"transition","transform 0ms")};
f.xa=function(a){a.target===this.h&&(this.T=!0,this.R=this.j,this.N=[],X(this),va(this),W(this),I("allframesloaded",this),this.hasAttribute("autoplay")&&T(this.G,this.W,"forwards",this.X),I("ready",this))};f.ta=function(){X(this);W(this)};f.rotateOnce=function(a,b){T(this.G,a||this.M,b)};function xa(a,b){var c=a.j;if(c){var d=a.g;b=ya(a,b);a.goToFrame(b+1);d!=b&&(0==b?I("reachleftend",a):b==c-1&&I("reachrightend",a))}}
function va(a){var b=a.hasAttribute("has-navigation"),c=!!a.o;b&&!c?(b=a.id||a.getAttribute("data-gwd-grp-id"),a.o=a.ownerDocument.createElement("gwd-gallerynavigation"),a.o.setAttribute("for",b),a.classList.add("has-navigation"),a.appendChild(a.o)):!b&&c&&(a.classList.remove("has-navigation"),a.removeChild(a.o),a.o=null);a.o&&(N(a,"navigation-highlight",a.o,"highlight"),N(a,"navigation-thumbnails",a.o,"use-thumbnails"))}
function ya(a,b){var c=a.g;Math.abs(b)>a.pa&&(c=0>b?c+a.u:c-a.u);0>c?c=0:c>=a.j&&(c=a.j-1);return c}function wa(a,b){a.ba!=b&&(a.ba=b,I("frameactivated",a,{id:b||a.currentIndex}))}f.Fa=function(a){if(!this.s&&(this.O&&(this.O(),this.O=null),!this.L))if(this.stopRotation(),a=A(E(a.dx,a.dy),this.l),wa(this,ya(this,a)+1),Math.abs(a)>this.oa)xa(this,a),this.L=!0;else{var b=a;if(0<a&&0===this.g||0>a&&this.g===this.j-1)b-=a*this.Ga;Y(this,0,this.B.x+this.l.x*b,this.B.y+this.l.y*b)}};
f.Ea=function(a){this.s||(this.L?this.L=!1:xa(this,A(E(a.dx,a.dy),this.l)))};function Z(a,b){var c=a.getBoundingClientRect();b=E(b.clientX-c.left,b.clientY-c.top);c=a.l;var d=E(c.y,c.x);c=A(d,b);var e=A(d,a.D);d=A(d,a.A);if(c<e||c>e+d)return null;c=a.l;b=A(c,b)-A(c,a.B)-A(c,a.D);c=Math.floor(b/a.K);return 0>c||c>=a.j||b%a.K>A(a.l,a.A)?null:c}
f.Da=function(a){if(!this.s){this.stopRotation();var b=this.C;var c=this.h;var d=a.clientX,e=a.clientY,k=b.style["pointer-events"];b.style["pointer-events"]="none";d=c.ownerDocument.elementFromPoint(d,e);b.style["pointer-events"]=k;if(b=d)if(c.contains&&1==d.nodeType)b=c==d||c.contains(d);else if("undefined"!=typeof c.compareDocumentPosition)b=c==d||!!(c.compareDocumentPosition(d)&16);else{for(b=d;b&&c!=b;)b=b.parentNode;b=b==c}c=b?d:null;(b=!c)||(b=a.clientX,k=a.clientY,d=!1,"gwd-taparea"===c.tagName.toLowerCase()&&
(d=c.ownerDocument.createEvent("Event"),d.initEvent("action",!0,!0),d.clientX=b,d.clientY=k,d=!c.dispatchEvent(d)),b=!d);b&&(a=Z(this,a),null!=a&&I("frametap",this,{element:this.i[a],id:a+1}))}};
f.wa=function(a){if((a=a.detail&&a.detail.id)&&(a=this.Z[a-1])&&!I("frameexit",this,{url:a}).detail.handled){if(!(a instanceof O||a instanceof O)){a="object"==typeof a&&a.i?a.h():String(a);b:{var b=a;if(ka){try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}}"javascript:"===c&&(a="about:invalid#zClosurez");a=new O(a,la)}da.open(a instanceof O&&a.constructor===O?a.g:"type_error:SafeUrl",
"")}};f.Aa=function(){this.s||null==this.m||(I("framemouseout",this,{element:this.i[this.m],id:1+this.m}),this.m=null)};f.Ca=function(a){this.s||(a=Z(this,a),a!=this.m&&(null!=this.m&&I("framemouseout",this,{element:this.i[this.m],id:1+this.m}),null!=a&&I("framemouseover",this,{element:this.i[a],id:1+a}),this.m=a))};
f.ya=function(a){this.s||(a=Z(this,a),a!=this.m&&(null!=this.m&&I("framemouseout",this,{element:this.i[this.m],id:1+this.m}),null!=a&&I("framemouseover",this,{element:this.i[a],id:1+a}),this.m=a))};f.Ba=function(a){this.s&&a.target.classList.contains("frame")&&I("framemouseover",this,{element:a.target,id:1+this.i.indexOf(a.target)})};f.za=function(a){this.s&&a.target.classList.contains("frame")&&I("framemouseout",this,{element:a.target,id:1+this.i.indexOf(a.target)})};
f.va=function(a){this.s&&a.target.classList.contains("frame")&&I("frametap",this,{element:a.target,id:1+this.i.indexOf(a.target)})};
l.Object.defineProperties(V.prototype,{firstVisibleFrameIndex:{configurable:!0,enumerable:!0,get:function(){var a=0<this.v&&0<this.j&&null!=this.g?Math.max(1,this.g-Math.floor((this.v-1)/2)+1):void 0;return a}},lastVisibleFrameIndex:{configurable:!0,enumerable:!0,get:function(){var a=0<this.v&&0<this.j&&null!=this.g?Math.min(this.j,this.g-Math.floor((this.v-1)/2)+this.v):void 0;return a}}});l.Object.defineProperties(V,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return ta}}});
customElements.define("gwd-swipegallery",V);}).call(this);