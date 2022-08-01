"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=s(e),r=s(t);const n=r.default.div`
    perspective: ${({depth:e})=>(e=>{switch(e){case"low":default:return"40px";case"medium":return"20px";case"high":return"10px"}})(e)};
`,o=r.default.div`
    transition: transform 400ms;
    
    ${({x:e,y:s})=>t.css`
        transform: rotateX(${e}deg) rotateY(${s}deg);
    `}
    
`,l={x:0,y:0};const u=r.default.span`
  display: inline-block;
  opacity: 0;
  transform: translate(0, -150%);
  
  ${({isInViewport:e,charIndex:s})=>e&&t.css`
        animation-delay: calc(0.25s + ${s} * 0.1s);
        transition: all 0.25s calc(0.25s + ${s} * 0.1s);
        opacity: 1;
        transform: translate(0, 0);
    `}
`,c=r.default.div`
  > span {
    display: flex;
  }
`;exports.Enter=({text:t,styles:s,className:r,accessibilityFriendly:n=!1})=>{const o=e.useRef(null),l=function(t){const[s,a]=e.useState(!1),r=e.useMemo((()=>new IntersectionObserver((([e])=>a(e.isIntersecting)))),[]);return e.useEffect((()=>(r.observe(t.current),()=>{r.disconnect()})),[t,r]),s}(o),[i,f]=e.useState(!1),d=e.useMemo((()=>.5+.1*t.length),[t]);return e.useEffect((()=>{l?setTimeout((()=>f(!0)),1e3*d):f(!1)}),[l]),a.default.createElement(c,null,a.default.createElement("span",{ref:o,className:r,"aria-label":t},(!i||i&&!n)&&t.split("").map(((e,t)=>a.default.createElement(u,{isInViewport:l,charIndex:t,key:t,style:Object.assign({},s),"aria-hidden":"true"}," "!==e?e:" "))),i&&n&&t))},exports.MouseResponse=({children:t,depth:s="low"})=>{const[r,u]=e.useState(l),[c,i]=e.useState(l),[f,d]=e.useState(0),[p,m]=e.useState(l),y=e.useRef(document.createElement("div")),x=e.useRef(document.createElement("div"));e.useEffect((()=>{m({x:parseFloat((r.y/x.current.offsetHeight/2).toFixed(2)),y:parseFloat((r.x/x.current.offsetWidth/2).toFixed(2))})}),[r,x]);const v=e.useMemo((()=>f%10==0),[f,10]);e.useEffect((()=>{var e,t;i({x:(null===(e=null==y?void 0:y.current)||void 0===e?void 0:e.offsetLeft)+Math.floor(y.current.offsetWidth/2),y:(null===(t=null==y?void 0:y.current)||void 0===t?void 0:t.offsetTop)+Math.floor(y.current.offsetHeight/2)})}),[]);const h=e.useCallback((e=>{u({x:e.pageX-c.x,y:-1*(e.pageY-c.y)})}),[c]),E=e.useCallback((e=>{d((e=>e+1)),v&&h(e)}),[v,h,d]),b=e.useCallback((()=>{m(l)}),[v,h,d]);return a.default.createElement(n,{ref:y,onMouseMove:E,onMouseEnter:h,onMouseLeave:b,depth:s},a.default.createElement(o,{ref:x,x:p.x,y:p.y},t))};
