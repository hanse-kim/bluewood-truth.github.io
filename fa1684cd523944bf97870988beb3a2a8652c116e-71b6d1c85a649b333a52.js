(self.webpackChunkhans_blog=self.webpackChunkhans_blog||[]).push([[100],{2147:function(t,e,n){"use strict";n.d(e,{N:function(){return a}});const a=(0,n(644).A)("p",{target:"e1c604d30"})({name:"chxfsp",styles:"display:flex;justify-content:center;align-items:center;position:fixed;left:0;right:0;top:0;bottom:10%;color:var(--color-text-footer);font-size:var(--font-size-md);pointer-events:none"})},7540:function(t,e,n){"use strict";n.d(e,{g:function(){return u}});var a=n(5693),o=n(644);const r=(0,o.A)("span",{target:"e1379zna1"})({name:"1c78yoi",styles:"padding:3px 8px 4px 8px;border:none;border-radius:4px;background-color:var(--color-border);color:var(--color-main);font-size:var(--font-size-xs);font-weight:var(--font-weight-regular);cursor:pointer;transition:color 0.2s,background-color 0.2s;&:hover{color:var(--color-bg);background-color:var(--color-main);}"}),i=(0,o.A)("span",{target:"e1379zna0"})({name:"1yupmj4",styles:"display:flex;column-gap:8px"});var l=n(8266),s=n(7437);const c=t=>{let{tag:e}=t;return(0,s.Y)(l.A,{to:a.J.tag(e)},(0,s.Y)(r,null,e))},u=t=>{let{tags:e}=t;return e?(0,s.Y)(i,null,e.map(((t,e)=>(0,s.Y)(c,{key:e,tag:t})))):null}},5201:function(t,e,n){"use strict";n.d(e,{NU:function(){return r},nD:function(){return o},rK:function(){return i}});var a=n(644);const o=(0,a.A)("h1",{target:"eqxhvk72"})({name:"4qfs0",styles:"font-weight:var(--font-weight-light);font-size:var(--font-size-title)"}),r=(0,a.A)("h2",{target:"eqxhvk71"})({name:"1y0wx2e",styles:"font-weight:var(--font-weight-light);font-size:var(--font-size-sub-title)"}),i=(0,a.A)("p",{target:"eqxhvk70"})({name:"harc7a",styles:"font-weight:var(--font-weight-thin);font-size:var(--font-size-md)"})},4957:function(t,e,n){"use strict";n.d(e,{D:function(){return r}});var a=n(6540),o=n(9974);const r=function(t,e){let{itemsPerPage:n=10,initialPage:r,withRouting:i=!1}=void 0===e?{}:e;const{0:l,1:s}=(0,a.useState)([]),{0:c,1:u}=(0,a.useState)(null!=r?r:1),{navigate:f}=(0,o.r)();(0,a.useEffect)((()=>{i&&u(null!=r?r:1)}),[i,r]),(0,a.useEffect)((()=>{const e=(c-1)*n,a=c*n;s(t.slice(e,a))}),[t,c,n]);const d=(0,a.useMemo)((()=>Math.ceil(t.length/n)),[t.length,n]),g=(0,a.useCallback)(((t,e)=>{t>d&&(t=d),t<1&&(t=1),i&&(f(`?page=${t}`),null==e||e(t)),u(t)}),[]);return{paginatedData:l,currPage:c,setPage:g,lastPage:d}}},9974:function(t,e,n){"use strict";n.d(e,{r:function(){return r}});var a=n(4810),o=n(6540);const r=()=>({move:(0,o.useCallback)((t=>{location.href=t}),[]),redirect:(0,o.useCallback)((t=>{location.replace(t)}),[]),navigate:(0,o.useCallback)((async t=>{await(0,a.oo)(t)}),[]),back:(0,o.useCallback)((()=>{history.back()}),[])})},6412:function(t,e,n){"use strict";n.d(e,{q:function(){return a}});const a=n(7437).i7`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`},5063:function(t,e,n){"use strict";n.d(e,{d:function(){return f}});var a=n(3181),o=n.n(a),r=n(6540),i=n(6501),l=n(644);const s={Pagination:(0,l.A)("nav",{target:"efbuypg1"})({name:"i3022n",styles:"display:flex;margin:0 auto"}),PageButtonWrapper:(0,l.A)("div",{target:"efbuypg0"})({name:"35jpo5",styles:"width:36px;height:36px;font-size:var(--font-size-lg);&[data-selected='true']{color:var(--color-main);font-weight:var(--font-weight-regular);}"})};var c=n(7437);const u=t=>{let{page:e,label:n,setPage:a,disabled:o,selected:l}=t;const u=(0,r.useCallback)((()=>{a(e,(()=>{window.scrollTo(0,0)}))}),[e,a]);return(0,c.Y)(s.PageButtonWrapper,{onClick:u,"data-selected":l},(0,c.Y)(i.Q,{disabled:l||o},n||e))},f=t=>{let{currPage:e,lastPage:n,setPage:a,navLength:o=10,navDisPlayType:r="fixed"}=t;const{pageList:i}=d(e,n,o,r);return n<=1?null:(0,c.Y)(s.Pagination,null,(0,c.Y)(u,{label:"<",page:i[0]-1,setPage:a,disabled:1===i[0]}),i.map((t=>(0,c.Y)(u,{page:t,setPage:a,selected:e===t,key:t}))),(0,c.Y)(u,{label:">",page:i[i.length-1]+1,setPage:a,disabled:i[i.length-1]===n}))},d=(t,e,n,a)=>{const{0:i,1:l}=(0,r.useState)([]);return(0,r.useEffect)((()=>{let r,i;switch(a){case"fixed":r=t-(t-1)%n,i=r+n-1;break;case"centered":r=t-Math.floor(n/2),i=t+Math.floor(n/2)}r=Math.max(1,r),i=Math.min(e,i),l(o()(r,i+1))}),[t,e,a,n]),{pageList:i}}},2129:function(t,e,n){"use strict";n.d(e,{N:function(){return g}});var a=n(5693),o=n(8266),r=n(7540),i=n(5201),l=n(644),s=n(6412);const c={PostList:(0,l.A)("ul",{target:"e1hinl713"})({name:"mysvk9",styles:"display:flex;flex-direction:column;row-gap:36px;margin-bottom:72px"}),PostItem:(0,l.A)("div",{target:"e1hinl712"})("display:flex;flex-direction:column;row-gap:12px;opacity:0;animation:",s.q," 0.5s ease;animation-fill-mode:forwards;&:nth-child(1){animation-delay:0.1s;}&:nth-child(2){animation-delay:0.2s;}&:nth-child(3){animation-delay:0.3s;}&:nth-child(4){animation-delay:0.4s;}&:nth-child(5){animation-delay:0.5s;}&:nth-child(6){animation-delay:0.6s;}&:nth-child(7){animation-delay:0.7s;}&:nth-child(8){animation-delay:0.8s;}&:nth-child(9){animation-delay:0.9s;}&:nth-child(10){animation-delay:1s;}&:nth-child(11){animation-delay:1.1s;}&:nth-child(12){animation-delay:1.2s;}&:nth-child(13){animation-delay:1.3s;}&:nth-child(14){animation-delay:1.4s;}&:nth-child(15){animation-delay:1.5s;}"),PostItemHeader:(0,l.A)("hgroup",{target:"e1hinl711"})({name:"nac1mi",styles:"display:flex;flex-direction:column;row-gap:2px"}),PostItemDescription:(0,l.A)("p",{target:"e1hinl710"})({name:"18zydoj",styles:"color:var(--color-text-footer);font-size:var(--font-size-sm);width:100%;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis"})};var u=n(7437);const f=t=>{let{node:e,referrer:n}=t;return(0,u.Y)(c.PostItem,null,(0,u.Y)(o.A,{to:a.J.post(e.fields.slug),state:{referrer:n}},(0,u.Y)(c.PostItemHeader,null,(0,u.Y)(i.NU,null,e.frontmatter.title),(0,u.Y)(i.rK,null,"작성일: ",e.frontmatter.date))),(0,u.Y)(r.g,{tags:e.frontmatter.tags}),(0,u.Y)(c.PostItemDescription,null,e.excerpt))};var d=n(2147);const g=t=>{let{nodes:e,referrer:n}=t;return(0,u.Y)(c.PostList,null,e.map((t=>(0,u.Y)(f,{key:t.id,node:t,referrer:n}))),0===e.length&&(0,u.Y)(d.N,null,"포스트가 없습니다."))}},6151:function(t){var e=Math.ceil,n=Math.max;t.exports=function(t,a,o,r){for(var i=-1,l=n(e((a-t)/(o||1)),0),s=Array(l);l--;)s[r?l:++i]=t,t+=o;return s}},5508:function(t,e,n){var a=n(6151),o=n(6800),r=n(7400);t.exports=function(t){return function(e,n,i){return i&&"number"!=typeof i&&o(e,n,i)&&(n=i=void 0),e=r(e),void 0===n?(n=e,e=0):n=r(n),i=void 0===i?e<n?1:-1:r(i),a(e,n,i,t)}}},361:function(t){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var a=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==a||"symbol"!=a&&e.test(t))&&t>-1&&t%1==0&&t<n}},6800:function(t,e,n){var a=n(5288),o=n(4894),r=n(361),i=n(3805);t.exports=function(t,e,n){if(!i(n))return!1;var l=typeof e;return!!("number"==l?o(n)&&r(e,n.length):"string"==l&&e in n)&&a(n[e],t)}},5288:function(t){t.exports=function(t,e){return t===e||t!=t&&e!=e}},4894:function(t,e,n){var a=n(1882),o=n(294);t.exports=function(t){return null!=t&&o(t.length)&&!a(t)}},1882:function(t,e,n){var a=n(2552),o=n(3805);t.exports=function(t){if(!o(t))return!1;var e=a(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},294:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3181:function(t,e,n){var a=n(5508)();t.exports=a},7400:function(t,e,n){var a=n(9374),o=1/0;t.exports=function(t){return t?(t=a(t))===o||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}}}]);
//# sourceMappingURL=fa1684cd523944bf97870988beb3a2a8652c116e-71b6d1c85a649b333a52.js.map