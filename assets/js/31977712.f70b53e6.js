/*! For license information please see 31977712.f70b53e6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[291871],{94480:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=t(824246),o=t(511151);const i={id:"plugin-permission-common.createpermission_1",title:"createPermission()",description:"API reference for createPermission()"},s=void 0,c={id:"reference/plugin-permission-common.createpermission_1",title:"createPermission()",description:"API reference for createPermission()",source:"@site/../docs/reference/plugin-permission-common.createpermission_1.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.createpermission_1",permalink:"/docs/reference/plugin-permission-common.createpermission_1",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-common.createpermission_1.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.createpermission_1",title:"createPermission()",description:"API reference for createPermission()"}},u={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.createpermission_1",children:(0,n.jsx)(r.code,{children:"createPermission"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Utility function for creating a valid ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.basicpermission",children:"BasicPermission"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function createPermission(input: {\n    name: string;\n    attributes: PermissionAttributes;\n}): BasicPermission;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"input"}),(0,n.jsxs)(r.td,{children:["{ name: string; attributes: ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionattributes",children:"PermissionAttributes"}),"; }"]}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.basicpermission",children:"BasicPermission"})})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,i={},a=null,l=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!u.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:c.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function _(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||m}function b(){}function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var j=v.prototype=new b;j.constructor=v,y(j,_.prototype),j.isPureReactComponent=!0;var g=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,n){var o,i={},s=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(s=""+r.key),r)x.call(r,o)&&!P.hasOwnProperty(o)&&(i[o]=r[o]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var a=Array(u),l=0;l<u;l++)a[l]=arguments[l+2];i.children=a}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:t,type:e,key:s,ref:c,props:i,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,i,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case n:u=!0}}if(u)return s=s(u=e),e=""===i?"."+R(u,0):i,g(s)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),C(s,r,o,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),r.push(s)),1;if(u=0,i=""===i?".":i+":",g(e))for(var a=0;a<e.length;a++){var l=i+R(c=e[a],a);u+=C(c,r,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(c=e.next()).done;)u+=C(c=c.value,r,o,l=i+R(c,a++),s);else if("object"===c)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},A={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:A,ReactCurrentOwner:S};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=s,r.PureComponent=v,r.StrictMode=i,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,c=S.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in r)x.call(r,a)&&!P.hasOwnProperty(a)&&(o[a]=void 0===r[a]&&void 0!==u?u[a]:r[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){u=Array(a);for(var l=0;l<a;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:t,type:e.type,key:i,ref:s,props:o,_owner:c}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=A.transition;A.transition={};try{e()}finally{A.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return I.current.useCallback(e,r)},r.useContext=function(e){return I.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return I.current.useDeferredValue(e)},r.useEffect=function(e,r){return I.current.useEffect(e,r)},r.useId=function(){return I.current.useId()},r.useImperativeHandle=function(e,r,t){return I.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return I.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return I.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return I.current.useMemo(e,r)},r.useReducer=function(e,r,t){return I.current.useReducer(e,r,t)},r.useRef=function(e){return I.current.useRef(e)},r.useState=function(e){return I.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return I.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return I.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>s});var n=t(667294);const o={},i=n.createContext(o);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);