import React, { useCallback, useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Conveyor = ({ color = "#000", ...props }: IAnimationProps) => {

  const initialState = useMemo(() => (
    css`
          color: ${color}; 
      `
  ), [color])

  const animationState = useMemo(() => (
    css`    
         transition: none;
        `
  ), [])

  const getAnimation = useCallback((charIndex: number, totalChar: number) => (
    css`
        transform-origin: left bottom;
        animation: convey${charIndex} 1s both linear;
        animation-delay: calc((${totalChar} - ${charIndex}) * .15s);
        @keyframes convey${charIndex}{
            0% { 
              transform: translate(calc((${totalChar} - (${totalChar} - ${charIndex})) * -100%), 0) rotate(-180deg) translate(calc((${totalChar} - ${charIndex}) * -100%), 0)
            }
            40%{
              transform: translate(calc((${totalChar} - (${totalChar} - ${charIndex})) * -100%), 0) rotate(-180deg) translate(0, 0)
            }
            50%{
              transform: translate(calc((${totalChar} - (${totalChar} - ${charIndex})) * -100%), 0) rotate(0deg) translate(0, 0)
            }
            100%{
              transform: translate(0, 0) rotate(0deg) translate(0, 0)};
            }
            `
  ), [])

  return (
    <BaseComponent
      initialState={initialState}
      animationState={animationState}
      customAnimationProps={(index: number, totalChar: number) => getAnimation(index, totalChar)}
      {...props}
    />
  )
}