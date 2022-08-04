import React, { useMemo } from "react";

import { css } from "styled-components";
import { hexToRGB } from "../../../utils/colorConverter";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Block = ({color = "#000", ...props}: IAnimationProps) => {
    const initialState = useMemo(() => (
        css`
            color: ${color}; 
            visibility: hidden;
        `
    ), [color, hexToRGB])
    
    const animationState = useMemo(() =>(
        css`    
          visibility: visible;            
        `
    ), [color])

    // &--blocks
    // [data-scroll='out'] .char
    //   visibility hidden

    // [data-scroll='in']
    //   overflow hidden
    //   position relative

    //   .char
    //     transition-delay .5s

    //   &:after
    //     content ''
    //     height 100%
    //     width 100%
    //     position absolute
    //     top 0
    //     right 0
    //     bottom 0
    //     left 0
    //     background #fff
    //     animation block .5s .25s both


    //     @keyframes block
    //       0%
    //         transform translate(-110%, 0)
    //       45%, 55%
    //         transform translate(0, 0)
    //       100%
    //         transform translate(110%, 0)


    return ( 
        <BaseComponent
            initialState={initialState} 
            animationState={animationState} 
            transition={'all 0s 0.5s'}
            {...props} 
        />
    )
}