import React, { useMemo } from "react";

import { css } from "styled-components";
import { hexToRGB } from "../../../utils/colorConverter";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Karaoke = ({color = "#000", ...props}: IAnimationProps) => {
    const initialState = useMemo(() => (
        css`
            color: rgba(${hexToRGB(color)}, 0.15); 

            &::after {
                color: ${color};
                visibility: visible;
                clip-path: inset(0 100% 0 0);
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