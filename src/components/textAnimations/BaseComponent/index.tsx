import React, { useEffect, useMemo, useRef, useState } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import { useIsInViewport } from "../../../hooks/useIsInViewport";
import { IAnimationProps } from "../types";

import { Char, Container } from "./styles";

interface IBaseComponentProps extends IAnimationProps {
  initialState: FlattenSimpleInterpolation;
  animationState: FlattenSimpleInterpolation;
  containerStyle?: FlattenSimpleInterpolation;
  transition?: string | null;
  reverse?: boolean;
  customAnimationProps?: ((index: number) => FlattenSimpleInterpolation) | ((index: number, totalChar: number) => FlattenSimpleInterpolation) | null;
}

const BaseComponent = ({
  text,
  styles,
  className,
  animationState,
  initialState,
  containerStyle,
  accessibilityFriendly = false,
  reverse = false,
  transition = null,
  customAnimationProps = null
}: IBaseComponentProps) => {
  const spanRef = useRef(null)
  const isInViewport = useIsInViewport(spanRef);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const animationLength = useMemo(() => 0.5 + (text.length) * 0.1, [text])

  useEffect(() => {
    if (isInViewport) {
      setTimeout(() => setAnimationCompleted(true), animationLength * 1000)
    } else {
      setAnimationCompleted(false)
    }
  }, [isInViewport])

  return (
    <Container containerStyle={containerStyle}>
      <p>
        <span ref={spanRef} className={className} aria-label={text}>
          {(!animationCompleted || (animationCompleted && !accessibilityFriendly)) && text.split("").map((item, index) => (
            <Char
              isInViewport={isInViewport}
              charIndex={index}
              key={index}
              char={item}
              charTotal={text.length}
              style={{ ...styles }}
              initialState={initialState}
              animationState={animationState}
              reverse={reverse}
              transition={transition}
              aria-hidden="true"
              customAnimationProps={customAnimationProps ? customAnimationProps(index, text.length) : null}
            >
              {item !== ' ' ? item : "\u00a0"}
            </Char>
          ))}
          {animationCompleted && accessibilityFriendly && text}
        </span>
      </p>
    </Container>
  );
};


export default BaseComponent;