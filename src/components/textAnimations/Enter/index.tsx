import React from "react";
import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

const initialState = css`
    opacity: 0;
    transform: translate(0, -150%);
`

const animationState = css`
    opacity: 1;
    transform: translate(0, 0);
`

export const Enter = (props: IAnimationProps) => (
    <BaseComponent 
        initialState={initialState} 
        animationState={animationState} 
        {...props} 
    />
);
