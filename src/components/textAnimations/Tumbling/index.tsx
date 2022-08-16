import React, { useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";


export const Tumbling = ({color = "#000", ...props}: IAnimationProps) => {
    const initialState = useMemo(() => (
        css`
            color: ${color};
            opacity: 0;
            transform: translate(-300%, -50%) scale(0) rotate(1080deg);
        `
    ), [color]);

    const animationState = useMemo(() => (
        css`
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
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