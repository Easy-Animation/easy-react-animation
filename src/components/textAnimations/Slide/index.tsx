import React, { useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";


export const Slide = ({color = "#000", ...props}: IAnimationProps) => {
    const initialState = useMemo(() => (
        css`
            color: ${color};
            opacity: 0;
            transform: translate(-300%, 0) skewX(20deg);
        `
    ), [color]);

    const animationState = useMemo(() => (
        css`
            transform: rotateY(0deg);
            opacity: 1;
            transform: translate(0, 0) skewX(0deg);

        `
    ), []);

    return (
        <BaseComponent
            initialState={initialState} 
            animationState={animationState} 
            reverse
            {...props} 
        />
    )
}
