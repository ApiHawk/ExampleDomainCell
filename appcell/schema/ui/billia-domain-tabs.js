!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("ng.mat-icon"),require("ng.mat-tabs"),require("rxjs"),require("cdk.platform"),require("ng.mat-core"),require("cdk.a11y"),require("ng.router"),require("ng.common"),require("ng.core"),require("ngx.translate"),require("ng.forms"),require("cdk.observers"),require("cdk.portal"),require("tslib"),require("ng.http"),require("apihawk.billia-customer-portal-common")):"function"==typeof define&&define.amd?define(["ng.mat-icon","ng.mat-tabs","rxjs","cdk.platform","ng.mat-core","cdk.a11y","ng.router","ng.common","ng.core","ngx.translate","ng.forms","cdk.observers","cdk.portal","tslib","ng.http","apihawk.billia-customer-portal-common"],e):"object"==typeof exports?exports["billia-domain-tabs"]=e(require("ng.mat-icon"),require("ng.mat-tabs"),require("rxjs"),require("cdk.platform"),require("ng.mat-core"),require("cdk.a11y"),require("ng.router"),require("ng.common"),require("ng.core"),require("ngx.translate"),require("ng.forms"),require("cdk.observers"),require("cdk.portal"),require("tslib"),require("ng.http"),require("apihawk.billia-customer-portal-common")):t["billia-domain-tabs"]=e(t["ng.mat-icon"],t["ng.mat-tabs"],t.rxjs,t["cdk.platform"],t["ng.mat-core"],t["cdk.a11y"],t["ng.router"],t["ng.common"],t["ng.core"],t["ngx.translate"],t["ng.forms"],t["cdk.observers"],t["cdk.portal"],t.tslib,t["ng.http"],t["apihawk.billia-customer-portal-common"])}("undefined"!=typeof self?self:this,function(t,e,r,n,o,s,i,c,l,a,u,d,h,p,b,m){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,(function(e){return t[e]}).bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}({0:function(t,e,r){t.exports=r("gmml")},"0S4P":function(t,e){t.exports=c},"17wl":function(t,e){t.exports=p},"3xDq":function(t,e){t.exports=u},"7zk3":function(t,e){t.exports=s},"9Ka3":function(t,e){t.exports=d},IGV0:function(t,e){t.exports=h},JAnZ:function(t,e){t.exports=i},QXNI:function(t,r){t.exports=e},TGDj:function(t,e){t.exports=a},Vgaj:function(t,e){t.exports=r},c5Cn:function(t,e){t.exports=o},gmml:function(t,e,r){"use strict";r.r(e);var n=r("vOrQ"),o=r("QXNI"),s=r("Vgaj");class i{constructor(){this.viewInitiated=new s.Subject}ngAfterViewInit(){this.viewInitiated.next(this.items),this.viewInitiated.complete()}}class c{}c.entry=i;var l=r("JAnZ"),a=n["\u0275crt"]({encapsulation:2,styles:[],data:{}});function u(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),n["\u0275did"](1,212992,null,0,l.RouterOutlet,[l.ChildrenOutletContexts,n.ViewContainerRef,n.ComponentFactoryResolver,[8,null],n.ChangeDetectorRef],null,null)],function(t,e){t(e,1,0)},null)}function d(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,u,a)),n["\u0275did"](1,49152,null,0,l["\u0275angular_packages_router_router_l"],[],null,null)],null,null)}var h=n["\u0275ccf"]("ng-component",l["\u0275angular_packages_router_router_l"],d,{},{},[]),p=r("lVjo"),b=r("c5Cn"),m=r("7zk3"),f=r("0S4P");const _=new n.InjectionToken("HammerLoader");function g(){return"undefined"!=typeof process}"undefined"!=typeof window&&window;let y=(t,e)=>!1,v=(t,e)=>!1,w=(t,e,r)=>[];const S=g();(S||"undefined"!=typeof Element)&&((t,e)=>t.contains(e),v=(()=>{if(S||Element.prototype.matches)return(t,e)=>t.matches(e);{const t=Element.prototype,e=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector;return e?(t,r)=>e.apply(t,[r]):v}})());const E=new n.InjectionToken("AnimationModuleType");var x=r("vbq7");class T{}var k=n["\u0275crt"]({encapsulation:2,styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],data:{}});function M(t){return n["\u0275vid"](2,[n["\u0275ncd"](null,0)],null,null)}var C=r("TGDj"),j=n["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:-webkit-box;display:flex}a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:8px}"]],data:{}});function q(t){return n["\u0275vid"](0,[n["\u0275qud"](671088640,1,{items:1}),(t()(),n["\u0275eld"](1,0,null,null,12,"a",[["class","mat-tab-link"],["mat-tab-link",""],["routerLinkActive","active"]],[[1,"aria-current",0],[1,"aria-disabled",0],[1,"tabIndex",0],[2,"mat-tab-disabled",null],[2,"mat-tab-label-active",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,e,r){var o=!0;return"click"===e&&(o=!1!==n["\u0275nov"](t,3).onClick(r.button,r.ctrlKey,r.metaKey,r.shiftKey)&&o),o},null,null)),n["\u0275did"](2,147456,[[1,4]],0,o.MatTabLink,[o.MatTabNav,n.ElementRef,n.NgZone,p.Platform,[2,b.MAT_RIPPLE_GLOBAL_OPTIONS],[8,null],m.FocusMonitor,[2,E]],{active:[0,"active"]},null),n["\u0275did"](3,671744,[[3,4]],0,l.RouterLinkWithHref,[l.Router,l.ActivatedRoute,f.LocationStrategy],{routerLink:[0,"routerLink"]},null),n["\u0275pad"](4,1),n["\u0275did"](5,1720320,[["rlaContactsAssignment",4]],2,l.RouterLinkActive,[l.Router,n.ElementRef,n.Renderer2,[2,l.RouterLink],[2,l.RouterLinkWithHref]],{routerLinkActive:[0,"routerLinkActive"]},null),n["\u0275qud"](603979776,2,{links:1}),n["\u0275qud"](603979776,3,{linksWithHrefs:1}),(t()(),n["\u0275eld"](8,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,M,k)),n["\u0275did"](9,9158656,null,0,x.MatIcon,[n.ElementRef,x.MatIconRegistry,[8,null],[2,x.MAT_ICON_LOCATION],[2,n.ErrorHandler]],null,null),(t()(),n["\u0275ted"](-1,0,["assignment_ind"])),(t()(),n["\u0275eld"](11,0,null,null,2,"span",[["translate",""]],null,null,null,null,null)),n["\u0275did"](12,8536064,null,0,C.TranslateDirective,[C.TranslateService,n.ElementRef,n.ChangeDetectorRef],{translate:[0,"translate"]},null),(t()(),n["\u0275ted"](-1,null,["Assign contacts"])),(t()(),n["\u0275eld"](14,0,null,null,12,"a",[["class","mat-tab-link"],["mat-tab-link",""],["routerLinkActive","active"]],[[1,"aria-current",0],[1,"aria-disabled",0],[1,"tabIndex",0],[2,"mat-tab-disabled",null],[2,"mat-tab-label-active",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,e,r){var o=!0;return"click"===e&&(o=!1!==n["\u0275nov"](t,16).onClick(r.button,r.ctrlKey,r.metaKey,r.shiftKey)&&o),o},null,null)),n["\u0275did"](15,147456,[[1,4]],0,o.MatTabLink,[o.MatTabNav,n.ElementRef,n.NgZone,p.Platform,[2,b.MAT_RIPPLE_GLOBAL_OPTIONS],[8,null],m.FocusMonitor,[2,E]],{active:[0,"active"]},null),n["\u0275did"](16,671744,[[5,4]],0,l.RouterLinkWithHref,[l.Router,l.ActivatedRoute,f.LocationStrategy],{routerLink:[0,"routerLink"]},null),n["\u0275pad"](17,1),n["\u0275did"](18,1720320,[["rlaContactManagement",4]],2,l.RouterLinkActive,[l.Router,n.ElementRef,n.Renderer2,[2,l.RouterLink],[2,l.RouterLinkWithHref]],{routerLinkActive:[0,"routerLinkActive"]},null),n["\u0275qud"](603979776,4,{links:1}),n["\u0275qud"](603979776,5,{linksWithHrefs:1}),(t()(),n["\u0275eld"](21,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,M,k)),n["\u0275did"](22,9158656,null,0,x.MatIcon,[n.ElementRef,x.MatIconRegistry,[8,null],[2,x.MAT_ICON_LOCATION],[2,n.ErrorHandler]],null,null),(t()(),n["\u0275ted"](-1,0,["contacts"])),(t()(),n["\u0275eld"](24,0,null,null,2,"span",[["translate",""]],null,null,null,null,null)),n["\u0275did"](25,8536064,null,0,C.TranslateDirective,[C.TranslateService,n.ElementRef,n.ChangeDetectorRef],{translate:[0,"translate"]},null),(t()(),n["\u0275ted"](-1,null,["Contacts management"]))],function(t,e){t(e,2,0,n["\u0275nov"](e,5).isActive);var r=t(e,4,0,"./domain/contact-assignment");t(e,3,0,r),t(e,5,0,"active"),t(e,9,0),t(e,12,0,""),t(e,15,0,n["\u0275nov"](e,18).isActive);var o=t(e,17,0,"./domain/contact-management");t(e,16,0,o),t(e,18,0,"active"),t(e,22,0),t(e,25,0,"")},function(t,e){t(e,1,0,n["\u0275nov"](e,2).active?"page":null,n["\u0275nov"](e,2).disabled,n["\u0275nov"](e,2).tabIndex,n["\u0275nov"](e,2).disabled,n["\u0275nov"](e,2).active,n["\u0275nov"](e,3).target,n["\u0275nov"](e,3).href),t(e,8,0,n["\u0275nov"](e,9).inline,"primary"!==n["\u0275nov"](e,9).color&&"accent"!==n["\u0275nov"](e,9).color&&"warn"!==n["\u0275nov"](e,9).color),t(e,14,0,n["\u0275nov"](e,15).active?"page":null,n["\u0275nov"](e,15).disabled,n["\u0275nov"](e,15).tabIndex,n["\u0275nov"](e,15).disabled,n["\u0275nov"](e,15).active,n["\u0275nov"](e,16).target,n["\u0275nov"](e,16).href),t(e,21,0,n["\u0275nov"](e,22).inline,"primary"!==n["\u0275nov"](e,22).color&&"accent"!==n["\u0275nov"](e,22).color&&"warn"!==n["\u0275nov"](e,22).color)})}function O(t){return n["\u0275vid"](0,[(t()(),n["\u0275eld"](0,0,null,null,1,"domain-tabs-component",[],null,null,null,q,j)),n["\u0275did"](1,4243456,null,0,i,[],null,null)],null,null)}var R=n["\u0275ccf"]("domain-tabs-component",i,O,{},{},[]),A=r("3xDq"),L=r("9Ka3"),P=(r("17wl"),r("jyyq")),I=r("o9n9");function D(t){return"function"==typeof t}let H=!1;const F={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){H=t},get useDeprecatedSynchronousErrorHandling(){return H}};function N(t){setTimeout(()=>{throw t})}const U={closed:!0,next(t){},error(t){if(F.useDeprecatedSynchronousErrorHandling)throw t;N(t)},complete(){}},V=Array.isArray||(t=>t&&"number"==typeof t.length);function $(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}$.prototype=Object.create(Error.prototype);const K=$,z=function(){class t{constructor(t){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}unsubscribe(){let t,e=!1;if(this.closed)return;let{_parent:r,_parents:n,_unsubscribe:o,_subscriptions:s}=this;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;let i=-1,c=n?n.length:0;for(;r;)r.remove(this),r=++i<c&&n[i]||null;if(D(o))try{o.call(this)}catch(a){e=!0,t=a instanceof K?B(a.errors):[a]}if(V(s))for(i=-1,c=s.length;++i<c;){const r=s[i];if(null!==(l=r)&&"object"==typeof l)try{r.unsubscribe()}catch(a){e=!0,t=t||[],a instanceof K?t=t.concat(B(a.errors)):t.push(a)}}var l;if(e)throw new K(t)}add(e){let r=e;switch(typeof e){case"function":r=new t(e);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof t)){const e=r;(r=new t)._subscriptions=[e]}break;default:if(!e)return t.EMPTY;throw new Error("unrecognized teardown "+e+" added to Subscription.")}if(r._addParent(this)){const t=this._subscriptions;t?t.push(r):this._subscriptions=[r]}return r}remove(t){const e=this._subscriptions;if(e){const r=e.indexOf(t);-1!==r&&e.splice(r,1)}}_addParent(t){let{_parent:e,_parents:r}=this;return e!==t&&(e?r?-1===r.indexOf(t)&&(r.push(t),!0):(this._parents=[t],!0):(this._parent=t,!0))}}var e;return t.EMPTY=((e=new t).closed=!0,e),t}();function B(t){return t.reduce((t,e)=>t.concat(e instanceof K?e.errors:e),[])}const G="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random();class Y extends z{constructor(t,e,r){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=U;break;case 1:if(!t){this.destination=U;break}if("object"==typeof t){t instanceof Y?(this.syncErrorThrowable=t.syncErrorThrowable,this.destination=t,t.add(this)):(this.syncErrorThrowable=!0,this.destination=new W(this,t));break}default:this.syncErrorThrowable=!0,this.destination=new W(this,t,e,r)}}[G](){return this}static create(t,e,r){const n=new Y(t,e,r);return n.syncErrorThrowable=!1,n}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(t){this.destination.next(t)}_error(t){this.destination.error(t),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parent:t,_parents:e}=this;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=t,this._parents=e,this}}class W extends Y{constructor(t,e,r,n){let o;super(),this._parentSubscriber=t;let s=this;D(e)?o=e:e&&(o=e.next,r=e.error,n=e.complete,e!==U&&(D((s=Object.create(e)).unsubscribe)&&this.add(s.unsubscribe.bind(s)),s.unsubscribe=this.unsubscribe.bind(this))),this._context=s,this._next=o,this._error=r,this._complete=n}next(t){if(!this.isStopped&&this._next){const{_parentSubscriber:e}=this;F.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}}error(t){if(!this.isStopped){const{_parentSubscriber:e}=this,{useDeprecatedSynchronousErrorHandling:r}=F;if(this._error)r&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):N(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;N(t)}}}complete(){if(!this.isStopped){const{_parentSubscriber:t}=this;if(this._complete){const e=()=>this._complete.call(this._context);F.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(t,e){try{t.call(this._context,e)}catch(r){if(this.unsubscribe(),F.useDeprecatedSynchronousErrorHandling)throw r;N(r)}}__tryOrSetError(t,e,r){if(!F.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,r)}catch(n){return F.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=n,t.syncErrorThrown=!0,!0):(N(n),!0)}return!1}_unsubscribe(){const{_parentSubscriber:t}=this;this._context=null,this._parentSubscriber=null,t.unsubscribe()}}const Z="function"==typeof Symbol&&Symbol.observable||"@@observable";const Q=function(){class t{constructor(t){this._isScalar=!1,t&&(this._subscribe=t)}lift(e){const r=new t;return r.source=this,r.operator=e,r}subscribe(t,e,r){const{operator:n}=this,o=function(t,e,r){if(t){if(t instanceof Y)return t;if(t[G])return t[G]()}return t||e||r?new Y(t,e,r):new Y(U)}(t,e,r);if(o.add(n?n.call(o,this.source):this.source||F.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),F.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o}_trySubscribe(t){try{return this._subscribe(t)}catch(e){F.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),function(t){for(;t;){const{closed:e,destination:r,isStopped:n}=t;if(e||n)return!1;t=r&&r instanceof Y?r:null}return!0}(t)?t.error(e):console.warn(e)}}forEach(t,e){return new(e=J(e))((e,r)=>{let n;n=this.subscribe(e=>{try{t(e)}catch(o){r(o),n&&n.unsubscribe()}},r,e)})}_subscribe(t){const{source:e}=this;return e&&e.subscribe(t)}[Z](){return this}pipe(...t){return 0===t.length?this:((e=t)?1===e.length?e[0]:function(t){return e.reduce((t,e)=>e(t),t)}:function(){})(this);var e}toPromise(t){return new(t=J(t))((t,e)=>{let r;this.subscribe(t=>r=t,t=>e(t),()=>t(r))})}}return t.create=(e=>new t(e)),t}();function J(t){if(t||(t=F.Promise||Promise),!t)throw new Error("no Promise impl found");return t}function X(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}X.prototype=Object.create(Error.prototype);const tt=X;class et extends z{constructor(t,e){super(),this.subject=t,this.subscriber=e,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const t=this.subject,e=t.observers;if(this.subject=null,!e||0===e.length||t.isStopped||t.closed)return;const r=e.indexOf(this.subscriber);-1!==r&&e.splice(r,1)}}class rt extends Y{constructor(t){super(t),this.destination=t}}const nt=function(){class t extends Q{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[G](){return new rt(this)}lift(t){const e=new ot(this,this);return e.operator=t,e}next(t){if(this.closed)throw new tt;if(!this.isStopped){const{observers:e}=this,r=e.length,n=e.slice();for(let o=0;o<r;o++)n[o].next(t)}}error(t){if(this.closed)throw new tt;this.hasError=!0,this.thrownError=t,this.isStopped=!0;const{observers:e}=this,r=e.length,n=e.slice();for(let o=0;o<r;o++)n[o].error(t);this.observers.length=0}complete(){if(this.closed)throw new tt;this.isStopped=!0;const{observers:t}=this,e=t.length,r=t.slice();for(let n=0;n<e;n++)r[n].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(t){if(this.closed)throw new tt;return super._trySubscribe(t)}_subscribe(t){if(this.closed)throw new tt;return this.hasError?(t.error(this.thrownError),z.EMPTY):this.isStopped?(t.complete(),z.EMPTY):(this.observers.push(t),new et(this,t))}asObservable(){const t=new Q;return t.source=this,t}}return t.create=((t,e)=>new ot(t,e)),t}();class ot extends nt{constructor(t,e){super(),this.destination=t,this.source=e}next(t){const{destination:e}=this;e&&e.next&&e.next(t)}error(t){const{destination:e}=this;e&&e.error&&this.destination.error(t)}complete(){const{destination:t}=this;t&&t.complete&&this.destination.complete()}_subscribe(t){const{source:e}=this;return e?this.source.subscribe(t):z.EMPTY}}function st(){return function(t){return t.lift(new it(t))}}class it{constructor(t){this.connectable=t}call(t,e){const{connectable:r}=this;r._refCount++;const n=new ct(t,r),o=e.subscribe(n);return n.closed||(n.connection=r.connect()),o}}class ct extends Y{constructor(t,e){super(t),this.connectable=e}_unsubscribe(){const{connectable:t}=this;if(!t)return void(this.connection=null);this.connectable=null;const e=t._refCount;if(e<=0)return void(this.connection=null);if(t._refCount=e-1,e>1)return void(this.connection=null);const{connection:r}=this,n=t._connection;this.connection=null,!n||r&&n!==r||n.unsubscribe()}}const lt=class extends Q{constructor(t,e){super(),this.source=t,this.subjectFactory=e,this._refCount=0,this._isComplete=!1}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){const t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let t=this._connection;return t||(this._isComplete=!1,(t=this._connection=new z).add(this.source.subscribe(new ut(this.getSubject(),this))),t.closed?(this._connection=null,t=z.EMPTY):this._connection=t),t}refCount(){return st()(this)}}.prototype,at={operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:lt._subscribe},_isComplete:{value:lt._isComplete,writable:!0},getSubject:{value:lt.getSubject},connect:{value:lt.connect},refCount:{value:lt.refCount}};class ut extends rt{constructor(t,e){super(t),this.connectable=e}_error(t){this._unsubscribe(),super._error(t)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const t=this.connectable;if(t){this.connectable=null;const e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}}}function dt(t,e){return function(r){let n;if(n="function"==typeof t?t:function(){return t},"function"==typeof e)return r.lift(new ht(n,e));const o=Object.create(r,at);return o.source=r,o.subjectFactory=n,o}}class ht{constructor(t,e){this.subjectFactory=t,this.selector=e}call(t,e){const{selector:r}=this,n=this.subjectFactory(),o=r(n).subscribe(t);return o.add(e.subscribe(n)),o}}function pt(t){return t?dt(()=>new nt,t):dt(new nt)}var bt={"Add new":"\u0414\u043e\u0431\u0430\u0432\u0438 \u043d\u043e\u0432",Address:"\u0410\u0434\u0440\u0435\u0441","Address 2 (optional)":"\u0410\u0434\u0440\u0435\u0441 2 (\u043d\u0435\u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e)","Address is required.":"\u0410\u0434\u0440\u0435\u0441\u044a\u0442 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u0435\u043d.",Administrator:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440","Assign contacts":"\u0417\u0430\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438",Billing:"\u0424\u0438\u043d\u0430\u043d\u0441\u043e\u0432",Cancel:"\u041e\u0442\u043a\u0430\u0437",City:"\u0413\u0440\u0430\u0434","City is required.":"\u0413\u0440\u0430\u0434\u044a\u0442 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u0435\u043d.",Company:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f","Contact successfully deleted!":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044a\u0442 \u0435 \u0438\u0437\u0442\u0440\u0438\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!","Contact was successfully created.":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044a\u0442 \u0435 \u0441\u044a\u0437\u0434\u0430\u0434\u0435\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e.","Contact was successfully updated.":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044a\u0442 \u0431\u0435\u0448\u0435 \u043e\u0431\u043d\u043e\u0432\u0435\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e.","Contacts management":"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438",Country:"\u0414\u044a\u0440\u0436\u0430\u0432\u0430","Create contact":"\u0421\u044a\u0437\u0434\u0430\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442","Delete contact":"\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043d\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442","Delete contact?":"\u0418\u0437\u0442\u0440\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442?",Email:"\u0418\u043c\u0435\u0439\u043b","Email address":"\u0418\u043c\u0435\u0439\u043b \u0430\u0434\u0440\u0435\u0441","Email is required.":"\u0418\u043c\u0435\u0439\u043b\u044a\u0442 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u0435\u043d.","First name":"\u0418\u043c\u0435","First name is required.":"\u0418\u043c\u0435\u0442\u043e \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e.",ID:"ID","Job title":"\u0414\u043b\u044a\u0436\u043d\u043e\u0441\u0442","Job title is required.":"\u0414\u043b\u044a\u0436\u043d\u043e\u0441\u0442\u0442\u0430 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u0430.","Last name":"\u0424\u0430\u043c\u0438\u043b\u0438\u044f","Last name is required.":"\u0424\u0430\u043c\u0438\u043b\u0438\u044f\u0442\u0430 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u0430.",Name:"\u0418\u043c\u0435","Organization is required.":"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f\u0442\u0430 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u0430.",Phone:"\u0422\u0435\u043b. \u043d\u043e\u043c\u0435\u0440","Phone is required.":"\u0422\u0435\u043b. \u043d\u043e\u043c\u0435\u0440 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u0435\u043d.","Phone number":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u0435\u043d \u043d\u043e\u043c\u0435\u0440",Registrant:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u043d\u0442",Reset:"\u0412\u044a\u0440\u043d\u0438",Save:"\u0417\u0430\u043f\u0430\u0437\u0438","State (optional)":"\u041e\u0431\u043b\u0430\u0441\u0442 (\u043d\u0435\u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e)","Tech Person":"\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438 \u0447\u043e\u0432\u0435\u043a","The country is a required field.":"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0435 \u0434\u0430 \u0432\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u0434\u044a\u0440\u0436\u0430\u0432\u0430.","There are no contacts.":"\u0412\u0441\u0435 \u043e\u0449\u0435 \u043d\u044f\u043c\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438.","Update contact":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0430\u0439\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442","Zip code":"\u041f\u043e\u0449\u0435\u043d\u0441\u043a\u0438 \u043a\u043e\u0434","Zip code is required.":"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0435 \u0434\u0430 \u0432\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u043f\u043e\u0449\u0435\u043d\u0441\u043a\u0438 \u043a\u043e\u0434."};let mt=class{constructor(t){this.translate=t,this.translate.setTranslation("bg",bt,!0)}},ft=class{constructor(t,e,r){this.http=t,this.dataService=e,this.queryTools=r,this.api=this.dataService.get("apiBase")+"/plugins"}listContacts(t,e){const r=this.queryTools.queryToHttpParams(t);let n=new P.HttpHeaders;return e&&e.skipCache&&(n=n.append("X-Cache-Strategy",I.CacheStrategies.NetworkFirst)),this.http.get(`${this.api}/domain-contacts`,{headers:n,params:r}).pipe(pt(),st())}createContact(t){return this.http.post(`${this.api}/domain-contacts`,t).pipe(pt(),st())}updateContact(t){return this.http.patch(`${this.api}/domain-contacts/${t.contact_id}`,t).pipe(pt(),st())}deleteContact(t){return this.http.delete(`${this.api}/domain-contacts/${t}`).pipe(pt(),st())}listAssignedContacts(t){return this.http.post(`${this.api}/domain-contacts/assigned-contacts`,{customer_product_id:t}).pipe(pt(),st())}assignContacts(t,e){return this.http.post(`${this.api}/domain-contacts/assign-contact`,{customer_product_id:t,contacts:e}).pipe(pt(),st())}};ft.ngInjectableDef=Object(n["\u0275\u0275defineInjectable"])({factory:function(){return new ft(Object(n["\u0275\u0275inject"])(P.HttpClient),Object(n["\u0275\u0275inject"])(I.SharedDataService),Object(n["\u0275\u0275inject"])(I.QueryToolsService))},token:ft,providedIn:"root"});var _t=r("IGV0"),gt=n["\u0275cmf"](c,[],function(t){return n["\u0275mod"]([n["\u0275mpd"](512,n.ComponentFactoryResolver,n["\u0275CodegenComponentFactoryResolver"],[[8,[h,R]],[3,n.ComponentFactoryResolver],n.NgModuleRef]),n["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[n.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),n["\u0275mpd"](4608,A["\u0275angular_packages_forms_forms_o"],A["\u0275angular_packages_forms_forms_o"],[]),n["\u0275mpd"](4608,A.FormBuilder,A.FormBuilder,[]),n["\u0275mpd"](4608,L.MutationObserverFactory,L.MutationObserverFactory,[]),n["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),n["\u0275mpd"](1073742336,A["\u0275angular_packages_forms_forms_d"],A["\u0275angular_packages_forms_forms_d"],[]),n["\u0275mpd"](1073742336,A.FormsModule,A.FormsModule,[]),n["\u0275mpd"](1073742336,A.ReactiveFormsModule,A.ReactiveFormsModule,[]),n["\u0275mpd"](1073742336,C.TranslateModule,C.TranslateModule,[]),n["\u0275mpd"](512,C.TranslateLoader,C.TranslateFakeLoader,[]),n["\u0275mpd"](512,C.TranslateCompiler,C.TranslateFakeCompiler,[]),n["\u0275mpd"](512,C.TranslateParser,C.TranslateDefaultParser,[]),n["\u0275mpd"](512,C.MissingTranslationHandler,C.FakeMissingTranslationHandler,[]),n["\u0275mpd"](256,C.USE_DEFAULT_LANG,void 0,[]),n["\u0275mpd"](256,C.USE_STORE,void 0,[]),n["\u0275mpd"](512,C.TranslateService,C.TranslateService,[C.TranslateStore,C.TranslateLoader,C.TranslateCompiler,C.TranslateParser,C.MissingTranslationHandler,C.USE_DEFAULT_LANG,C.USE_STORE]),n["\u0275mpd"](1073742336,mt,mt,[C.TranslateService]),n["\u0275mpd"](1073742336,T,T,[]),n["\u0275mpd"](1073742336,b.MatCommonModule,b.MatCommonModule,[[2,b.MATERIAL_SANITY_CHECKS],[2,_]]),n["\u0275mpd"](1073742336,x.MatIconModule,x.MatIconModule,[]),n["\u0275mpd"](1073742336,_t.PortalModule,_t.PortalModule,[]),n["\u0275mpd"](1073742336,p.PlatformModule,p.PlatformModule,[]),n["\u0275mpd"](1073742336,b.MatRippleModule,b.MatRippleModule,[]),n["\u0275mpd"](1073742336,L.ObserversModule,L.ObserversModule,[]),n["\u0275mpd"](1073742336,m.A11yModule,m.A11yModule,[]),n["\u0275mpd"](1073742336,o.MatTabsModule,o.MatTabsModule,[]),n["\u0275mpd"](1073742336,l.RouterModule,l.RouterModule,[[2,l["\u0275angular_packages_router_router_a"]],[2,l.Router]]),n["\u0275mpd"](1073742336,c,c,[])])});r.d(e,"BilliaDomainsProductDetailsTabsModule",function(){return c}),r.d(e,"BilliaDomainsProductDetailsTabsModuleNgFactory",function(){return gt}),e.default=gt},jyyq:function(t,e){t.exports=b},lVjo:function(t,e){t.exports=n},o9n9:function(t,e){t.exports=m},vOrQ:function(t,e){t.exports=l},vbq7:function(e,r){e.exports=t}})});