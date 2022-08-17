import React, { useCallback, useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Meeting = ({ color = "#000", ...props }: IAnimationProps) => {
  const initialState = useMemo(() => (
    css`
          color: ${color}; 
          transform: rotate(180deg);
          &:nth-of-type(odd){
            transform-origin: bottom left;
          }
          &:nth-of-type(even){
            transform-origin: top right;
          }        
      `
  ), [color])

  const animationState = useMemo(() => (
    css`    
         transform: rotate(0deg);
        `
  ), [])

  const getAnimation = useCallback((charIndex: number, totalChar: number) => (
    css`
          transition-delay: calc((${totalChar} - ${charIndex}) * .1s)
            `
  ), [])

  return (
    <BaseComponent
      initialState={initialState}
      animationState={animationState}
      customAnimationProps={getAnimation}
      {...props}
    />
  )
}