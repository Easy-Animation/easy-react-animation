import React, { useCallback, useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Perspective = ({ color = "#000", ...props }: IAnimationProps) => {

  const initialState = useMemo(() => (
    css`
          color: ${color}; 
          opacity: 0;
          transform: translate3d(-25px, -20px, -800px);
      `
  ), [color])

  const animationState = useMemo(() => (
    css`    
         opacity: 1;
         transform: translate3d(0px, 0px, 0px);
        `
  ), [])

  const getAnimation = useCallback((charIndex: number) => (
    css`
        transition: transform .25s calc(.25s + ${charIndex} * .1s), opacity .05s calc(.25s + ${charIndex} * .1s);
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