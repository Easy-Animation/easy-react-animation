import React, { useMemo } from "react";

import { css } from "styled-components";
import BaseComponent from "../BaseComponent";
import { IAnimationProps } from "../types";


export const Scaling = ({color = "#000", ...props}: IAnimationProps) => {
    const initialState = useMemo(() => (
        css`
            color: ${color};
            transform: scale(0);
        `
    ), [color]);

    const animationState = useMemo(() => (
        css`
            transform: scale(1);
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
