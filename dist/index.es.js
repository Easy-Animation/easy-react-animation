import"react";import e,{css as o}from"styled-components";import r from"prop-types";e.div`
    perspective: ${({depth:e})=>(e=>{switch(e){case"low":default:return"40px";case"medium":return"20px";case"high":return"10px"}})(e)};
`,e.div`
    box-shadow: ${({shadow:e,shadowColor:o,shadowOpacity:r})=>e?`2px 2px 50px rgba(${o[0]||0}, ${o[1]||0}, ${o[2]||0}, ${r})`:"none"};
    
    transition: transform 400ms;
    
    ${({x:e,y:r})=>o`
        transform: rotateX(${e}deg) rotateY(${r}deg);
    `}
    
`,r.node.isRequired,r.oneOf(["low","medium","high"]),r.bool,r.string,r.number;
