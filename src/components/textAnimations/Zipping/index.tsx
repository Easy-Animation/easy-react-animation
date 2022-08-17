import React, { useCallback, useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Zipping = ({ color = "#000", ...props }: IAnimationProps) => {

  const initialState = useMemo(() => (
    css`
          color: ${color}; 
          opacity: 0;
          &:nth-of-type(odd){
            transform: translate(0, -100%);
          }
          &:nth-of-type(even){
            transform: translate(0, 100%);
          }
            
      `
  ), [color])

  const animationState = useMemo(() => (
    css`    
         opacity: 1;
         &:nth-of-type(n) {
            transform: translate(0, 0);
          }
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
      customAnimationProps={(index: number) => getAnimation(index)}
      {...props}
    />
  )
}