import React, { useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";


export const Rolling = ({color = "#000", ...props}: IAnimationProps) => {
    const initialState = useMemo(() => (
        css`
            color: ${color};
            opacity: 0;
            transform: translate(-500%, 0) scale(0) rotate(-1440deg);
        `
    ), [color]);

    const animationState = useMemo(() => (
        css`
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
            transition: transform 1s, opacity 0.2s;
        `
    ), []);

    return (
        <BaseComponent
            initialState={initialState} 
            animationState={animationState}
            reverse
            transition={'transform 1s, opacity 0.2s'}
            {...props} 
        />
    )
}
