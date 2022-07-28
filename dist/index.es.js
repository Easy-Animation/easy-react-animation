import e,{useState as t,useRef as r,useEffect as n,useMemo as o,useCallback as s}from"react";import a,{css as i}from"styled-components";const c=a.div`
    perspective: ${({depth:e})=>(e=>{switch(e){case"low":default:return"40px";case"medium":return"20px";case"high":return"10px"}})(e)};
`,l=a.div`
    transition: transform 400ms;
    
    ${({x:e,y:t})=>i`
        transform: rotateX(${e}deg) rotateY(${t}deg);
    `}
    
`,d={x:0,y:0},u=({children:a,depth:i="low"})=>{const[u,p]=t(d),[f,m]=t(d),[y,x]=t(0),[h,v]=t(d),g=r(document.createElement("div")),E=r(document.createElement("div"));n((()=>{v({x:parseFloat((u.y/E.current.offsetHeight/2).toFixed(2)),y:parseFloat((u.x/E.current.offsetWidth/2).toFixed(2))})}),[u,E]);const $=o((()=>y%10==0),[y,10]);n((()=>{var e,t;m({x:(null===(e=null==g?void 0:g.current)||void 0===e?void 0:e.offsetLeft)+Math.floor(g.current.offsetWidth/2),y:(null===(t=null==g?void 0:g.current)||void 0===t?void 0:t.offsetTop)+Math.floor(g.current.offsetHeight/2)})}),[]);const b=s((e=>{p({x:e.pageX-f.x,y:-1*(e.pageY-f.y)})}),[f]),w=s((e=>{x((e=>e+1)),$&&b(e)}),[$,b,x]),I=s((()=>{v(d)}),[$,b,x]);return e.createElement(c,{ref:g,onMouseMove:w,onMouseEnter:b,onMouseLeave:I,depth:i},e.createElement(l,{ref:E,x:h.x,y:h.y},a))};const p=a.span`
  display: inline-block;
  opacity: 0;
  transform: translate(0, -150%);
  
  ${({isInViewport:e,charIndex:t})=>e&&i`
        animation-delay: calc(0.25s + ${t} * 0.1s);
        transition: all 0.25s calc(0.25s + ${t} * 0.1s);
        opacity: 1;
        transform: translate(0, 0);
    `}
`,f=a.div`
  > span {
    display: flex;
  }
`,m=({text:s,styles:a,className:i,accessibilityFriendly:c=!1})=>{const l=r(null),d=function(e){const[r,s]=t(!1),a=o((()=>new IntersectionObserver((([e])=>s(e.isIntersecting)))),[]);return n((()=>(a.observe(e.current),()=>{a.disconnect()})),[e,a]),r}(l),[u,m]=t(!1),y=o((()=>.5+.1*s.length),[s]);return n((()=>{d?setTimeout((()=>m(!0)),1e3*y):m(!1)}),[d]),e.createElement(f,null,e.createElement("span",{ref:l,className:i,"aria-label":s},(!u||u&&!c)&&s.split("").map(((t,r)=>e.createElement(p,{isInViewport:d,charIndex:r,key:r,style:Object.assign({},a),"aria-hidden":"true"}," "!==t?t:" "))),u&&c&&s))};export{m as Enter,u as MouseResponse};
