/*! For license information please see a7848d3b.fbcdc543.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[557120],{932107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(824246),o=n(511151);const a={id:"concepts",title:"Search Concepts",description:"Documentation on Backstage Search Concepts"},s=void 0,c={id:"features/search/concepts",title:"Search Concepts",description:"Documentation on Backstage Search Concepts",source:"@site/../docs/features/search/concepts.md",sourceDirName:"features/search",slug:"/features/search/concepts",permalink:"/docs/features/search/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/search/concepts.md",tags:[],version:"current",frontMatter:{id:"concepts",title:"Search Concepts",description:"Documentation on Backstage Search Concepts"},sidebar:"docs",previous:{title:"Getting Started with Search",permalink:"/docs/features/search/getting-started"},next:{title:"Search Architecture",permalink:"/docs/features/search/architecture"}},i={},u=[{value:"Search Engines",id:"search-engines",level:3},{value:"Query Translators",id:"query-translators",level:3},{value:"Documents and Indices",id:"documents-and-indices",level:3},{value:"Collators",id:"collators",level:3},{value:"Decorators",id:"decorators",level:3},{value:"The Scheduler",id:"the-scheduler",level:3},{value:"The Search Page",id:"the-search-page",level:3},{value:"Search Context and Components",id:"search-context-and-components",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Backstage Search lets you find the right information you are looking for in the\nBackstage ecosystem."}),"\n",(0,r.jsx)(t.p,{children:"To get started, you should get familiar with these core concepts:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#search-engines",children:"Search Engines"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#query-translators",children:"Query Translators"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#documents-and-indices",children:"Documents and Indices"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#collators",children:"Collators"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#decorators",children:"Decorators"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#the-scheduler",children:"The Scheduler"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#the-search-page",children:"The Search Page"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#search-context-and-components",children:"Search Context and Components"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"search-engines",children:"Search Engines"}),"\n",(0,r.jsxs)(t.p,{children:["Backstage Search isn't a search engine itself, rather, it provides an interface\nbetween your Backstage instance and a Search Engine of your choice. More\nconcretely, a ",(0,r.jsx)(t.code,{children:"SearchEngine"})," is an interface whose concrete implementations\nfacilitate communication with different search engines (like Elasticsearch,\nLunr, Solr, etc). This abstraction exists in order to support your\norganization's needs."]}),"\n",(0,r.jsx)(t.p,{children:"Out of the box, Backstage Search comes pre-packaged with an in-memory search\nengine implementation built on top of Lunr."}),"\n",(0,r.jsx)(t.h3,{id:"query-translators",children:"Query Translators"}),"\n",(0,r.jsx)(t.p,{children:"Because you can bring your own search engine, and because search engines have\nvery unique and robust query languages themselves, there needs to be a\ntranslation layer between an abstract search query (containing search terms,\nfilters, and document types) into a concrete search query that is specific to a\nsearch engine."}),"\n",(0,r.jsx)(t.p,{children:"Search Engines come pre-packaged with simple translators that do rudimentary\ntransformations of search terms and filters, but you may want to provide your\nown to help tune search results in the context of your organization."}),"\n",(0,r.jsx)(t.h3,{id:"documents-and-indices",children:"Documents and Indices"}),"\n",(0,r.jsx)(t.p,{children:'"Document" is an abstract concept representing something that can be found by\nsearching for it. A document can represent a software entity, a TechDocs page,\netc. Documents are made up of metadata fields, at a minimum including a title,\ntext, and location (as in a URL).'}),"\n",(0,r.jsx)(t.p,{children:"An index is a collection of such documents of a given type."}),"\n",(0,r.jsx)(t.h3,{id:"collators",children:"Collators"}),"\n",(0,r.jsx)(t.p,{children:"You need to be able to search something! Collators are the way to define what\ncan be searched. Specifically, they're readable object streams of documents that\nconform to a minimum set of fields (including a document title, location, and\ntext), but which can contain any other fields as defined by the collator itself.\nOne collator is responsible for defining and collecting documents of a type."}),"\n",(0,r.jsx)(t.p,{children:'Some plugins, like the Catalog Backend, provide so-called "default" collator\nfactories which you can use out-of-the-box to start searching across Backstage\nquickly.'}),"\n",(0,r.jsx)(t.h3,{id:"decorators",children:"Decorators"}),"\n",(0,r.jsx)(t.p,{children:"Sometimes you want to add extra information to a set of documents in your search\nindex that the collator may not be aware of. For example, the Software Catalog\nknows about software entities, but it may not know about their usage or quality."}),"\n",(0,r.jsx)(t.p,{children:"Decorators are transform streams which sit between a collator (read stream) and\nan indexer (write stream) during the indexing process. It can be used to add\nextra fields to documents as they are being collated and indexed. This extra\nmetadata could then be used to bias search results or otherwise improve the\nsearch experience in your Backstage instance."}),"\n",(0,r.jsx)(t.p,{children:"In addition to adding extra metadata, decorators (like any transform stream) can\nalso be used to remove metadata, filter out, or even add extra documents at\nindex-time."}),"\n",(0,r.jsx)(t.h3,{id:"the-scheduler",children:"The Scheduler"}),"\n",(0,r.jsxs)(t.p,{children:["There are many ways a search index could be built and maintained, but Backstage\nSearch chooses to completely rebuild indices on a schedule. Different collators\ncan be configured to refresh at different intervals, depending on how often the\nsource information is updated. When search indexing is distributed among multiple\nbackend nodes, coordination to prevent clashes is typically handled by a\ndistributed ",(0,r.jsx)(t.code,{children:"TaskRunner"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"the-search-page",children:"The Search Page"}),"\n",(0,r.jsx)(t.p,{children:"Search pages are very custom things. Not every Backstage instance will want the\nsame interface! In order to allow you to customize your search experience to\nyour heart's content, the Search Plugin takes care of state management and other\nsearch logic for you, but most of the layout of a search page lives in a search\npage component defined in your Backstage App."}),"\n",(0,r.jsxs)(t.p,{children:["For an example of a simple search page, check\n",(0,r.jsx)(t.a,{href:"/docs/features/search/getting-started#adding-search-to-the-frontend",children:"getting started"})]}),"\n",(0,r.jsx)(t.h3,{id:"search-context-and-components",children:"Search Context and Components"}),"\n",(0,r.jsx)(t.p,{children:"A search experience, like a page, is composed of any number of search\ncomponents, which are all wired up using a search context."}),"\n",(0,r.jsxs)(t.p,{children:["Each search experience's context consists of details like a search term,\nfilters, types, results, and a page cursor for handling pagination. Different\ncomponents use this context in different ways. For example, the ",(0,r.jsx)(t.code,{children:"<SearchBar />"}),"\ncan set the search term, ",(0,r.jsx)(t.code,{children:"<SearchFilter />"})," components can set filters, and\nsearch results can be displayed using the ",(0,r.jsx)(t.code,{children:"<SearchResult />"})," component."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"<SearchResult />"})," and ",(0,r.jsx)(t.code,{children:"<SearchFilter />"})," components are special, in that\nthey themselves are extensible. For an example of how to extend these\ncomponents, check\n",(0,r.jsx)(t.a,{href:"/docs/features/search/getting-started#adding-search-to-the-frontend",children:"getting started"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"If you need even more customization, you can use the search context like any\nother React context to create custom search components of your own."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:c.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||p}function x(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=g.prototype;var v=b.prototype=new x;v.constructor=b,m(v,g.prototype),v.isPureReactComponent=!0;var S=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var o,a={},s=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,o)&&!_.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var u=Array(i),l=0;l<i;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:n,type:e,key:s,ref:c,props:a,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,o,a,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return s=s(i=e),e=""===a?"."+R(i,0):a,S(s)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),T(s,t,o,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(i=0,a=""===a?".":a+":",S(e))for(var u=0;u<e.length;u++){var l=a+R(c=e[u],u);i+=T(c,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(c=e.next()).done;)i+=T(c=c.value,t,o,l=a+R(c,u++),s);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},P={transition:null},I={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:P,ReactCurrentOwner:k};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=s,t.PureComponent=b,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(u in t)j.call(t,u)&&!_.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==i?i[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){i=Array(u);for(var l=0;l<u;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:n,type:e.type,key:a,ref:s,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(667294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);