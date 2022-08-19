import React, { useCallback, useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Random = ({ color = "#000", ...props }: IAnimationProps) => {

  const initialState = useMemo(() => {


    return css`
          color: ${color}; 

          `
  }, [color])

  const animationState = useMemo(() => (
    css`
        transform: translateX(0) translateY(0)!important;
        `
  ), [])

  const getAnimation = useCallback((charIndex: number) => {
    let randomX = charIndex
    let randomY = charIndex

    randomX = Math.floor(Math.random() * (250 - 25 + 1) + 1);
    randomY = Math.floor(Math.random() * (250 - 25 + 1) + 1);

    let x = randomX;
    let y = randomY;

    if (x % 2 === 1){
      x = x * -1
    }

    if (y % 2 === 1){
    y = y * -1
    }

    console.log(x,y)
    return css`
      transform: translateX(calc(${x} * 1%)) translateY(calc(${y} * 1%));
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