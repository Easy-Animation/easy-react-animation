"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components"),o=require("prop-types");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=r(e),a=r(t),u=r(o);const d=e=>{if(7!=e.length)return e;var t=e.substring(1).match(/.{1,2}/g);return[parseInt(t[0],16),parseInt(t[1],16),parseInt(t[2],16)]},n=a.default.div`
    perspective: ${({depth:e})=>(e=>{switch(e){case"low":default:return"40px";case"medium":return"20px";case"high":return"10px"}})(e)};
`,l=a.default.div`
    box-shadow: ${({shadow:e,shadowColor:t,shadowOpacity:o})=>e?`2px 2px 50px rgba(${t[0]||0}, ${t[1]||0}, ${t[2]||0}, ${o})`:"none"};
    
    transition: transform 400ms;
    
    ${({x:e,y:o})=>t.css`
        transform: rotateX(${e}deg) rotateY(${o}deg);
    `}
    
`,f={x:0,y:0},c=({children:t,depth:o,shadow:r,shadowColor:a,shadowOpacity:u})=>{const[c,i]=e.useState(f),[h,p]=e.useState(f),[w,x]=e.useState(0),[y,m]=e.useState(f),g=e.useRef(null),b=e.useRef(null);e.useEffect((()=>{m({x:(c.y/b?.current?.offsetHeight/2).toFixed(2),y:(c.x/b?.current?.offsetWidth/2).toFixed(2)})}),[c,b]);const v=e.useMemo((()=>w%10==0),[w,10]);e.useEffect((()=>{p({x:g.current.offsetLeft+Math.floor(g.current.offsetWidth/2),y:g.current.offsetTop+Math.floor(g.current.offsetHeight/2)})}),[]);const M=e.useCallback((e=>{i({x:e.clientX-h.x,y:-1*(e.clientY-h.y)})}),[h]),$=e.useCallback((e=>{x((e=>e+1)),v&&M(e)}),[v,M,x]),C=e.useCallback((()=>{m(f)}),[v,M,x]);return s.default.createElement(n,{ref:g,onMouseMove:$,onMouseEnter:M,onMouseLeave:C,depth:o},s.default.createElement(l,{ref:b,x:y.x,y:y.y,shadow:r,shadowColor:d(a),shadowOpacity:u},t))};c.propTypes={children:u.default.node.isRequired,depth:u.default.oneOf(["low","medium","high"]),shadow:u.default.bool,shadowColor:u.default.string,shadowOpacity:u.default.number},c.defaultProps={depth:"low",shadow:!1,shadowColor:"#000000",shadowOpacity:.2},exports.MouseResponse=c;
