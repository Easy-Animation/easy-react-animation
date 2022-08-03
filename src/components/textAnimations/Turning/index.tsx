import React, { useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";


export const Turning = ({color = "#000", ...props}: IAnimationProps) => {
    const initialState = useMemo(() => (
        css`
            color: ${color};
            transform: rotateY(90deg);
        `
    ), [color]);

    const animationState = useMemo(() => (
        css`
            transform: rotateY(0deg);
        `
    ), []);

    return (
        <BaseComponent
            initialState={initialState} 
            animationState={animationState} 
            {...props} 
        />
    )
}
