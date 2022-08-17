import React, { useCallback, useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Bubbling = ({ color = "#000", ...props }: IAnimationProps) => {

  const initialState = useMemo(() => (
    css`
          color: ${color}; 
          transform: scale(0.5);
      `
  ), [color])

  const animationState = useMemo(() => (
    css`    
        transform: scale(1);
        `
  ), [])

  const getAnimation = useCallback((charIndex: number, totalChar: number) => {
    const random = Math.round(Math.random() * (totalChar - 1) + 1)

    return css`
      transition-delay: calc(${random} * .1s);
      transition-timing-function: cubic- bezier(0.75, -2, .75, 2);
    `
  }, [])

  return (
    <BaseComponent
      initialState={initialState}
      animationState={animationState}
      customAnimationProps={getAnimation}
      {...props}
    />
  )
}