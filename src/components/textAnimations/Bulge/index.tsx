import React, { useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Bulge = ({color = "#000", ...props}: IAnimationProps) => {

    const initialState = useMemo(() => (
      css`
          color: ${color}; 
      `
    ), [color])

    const animationState = useMemo(() =>(
        css`    
          animation-name: bulge;
          animation-duration: .25s;

          @keyframes bulge{
            50%{
              transform: scale(1.5);
            }
          }
        `
    ), [])


    return ( 
        <BaseComponent
            initialState={initialState}
            animationState={animationState} 
            transition={'all 0s 0.5s'}
            {...props} 
        />
    )
}