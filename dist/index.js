"use strict";require("react");var e=require("styled-components"),t=require("prop-types");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=r(e),o=r(t);a.default.div`
    perspective: ${({depth:e})=>(e=>{switch(e){case"low":default:return"40px";case"medium":return"20px";case"high":return"10px"}})(e)};
`,a.default.div`
    box-shadow: ${({shadow:e,shadowColor:t,shadowOpacity:r})=>e?`2px 2px 50px rgba(${t[0]||0}, ${t[1]||0}, ${t[2]||0}, ${r})`:"none"};
    
    transition: transform 400ms;
    
    ${({x:t,y:r})=>e.css`
        transform: rotateX(${t}deg) rotateY(${r}deg);
    `}
    
`,o.default.node.isRequired,o.default.oneOf(["low","medium","high"]),o.default.bool,o.default.string,o.default.number;
