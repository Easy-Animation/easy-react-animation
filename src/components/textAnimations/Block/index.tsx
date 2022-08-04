import React, { useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Block = ({color = "#000", ...props}: IAnimationProps) => {
    const initialState = useMemo(() => (
        css`
            color: ${color}; 
            visibility: hidden;
            display: inline;
        `
    ), [color])
    
    const animationState = useMemo(() =>(
        css`    
            visibility: visible;            
        `
    ), [])

     const containerStyle = useMemo(() =>(
        css`    
           @keyframes block {
            0%{ 
                transform: translate(-110%, 0);
            }
            45%, 55%{
                transform: translate(0, 0);
            }
            100%{
                transform: translate(110%, 0);
            }
            }

            overflow: hidden;
            position: relative;

            &::after {
                color: ${color};
                visibility: visible;
                clip-path: inset(0 0 0 0);
                content: '';
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: ${color};
                animation: block .5s .25s both;

            }            
        `
    ), [color])

    return ( 
        <BaseComponent
            initialState={initialState} 
            animationState={animationState} 
            transition={'all 0s 0.5s'}
            containerStyle={containerStyle}
            {...props} 
        />
    )
}