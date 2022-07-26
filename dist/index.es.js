import e,{useState as t,useRef as o,useEffect as r,useMemo as n,useCallback as s}from"react";import d,{css as i}from"styled-components";const a=d.div`
    perspective: ${({depth:e})=>(e=>{switch(e){case"low":default:return"40px";case"medium":return"20px";case"high":return"10px"}})(e)};
`,c=d.div`
    transition: transform 400ms;
    
    ${({x:e,y:t})=>i`
        transform: rotateX(${e}deg) rotateY(${t}deg);
    `}
    
`,f={x:0,y:0},l=({children:d,depth:i="low"})=>{const[l,u]=t(f),[p,m]=t(f),[x,v]=t(0),[h,y]=t(f),g=o(document.createElement("div")),M=o(document.createElement("div"));r((()=>{y({x:parseFloat((l.y/M.current.offsetHeight/2).toFixed(2)),y:parseFloat((l.x/M.current.offsetWidth/2).toFixed(2))})}),[l,M]);const E=n((()=>x%10==0),[x,10]);r((()=>{var e,t;m({x:(null===(e=null==g?void 0:g.current)||void 0===e?void 0:e.offsetLeft)+Math.floor(g.current.offsetWidth/2),y:(null===(t=null==g?void 0:g.current)||void 0===t?void 0:t.offsetTop)+Math.floor(g.current.offsetHeight/2)})}),[]);const F=s((e=>{u({x:e.pageX-p.x,y:-1*(e.pageY-p.y)})}),[p]),$=s((e=>{v((e=>e+1)),E&&F(e)}),[E,F,v]),w=s((()=>{y(f)}),[E,F,v]);return e.createElement(a,{ref:g,onMouseMove:$,onMouseEnter:F,onMouseLeave:w,depth:i},e.createElement(c,{ref:M,x:h.x,y:h.y},d))};export{l as MouseResponse};
