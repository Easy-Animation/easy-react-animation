import React, { useRef } from "react";
import { useIsInViewport } from "../../../hooks/useIsInViewport";

import { Char, Container } from "./styles";

interface IEnterProps {
  text: string;
  styles?: any
  className: string;
}

export const Enter = ({ text, styles, className }: IEnterProps) => {

    const spanRef = useRef(null)
  const isInViewport = useIsInViewport(spanRef);

  return (
    <Container>
      <span ref={spanRef} className={className}>
        {text.split("").map((item, index) => (
          <Char
            isInViewport={isInViewport}
            charIndex={index}
            key={index}
            style={{...styles}}
          >
            {item}
          </Char>
        ))}
        {text}
      </span>
    </Container>
  );
};

// .text
//   &--enter
//     [data-scroll='out'] .char
//       opacity 0
//       transform translate(0, -150%)

//     .char
//       opacity 1
//       transform translate(0, 0)
