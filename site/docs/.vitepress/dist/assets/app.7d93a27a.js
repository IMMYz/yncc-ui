import{d as c,l as u,o as i,c as l,r as d,n as f,b as m,K as s,a2 as _,u as h,p as b,k as y,a3 as A,a4 as g,a5 as P,a6 as v,a7 as w,a8 as C,a9 as S,aa as E,ab as R,ac as $,ad as x,ae as O,af as T,ag as j}from"./chunks/framework.1e373962.js";import{t as D}from"./chunks/theme.44368219.js";const B={name:"cc-button"},k=c({...B,props:{type:null},setup(e){const t=e,n=u(()=>({[`cc-button--${t.type}`]:t.type}));return(a,K)=>(i(),l("button",{class:f(["cc-button",m(n)])},[d(a.$slots,"default")],2))}}),F=e=>(e.install=t=>{const n=e.name;t.component(n,e)},e),I=F(k),r=Object.freeze(Object.defineProperty({__proto__:null,Button:I},Symbol.toStringTag,{value:"Module"})),L={install:e=>{for(let t in r)e.use(r[t])}},V={...D,enhanceApp:async({app:e})=>{e.use(L)}};function p(e){if(e.extends){const t=p(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const o=p(V),z=c({name:"VitePressApp",setup(){const{site:e}=h();return b(()=>{y(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),A(),g(),P(),o.setup&&o.setup(),()=>v(o.Layout)}});async function M(){const e=H(),t=G();t.provide(w,e);const n=C(e.route);return t.provide(S,n),t.component("Content",E),t.component("ClientOnly",R),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:$}),{app:t,router:e,data:n}}function G(){return x(z)}function H(){let e=s,t;return O(n=>{let a=T(n);return e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),s&&(e=!1),j(()=>import(a),[])},o.NotFound)}s&&M().then(({app:e,router:t,data:n})=>{t.go().then(()=>{_(t.route,n.site),e.mount("#app")})});export{M as createApp};