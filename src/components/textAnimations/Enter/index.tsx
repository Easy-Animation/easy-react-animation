import React, { useEffect, useMemo, useRef, useState } from "react";
import { useIsInViewport } from "../../../hooks/useIsInViewport";

import { Char, Container } from "./styles";

interface IEnterProps {
  text: string;
  styles?: any
  className: string;
  accessibilityFriendly?: boolean;
}

export const Enter = ({ text, styles, className, accessibilityFriendly = false }: IEnterProps) => {
    const spanRef = useRef(null)
    const isInViewport = useIsInViewport(spanRef);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    const animationLength = useMemo(() => 0.5 + (text.length) * 0.1, [text])

    useEffect(() => {
        if(isInViewport){
            setTimeout(() => setAnimationCompleted(true), animationLength * 1000)
        } else {
            setAnimationCompleted(false)
        }
    }, [isInViewport])

    return (
        <Container>
            <span ref={spanRef} className={className}>
                {(!animationCompleted || (animationCompleted && !accessibilityFriendly)) && text.split("").map((item, index) => (
                    <Char
                        isInViewport={isInViewport}
                        charIndex={index}
                        key={index}
                        style={{...styles}}
                    >
                        {item !== ' ' ? item : "\u00a0"}
                    </Char>
                ))}
                {animationCompleted && accessibilityFriendly && text}
            </span>
        </Container>
    );
};
