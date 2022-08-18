import React, { useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Swapsies = ({ color = "#000", ...props }: IAnimationProps) => {

  const initialState = useMemo(() => (
    css`
          color: ${color}; 
          &:nth-of-type(odd){
            transform: translateX(100%);
          }
          &:nth-of-type(even){
            transform: translateX(-100%);
          }
            
      `
  ), [color])

  const animationState = useMemo(() => (
    css`    
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      &:nth-of-type(odd){
        animation-name: swap-left;
      }
      &:nth-of-type(even){
        animation-name: swap-right;
      }    
    
      @keyframes swap-right{
        25%{
          transform: translateX(-100%) translateY(-100%);
        }
        75%{
          transform: translateX(0) translateY(-100%);
        }
        100%{
          transform: translateX(0) translateY(0);
        }
      }
    
      @keyframes swap-left {
        25% {
          transform: translateX(100%) translateY(100%)
        } 75%{
          transform: translateX(0) translateY(100%)
        }100%{
          transform: translateX(0) translateY(0);
      }
    }
    `
  ), [])

  return (
    <BaseComponent
      initialState={initialState}
      animationState={animationState}
      {...props}
    />
  )
}