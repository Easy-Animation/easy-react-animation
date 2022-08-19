import React, { useCallback, useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Swinging = ({ color = "#000", ...props }: IAnimationProps) => {

  const initialState = useMemo(() => (
    css`
          color: ${color}; 
          opacity: 0;
          transform: rotate(90deg);
            
      `
  ), [color])

  const animationState = useMemo(() => (
    css`    
         opacity: 1;
         transform: rotate(0deg);
        `
  ), [])

  const getAnimation = useCallback((charIndex: number, totalChar: number) => (
    css`
          transform-origin: calc((${totalChar} - ${charIndex}) * 100%) -100%;
          transition-delay: calc((${totalChar} - ${charIndex}) * .1s);
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