function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8/JR":function(e,t,n){"use strict";var r=n("8T9/"),o=n("Ibf7");e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var r=arguments.length;if(1===r)delete i[t];else if(0===r)i={};else{var o=i[t];if(!o)return e;o.splice(o.indexOf(n),1)}return e},e.emit=function(){var t=r(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var a=(i[t]||[]).slice(0);return function(){var i=r(arguments),c=this||e;if("error"===t&&!1!==n.throws&&!a.length)throw 1===i.length?i[0]:i;return a.forEach((function(r){n.async?o(r,i,c):r.apply(c,i),r._once&&e.off(t,r)})),e}},e}},"8T9/":function(e,t){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},Gjsa:function(e,t){var n="function"==typeof setImmediate;e.exports=n?function(e){setImmediate(e)}:function(e){setTimeout(e,0)}},Ibf7:function(e,t,n){"use strict";var r=n("Gjsa");e.exports=function(e,t,n){e&&r((function(){e.apply(n||null,t||[])}))}},KRns:function(e,t){var n=global.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(t){}return!1}()?n:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}},PzH3:function(e,t,n){"use strict";var r=n("KRns"),o=n("Ys8N"),i=global.document,a=function(e,t,n,r){return e.addEventListener(t,n,r)},c=function(e,t,n,r){return e.removeEventListener(t,n,r)},l=[];function u(e,t,n){var r=function(e,t,n){var r,o;for(r=0;r<l.length;r++)if((o=l[r]).element===e&&o.type===t&&o.fn===n)return r}(e,t,n);if(r){var o=l[r].wrapper;return l.splice(r,1),o}}global.addEventListener||(a=function(e,t,n){return e.attachEvent("on"+t,function(e,t,n){var r=u(e,t,n)||function(e,t,n){return function(t){var r=t||global.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,n.call(e,r)}}(e,0,n);return l.push({wrapper:r,element:e,type:t,fn:n}),r}(e,t,n))},c=function(e,t,n){var r=u(e,t,n);if(r)return e.detachEvent("on"+t,r)}),e.exports={add:a,remove:c,fabricate:function(e,t,n){var a=-1===o.indexOf(t)?new r(t,{detail:n}):function(){var e;return i.createEvent?(e=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(e=i.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+t,a)}}},YS7c:function(e,t,n){"use strict";var r=n("8/JR"),o=n("PzH3"),i=n("n6yW"),a=document,c=a.documentElement;function l(e,t,n,r){global.navigator.pointerEnabled?o[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],r):global.navigator.msPointerEnabled?o[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],r):(o[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],r),o[t](e,n,r))}function u(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function d(e){var t=e.getBoundingClientRect();return{left:t.left+s("scrollLeft","pageXOffset"),top:t.top+s("scrollTop","pageYOffset")}}function s(e,t){return void 0!==global[t]?global[t]:c.clientHeight?c[e]:a.body[e]}function f(e,t,n){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=a.elementFromPoint(t,n),o.className=i,r}function g(){return!1}function h(){return!0}function p(e){return e.width||e.right-e.left}function v(e){return e.height||e.bottom-e.top}function m(e){return e.parentNode===a?null:e.parentNode}function b(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){return!!t&&"false"!==t.contentEditable&&("true"===t.contentEditable||e(m(t)))}(e)}function y(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function C(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in n)&&r[e]in n&&(e=r[e]),n[e]}e.exports=function(e,t){var n,s,k,M,O,x,_,w,E,P,S,T=arguments.length;1===T&&!1===Array.isArray(e)&&(t=e,e=[]);var D,I=null,A=t||{};void 0===A.moves&&(A.moves=h),void 0===A.accepts&&(A.accepts=h),void 0===A.invalid&&(A.invalid=V),void 0===A.containers&&(A.containers=e||[]),void 0===A.isContainer&&(A.isContainer=g),void 0===A.copy&&(A.copy=!1),void 0===A.copySortSource&&(A.copySortSource=!1),void 0===A.revertOnSpill&&(A.revertOnSpill=!1),void 0===A.removeOnSpill&&(A.removeOnSpill=!1),void 0===A.direction&&(A.direction="vertical"),void 0===A.ignoreInputTextSelection&&(A.ignoreInputTextSelection=!0),void 0===A.mirrorContainer&&(A.mirrorContainer=a.body);var L=r({containers:A.containers,start:X,end:J,cancel:Q,remove:Z,destroy:Y,canMove:$,dragging:!1});return!0===A.removeOnSpill&&L.on("over",oe).on("out",ie),N(),L;function U(e){return-1!==L.containers.indexOf(e)||A.isContainer(e)}function N(e){var t=e?"remove":"add";l(c,t,"mousedown",B),l(c,t,"mouseup",z)}function R(e){l(c,e?"remove":"add","mousemove",F)}function H(e){var t=e?"remove":"add";o[t](c,"selectstart",j),o[t](c,"click",j)}function Y(){N(!0),z({})}function j(e){D&&e.preventDefault()}function B(e){if(x=e.clientX,_=e.clientY,1===u(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,n=W(t);n&&(D=n,R(),"mousedown"===e.type&&(b(t)?t.focus():e.preventDefault()))}}function F(e){if(D)if(0!==u(e)){if(void 0===e.clientX||e.clientX!==x||void 0===e.clientY||e.clientY!==_){if(A.ignoreInputTextSelection){var t=C("clientX",e),n=C("clientY",e);if(b(a.elementFromPoint(t,n)))return}var r=D;R(!0),H(),J(),G(r);var o=d(k);M=C("pageX",e)-o.left,O=C("pageY",e)-o.top,i.add(P||k,"gu-transit"),ae(),re(e)}}else z({})}function W(e){if(!(L.dragging&&n||U(e))){for(var t=e;m(e)&&!1===U(m(e));){if(A.invalid(e,t))return;if(!(e=m(e)))return}var r=m(e);if(r&&!A.invalid(e,t)&&A.moves(e,r,t,y(e)))return{item:e,source:r}}}function $(e){return!!W(e)}function X(e){var t=W(e);t&&G(t)}function G(e){de(e.item,e.source)&&(P=e.item.cloneNode(!0),L.emit("cloned",P,e.item,"copy")),s=e.source,k=e.item,w=E=y(e.item),L.dragging=!0,L.emit("drag",k,s)}function V(){return!1}function J(){if(L.dragging){var e=P||k;q(e,m(e))}}function K(){D=!1,R(!0),H(!0)}function z(e){if(K(),L.dragging){var t=P||k,r=C("clientX",e),o=C("clientY",e),i=ne(f(n,r,o),r,o);i&&(P&&A.copySortSource||!P||i!==s)?q(t,i):A.removeOnSpill?Z():Q()}}function q(e,t){var n=m(e);P&&A.copySortSource&&t===s&&n.removeChild(k),te(t)?L.emit("cancel",e,s,s):L.emit("drop",e,t,s,E),ee()}function Z(){if(L.dragging){var e=P||k,t=m(e);t&&t.removeChild(e),L.emit(P?"cancel":"remove",e,t,s),ee()}}function Q(e){if(L.dragging){var t=arguments.length>0?e:A.revertOnSpill,n=P||k,r=m(n),o=te(r);!1===o&&t&&(P?r&&r.removeChild(P):s.insertBefore(n,w)),o||t?L.emit("cancel",n,s,s):L.emit("drop",n,r,s,E),ee()}}function ee(){var e=P||k;K(),ce(),e&&i.rm(e,"gu-transit"),S&&clearTimeout(S),L.dragging=!1,I&&L.emit("out",e,I,s),L.emit("dragend",e),s=k=P=w=E=S=I=null}function te(e,t){var r;return r=void 0!==t?t:n?E:y(P||k),e===s&&r===w}function ne(e,t,n){for(var r=e;r&&!o();)r=m(r);return r;function o(){if(!1===U(r))return!1;var o=le(r,e),i=ue(r,o,t,n);return!!te(r,i)||A.accepts(k,r,s,i)}}function re(e){if(n){e.preventDefault();var t=C("clientX",e),r=C("clientY",e),o=r-O;n.style.left=t-M+"px",n.style.top=o+"px";var i=P||k,a=f(n,t,r),c=ne(a,t,r),l=null!==c&&c!==I;(l||null===c)&&(I&&h("out"),I=c,l&&h("over"));var u=m(i);if(c!==s||!P||A.copySortSource){var d,g=le(c,a);if(null!==g)d=ue(c,g,t,r);else{if(!0!==A.revertOnSpill||P)return void(P&&u&&u.removeChild(i));d=w,c=s}(null===d&&l||d!==i&&d!==y(i))&&(E=d,c.insertBefore(i,d),L.emit("shadow",i,c,s))}else u&&u.removeChild(i)}function h(e){L.emit(e,i,I,s)}}function oe(e){i.rm(e,"gu-hide")}function ie(e){L.dragging&&i.add(e,"gu-hide")}function ae(){if(!n){var e=k.getBoundingClientRect();(n=k.cloneNode(!0)).style.width=p(e)+"px",n.style.height=v(e)+"px",i.rm(n,"gu-transit"),i.add(n,"gu-mirror"),A.mirrorContainer.appendChild(n),l(c,"add","mousemove",re),i.add(A.mirrorContainer,"gu-unselectable"),L.emit("cloned",n,k,"mirror")}}function ce(){n&&(i.rm(A.mirrorContainer,"gu-unselectable"),l(c,"remove","mousemove",re),m(n).removeChild(n),n=null)}function le(e,t){for(var n=t;n!==e&&m(n)!==e;)n=m(n);return n===c?null:n}function ue(e,t,n,r){var o,i="horizontal"===A.direction;return t!==e?(o=t.getBoundingClientRect(),(i?n>o.left+p(o)/2:r>o.top+v(o)/2)?y(t):t):function(){var t,o,a,c=e.children.length;for(t=0;t<c;t++){if(a=(o=e.children[t]).getBoundingClientRect(),i&&a.left+a.width/2>n)return o;if(!i&&a.top+a.height/2>r)return o}return null}()}function de(e,t){return"boolean"==typeof A.copy?A.copy:A.copy(e,t)}}},Ys8N:function(e,t,n){"use strict";var r=[],o="",i=/^on/;for(o in global)i.test(o)&&r.push(o.slice(2));e.exports=r},a1rO:function(e,t,n){"use strict";n.r(t);var r,o,i,a=n("ofXK"),c=n("tyNb"),l=n("YS7c"),u=n.n(l),d=n("fXoL"),s=n("XNiG"),f=n("quSY"),g=n("pLZG"),h=n("lJxs"),p=function e(t,n,r){_classCallCheck(this,e),this.name=t,this.drake=n,this.options=r,this.initEvents=!1},v={Cancel:"cancel",Cloned:"cloned",Drag:"drag",DragEnd:"dragend",Drop:"drop",Out:"out",Over:"over",Remove:"remove",Shadow:"shadow",DropModel:"dropModel",RemoveModel:"removeModel"},m=Object.keys(v).map((function(e){return v[e]})),b=u.a||l,y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;_classCallCheck(this,e),this.build=t},C=function(e,t,n){return function(r){return r.pipe(Object(g.a)((function(n){var r=n.event,o=n.name;return r===e&&(void 0===t||o===t)})),Object(h.a)((function(e){var t=e.name,r=e.args;return n(t,r)})))}},k=function(e,t){var n=_slicedToArray(t,3);return{name:e,el:n[0],container:n[1],source:n[2]}},M=((i=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;_classCallCheck(this,e),this.drakeFactory=n,this.dispatch$=new s.a,this.drag=function(e){return t.dispatch$.pipe(C(v.Drag,e,(function(e,t){var n=_slicedToArray(t,2);return{name:e,el:n[0],source:n[1]}})))},this.dragend=function(e){return t.dispatch$.pipe(C(v.DragEnd,e,(function(e,t){return{name:e,el:_slicedToArray(t,1)[0]}})))},this.drop=function(e){return t.dispatch$.pipe(C(v.Drop,e,(function(e,t){var n=_slicedToArray(t,4);return{name:e,el:n[0],target:n[1],source:n[2],sibling:n[3]}})))},this.elContainerSource=function(e){return function(n){return t.dispatch$.pipe(C(e,n,k))}},this.cancel=this.elContainerSource(v.Cancel),this.remove=this.elContainerSource(v.Remove),this.shadow=this.elContainerSource(v.Shadow),this.over=this.elContainerSource(v.Over),this.out=this.elContainerSource(v.Out),this.cloned=function(e){return t.dispatch$.pipe(C(v.Cloned,e,(function(e,t){var n=_slicedToArray(t,3);return{name:e,clone:n[0],original:n[1],cloneType:n[2]}})))},this.dropModel=function(e){return t.dispatch$.pipe(C(v.DropModel,e,(function(e,t){var n=_slicedToArray(t,9);return{name:e,el:n[0],target:n[1],source:n[2],sibling:n[3],item:n[4],sourceModel:n[5],targetModel:n[6],sourceIndex:n[7],targetIndex:n[8]}})))},this.removeModel=function(e){return t.dispatch$.pipe(C(v.RemoveModel,e,(function(e,t){var n=_slicedToArray(t,6);return{name:e,el:n[0],container:n[1],source:n[2],item:n[3],sourceModel:n[4],sourceIndex:n[5]}})))},this.groups={},null===this.drakeFactory&&(this.drakeFactory=new y)}return _createClass(e,[{key:"add",value:function(e){if(this.find(e.name))throw new Error('Group named: "'+e.name+'" already exists.');return this.groups[e.name]=e,this.handleModels(e),this.setupEvents(e),e}},{key:"find",value:function(e){return this.groups[e]}},{key:"destroy",value:function(e){var t=this.find(e);t&&(t.drake&&t.drake.destroy(),delete this.groups[e])}},{key:"createGroup",value:function(e,t){return this.add(new p(e,this.drakeFactory.build([],t),t))}},{key:"handleModels",value:function(e){var t,n,r,o=this,i=e.name,a=e.drake,c=e.options;a.on("remove",(function(e,t,r){if(a.models){var c=a.models[a.containers.indexOf(r)],l=(c=c.slice(0)).splice(n,1)[0];o.dispatch$.next({event:v.RemoveModel,name:i,args:[e,t,r,l,c,n]})}})),a.on("drag",(function(e,r){a.models&&(t=e,n=o.domIndexOf(e,r))})),a.on("drop",(function(e,l,u,d){if(a.models&&l){r=o.domIndexOf(e,l);var s,f=a.models[a.containers.indexOf(u)],g=a.models[a.containers.indexOf(l)];if(l===u)s=(f=f.slice(0)).splice(n,1)[0],f.splice(r,0,s),g=f;else{var h=t!==e;if(s=f[n],h){if(!c.copyItem)throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");s=c.copyItem(s)}if(h||(f=f.slice(0)).splice(n,1),(g=g.slice(0)).splice(r,0,s),h)try{l.removeChild(e)}catch(p){}}o.dispatch$.next({event:v.DropModel,name:i,args:[e,l,u,d,s,f,g,n,r]})}}))}},{key:"setupEvents",value:function(e){var t=this;if(!e.initEvents){e.initEvents=!0;var n=e.name;m.forEach((function(r){e.drake.on(r,(function(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];t.dispatch$.next({event:r,name:n,args:o})}))}))}}},{key:"domIndexOf",value:function(e,t){return Array.prototype.indexOf.call(t.children,e)}}]),e}()).\u0275fac=function(e){return new(e||i)(d.Zb(y,8))},i.\u0275prov=d.Kb({token:i,factory:i.\u0275fac}),i),O=((o=function(){function e(t,n){_classCallCheck(this,e),this.el=t,this.dragulaService=n,this.dragulaModelChange=new d.n}return _createClass(e,[{key:"ngOnChanges",value:function(e){if(e&&e.dragula){var t=e.dragula,n=t.previousValue,r=!!t.currentValue;!!n&&this.teardown(n),r&&this.setup()}else if(e&&e.dragulaModel){var o=e.dragulaModel,i=o.previousValue,a=o.currentValue,c=this.group.drake;if(this.dragula&&c){c.models=c.models||[];var l=c.models.indexOf(i);-1!==l?(c.models.splice(l,1),a&&c.models.splice(l,0,a)):a&&c.models.push(a)}}}},{key:"setup",value:function(){var e=this,t=this.dragulaService.find(this.dragula);t||(t=this.dragulaService.createGroup(this.dragula,{})),function(t){e.dragulaModel&&(t.drake.models?t.drake.models.push(e.dragulaModel):t.drake.models=[e.dragulaModel])}(t),t.drake.containers.push(this.container),this.subscribe(this.dragula),this.group=t}},{key:"subscribe",value:function(e){var t=this;this.subs=new f.a,this.subs.add(this.dragulaService.dropModel(e).subscribe((function(e){var n=e.source,r=e.target,o=e.sourceModel,i=e.targetModel;n===t.el.nativeElement?t.dragulaModelChange.emit(o):r===t.el.nativeElement&&t.dragulaModelChange.emit(i)}))),this.subs.add(this.dragulaService.removeModel(e).subscribe((function(e){var n=e.source,r=e.sourceModel;n===t.el.nativeElement&&t.dragulaModelChange.emit(r)})))}},{key:"teardown",value:function(e){this.subs&&this.subs.unsubscribe();var t=this.dragulaService.find(e);if(t){var n=t.drake.containers.indexOf(this.el.nativeElement);if(-1!==n&&t.drake.containers.splice(n,1),this.dragulaModel&&t.drake&&t.drake.models){var r=t.drake.models.indexOf(this.dragulaModel);-1!==r&&t.drake.models.splice(r,1)}}}},{key:"ngOnDestroy",value:function(){this.teardown(this.dragula)}},{key:"container",get:function(){return this.el&&this.el.nativeElement}}]),e}()).\u0275fac=function(e){return new(e||o)(d.Ob(d.l),d.Ob(M))},o.\u0275dir=d.Jb({type:o,selectors:[["","dragula",""]],inputs:{dragula:"dragula",dragulaModel:"dragulaModel"},outputs:{dragulaModelChange:"dragulaModelChange"},features:[d.zb()]}),o),x=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"forRoot",value:function(){return{ngModule:e,providers:[M]}}}]),e}()).\u0275mod=d.Mb({type:r}),r.\u0275inj=d.Lb({factory:function(e){return new(e||r)}}),r),_=n("PCNd"),w=n("jhN1"),E=n("8YY3"),P=n("/t3+"),S=n("bTqV"),T=["itemElement"];function D(e,t){if(1&e&&(d.Ub(0,"div",12),d.Ub(1,"h2"),d.Ec(2),d.Tb(),d.Tb()),2&e){var n=t.$implicit,r=t.index,o=d.gc();d.nc("id","",r,"_header"),d.lc("ngStyle",o.getHeaderHeight()),d.Bb(2),d.Fc(n.title)}}function I(e,t){if(1&e){var n=d.Vb();d.Ub(0,"div",15,16),d.dc("dblclick",(function(){d.vc(n);var e=t.index,r=d.gc().index;return d.gc().enableEdit(r,e)}))("keydown.enter",(function(e){d.vc(n);var r=t.index,o=d.gc().index;return d.gc().updateItem(o,r,e)})),d.Ec(2),d.Tb()}if(2&e){var r=t.$implicit,o=t.index,i=d.gc().index,a=d.gc();d.oc("id","pipe",i,"_child",o,""),d.lc("ngStyle",a.getEditableStyle()),d.Bb(2),d.Gc(" ",r," ")}}function A(e,t){if(1&e){var n=d.Vb();d.Ub(0,"div",13),d.dc("dragulaModelChange",(function(e){return d.vc(n),t.$implicit.items=e})),d.Cc(1,I,3,4,"div",14),d.Tb()}if(2&e){var r=t.$implicit,o=t.index,i=d.gc();d.nc("id","",o,"_pipe"),d.lc("dragulaModel",r.items)("ngStyle",i.getContainerStyle(r)),d.Bb(1),d.lc("ngForOf",r.items)}}var L,U,N=[{id:1,title:"Process",items:["Commit Code","PUSH Hooks","RUN CI","Deploy Dev","E2E Test","Manual Test","Deploy UAT","Manual Test","Go-Live Apply","Go-Live"],backgroundColor:"#00a300",textColor:"#ffffff"},{id:2,title:"People",items:[""],backgroundColor:"#ff0097",textColor:"#ffffff"},{id:3,title:"Tooling",items:["Git & GitHub","Git","Jenkins","","","","",""],backgroundColor:"#99b433",textColor:"#ffffff"},{id:4,title:"Artifacts",items:["Code","","Build Log","","","","","","",""],backgroundColor:"#1e7145",textColor:"#ffffff"},{id:5,title:"Pain",items:[""],backgroundColor:"#00aba9",textColor:"#ffffff"},{id:6,title:"Duration",items:[""],backgroundColor:"#ffc40d",textColor:"#ffffff"}],R=((U=function(){function e(t,n){_classCallCheck(this,e),this.storage=t,this.renderer=n,this.pipeData=N}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.maxLength=this.getMaxLength(this.pipeData),this.storage.get("ledge.path").subscribe((function(t){t?(e.pipeData=t,e.fillDefaultValue()):e.fillDefaultValue()}))}},{key:"fillDefaultValue",value:function(){this.pipeData=this.fillArrayWithEmpty(this.pipeData)}},{key:"fillArrayWithEmpty",value:function(e){for(var t=0;t<e.length;t++)for(var n=e[t].items.length,r=0;r<=this.maxLength;r++)r>n&&(e[t].items[r-1]="");return e}},{key:"addColumn",value:function(){this.maxLength++,this.pipeData=this.fillArrayWithEmpty(this.pipeData)}},{key:"removeColumn",value:function(){if(!(this.pipeData.length<=0)){var e=this;this.maxLength--,this.pipeData=function(t){for(var n=0;n<t.length;n++)for(var r=0;r<=e.maxLength;r++)r>e.maxLength-1&&t[n].items.splice(-1,1);return t}(this.pipeData)}}},{key:"getContainerStyle",value:function(e){var t=this.getContainerHeightWidth(),n=t.itemWidth,r=t.containerHeight;return{minWidth:this.maxLength*(n+21)+"px",height:r,background:e.backgroundColor,color:e.textColor}}},{key:"getContainerHeightWidth",value:function(){var e=(window.innerWidth-200)/this.maxLength-20;return e<100&&(e=100),{itemWidth:e,containerHeight:e+20+2+"px",itemHeightPx:e+"px"}}},{key:"getEditableStyle",value:function(){var e=this.getContainerHeightWidth().itemHeightPx;return{height:e,width:e}}},{key:"getHeaderHeight",value:function(){return{height:this.getContainerHeightWidth().itemWidth+20+12+"px"}}},{key:"getMaxLength",value:function(e){for(var t=e[0].items.length,n=0;n<e.length;n++){var r=e[n].items.length;r>t&&(t=r)}return t}},{key:"updateItem",value:function(e,t,n){this.pipeData[e].items[t]=n.target.innerText,this.storage.set("ledge.path",this.pipeData).subscribe((function(){}))}},{key:"enableEdit",value:function(e,t){var n="pipe".concat(e,"_child").concat(t),r=this.itemElements.filter((function(e){return e.nativeElement.id===n}));r.length>0&&this.renderer.setProperty(r[0].nativeElement,"contentEditable",!0)}},{key:"resetAll",value:function(){this.pipeData=N,this.maxLength=this.getMaxLength(N),this.fillDefaultValue(),this.storage.set("ledge.path",this.pipeData).subscribe((function(){}))}}]),e}()).\u0275fac=function(e){return new(e||U)(d.Ob(E.a),d.Ob(d.E))},U.\u0275cmp=d.Ib({type:U,selectors:[["component-path"]],viewQuery:function(e,t){var n;1&e&&d.Ic(T,!0),2&e&&d.rc(n=d.ec())&&(t.itemElements=n)},decls:25,vars:3,consts:[[1,"path"],[1,"header","markdown"],[1,"spacer"],[1,"right"],["color","warn","mat-raised-button","",3,"click"],["color","accent","mat-raised-button","",3,"disabled","click"],["color","primary","mat-raised-button","",3,"click"],[1,"page"],["id","pipe-header"],["class","pipe-header",3,"id","ngStyle",4,"ngFor","ngForOf"],["id","pipe",1,"wrapper"],["class","container","dragula","ITEMS",3,"id","dragulaModel","ngStyle","dragulaModelChange",4,"ngFor","ngForOf"],[1,"pipe-header",3,"id","ngStyle"],["dragula","ITEMS",1,"container",3,"id","dragulaModel","ngStyle","dragulaModelChange"],["class","editable","ngDefaultControl","",3,"id","ngStyle","dblclick","keydown.enter",4,"ngFor","ngForOf"],["ngDefaultControl","",1,"editable",3,"id","ngStyle","dblclick","keydown.enter"],["itemElement",""]],template:function(e,t){1&e&&(d.Ub(0,"div",0),d.Ub(1,"div",1),d.Ub(2,"h3"),d.Ec(3,"Path to Production"),d.Tb(),d.Tb(),d.Ub(4,"mat-toolbar"),d.Ub(5,"mat-toolbar-row"),d.Pb(6,"span"),d.Pb(7,"span",2),d.Ub(8,"div",3),d.Ub(9,"button",4),d.dc("click",(function(){return t.resetAll()})),d.Ec(10,"Reset"),d.Tb(),d.Ub(11,"span",2),d.Ec(12,"\xa0"),d.Tb(),d.Ub(13,"button",5),d.dc("click",(function(){return t.removeColumn()})),d.Ec(14,"Remove"),d.Tb(),d.Ub(15,"span",2),d.Ec(16,"\xa0"),d.Tb(),d.Ub(17,"button",6),d.dc("click",(function(){return t.addColumn()})),d.Ec(18,"Add"),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(19,"div",7),d.Ub(20,"div",0),d.Ub(21,"div",8),d.Cc(22,D,3,3,"div",9),d.Tb(),d.Ub(23,"div",10),d.Cc(24,A,2,4,"div",11),d.Tb(),d.Tb(),d.Tb(),d.Tb()),2&e&&(d.Bb(13),d.lc("disabled",0===t.maxLength),d.Bb(9),d.lc("ngForOf",t.pipeData),d.Bb(2),d.lc("ngForOf",t.pipeData))},directives:[P.a,P.c,S.a,a.j,a.l,O],styles:["#pipe[_ngcontent-%COMP%]{position:relative;float:right;display:inline-block;width:calc(100% - 138px);max-width:100%;height:180px;padding-right:32px}.header[_ngcontent-%COMP%]{margin-top:1em}.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{padding:0;margin-right:6px;margin-top:12px;background-color:hsla(0,0%,100%,.2);max-width:100%;width:100%;color:#fff;line-height:1.3em;border:1px dashed #fff;border-radius:6px;font-weight:400}.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:150px;max-height:150px;width:10%;max-width:10%}.container[_ngcontent-%COMP%]:nth-child(odd), .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .gu-mirror[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.2)}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .gu-mirror[_ngcontent-%COMP%]{margin:10px;padding:5px;transition:opacity .4s ease-in-out}.container[_ngcontent-%COMP%] > div.empty[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.05)}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;overflow-y:auto;cursor:move;cursor:grab;cursor:-webkit-grab}.gu-mirror[_ngcontent-%COMP%]{cursor:grabbing;cursor:-webkit-grabbing}#header[_ngcontent-%COMP%]{height:80px;text-align:center}#header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:80px}#pipe-header[_ngcontent-%COMP%]{position:absolute;left:20px}.pipe-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:relative;top:calc(50% - 1.6rem)}.add-item[_ngcontent-%COMP%]{right:4rem}.add-item[_ngcontent-%COMP%], .download[_ngcontent-%COMP%]{top:3rem;position:absolute}.download[_ngcontent-%COMP%]{right:35rem}.remove-column[_ngcontent-%COMP%]{top:3rem;position:absolute;right:18rem}#color-green[_ngcontent-%COMP%]{background-color:#00a300}#color-greendark[_ngcontent-%COMP%]{background-color:#1e7145}#color-greenlight[_ngcontent-%COMP%]{background-color:#99b433}#color-magenta[_ngcontent-%COMP%]{background-color:#ff0097}#color-purplelight[_ngcontent-%COMP%]{background-color:#9f00a7}#color-purple[_ngcontent-%COMP%]{background-color:#7e3878}#color-purpledark[_ngcontent-%COMP%]{background-color:#603cba}#color-darken[_ngcontent-%COMP%]{background-color:#1d1d1d}#color-teal[_ngcontent-%COMP%]{background-color:#00aba9}#color-bluelight[_ngcontent-%COMP%]{background-color:#eff4ff}#color-blue[_ngcontent-%COMP%]{background-color:#2d89ef}#color-bluedark[_ngcontent-%COMP%]{background-color:#2b5797}#color-yellow[_ngcontent-%COMP%]{background-color:#ffc40d}#color-orange[_ngcontent-%COMP%]{background-color:#e3a21a}#color-orangedark[_ngcontent-%COMP%]{background-color:#da532c}#color-red[_ngcontent-%COMP%]{background-color:#b91d47}#color-redlight[_ngcontent-%COMP%]{background-color:#e11}#color-white[_ngcontent-%COMP%]{background-color:#fff}"]}),U),H=((L=function(){function e(t){_classCallCheck(this,e),t.setTitle("Ledge DevOps \u77e5\u8bc6\u5e73\u53f0 - \u8bbe\u8ba1 Devops")}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||L)(d.Ob(w.d))},L.\u0275cmp=d.Ib({type:L,selectors:[["app-design"]],decls:1,vars:0,template:function(e,t){1&e&&d.Pb(0,"component-path")},directives:[R],styles:[""]}),L),Y=n("KYhu");n.d(t,"DesignModule",(function(){return B}));var j,B=((j=function e(){_classCallCheck(this,e)}).\u0275mod=d.Mb({type:j}),j.\u0275inj=d.Lb({factory:function(e){return new(e||j)},imports:[[a.c,_.a,Y.a,x.forRoot(),c.h.forChild([{path:"",component:H}])]]}),j)},n6yW:function(e,t,n){"use strict";var r={};function o(e){var t=r[e];return t?t.lastIndex=0:r[e]=t=new RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),t}e.exports={add:function(e,t){var n=e.className;n.length?o(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(o(t)," ").trim()}}}}]);