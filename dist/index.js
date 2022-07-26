"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(e),s=r(t);const u=s.default.div`
    perspective: ${({depth:e})=>(e=>{switch(e){case"low":default:return"40px";case"medium":return"20px";case"high":return"10px"}})(e)};
`,a=s.default.div`
    transition: transform 400ms;
    
    ${({x:e,y:r})=>t.css`
        transform: rotateX(${e}deg) rotateY(${r}deg);
    `}
    
`,n={x:0,y:0};exports.MouseResponse=({children:t,depth:r="low"})=>{const[s,f]=e.useState(n),[l,c]=e.useState(n),[d,i]=e.useState(0),[p,v]=e.useState(n),x=e.useRef(document.createElement("div")),h=e.useRef(document.createElement("div"));e.useEffect((()=>{v({x:parseFloat((s.y/h.current.offsetHeight/2).toFixed(2)),y:parseFloat((s.x/h.current.offsetWidth/2).toFixed(2))})}),[s,h]);const m=e.useMemo((()=>d%10==0),[d,10]);e.useEffect((()=>{var e,t;c({x:(null===(e=null==x?void 0:x.current)||void 0===e?void 0:e.offsetLeft)+Math.floor(x.current.offsetWidth/2),y:(null===(t=null==x?void 0:x.current)||void 0===t?void 0:t.offsetTop)+Math.floor(x.current.offsetHeight/2)})}),[]);const y=e.useCallback((e=>{f({x:e.pageX-l.x,y:-1*(e.pageY-l.y)})}),[l]),M=e.useCallback((e=>{i((e=>e+1)),m&&y(e)}),[m,y,i]),g=e.useCallback((()=>{v(n)}),[m,y,i]);return o.default.createElement(u,{ref:x,onMouseMove:M,onMouseEnter:y,onMouseLeave:g,depth:r},o.default.createElement(a,{ref:h,x:p.x,y:p.y},t))};
