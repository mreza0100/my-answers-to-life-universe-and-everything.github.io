(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28,534],{8418:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,i,r=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return r}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var r,a=(r=n(7294))&&r.__esModule?r:{default:r},s=n(6273),l=n(387),h=n(7190);var c={};function d(e,t,n,o){if(e&&s.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var i=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;c[t+"%"+n+(i?"%"+i:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,o=l.useRouter(),r=a.default.useMemo((function(){var t=i(s.resolveHref(o,e.href,!0),2),n=t[0],r=t[1];return{href:n,as:e.as?s.resolveHref(o,e.as):r||n}}),[o,e.href,e.as]),u=r.href,m=r.as,f=e.children,g=e.replace,p=e.shallow,v=e.scroll,w=e.locale;"string"===typeof f&&(f=a.default.createElement("a",null,f));var E=(t=a.default.Children.only(f))&&"object"===typeof t&&t.ref,b=i(h.useIntersection({rootMargin:"200px"}),2),y=b[0],S=b[1],L=a.default.useCallback((function(e){y(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,y]);a.default.useEffect((function(){var e=S&&n&&s.isLocalURL(u),t="undefined"!==typeof w?w:o&&o.locale,i=c[u+"%"+m+(t?"%"+t:"")];e&&!i&&d(o,u,m,{locale:t})}),[m,u,S,w,n,o]);var z={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,i,r,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),t[i?"replace":"push"](n,o,{shallow:r,locale:l,scroll:a}))}(e,o,u,m,g,p,v,w)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(u)&&d(o,u,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof w?w:o&&o.locale,M=o&&o.isLocaleDomain&&s.getDomainLocale(m,I,o&&o.locales,o&&o.domainLocales);z.href=M||s.addBasePath(s.addLocale(m,I,o&&o.defaultLocale))}return a.default.cloneElement(t,z)};t.default=u},7190:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,i,r=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return r}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,o=e.disabled||!s,c=r.useRef(),d=i(r.useState(!1),2),u=d[0],m=d[1],f=i(r.useState(t?t.current:null),2),g=f[0],p=f[1],v=r.useCallback((function(e){c.current&&(c.current(),c.current=void 0),o||u||e&&e.tagName&&(c.current=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=h.find((function(e){return e.root===n.root&&e.margin===n.margin}));o?t=l.get(o):(t=l.get(n),h.push(n));if(t)return t;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:r,elements:i}),t}(n),i=o.id,r=o.observer,a=o.elements;return a.set(e,t),r.observe(e),function(){if(a.delete(e),r.unobserve(e),0===a.size){r.disconnect(),l.delete(i);var t=h.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&h.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:g,rootMargin:n}))}),[o,g,n,u]);return r.useEffect((function(){if(!s&&!u){var e=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),r.useEffect((function(){t&&p(t.current)}),[t]),[v,u]};var r=n(7294),a=n(9311),s="undefined"!==typeof IntersectionObserver;var l=new Map,h=[]},3028:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var o=n(5893),i=n(6770),r=n.n(i),a=n(6990),s=n(5208),l=n(7294),h=n(3935);const c=(e,t)=>e===t?.tagName?.toUpperCase?.(),d=e=>c("DIV",e)||c("SPAN",e),u=e=>c("IMG",e),m=e=>e.complete&&0!==e.naturalHeight,f=e=>c("SVG",e),g=({height:e,offset:t,width:n})=>Math.min((window.innerWidth-2*t)/n,(window.innerHeight-2*t)/e),p=({containerHeight:e,containerWidth:t,hasScalableSrc:n,offset:o,targetHeight:i,targetWidth:r})=>e&&t?!n&&i&&r?(({containerHeight:e,containerWidth:t,offset:n,targetHeight:o,targetWidth:i})=>{const r=g({height:o,offset:n,width:i}),a=i>o?i/t:o/e;return r>1?a:r*a})({containerHeight:e,containerWidth:t,offset:o,targetHeight:i,targetWidth:r}):g({height:e,offset:o,width:t}):1,v=/url(?:\(['"]?)(.*?)(?:['"]?\))/,w=e=>{if(e){if(u(e))return e.currentSrc;if(d(e)){const t=window.getComputedStyle(e).backgroundImage;if(t)return v.exec(t)?.[1]}}},E=({position:e,relativeNum:t})=>{const n=parseFloat(e);return e.endsWith("%")?t*n/100:n},b=/\.svg$/i,y=({hasZoomImg:e,imgSrc:t,isSvg:n,isZoomed:o,loadedImgEl:i,offset:r,shouldRefresh:a,targetEl:s})=>{const l=n||"data:image/svg+xml"===t?.slice?.(0,18)||e||!(!t||!b.test(t)),h=s.getBoundingClientRect(),c=window.getComputedStyle(s),u=null!=i&&d(s),m=null!=i&&!u,f=(({containerHeight:e,containerLeft:t,containerTop:n,containerWidth:o,hasScalableSrc:i,offset:r,targetHeight:a,targetWidth:s})=>{const l=p({containerHeight:e,containerWidth:o,hasScalableSrc:i,offset:r,targetHeight:a,targetWidth:s});return{top:n,left:t,width:o*l,height:e*l,transform:`translate(0,0) scale(${1/l})`}})({containerHeight:h.height,containerLeft:h.left,containerTop:h.top,containerWidth:h.width,hasScalableSrc:l,offset:r,targetHeight:i?.naturalHeight??h.height,targetWidth:i?.naturalWidth??h.width}),g=m?(({containerHeight:e,containerLeft:t,containerTop:n,containerWidth:o,hasScalableSrc:i,objectFit:r,objectPosition:a,offset:s,targetHeight:l,targetWidth:h})=>{if("scale-down"===r&&(r=h<=o&&l<=e?"none":"contain"),"cover"===r||"contain"===r){const c=o/h,d=e/l,u="cover"===r?Math.max(c,d):Math.min(c,d),[m="50%",f="50%"]=a.split(" "),g=E({position:m,relativeNum:o-h*u}),v=E({position:f,relativeNum:e-l*u}),w=p({containerHeight:l*u,containerWidth:h*u,hasScalableSrc:i,offset:s,targetHeight:l,targetWidth:h});return{top:n+v,left:t+g,width:h*u*w,height:l*u*w,transform:`translate(0,0) scale(${1/w})`}}if("none"===r){const[r="50%",c="50%"]=a.split(" "),d=E({position:r,relativeNum:o-h}),u=E({position:c,relativeNum:e-l}),m=p({containerHeight:l,containerWidth:h,hasScalableSrc:i,offset:s,targetHeight:l,targetWidth:h});return{top:n+u,left:t+d,width:h*m,height:l*m,transform:`translate(0,0) scale(${1/m})`}}if("fill"===r){const t=o/h,n=e/l,r=Math.max(t,n),a=p({containerHeight:l*r,containerWidth:h*r,hasScalableSrc:i,offset:s,targetHeight:l,targetWidth:h});return{width:o*a,height:e*a,transform:`translate(0,0) scale(${1/a})`}}return{}})({containerHeight:h.height,containerLeft:h.left,containerTop:h.top,containerWidth:h.width,hasScalableSrc:l,objectFit:c.objectFit,objectPosition:c.objectPosition,offset:r,targetHeight:i.naturalHeight,targetWidth:i.naturalWidth}):void 0,v=u?(({backgroundPosition:e,backgroundSize:t,containerHeight:n,containerLeft:o,containerTop:i,containerWidth:r,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:h})=>{if("cover"===t||"contain"===t){const c=r/h,d=n/l,u="cover"===t?Math.max(c,d):Math.min(c,d),[m="50%",f="50%"]=e.split(" "),g=E({position:m,relativeNum:r-h*u}),v=E({position:f,relativeNum:n-l*u}),w=p({containerHeight:l*u,containerWidth:h*u,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:h});return{top:i+v,left:o+g,width:h*u*w,height:l*u*w,transform:`translate(0,0) scale(${1/w})`}}if("auto"===t){const[t="50%",c="50%"]=e.split(" "),d=E({position:t,relativeNum:r-h}),u=E({position:c,relativeNum:n-l}),m=p({containerHeight:l,containerWidth:h,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:h});return{top:i+u,left:o+d,width:h*m,height:l*m,transform:`translate(0,0) scale(${1/m})`}}{const[c="50%",d="50%"]=t.split(" "),u=E({position:c,relativeNum:r})/h,m=E({position:d,relativeNum:n})/l,f=Math.min(u,m),[g="50%",v="50%"]=e.split(" "),w=E({position:g,relativeNum:r-h*f}),b=E({position:v,relativeNum:n-l*f}),y=p({containerHeight:l*f,containerWidth:h*f,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:h});return{top:i+b,left:o+w,width:h*f*y,height:l*f*y,transform:`translate(0,0) scale(${1/y})`}}})({backgroundPosition:c.backgroundPosition,backgroundSize:c.backgroundSize,containerHeight:h.height,containerLeft:h.left,containerTop:h.top,containerWidth:h.width,hasScalableSrc:l,offset:r,targetHeight:i.naturalHeight,targetWidth:i.naturalWidth}):void 0,w=Object.assign({},f,g,v);if(o){const e=window.innerWidth/2,t=window.innerHeight/2,n=e-(parseFloat(String(w.left||0))+parseFloat(String(w.width||0))/2),o=t-(parseFloat(String(w.top||0))+parseFloat(String(w.height||0))/2);a&&(w.transitionDuration="0.01ms"),w.transform=`translate(${n}px,${o}px) scale(1)`}return w},S=["img","svg",'[role="img"]',"[data-zoom]"].map((e=>`${e}:not([aria-hidden="true"])`)).join(","),L={overflow:"",width:""};function z(e){return l.createElement(I,{...e})}class I extends l.Component{constructor(){super(...arguments),this.state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:"UNLOADED",shouldRefresh:!1},this.refContent=l.createRef(),this.refDialog=l.createRef(),this.refModalContent=l.createRef(),this.refModalImg=l.createRef(),this.refWrap=l.createRef(),this.imgEl=null,this.isScaling=!1,this.prevBodyAttrs=L,this.styleModalImg={},this.getDialogContainer=()=>{let e=document.querySelector("[data-rmiz-portal]");return null==e&&(e=document.createElement("div"),e.setAttribute("data-rmiz-portal",""),document.body.appendChild(e)),e},this.setId=()=>{const e=()=>Math.random().toString(16).slice(-4);this.setState({id:e()+e()+e()})},this.setAndTrackImg=()=>{const e=this.refContent.current;e&&(this.imgEl=e.querySelector(S),this.imgEl?(this.changeObserver?.disconnect?.(),this.imgEl?.addEventListener?.("load",this.handleImgLoad),this.imgEl?.addEventListener?.("click",this.handleZoom),this.state.loadedImgEl||this.handleImgLoad(),this.imgElObserver=new ResizeObserver((e=>{const t=e[0];t?.target&&(this.imgEl=t.target,this.setState({}))})),this.imgElObserver.observe(this.imgEl)):this.changeObserver||(this.changeObserver=new MutationObserver(this.setAndTrackImg),this.changeObserver.observe(e,{childList:!0,subtree:!0})))},this.handleIfZoomChanged=e=>{const{isZoomed:t}=this.props;!e&&t?this.zoom():e&&!t&&this.unzoom()},this.handleImgLoad=()=>{const{imgEl:e}=this,t=w(e);if(!t)return;const n=new Image;u(e)&&(n.sizes=e.sizes,n.srcset=e.srcset),n.src=t;const o=()=>{this.setState({loadedImgEl:n})};n.decode().then(o).catch((()=>{m(n)?o():n.onload=o}))},this.handleZoom=()=>{this.hasImage()&&this.props.onZoomChange?.(!0)},this.handleUnzoom=()=>{this.props.onZoomChange?.(!1)},this.handleDialogCancel=e=>{e.preventDefault()},this.handleDialogClick=e=>{e.target!==this.refModalContent.current&&e.target!==this.refModalImg.current||this.handleUnzoom()},this.handleKeyDown=e=>{"Escape"!==e.key&&27!==e.keyCode||(e.preventDefault(),e.stopPropagation(),this.handleUnzoom())},this.handleWheel=e=>{e.ctrlKey||(e.stopPropagation(),queueMicrotask((()=>{this.handleUnzoom()})))},this.handleTouchStart=e=>{e.touches.length>1?this.isScaling=!0:1===e.changedTouches.length&&e.changedTouches[0]&&(this.touchYStart=e.changedTouches[0].screenY)},this.handleTouchMove=e=>{const t=window.visualViewport?.scale??1;if(this.props.canSwipeToUnzoom&&!this.isScaling&&t<=1&&null!=this.touchYStart&&e.changedTouches[0]){this.touchYEnd=e.changedTouches[0].screenY;const t=Math.max(this.touchYStart,this.touchYEnd),n=Math.min(this.touchYStart,this.touchYEnd);Math.abs(t-n)>this.props.swipeToUnzoomThreshold&&(this.touchYStart=void 0,this.touchYEnd=void 0,this.handleUnzoom())}},this.handleTouchEnd=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleTouchCancel=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleResize=()=>{this.setState({shouldRefresh:!0})},this.hasImage=()=>this.imgEl&&(this.state.loadedImgEl||f(this.imgEl))&&"none"!==window.getComputedStyle(this.imgEl).display,this.zoom=()=>{this.bodyScrollDisable(),this.refDialog.current?.showModal?.(),this.setState({modalState:"LOADING"}),this.loadZoomImg(),window.addEventListener("wheel",this.handleWheel,{passive:!0}),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel,{passive:!0}),document.addEventListener("keydown",this.handleKeyDown,!0),this.refModalImg.current?.addEventListener?.("transitionend",this.handleZoomEnd,{once:!0})},this.handleZoomEnd=()=>{setTimeout((()=>{this.setState({modalState:"LOADED"}),window.addEventListener("resize",this.handleResize,{passive:!0})}),0)},this.unzoom=()=>{this.setState({modalState:"UNLOADING"}),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),document.removeEventListener("keydown",this.handleKeyDown,!0),this.refModalImg.current?.addEventListener?.("transitionend",this.handleUnzoomEnd,{once:!0})},this.handleUnzoomEnd=()=>{setTimeout((()=>{window.removeEventListener("resize",this.handleResize),this.setState({shouldRefresh:!1,modalState:"UNLOADED"}),this.refDialog.current?.close?.(),this.bodyScrollEnable()}),0)},this.bodyScrollDisable=()=>{this.prevBodyAttrs={overflow:document.body.style.overflow,width:document.body.style.width};const e=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.width=`${e}px`},this.bodyScrollEnable=()=>{document.body.style.width=this.prevBodyAttrs.width,document.body.style.overflow=this.prevBodyAttrs.overflow,this.prevBodyAttrs=L},this.loadZoomImg=()=>{const{props:{zoomImg:e}}=this,t=e?.src;if(t){const n=new Image;n.sizes=e?.sizes??"",n.srcset=e?.srcSet??"",n.src=t;const o=()=>{this.setState({isZoomImgLoaded:!0})};n.decode().then(o).catch((()=>{m(n)?o():n.onload=o}))}},this.UNSAFE_handleSvg=()=>{const{imgEl:e,refModalImg:t,styleModalImg:n}=this;if(f(e)){const o=e.cloneNode(!0);(e=>{const t="-zoom",n=["clip-path","fill","mask","marker-start","marker-mid","marker-end"],o=new Map;if(e.hasAttribute("id")){const n=e.id,i=n+t;o.set(n,i),e.id=i}e.querySelectorAll("[id]").forEach((e=>{const n=e.id,i=n+t;o.set(n,i),e.id=i})),o.forEach(((t,o)=>{const i=`url(#${o})`,r=`url(#${t})`,a=n.map((e=>`[${e}="${i}"]`)).join(", ");e.querySelectorAll(a).forEach((e=>{n.forEach((t=>{e.getAttribute(t)===i&&e.setAttribute(t,r)}))}))})),e.querySelectorAll("style").forEach((e=>{o.forEach(((t,n)=>{e.textContent&&(e.textContent=e.textContent.replaceAll(`#${n}`,`#${t}`))}))}))})(o),o.style.width=`${n.width||0}px`,o.style.height=`${n.height||0}px`,o.addEventListener("click",this.handleUnzoom),t.current?.firstChild?.remove?.(),t.current?.appendChild?.(o)}}}render(){const{handleDialogCancel:e,handleDialogClick:t,handleUnzoom:n,handleZoom:o,imgEl:i,props:{a11yNameButtonUnzoom:r,a11yNameButtonZoom:a,children:s,classDialog:c,IconUnzoom:m,IconZoom:g,isZoomed:p,wrapElement:v,ZoomContent:E,zoomImg:b,zoomMargin:S},refContent:L,refDialog:z,refModalContent:I,refModalImg:M,refWrap:_,state:{id:C,isZoomImgLoaded:A,loadedImgEl:D,modalState:N,shouldRefresh:T}}=this,W=`rmiz-modal-${C}`,x=`rmiz-modal-img-${C}`,H=d(i),k=u(i),U=f(i),Z=(e=>{if(e)return u(e)?e.alt??void 0:e.getAttribute("aria-label")??void 0})(i),O=w(i),R=k?i.sizes:void 0,j=k?i.srcset:void 0,$=!!b?.src,F=this.hasImage(),Y=Z?`${a}: ${Z}`:a,B="LOADING"===N||"LOADED"===N,P=F?"found":"not-found",G="UNLOADED"===N||"UNLOADING"===N?"hidden":"visible",K={visibility:"UNLOADED"===N?"visible":"hidden"},q=(e=>{if(!e)return{};if(f(e)){const t=e.parentElement,n=e.getBoundingClientRect();if(t){const e=t.getBoundingClientRect();return{height:n.height,left:e.left-n.left,top:e.top-n.top,width:n.width}}return{height:n.height,left:n.left,width:n.width,top:n.top}}return{height:e.offsetHeight,left:e.offsetLeft,width:e.offsetWidth,top:e.offsetTop}})(i);this.styleModalImg=F?y({hasZoomImg:$,imgSrc:O,isSvg:U,isZoomed:p&&B,loadedImgEl:D,offset:S,shouldRefresh:T,targetEl:i}):{};let V=null;if(F){const e=k||H?l.createElement("img",{alt:Z,sizes:R,src:O,srcSet:j,...A&&"LOADED"===N?b:{},"data-rmiz-modal-img":"",height:this.styleModalImg.height||void 0,id:x,ref:M,style:this.styleModalImg,width:this.styleModalImg.width||void 0}):U?l.createElement("div",{"data-rmiz-modal-img":!0,ref:M,style:this.styleModalImg}):null,t=l.createElement("button",{"aria-label":r,"data-rmiz-btn-unzoom":"",onClick:n,type:"button"},l.createElement(m,null));V=E?l.createElement(E,{buttonUnzoom:t,modalState:N,img:e,onUnzoom:n}):l.createElement(l.Fragment,null,e,t)}return l.createElement(v,{"aria-owns":W,"data-rmiz":"",ref:_},l.createElement(v,{"data-rmiz-content":P,ref:L,style:K},s),F&&l.createElement(v,{"data-rmiz-ghost":"",style:q},l.createElement("button",{"aria-label":Y,"data-rmiz-btn-zoom":"",onClick:o,type:"button"},l.createElement(g,null))),F&&h.createPortal(l.createElement("dialog",{"aria-labelledby":x,"aria-modal":"true",className:c,"data-rmiz-modal":"",id:W,onClick:t,onClose:n,onCancel:e,ref:z,role:"dialog"},l.createElement("div",{"data-rmiz-modal-overlay":G}),l.createElement("div",{"data-rmiz-modal-content":"",ref:I},V)),this.getDialogContainer()))}componentDidMount(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}componentWillUnmount(){"UNLOADED"!==this.state.modalState&&this.bodyScrollEnable(),this.changeObserver?.disconnect?.(),this.imgElObserver?.disconnect?.(),this.imgEl?.removeEventListener?.("load",this.handleImgLoad),this.imgEl?.removeEventListener?.("click",this.handleZoom),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleZoomEnd),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleUnzoomEnd),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),window.removeEventListener("resize",this.handleResize),document.removeEventListener("keydown",this.handleKeyDown,!0)}componentDidUpdate(e){this.UNSAFE_handleSvg(),this.handleIfZoomChanged(e.isZoomed)}}function M(e){const[t,n]=l.useState(!1);return l.createElement(z,{...e,isZoomed:t,onZoomChange:n})}I.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",canSwipeToUnzoom:!0,IconUnzoom:function(){return l.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))},IconZoom:function(){return l.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))},swipeToUnzoomThreshold:10,wrapElement:"div",zoomMargin:0};var _=n(534),C=function(e){var t=e.src,n=e.key,i=e.caption,l=e.size,h=void 0===l?a.h2.DEFAULT:l,c=e.alt,d=e.className,u=e.source;return(0,o.jsxs)("div",{className:(0,s.GF)(r().article_image,r().article_image__wrapper,d,r()["size_"+h],"display-block mx-auto my-5"),children:[(0,o.jsx)(M,{children:(0,o.jsx)("img",{src:(0,s.zS)(t),alt:c,width:"100%",className:(0,s.GF)("block")})}),i&&(0,o.jsx)("p",{className:(0,s.GF)(r().article_image__caption,"mb-0 mt-2 text-sm w-full text-center"),children:i}),u&&(0,o.jsx)("p",{className:(0,s.GF)(r().article_image__caption,"mb-0 mt-2 text-sm w-full text-center"),children:(0,o.jsx)(_.default,{newTab:!0,href:u,children:"source"})})]},n)}},534:function(e,t,n){"use strict";n.r(t);var o=n(5893),i=n(1664),r=n(5208);t.default=function(e){var t=e.href,n=e.passHref,a=void 0===n||n,s=e.newTab,l=void 0!==s&&s,h=e.external,c=void 0!==h&&h,d=e.children,u=e.className;return(0,o.jsx)(o.Fragment,{children:l||c?(0,o.jsx)("a",{href:(0,r.b7)(t),className:u,target:"_blank",rel:"noopener noreferrer",children:d}):(0,o.jsx)(i.default,{href:(0,r.b7)(t),passHref:a,children:(0,o.jsx)("a",{className:(0,r.GF)("cursor-pointer hover:text-blue-500",u),children:d})})})}},6770:function(e){e.exports={article_image__wrapper:"Images_article_image__wrapper__ulebv",size_default:"Images_size_default__7TrY4",size_full:"Images_size_full__h3qJZ",size_small:"Images_size_small__eKAyx",size_xs:"Images_size_xs__dSvI5",size_medium:"Images_size_medium__RRstD"}},1664:function(e,t,n){e.exports=n(8418)}}]);