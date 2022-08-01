import React from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";

const initialState = css`
    transform: rotateY(180deg);
`

const animationState = css`
    transform: rotateY(0deg);
`

export const Flipping = (props: IAnimationProps) => (
    <BaseComponent
        initialState={initialState} 
        animationState={animationState} 
        {...props} 
    />
)
