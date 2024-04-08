var _t=Object.defineProperty;var ht=(t,e,n)=>e in t?_t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var D=(t,e,n)=>(ht(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function z(){}const gt=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function bt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function tt(t){return t()}function Ie(){return Object.create(null)}function W(t){t.forEach(tt)}function Ee(t){return typeof t=="function"}function V(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function vt(t){return Object.keys(t).length===0}function kt(t,e,n,l){if(t){const o=nt(t,e,n,l);return t[0](o)}}function nt(t,e,n,l){return t[1]&&l?pt(n.ctx.slice(),t[1](l(e))):n.ctx}function wt(t,e,n,l){if(t[2]&&l){const o=t[2](l(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const r=[],s=Math.max(e.dirty.length,o.length);for(let a=0;a<s;a+=1)r[a]=e.dirty[a]|o[a];return r}return e.dirty|o}return e.dirty}function yt(t,e,n,l,o,r){if(o){const s=nt(e,n,l,r);t.p(s,o)}}function zt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function Ue(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const lt=typeof window<"u";let Mt=lt?()=>window.performance.now():()=>Date.now(),Ce=lt?t=>requestAnimationFrame(t):z;const ne=new Set;function rt(t){ne.forEach(e=>{e.c(t)||(ne.delete(e),e.f())}),ne.size!==0&&Ce(rt)}function Nt(t){let e;return ne.size===0&&Ce(rt),{promise:new Promise(n=>{ne.add(e={c:t,f:n})}),abort(){ne.delete(e)}}}function b(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=g("style");return e.textContent="/* empty */",Ct(ot(t),e),e.sheet}function Ct(t,e){return b(t.head||t,e),e.sheet}function v(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode&&t.parentNode.removeChild(t)}function Le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function He(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function X(t){return document.createTextNode(t)}function y(){return X(" ")}function Lt(){return X("")}function Q(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ot(t){let e;return{p(...n){e=n,e.forEach(l=>t.push(l))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function At(t){return Array.from(t.childNodes)}function st(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ve(t,e){t.value=e??""}function T(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function St(t,e,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:l})}const _e=new Map;let he=0;function Bt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:Et(e),rules:{}};return _e.set(t,n),n}function Pt(t,e,n,l,o,r,s,a=0){const u=16.666/l;let i=`{
`;for(let L=0;L<=1;L+=u){const N=e+(n-e)*r(L);i+=L*100+`%{${s(N,1-N)}}
`}const c=i+`100% {${s(n,1-n)}}
}`,m=`__svelte_${Bt(c)}_${a}`,_=ot(t),{stylesheet:k,rules:O}=_e.get(_)||jt(_,t);O[m]||(O[m]=!0,k.insertRule(`@keyframes ${m} ${c}`,k.cssRules.length));const M=t.style.animation||"";return t.style.animation=`${M?`${M}, `:""}${m} ${l}ms linear ${o}ms 1 both`,he+=1,m}function Ge(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),o=n.length-l.length;o&&(t.style.animation=l.join(", "),he-=o,he||Tt())}function Tt(){Ce(()=>{he||(_e.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&p(e)}),_e.clear())})}let ue;function I(t){ue=t}function Ft(){if(!ue)throw new Error("Function called outside component initialization");return ue}function Rt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(l=>l.call(this,e))}const te=[],J=[];let le=[];const ze=[],qt=Promise.resolve();let Me=!1;function Dt(){Me||(Me=!0,qt.then(Oe))}function ae(t){le.push(t)}function se(t){ze.push(t)}const we=new Set;let x=0;function Oe(){if(x!==0)return;const t=ue;do{try{for(;x<te.length;){const e=te[x];x++,I(e),It(e.$$)}}catch(e){throw te.length=0,x=0,e}for(I(null),te.length=0,x=0;J.length;)J.pop()();for(let e=0;e<le.length;e+=1){const n=le[e];we.has(n)||(we.add(n),n())}le.length=0}while(te.length);for(;ze.length;)ze.pop()();Me=!1,we.clear(),I(t)}function It(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ae)}}function Ut(t){const e=[],n=[];le.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),le=e}let oe;function Ht(){return oe||(oe=Promise.resolve(),oe.then(()=>{oe=null})),oe}function Je(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const me=new Set;let K;function Ae(){K={r:0,c:[],p:K}}function Se(){K.r||W(K.c),K=K.p}function A(t,e){t&&t.i&&(me.delete(t),t.i(e))}function S(t,e,n,l){if(t&&t.o){if(me.has(t))return;me.add(t),K.c.push(()=>{me.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const Vt={duration:0};function Gt(t,e,n){const l={direction:"in"};let o=e(t,n,l),r=!1,s,a,u=0;function i(){s&&Ge(t,s)}function c(){const{delay:_=0,duration:k=300,easing:O=gt,tick:M=z,css:L}=o||Vt;L&&(s=Pt(t,0,1,k,_,O,L,u++)),M(0,1);const N=Mt()+_,d=N+k;a&&a.abort(),r=!0,ae(()=>Je(t,!0,"start")),a=Nt(C=>{if(r){if(C>=d)return M(1,0),Je(t,!0,"end"),i(),r=!1;if(C>=N){const P=O((C-N)/k);M(P,1-P)}}return r})}let m=!1;return{start(){m||(m=!0,Ge(t),Ee(o)?(o=o(l),Ht().then(c)):c())},invalidate(){m=!1},end(){r&&(i(),r=!1)}}}function Jt(t,e){const n=e.token={};function l(o,r,s,a){if(e.token!==n)return;e.resolved=a;let u=e.ctx;s!==void 0&&(u=u.slice(),u[s]=a);const i=o&&(e.current=o)(u);let c=!1;e.block&&(e.blocks?e.blocks.forEach((m,_)=>{_!==r&&m&&(Ae(),S(m,1,1,()=>{e.blocks[_]===m&&(e.blocks[_]=null)}),Se())}):e.block.d(1),i.c(),A(i,1),i.m(e.mount(),e.anchor),c=!0),e.block=i,e.blocks&&(e.blocks[r]=i),c&&Oe()}if(bt(t)){const o=Ft();if(t.then(r=>{I(o),l(e.then,1,e.value,r),I(null)},r=>{if(I(o),l(e.catch,2,e.error,r),I(null),!e.hasCatch)throw r}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,t),!0;e.resolved=t}}function Kt(t,e,n){const l=e.slice(),{resolved:o}=t;t.current===t.then&&(l[t.value]=o),t.current===t.catch&&(l[t.error]=o),t.block.p(l,n)}function re(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ie(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function q(t){t&&t.c()}function F(t,e,n){const{fragment:l,after_update:o}=t.$$;l&&l.m(e,n),ae(()=>{const r=t.$$.on_mount.map(tt).filter(Ee);t.$$.on_destroy?t.$$.on_destroy.push(...r):W(r),t.$$.on_mount=[]}),o.forEach(ae)}function R(t,e){const n=t.$$;n.fragment!==null&&(Ut(n.after_update),W(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qt(t,e){t.$$.dirty[0]===-1&&(te.push(t),Dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(t,e,n,l,o,r,s=null,a=[-1]){const u=ue;I(t);const i=t.$$={fragment:null,ctx:[],props:r,update:z,not_equal:o,bound:Ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Ie(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};s&&s(i.root);let c=!1;if(i.ctx=n?n(t,e.props||{},(m,_,...k)=>{const O=k.length?k[0]:_;return i.ctx&&o(i.ctx[m],i.ctx[m]=O)&&(!i.skip_bound&&i.bound[m]&&i.bound[m](O),c&&Qt(t,m)),_}):[],i.update(),c=!0,W(i.before_update),i.fragment=l?l(i.ctx):!1,e.target){if(e.hydrate){const m=At(e.target);i.fragment&&i.fragment.l(m),m.forEach(p)}else i.fragment&&i.fragment.c();e.intro&&A(t.$$.fragment),F(t,e.target,e.anchor),Oe()}I(u)}class Z{constructor(){D(this,"$$");D(this,"$$set")}$destroy(){R(this,1),this.$destroy=z}$on(e,n){if(!Ee(n))return z;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Wt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Wt);function Xt(t,e,n,l=0,o){const r=Array.from({length:t*t},()=>0),s=new Yt(0,t*t-1,l);for(let a=0;a<e;a++)for(let u=0;u<n;u++)r[s.next()]=a+1;return o&&o<=e&&(r[s.next()]=o),r[s.next()]=-1,r}class Yt{constructor(e,n,l){D(this,"options");D(this,"random");this.options=Array.from({length:n-e+1},(o,r)=>r+e),this.random=new Zt(l)}next(){if(this.options.length==0)throw new RangeError("No more unique values");const e=this.random.next(0,this.options.length);return this.options.splice(e,1)[0]}}class Zt{constructor(e){D(this,"seed");this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}next(e=0,n=2147483647){return this.seed=this.seed*16807%2147483647,e+this.seed%(n-e)}nextFloat(){return(this.next()-1)/2147483646}}class ee{constructor(e,n,l){D(this,"color");D(this,"icon");D(this,"name");this.name=e,this.color=n,this.icon=l}}function $t(t,e){return e.every(n=>n in t)}const Ne={bystander:new ee("bystander","#D7C69F",""),assassin:new ee("assassin","#404040","M13.687 13.686L25 25m0 0l11.314 11.314M25 25L13.687 36.314M25 25l11.314-11.314"),players:[new ee("Red","#B33038","M5.908 28.536a5 5 0 0 1 0-7.071L21.465 5.908a5 5 0 0 1 7.071 0l15.556 15.556a5 5 0 0 1 0 7.071L28.536 44.092a5 5 0 0 1-7.071 0L5.908 28.536z"),new ee("Blue","#288DC9","M13.686 36.314c-6.248-6.248-6.248-16.379 0-22.627s16.379-6.248 22.627 0 6.248 16.379 0 22.627-16.379 6.248-22.627 0z"),new ee("Green","#2A9034","M9 14a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H14a5 5 0 0 1-5-5V14z"),new ee("Orange","#DA781F","M20.67 12.5c1.925-3.333 6.736-3.333 8.66 0l12.124 21c1.924 3.333-.481 7.5-4.33 7.5H12.876c-3.849 0-6.255-4.167-4.33-7.5l12.124-21z")],get_players:function(t){return this.players.slice(0,t)}};function Ke(t,e,n){const l=t.slice();return l[7]=e[n],l[9]=n,l}function Qe(t,e,n){const l=t.slice();l[7]=e[n],l[12]=n;const o=l[9]*l[0]+l[12];return l[10]=o,l}function We(t){let e,n,l,o,r,s,a;return{c(){e=g("div"),n=y(),l=g("div"),o=y(),r=g("div"),s=y(),a=g("div"),h(e,"class","starting-indicator inline left svelte-hdefs8"),T(e,"background-color",t[2][t[1]].color),h(l,"class","starting-indicator inline right svelte-hdefs8"),T(l,"background-color",t[2][t[1]].color),h(r,"class","starting-indicator block top svelte-hdefs8"),T(r,"background-color",t[2][t[1]].color),h(a,"class","starting-indicator block bottom svelte-hdefs8"),T(a,"background-color",t[2][t[1]].color)},m(u,i){v(u,e,i),v(u,n,i),v(u,l,i),v(u,o,i),v(u,r,i),v(u,s,i),v(u,a,i)},p(u,i){i&6&&T(e,"background-color",u[2][u[1]].color),i&6&&T(l,"background-color",u[2][u[1]].color),i&6&&T(r,"background-color",u[2][u[1]].color),i&6&&T(a,"background-color",u[2][u[1]].color)},d(u){u&&(p(e),p(n),p(l),p(o),p(r),p(s),p(a))}}}function Xe(t){let e,n,l,o;return{c(){var r,s;e=g("div"),n=He("svg"),l=He("path"),h(l,"d",o=(r=t[2].at(t[3][t[10]]))==null?void 0:r.icon),h(l,"class","svelte-hdefs8"),h(n,"viewBox","0 0 50 50"),h(n,"fill","none"),h(n,"xmlns","http://www.w3.org/2000/svg"),h(n,"class","svelte-hdefs8"),h(e,"class","tile svelte-hdefs8"),T(e,"background-color",(s=t[2].at(t[3][t[10]]))==null?void 0:s.color)},m(r,s){v(r,e,s),b(e,n),b(n,l)},p(r,s){var a,u;s&13&&o!==(o=(a=r[2].at(r[3][r[10]]))==null?void 0:a.icon)&&h(l,"d",o),s&13&&T(e,"background-color",(u=r[2].at(r[3][r[10]]))==null?void 0:u.color)},d(r){r&&p(e)}}}function Ye(t){let e,n,l=re(Array(t[0])),o=[];for(let r=0;r<l.length;r+=1)o[r]=Xe(Qe(t,l,r));return{c(){e=g("div");for(let r=0;r<o.length;r+=1)o[r].c();n=y(),h(e,"class","row svelte-hdefs8")},m(r,s){v(r,e,s);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(e,null);b(e,n)},p(r,s){if(s&13){l=re(Array(r[0]));let a;for(a=0;a<l.length;a+=1){const u=Qe(r,l,a);o[a]?o[a].p(u,s):(o[a]=Xe(u),o[a].c(),o[a].m(e,n))}for(;a<o.length;a+=1)o[a].d(1);o.length=l.length}},d(r){r&&p(e),Le(o,r)}}}function xt(t){let e,n,l=t[1]>0&&We(t),o=re(Array(t[0])),r=[];for(let s=0;s<o.length;s+=1)r[s]=Ye(Ke(t,o,s));return{c(){e=g("div"),l&&l.c(),n=y();for(let s=0;s<r.length;s+=1)r[s].c();h(e,"class","board svelte-hdefs8")},m(s,a){v(s,e,a),l&&l.m(e,null),b(e,n);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(e,null)},p(s,[a]){if(s[1]>0?l?l.p(s,a):(l=We(s),l.c(),l.m(e,n)):l&&(l.d(1),l=null),a&13){o=re(Array(s[0]));let u;for(u=0;u<o.length;u+=1){const i=Ke(s,o,u);r[u]?r[u].p(i,a):(r[u]=Ye(i),r[u].c(),r[u].m(e,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=o.length}},i:z,o:z,d(s){s&&p(e),l&&l.d(),Le(r,s)}}}function en(t,e,n){let l,o,{teams:r}=e,{size:s}=e,{team_size:a}=e,{seed:u}=e,{starting_team:i=0}=e;return t.$$set=c=>{"teams"in c&&n(4,r=c.teams),"size"in c&&n(0,s=c.size),"team_size"in c&&n(5,a=c.team_size),"seed"in c&&n(6,u=c.seed),"starting_team"in c&&n(1,i=c.starting_team)},t.$$.update=()=>{t.$$.dirty&115&&n(3,l=Xt(s,r.length,a,u,i)),t.$$.dirty&16&&n(2,o=[Ne.bystander,...r,Ne.assassin])},[s,i,o,l,r,a,u]}class tn extends Z{constructor(e){super(),Y(this,e,en,xt,V,{teams:4,size:0,team_size:5,seed:6,starting_team:1})}}function Ze(t){let e;return{c(){e=g("div"),h(e,"class","color svelte-aslf8l"),T(e,"background-color",t[2])},m(n,l){v(n,e,l)},p(n,l){l&4&&T(e,"background-color",n[2])},d(n){n&&p(e)}}}function nn(t){let e,n,l=!1,o,r,s,a,u,i,c,m=t[2]&&Ze(t);return u=Ot(t[6][0]),{c(){e=g("label"),n=g("input"),o=y(),m&&m.c(),r=y(),s=g("div"),a=X(t[1]),h(n,"type","radio"),n.__value=t[3],Ve(n,n.__value),h(n,"name",t[4]),h(n,"class","svelte-aslf8l"),h(e,"class","color-option svelte-aslf8l"),u.p(n)},m(_,k){v(_,e,k),b(e,n),n.checked=n.__value===t[0],b(e,o),m&&m.m(e,null),b(e,r),b(e,s),b(s,a),i||(c=Q(n,"change",t[5]),i=!0)},p(_,[k]){k&8&&(n.__value=_[3],Ve(n,n.__value),l=!0),k&16&&h(n,"name",_[4]),(l||k&1)&&(n.checked=n.__value===_[0]),_[2]?m?m.p(_,k):(m=Ze(_),m.c(),m.m(e,r)):m&&(m.d(1),m=null),k&2&&st(a,_[1])},i:z,o:z,d(_){_&&p(e),m&&m.d(),u.r(),i=!1,c()}}}function ln(t,e,n){let{label:l}=e,{color:o=""}=e,{value:r}=e,{group_value:s}=e,{group_name:a}=e;const u=[[]];function i(){s=this.__value,n(0,s)}return t.$$set=c=>{"label"in c&&n(1,l=c.label),"color"in c&&n(2,o=c.color),"value"in c&&n(3,r=c.value),"group_value"in c&&n(0,s=c.group_value),"group_name"in c&&n(4,a=c.group_name)},[s,l,o,r,a,i,u]}class it extends Z{constructor(e){super(),Y(this,e,ln,nn,V,{label:1,color:2,value:3,group_value:0,group_name:4})}}function rn(t){let e,n;return{c(){e=g("span"),n=X("ⓘ"),h(e,"title",t[0]),h(e,"class","svelte-1krmclf")},m(l,o){v(l,e,o),b(e,n)},p(l,[o]){o&1&&h(e,"title",l[0])},i:z,o:z,d(l){l&&p(e)}}}function on(t,e,n){let{info:l}=e;return t.$$set=o=>{"info"in o&&n(0,l=o.info)},[l]}class ut extends Z{constructor(e){super(),Y(this,e,on,rn,V,{info:0})}}function sn(t){let e,n,l,o,r,s;const a=t[3].default,u=kt(a,t,t[2],null);return{c(){e=g("section"),n=g("button"),l=y(),u&&u.c(),h(n,"class","close svelte-1pqpnhg"),h(e,"data-disabled",t[1]),h(e,"data-open",t[0]),h(e,"class","svelte-1pqpnhg")},m(i,c){v(i,e,c),b(e,n),b(e,l),u&&u.m(e,null),o=!0,r||(s=Q(n,"click",t[4]),r=!0)},p(i,[c]){u&&u.p&&(!o||c&4)&&yt(u,a,i,i[2],o?wt(a,i[2],c,null):zt(i[2]),null),(!o||c&2)&&h(e,"data-disabled",i[1]),(!o||c&1)&&h(e,"data-open",i[0])},i(i){o||(A(u,i),o=!0)},o(i){S(u,i),o=!1},d(i){i&&p(e),u&&u.d(i),r=!1,s()}}}function un(t,e,n){let{$$slots:l={},$$scope:o}=e,{disabled:r=!1}=e,{open:s=!r}=e;const a=()=>{r||n(0,s=!s)};return t.$$set=u=>{"disabled"in u&&n(1,r=u.disabled),"open"in u&&n(0,s=u.open),"$$scope"in u&&n(2,o=u.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&r&&n(0,s=!1)},[s,r,o,l,a]}class an extends Z{constructor(e){super(),Y(this,e,un,sn,V,{disabled:1,open:0})}}function cn(t){const e=t-1;return e*e*e+1}function fn(t,{delay:e=0,duration:n=400,easing:l=cn,x:o=0,y:r=0,opacity:s=0}={}){const a=getComputedStyle(t),u=+a.opacity,i=a.transform==="none"?"":a.transform,c=u*(1-s),[m,_]=Ue(o),[k,O]=Ue(r);return{delay:e,duration:n,easing:l,css:(M,L)=>`
			transform: ${i} translate(${(1-M)*m}${_}, ${(1-M)*k}${O});
			opacity: ${u-c*L}`}}function $e(t){let e,n,l;return{c(){e=g("span"),n=X(t[0]),h(e,"class","value svelte-1bo4n3j")},m(o,r){v(o,e,r),b(e,n)},p(o,r){r&1&&st(n,o[0])},i(o){o&&(l||ae(()=>{l=Gt(e,fn,{y:-20,duration:100}),l.start()}))},o:z,d(o){o&&p(e)}}}function dn(t){let e,n,l,o=t[0],r,s,a,u,i=$e(t);return{c(){e=g("div"),n=g("button"),n.innerHTML='<svg viewBox="0 0 4 6" class="svelte-1bo4n3j"><path d="M4 0L0 3L4 6z"></path></svg>',l=y(),i.c(),r=y(),s=g("button"),s.innerHTML='<svg viewBox="0 0 4 6" class="svelte-1bo4n3j"><path d="M0 0L4 3L0 6z"></path></svg>',h(n,"class","svelte-1bo4n3j"),h(s,"class","svelte-1bo4n3j"),h(e,"class","svelte-1bo4n3j")},m(c,m){v(c,e,m),b(e,n),b(e,l),i.m(e,null),b(e,r),b(e,s),a||(u=[Q(n,"click",t[4]),Q(s,"click",t[5])],a=!0)},p(c,[m]){m&1&&V(o,o=c[0])?(Ae(),S(i,1,1,z),Se(),i=$e(c),i.c(),A(i,1),i.m(e,r)):i.p(c,m)},i(c){A(i)},o(c){S(i)},d(c){c&&p(e),i.d(c),a=!1,W(u)}}}function mn(t,e,n){let{value:l}=e,{min:o=1}=e,{max:r=2147483647}=e,{increment:s=1}=e;const a=()=>{l>o&&n(0,l=Math.max(l-s,o))},u=()=>{l<r&&n(0,l=Math.min(l+s,r))};return t.$$set=i=>{"value"in i&&n(0,l=i.value),"min"in i&&n(1,o=i.min),"max"in i&&n(2,r=i.max),"increment"in i&&n(3,s=i.increment)},[l,o,r,s,a,u]}class ye extends Z{constructor(e){super(),Y(this,e,mn,dn,V,{value:0,min:1,max:2,increment:3})}}function xe(t,e,n){const l=t.slice();return l[15]=e[n],l[17]=n,l}function _n(t){let e,n,l,o,r;return{c(){e=g("button"),e.textContent="Generate New Board",n=y(),l=g("br"),h(e,"class","generate svelte-u39k3n")},m(s,a){v(s,e,a),v(s,n,a),v(s,l,a),o||(r=Q(e,"click",t[8]),o=!0)},p:z,d(s){s&&(p(e),p(n),p(l)),o=!1,r()}}}function hn(t){let e;return{c(){e=g("div"),e.textContent="Unfreeze to generate new board or change settings",h(e,"class","generate svelte-u39k3n")},m(n,l){v(n,e,l)},p:z,d(n){n&&p(e)}}}function et(t){let e,n,l;function o(s){t[13](s)}let r={label:t[15].name+" Team",color:t[15].color,value:t[17]+1,group_name:"starting-team"};return t[5]!==void 0&&(r.group_value=t[5]),e=new it({props:r}),J.push(()=>ie(e,"group_value",o)),{c(){q(e.$$.fragment)},m(s,a){F(e,s,a),l=!0},p(s,a){const u={};a&64&&(u.label=s[15].name+" Team"),a&64&&(u.color=s[15].color),!n&&a&32&&(n=!0,u.group_value=s[5],se(()=>n=!1)),e.$set(u)},i(s){l||(A(e.$$.fragment,s),l=!0)},o(s){S(e.$$.fragment,s),l=!1},d(s){R(e,s)}}}function gn(t){let e,n,l,o,r,s,a,u,i,c,m,_,k,O,M,L,N,d,C,P,j,ce,Be,$,je,ge,U,pe,be,fe,de;function at(f){t[10](f)}let Pe={max:10,min:Math.ceil(Math.sqrt(t[1]*t[4]+1+ +(t[5]>0)))};t[3]!==void 0&&(Pe.value=t[3]),s=new ye({props:Pe}),J.push(()=>ie(s,"value",at));function ct(f){t[11](f)}let Te={max:Math.floor((t[3]**2-1-+(t[5]>0))/t[1])};t[4]!==void 0&&(Te.value=t[4]),_=new ye({props:Te}),J.push(()=>ie(_,"value",ct));function ft(f){t[12](f)}let Fe={max:Math.min(Math.floor((t[3]**2-1-+(t[5]>0))/t[4]),4),min:2};t[1]!==void 0&&(Fe.value=t[1]),d=new ye({props:Fe}),J.push(()=>ie(d,"value",ft)),$=new ut({props:{info:"The starting team has one extra tile to guess"}});let G=re(t[6]),E=[];for(let f=0;f<G.length;f+=1)E[f]=et(xe(t,G,f));const dt=f=>S(E[f],1,1,()=>{E[f]=null});function mt(f){t[14](f)}let Re={label:"No Starting Team",value:0,group_name:"starting-team"};return t[5]!==void 0&&(Re.group_value=t[5]),U=new it({props:Re}),J.push(()=>ie(U,"group_value",mt)),{c(){e=g("h3"),e.textContent="Changing Settings will regenerate the board",n=y(),l=g("div"),o=g("span"),o.textContent="Board Size",r=y(),q(s.$$.fragment),u=y(),i=g("div"),c=g("span"),c.textContent="Tiles per Team",m=y(),q(_.$$.fragment),O=y(),M=g("div"),L=g("span"),L.textContent="Number of teams",N=y(),q(d.$$.fragment),P=y(),j=g("div"),ce=g("span"),Be=X("Starting Team "),q($.$$.fragment),je=y();for(let f=0;f<E.length;f+=1)E[f].c();ge=y(),q(U.$$.fragment),be=y(),fe=g("p"),fe.textContent=`If you cannot increase or decrease a value make sure the board can accommodate the
			values you are attempting to set.`,h(e,"class","svelte-u39k3n"),h(M,"class","num-teams"),h(j,"class","starting-team svelte-u39k3n")},m(f,w){v(f,e,w),v(f,n,w),v(f,l,w),b(l,o),b(l,r),F(s,l,null),v(f,u,w),v(f,i,w),b(i,c),b(i,m),F(_,i,null),v(f,O,w),v(f,M,w),b(M,L),b(M,N),F(d,M,null),v(f,P,w),v(f,j,w),b(j,ce),b(ce,Be),F($,ce,null),b(j,je);for(let H=0;H<E.length;H+=1)E[H]&&E[H].m(j,null);b(j,ge),F(U,j,null),v(f,be,w),v(f,fe,w),de=!0},p(f,w){const H={};w&50&&(H.min=Math.ceil(Math.sqrt(f[1]*f[4]+1+ +(f[5]>0)))),!a&&w&8&&(a=!0,H.value=f[3],se(()=>a=!1)),s.$set(H);const ve={};w&42&&(ve.max=Math.floor((f[3]**2-1-+(f[5]>0))/f[1])),!k&&w&16&&(k=!0,ve.value=f[4],se(()=>k=!1)),_.$set(ve);const ke={};if(w&56&&(ke.max=Math.min(Math.floor((f[3]**2-1-+(f[5]>0))/f[4]),4)),!C&&w&2&&(C=!0,ke.value=f[1],se(()=>C=!1)),d.$set(ke),w&96){G=re(f[6]);let B;for(B=0;B<G.length;B+=1){const De=xe(f,G,B);E[B]?(E[B].p(De,w),A(E[B],1)):(E[B]=et(De),E[B].c(),A(E[B],1),E[B].m(j,ge))}for(Ae(),B=G.length;B<E.length;B+=1)dt(B);Se()}const qe={};!pe&&w&32&&(pe=!0,qe.group_value=f[5],se(()=>pe=!1)),U.$set(qe)},i(f){if(!de){A(s.$$.fragment,f),A(_.$$.fragment,f),A(d.$$.fragment,f),A($.$$.fragment,f);for(let w=0;w<G.length;w+=1)A(E[w]);A(U.$$.fragment,f),de=!0}},o(f){S(s.$$.fragment,f),S(_.$$.fragment,f),S(d.$$.fragment,f),S($.$$.fragment,f),E=E.filter(Boolean);for(let w=0;w<E.length;w+=1)S(E[w]);S(U.$$.fragment,f),de=!1},d(f){f&&(p(e),p(n),p(l),p(u),p(i),p(O),p(M),p(P),p(j),p(be),p(fe)),R(s),R(_),R(d),R($),Le(E,f),R(U)}}}function pn(t){let e,n,l,o,r,s,a,u,i,c,m,_,k,O;l=new tn({props:{teams:t[6],size:t[3],team_size:t[4],seed:t[2],starting_team:t[5]}});function M(d,C){return d[0]?hn:_n}let L=M(t),N=L(t);return i=new ut({props:{info:"Freezing the board prevents modifications and stops the board from changing if the page is reloaded"}}),m=new an({props:{disabled:t[0],open:!1,$$slots:{default:[gn]},$$scope:{ctx:t}}}),{c(){e=g("main"),n=g("section"),q(l.$$.fragment),o=y(),N.c(),r=y(),s=g("label"),a=g("input"),u=X(`
			Freeze Board
			`),q(i.$$.fragment),c=y(),q(m.$$.fragment),h(a,"type","checkbox"),h(a,"name","freeze"),h(a,"id","freeze"),h(s,"for","freeze"),h(n,"class","board svelte-u39k3n"),h(e,"class","svelte-u39k3n")},m(d,C){v(d,e,C),b(e,n),F(l,n,null),b(n,o),N.m(n,null),b(n,r),b(n,s),b(s,a),a.checked=t[0],b(s,u),F(i,s,null),b(e,c),F(m,e,null),_=!0,k||(O=[Q(a,"change",t[9]),Q(a,"click",t[7])],k=!0)},p(d,[C]){const P={};C&64&&(P.teams=d[6]),C&8&&(P.size=d[3]),C&16&&(P.team_size=d[4]),C&4&&(P.seed=d[2]),C&32&&(P.starting_team=d[5]),l.$set(P),L===(L=M(d))&&N?N.p(d,C):(N.d(1),N=L(d),N&&(N.c(),N.m(n,r))),C&1&&(a.checked=d[0]);const j={};C&1&&(j.disabled=d[0]),C&262266&&(j.$$scope={dirty:C,ctx:d}),m.$set(j)},i(d){_||(A(l.$$.fragment,d),A(i.$$.fragment,d),A(m.$$.fragment,d),_=!0)},o(d){S(l.$$.fragment,d),S(i.$$.fragment,d),S(m.$$.fragment,d),_=!1},d(d){d&&p(e),R(l),N.d(),R(i),R(m),k=!1,W(O)}}}function bn(t,e,n){let l,{frozen:o}=e,{num_teams:r}=e,{seed:s}=e,{board_size:a}=e,{team_size:u}=e,{starting_team:i}=e;function c(d){Rt.call(this,t,d)}const m=()=>n(2,s=Date.now());function _(){o=this.checked,n(0,o)}function k(d){a=d,n(3,a)}function O(d){u=d,n(4,u)}function M(d){r=d,n(1,r)}function L(d){i=d,n(5,i),n(1,r)}function N(d){i=d,n(5,i),n(1,r)}return t.$$set=d=>{"frozen"in d&&n(0,o=d.frozen),"num_teams"in d&&n(1,r=d.num_teams),"seed"in d&&n(2,s=d.seed),"board_size"in d&&n(3,a=d.board_size),"team_size"in d&&n(4,u=d.team_size),"starting_team"in d&&n(5,i=d.starting_team)},t.$$.update=()=>{t.$$.dirty&34&&i>r&&n(5,i=0),t.$$.dirty&63&&(o?document.location.hash=btoa(JSON.stringify({num_teams:r,board_size:a,team_size:u,seed:s,starting_team:i})):document.location.hash=""),t.$$.dirty&2&&n(6,l=Ne.get_players(r))},[o,r,s,a,u,i,l,c,m,_,k,O,M,L,N]}class vn extends Z{constructor(e){super(),Y(this,e,bn,pn,V,{frozen:0,num_teams:1,seed:2,board_size:3,team_size:4,starting_team:5})}}function kn(t){return{c:z,m:z,p:z,i:z,o:z,d:z}}function wn(t){let e,n;return e=new vn({props:{frozen:t[8],num_teams:t[0],seed:t[1],board_size:t[2],team_size:t[3],starting_team:t[4]}}),{c(){q(e.$$.fragment)},m(l,o){F(e,l,o),n=!0},p(l,o){const r={};o&1&&(r.num_teams=l[0]),o&2&&(r.seed=l[1]),o&4&&(r.board_size=l[2]),o&8&&(r.team_size=l[3]),o&16&&(r.starting_team=l[4]),e.$set(r)},i(l){n||(A(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){R(e,l)}}}function yn(t){let e;return{c(){e=g("h1"),e.textContent="Loading ..."},m(n,l){v(n,e,l)},p:z,i:z,o:z,d(n){n&&p(e)}}}function zn(t){let e,n,l={ctx:t,current:null,token:null,hasCatch:!1,pending:yn,then:wn,catch:kn,value:8,blocks:[,,,]};return Jt(t[5],l),{c(){e=Lt(),l.block.c()},m(o,r){v(o,e,r),l.block.m(o,l.anchor=r),l.mount=()=>e.parentNode,l.anchor=e,n=!0},p(o,[r]){t=o,Kt(l,t,r)},i(o){n||(A(l.block),n=!0)},o(o){for(let r=0;r<3;r+=1){const s=l.blocks[r];S(s)}n=!1},d(o){o&&p(e),l.block.d(o),l.token=null,l=null}}}function Mn(t,e,n){const l=["num_teams","board_size","team_size","seed","starting_team"];let o=2,r=Date.now(),s=5,a=8,u=1;async function i(){const m=document.location.hash.slice(1);try{const _=JSON.parse(atob(m));for(const k of l){if(!$t(_,l))throw new Error("Invalid data");n(0,o=_.num_teams),n(1,r=_.seed),n(2,s=_.board_size),n(3,a=_.team_size),n(4,u=_.starting_team)}}catch{return document.location.hash="",!1}return!0}let c=i();return[o,r,s,a,u,c]}class Nn extends Z{constructor(e){super(),Y(this,e,Mn,zn,V,{})}}new Nn({target:document.getElementById("app")});