(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{7303:function(e,t,n){"use strict";n.r(t),n.d(t,{ClientClerkProvider:function(){return c}});var r=n(2664),o=n(4033),a=n(955),i=n(5791);let u="undefined"!=typeof window?a.useLayoutEffect:a.useEffect,l=()=>{let{push:e}=(0,o.useRouter)(),t=(0,o.usePathname)(),n=(0,o.useSearchParams)(),r=t+n.toString();return(0,a.useEffect)(()=>{window.__clerk_nav_ref=t=>t===window.location.href.replace(window.location.origin,"")?(e(t),Promise.resolve()):new Promise(n=>{window.__clerk_nav_resolves_ref?window.__clerk_nav_resolves_ref.push(n):window.__clerk_nav_resolves_ref=[n],e(t)})},[r]),(0,a.useEffect)(()=>{window.__clerk_nav_resolves_ref&&window.__clerk_nav_resolves_ref.length&&window.__clerk_nav_resolves_ref.forEach(e=>e()),window.__clerk_nav_resolves_ref=[]}),(0,a.useCallback)(e=>window.__clerk_nav_ref(e),[])},c=e=>{let{__unstable_invokeMiddlewareOnAuthStateChange:t=!0}=e,n=(0,o.useRouter)(),c=l();u(()=>{window.__unstable__onBeforeSetActive=()=>{t&&(n.refresh(),n.push(window.location.href))},window.__unstable__onAfterSetActive=()=>{n.refresh()}},[]);let s={...e,navigate:c};return a.createElement(i.f,{options:s},a.createElement(r.El,{...s}))}},5791:function(e,t,n){"use strict";n.d(t,{f:function(){return i},k:function(){return a}});var r=n(955);let o=r.createContext(void 0);o.displayName="ClerkNextOptionsCtx";let a=()=>{let e=r.useContext(o);return e.value},i=e=>{let{children:t,options:n}=e;return r.createElement(o.Provider,{value:{value:n}},t)}},3530:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthenticateWithRedirectCallback:function(){return r.vn},ClerkLoaded:function(){return r.a7},ClerkLoading:function(){return r.qI},MultisessionAppSupport:function(){return r.KM},RedirectToCreateOrganization:function(){return r.gM},RedirectToOrganizationProfile:function(){return r.yB},RedirectToSignIn:function(){return r.N1},RedirectToSignUp:function(){return r.C2},RedirectToUserProfile:function(){return r.sO},SignedIn:function(){return r.CH},SignedOut:function(){return r.tj}});var r=n(2664)},1507:function(e,t,n){"use strict";n.r(t),n.d(t,{MagicLinkErrorCode:function(){return r.X1},WithClerk:function(){return r._E},WithSession:function(){return r.CJ},WithUser:function(){return r.Gi},isClerkAPIResponseError:function(){return r.kD},isKnownError:function(){return r.sZ},isMagicLinkError:function(){return r.V9},isMetamaskError:function(){return r.ZC},useAuth:function(){return r.aC},useClerk:function(){return r.ll},useMagicLink:function(){return r.jS},useOrganization:function(){return r.o8},useOrganizationList:function(){return r.eW},useOrganizations:function(){return r.qi},useSession:function(){return r.kP},useSessionList:function(){return r.xo},useSignIn:function(){return r.zq},useSignUp:function(){return r.QS},useUser:function(){return r.aF},withClerk:function(){return r.r0},withSession:function(){return r.NA},withUser:function(){return r.ns}});var r=n(2664)},1726:function(e,t,n){"use strict";n.r(t),n.d(t,{CreateOrganization:function(){return r.Gp},OrganizationProfile:function(){return r.A},OrganizationSwitcher:function(){return r.Li},SignIn:function(){return i},SignInButton:function(){return r.$d},SignOutButton:function(){return r.AM},SignUp:function(){return u},SignUpButton:function(){return r.gX},UserButton:function(){return r.l8},UserProfile:function(){return r.Iw}});var r=n(2664),o=n(955),a=n(5791);let i=e=>{let{signInUrl:t}=(0,a.k)();return t?o.createElement(r.cL,{routing:"path",path:t,...e}):o.createElement(r.cL,{...e})},u=e=>{let{signUpUrl:t}=(0,a.k)();return t?o.createElement(r.Mo,{routing:"path",path:t,...e}):o.createElement(r.Mo,{...e})}},3088:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2898);let o=(0,r.Z)("Moon",[["path",{d:"M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"1rit1i"}]])},3239:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2898);let o=(0,r.Z)("SunMedium",[["path",{d:"M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",key:"1r4kox"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]])},6435:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return s}});var r=n(955);let o=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,u=(0,r.createContext)(void 0),l={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(u))&&void 0!==e?e:l},s=e=>(0,r.useContext)(u)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),d=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:l="theme",themes:c=d,defaultTheme:s=n?"system":"light",attribute:f="data-theme",value:w,children:g,nonce:v})=>{let[k,y]=(0,r.useState)(()=>p(l,s)),[E,b]=(0,r.useState)(()=>p(l)),C=w?Object.values(w):c,S=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=_());let a=w?w[r]:r,u=t?h():null,l=document.documentElement;if("class"===f?(l.classList.remove(...C),a&&l.classList.add(a)):a?l.setAttribute(f,a):l.removeAttribute(f),i){let e=o.includes(s)?s:null,t=o.includes(r)?r:e;l.style.colorScheme=t}null==u||u()},[]),M=(0,r.useCallback)(e=>{y(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),x=(0,r.useCallback)(t=>{let r=_(t);b(r),"system"===k&&n&&!e&&S("system")},[k,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(x),x(e),()=>e.removeListener(x)},[x]),(0,r.useEffect)(()=>{let e=e=>{e.key===l&&M(e.newValue||s)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[M]),(0,r.useEffect)(()=>{S(null!=e?e:k)},[e,k]);let R=(0,r.useMemo)(()=>({theme:k,setTheme:M,forcedTheme:e,resolvedTheme:"system"===k?E:k,themes:n?[...c,"system"]:c,systemTheme:n?E:void 0}),[k,M,e,E,n,c]);return r.createElement(u.Provider,{value:R},r.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:l,themes:c,defaultTheme:s,attribute:f,value:w,children:g,attrs:C,nonce:v}),g)},m=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:u,defaultTheme:l,value:c,attrs:s,nonce:d})=>{let f="system"===l,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${s.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=u?o.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(e,t=!1,r=!0)=>{let a=c?c[e]:e,i=t?e+"|| ''":`'${a}'`,l="";return u&&r&&!t&&o.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||a?`c.add(${i})`:"null":a&&(l+=`d[s](n,${i})`),l},_=e?`!function(){${m}${h(e)}}()`:i?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${h(c?"x[e]":"e",!0)}}${f?"":"else{"+h(l,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${h(c?"x[e]":"e",!0)}}else{${h(l,!1,!1)};}${p}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:_}})},()=>!0),p=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},_=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},8909:function(e){e.exports={style:{fontFamily:"'__Inter_20951f', '__Inter_Fallback_20951f'",fontStyle:"normal"},className:"__className_20951f",variable:"__variable_20951f"}},5709:function(e){e.exports={style:{fontFamily:"'__JetBrains_Mono_bd9c35', '__JetBrains_Mono_Fallback_bd9c35'",fontStyle:"normal"},className:"__className_bd9c35",variable:"__variable_bd9c35"}},1396:function(e,t,n){e.exports=n(6685)},6694:function(e,t,n){"use strict";n.d(t,{Ee:function(){return g},NY:function(){return v},fC:function(){return w}});var r=n(3428),o=n(955),a=n(6989),i=n(6459),u=n(1030),l=n(9381);let c="Avatar",[s,d]=(0,a.b)(c),[f,m]=s(c),p=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:n,...a}=e,[i,u]=(0,o.useState)("idle");return(0,o.createElement)(f,{scope:n,imageLoadingStatus:i,onImageLoadingStatusChange:u},(0,o.createElement)(l.WV.span,(0,r.Z)({},a,{ref:t})))}),h=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:n,src:a,onLoadingStatusChange:c=()=>{},...s}=e,d=m("AvatarImage",n),f=function(e){let[t,n]=(0,o.useState)("idle");return(0,o.useEffect)(()=>{if(!e){n("error");return}let t=!0,r=new window.Image,o=e=>()=>{t&&n(e)};return n("loading"),r.onload=o("loaded"),r.onerror=o("error"),r.src=e,()=>{t=!1}},[e]),t}(a),p=(0,i.W)(e=>{c(e),d.onImageLoadingStatusChange(e)});return(0,u.b)(()=>{"idle"!==f&&p(f)},[f,p]),"loaded"===f?(0,o.createElement)(l.WV.img,(0,r.Z)({},s,{ref:t,src:a})):null}),_=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:n,delayMs:a,...i}=e,u=m("AvatarFallback",n),[c,s]=(0,o.useState)(void 0===a);return(0,o.useEffect)(()=>{if(void 0!==a){let e=window.setTimeout(()=>s(!0),a);return()=>window.clearTimeout(e)}},[a]),c&&"loaded"!==u.imageLoadingStatus?(0,o.createElement)(l.WV.span,(0,r.Z)({},i,{ref:t})):null}),w=p,g=h,v=_},7544:function(e,t,n){"use strict";n.d(t,{Ee:function(){return U},Rk:function(){return N},Tr:function(){return W},Uv:function(){return $},VY:function(){return D},Z0:function(){return F},ZA:function(){return I},__:function(){return A},ck:function(){return L},fC:function(){return O},fF:function(){return K},oC:function(){return P},tu:function(){return B},wU:function(){return z},xz:function(){return Z}});var r=n(3428),o=n(955),a=n(5744),i=n(2210),u=n(6989),l=n(3763),c=n(9381),s=n(6325),d=n(966);let f="DropdownMenu",[m,p]=(0,u.b)(f,[s.Wf]),h=(0,s.Wf)(),[_,w]=m(f),g=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,disabled:u=!1,...l}=e,d=w("DropdownMenuTrigger",n),f=h(n);return(0,o.createElement)(s.ee,(0,r.Z)({asChild:!0},f),(0,o.createElement)(c.WV.button,(0,r.Z)({type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":u?"":void 0,disabled:u},l,{ref:(0,i.F)(t,d.triggerRef),onPointerDown:(0,a.M)(e.onPointerDown,e=>{u||0!==e.button||!1!==e.ctrlKey||(d.onOpenToggle(),d.open||e.preventDefault())}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{!u&&(["Enter"," "].includes(e.key)&&d.onOpenToggle(),"ArrowDown"===e.key&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})))}),v=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...i}=e,u=w("DropdownMenuContent",n),l=h(n),c=(0,o.useRef)(!1);return(0,o.createElement)(s.VY,(0,r.Z)({id:u.contentId,"aria-labelledby":u.triggerId},l,i,{ref:t,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{var t;c.current||null===(t=u.triggerRef.current)||void 0===t||t.focus(),c.current=!1,e.preventDefault()}),onInteractOutside:(0,a.M)(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;(!u.modal||r)&&(c.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),k=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,i=h(n);return(0,o.createElement)(s.ZA,(0,r.Z)({},i,a,{ref:t}))}),y=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,i=h(n);return(0,o.createElement)(s.__,(0,r.Z)({},i,a,{ref:t}))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,i=h(n);return(0,o.createElement)(s.ck,(0,r.Z)({},i,a,{ref:t}))}),b=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,i=h(n);return(0,o.createElement)(s.oC,(0,r.Z)({},i,a,{ref:t}))}),C=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,i=h(n);return(0,o.createElement)(s.Ee,(0,r.Z)({},i,a,{ref:t}))}),S=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,i=h(n);return(0,o.createElement)(s.Rk,(0,r.Z)({},i,a,{ref:t}))}),M=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,i=h(n);return(0,o.createElement)(s.wU,(0,r.Z)({},i,a,{ref:t}))}),x=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,i=h(n);return(0,o.createElement)(s.Z0,(0,r.Z)({},i,a,{ref:t}))}),R=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,i=h(n);return(0,o.createElement)(s.fF,(0,r.Z)({},i,a,{ref:t}))}),T=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,i=h(n);return(0,o.createElement)(s.tu,(0,r.Z)({},i,a,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),O=e=>{let{__scopeDropdownMenu:t,children:n,dir:a,open:i,defaultOpen:u,onOpenChange:c,modal:f=!0}=e,m=h(t),p=(0,o.useRef)(null),[w=!1,g]=(0,l.T)({prop:i,defaultProp:u,onChange:c});return(0,o.createElement)(_,{scope:t,triggerId:(0,d.M)(),triggerRef:p,contentId:(0,d.M)(),open:w,onOpenChange:g,onOpenToggle:(0,o.useCallback)(()=>g(e=>!e),[g]),modal:f},(0,o.createElement)(s.fC,(0,r.Z)({},m,{open:w,onOpenChange:g,dir:a,modal:f}),n))},Z=g,$=e=>{let{__scopeDropdownMenu:t,...n}=e,a=h(t);return(0,o.createElement)(s.h_,(0,r.Z)({},a,n))},D=v,I=k,A=y,L=E,P=b,U=C,N=S,z=M,F=x,W=e=>{let{__scopeDropdownMenu:t,children:n,open:a,onOpenChange:i,defaultOpen:u}=e,c=h(t),[d=!1,f]=(0,l.T)({prop:a,defaultProp:u,onChange:i});return(0,o.createElement)(s.Tr,(0,r.Z)({},c,{open:d,onOpenChange:f}),n)},K=R,B=T}}]);