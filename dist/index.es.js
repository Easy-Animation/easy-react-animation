import e,{useState as o,useRef as t,useEffect as r,useMemo as s,useCallback as n}from"react";import a,{css as d}from"styled-components";import h from"prop-types";const p=e=>{if(7!=e.length)return e;var o=e.substring(1).match(/.{1,2}/g);return[parseInt(o[0],16),parseInt(o[1],16),parseInt(o[2],16)]},i=a.div`
    perspective: ${({depth:e})=>(e=>{switch(e){case"low":default:return"40px";case"medium":return"20px";case"high":return"10px"}})(e)};
`,c=a.div`
    box-shadow: ${({shadow:e,shadowColor:o,shadowOpacity:t})=>e?`2px 2px 50px rgba(${o[0]||0}, ${o[1]||0}, ${o[2]||0}, ${t})`:"none"};
    
    transition: transform 400ms;
    
    ${({x:e,y:o})=>d`
        transform: rotateX(${e}deg) rotateY(${o}deg);
    `}
    
`,f={x:0,y:0},l=({children:a,depth:d,shadow:h,shadowColor:l,shadowOpacity:u})=>{const[w,x]=o(f),[m,y]=o(f),[g,$]=o(0),[v,M]=o(f),O=t(null),b=t(null);r((()=>{M({x:(w.y/b?.current?.offsetHeight/2).toFixed(2),y:(w.x/b?.current?.offsetWidth/2).toFixed(2)})}),[w,b]);const C=s((()=>g%10==0),[g,10]);r((()=>{y({x:O.current.offsetLeft+Math.floor(O.current.offsetWidth/2),y:O.current.offsetTop+Math.floor(O.current.offsetHeight/2)})}),[]);const E=n((e=>{x({x:e.clientX-m.x,y:-1*(e.clientY-m.y)})}),[m]),I=n((e=>{$((e=>e+1)),C&&E(e)}),[C,E,$]),F=n((()=>{M(f)}),[C,E,$]);return e.createElement(i,{ref:O,onMouseMove:I,onMouseEnter:E,onMouseLeave:F,depth:d},e.createElement(c,{ref:b,x:v.x,y:v.y,shadow:h,shadowColor:p(l),shadowOpacity:u},a))};l.propTypes={children:h.node.isRequired,depth:h.oneOf(["low","medium","high"]),shadow:h.bool,shadowColor:h.string,shadowOpacity:h.number},l.defaultProps={depth:"low",shadow:!1,shadowColor:"#000000",shadowOpacity:.2};export{l as MouseResponse};
