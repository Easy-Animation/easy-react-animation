import React, { useMemo } from "react";
import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

export const Fading = ({color,...props}: IAnimationProps) => {
    const initialState = useMemo(()=>(
        css`
            color: ${color};
            opacity: 0;
        `
    ), [ color ])
    
    const animationState = useMemo(()=>(
        css`
            opacity: 1;
        `
    ), [])
    
    return (
        <BaseComponent 
            initialState={initialState} 
            animationState={animationState} 
            {...props} 
        />
    )
};
