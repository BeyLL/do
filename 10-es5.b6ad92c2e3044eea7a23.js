function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4Ju/":function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),c=n("tyNb"),r=n("mrSG"),i=n("tk/3"),a=[{displayName:"Coding",source:"coding"},{displayName:"\u4e91\u5f00\u53d1\uff08\u817e\u8baf\u4e91\uff09",source:"cloudbase"},{displayName:"Worktile",source:"worktile"},{displayName:"fir.im",source:"firim"}],s=n("fXoL"),l=n("jhN1"),u=n("XhcP"),d=n("NFeN"),p=n("Qu3c"),f=n("GWUB"),g=["drawerContent"],h=function(t){return["/solution",t]};function C(t,e){if(1&t){var n=s.dc();s.cc(0,"li",6),s.kc("click",(function(){s.Fc(n);var t=e.$implicit;return s.oc().getCase(t.source)})),s.cc(1,"span"),s.Oc(2),s.bc(),s.bc()}if(2&t){var o=e.$implicit,c=s.oc();s.tc("routerLink",s.yc(3,h,o.source))("ngClass",o.source===c.currentSource?"active":""),s.Jb(2),s.Pc(o.displayName)}}var b,m,w=[{path:":solution",component:(b=function(){function t(e,n,o){_classCallCheck(this,t),this.title=e,this.activatedRoute=n,this.http=o,this.solutions=a}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.activatedRoute.paramMap.subscribe((function(e){var n=e.get("solution"),o=t.solutions.find((function(t){return t.source===n}));t.title.setTitle("".concat(o.displayName," DevOps \u89e3\u51b3\u65b9\u6848 - Ledge DevOps \u77e5\u8bc6\u5e73\u53f0")),t.configSource(n)}))}},{key:"configSource",value:function(t){this.getCase(t)}},{key:"getCase",value:function(t){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.src=this.buildSrc(t),this.currentSource=t,n=(new i.c).set("Content-Type","text/plain; charset=utf-8"),this.http.get(this.src,{headers:n,responseType:"text"}).subscribe((function(t){o.resetScrollbar(),o.content=t}));case 3:case"end":return e.stop()}}),e,this)})))}},{key:"resetScrollbar",value:function(){this.drawerContent&&(this.drawerContent.hasOwnProperty("nativeElement")||(this.drawerContent.getElementRef().nativeElement.scrollTop=0))}},{key:"buildSrc",value:function(t){return"assets/docs/solutions/".concat(t,".md")}}]),t}(),b.\u0275fac=function(t){return new(t||b)(s.Wb(l.d),s.Wb(c.a),s.Wb(i.a))},b.\u0275cmp=s.Qb({type:b,selectors:[["app-solution"]],viewQuery:function(t,e){var n;1&t&&s.Sc(g,!0),2&t&&s.Ac(n=s.lc())&&(e.drawerContent=n.first)},decls:12,vars:3,consts:[[1,"solution"],["mode","side","opened","",1,"left-drawer"],["matTooltip","\u4e3a\u4e86 Ledge \u5e73\u53f0\u7684\u53d1\u5c55\uff0c\u5f53\u524d\u4ec5\u514d\u8d39\u63d0\u4f9b\u7ed9\u5c06 Ledge \u5217\u4e3a\u5408\u4f5c\u4f19\u4f34\u7684 DevOps \u5382\u5546\u3002",1,"help-icon",3,"matTooltipPosition"],[3,"routerLink","ngClass","click",4,"ngFor","ngForOf"],["drawerContent",""],[3,"data"],[3,"routerLink","ngClass","click"]],template:function(t,e){1&t&&(s.cc(0,"mat-drawer-container",0),s.cc(1,"mat-drawer",1),s.cc(2,"h2"),s.Oc(3,"\u89e3\u51b3\u65b9\u6848 "),s.cc(4,"mat-icon",2),s.Oc(5,"help"),s.bc(),s.bc(),s.cc(6,"ul"),s.cc(7,"ul"),s.Mc(8,C,3,5,"li",3),s.bc(),s.bc(),s.bc(),s.cc(9,"mat-drawer-content",null,4),s.Xb(11,"component-markdown-render",5),s.bc(),s.bc()),2&t&&(s.Jb(4),s.tc("matTooltipPosition","right"),s.Jb(4),s.tc("ngForOf",e.solutions),s.Jb(3),s.tc("data",e.content))},directives:[u.b,u.a,d.a,p.a,o.j,u.c,f.a,c.e,o.i],styles:[".left-drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .noselect[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.solution[_ngcontent-%COMP%]{min-height:600px;height:calc(100vh - 66px)}.solution[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#7753df;color:#fff}.left-drawer[_ngcontent-%COMP%]{width:15%;min-width:200px}.left-drawer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding:20px 0;text-align:center;font-weight:700;border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.left-drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0}.left-drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.2rem;padding:1rem;display:block}.left-drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active, .left-drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{outline:0;border:none;-moz-outline-style:none}.left-drawer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.help-icon[_ngcontent-%COMP%]{top:4px;position:relative}.help-icon[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),b)},{path:"",pathMatch:"full",redirectTo:"coding"}],v=((m=function t(){_classCallCheck(this,t)}).\u0275mod=s.Ub({type:m}),m.\u0275inj=s.Tb({factory:function(t){return new(t||m)},imports:[[c.h.forChild(w)],c.h]}),m),O=n("KYhu"),P=n("PCNd");n.d(e,"SolutionModule",(function(){return M}));var _,M=((_=function t(){_classCallCheck(this,t)}).\u0275mod=s.Ub({type:_}),_.\u0275inj=s.Tb({factory:function(t){return new(t||_)},imports:[[o.c,v,O.a,P.a]]}),_)}}]);