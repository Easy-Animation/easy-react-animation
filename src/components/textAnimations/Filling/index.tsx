import React, { useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

import { hexToRGB } from '../../../utils/colorConverter';

export const Filling = ({color = "#000", ...props}: IAnimationProps) => {      
    const initialState = useMemo(() => (
        css`
            color: rgba(${hexToRGB(color)}, 0.15); 

            &::after {
                color: ${color};
                visibility: visible;
                clip-path: inset(100% 0 0 0);
            }
        `
    ), [color, hexToRGB])
    
    const animationState = useMemo(() =>(
        css`    
            &::after {
                color: ${color};
                visibility: visible;
                clip-path: inset(0 0 0 0);
            }
        `
    ), [color])
    
    return (
        <BaseComponent
            initialState={initialState} 
            animationState={animationState} 
            {...props} 
        />
    )
}
