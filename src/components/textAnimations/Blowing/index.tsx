import React, { useCallback, useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Blowing = ({ color = "#000", ...props }: IAnimationProps) => {

  const initialState = useMemo(() => (
    css`
          color: ${color}; 
      `
  ), [color])

  const animationState = useMemo(() => (
    css`    
          @keyframes blowing{
            50%, 60%, 70%{ 
            transform: skewX(-35deg)}
            55%, 65%, 75%{
            transform: skewX(-40deg)}
          }
        `
  ), [])

  const getAnimation = useCallback((charIndex: number) => (
    css`
            transition: none;
              animation: blowing;
              animation-duration: 1s;
              animation-fill-mode: both;
              animation-delay: calc(${charIndex} * .025s);
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