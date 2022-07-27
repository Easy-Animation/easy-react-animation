import styled, { css } from "styled-components";

interface ICharProps {
  charIndex: number;
  isInViewport: boolean;
}

export const Char = styled.span<ICharProps>`
  display: inline-block;
  opacity: 0;
  transform: translate(0, -150%);
  
  ${({ isInViewport,charIndex }) =>
    isInViewport &&
    css`
        animation-delay: calc(0.25s + ${charIndex} * 0.1s);
        transition: all 0.25s calc(0.25s + ${charIndex} * 0.1s);
        opacity: 1;
        transform: translate(0, 0);
    `}
  
    /* ${({ charIndex }) => css`
    
  `} */
`;

// interface IContainerProps {
//     animationCompleted: boolean;
// }

export const Container = styled.div`
  > span {
    display: flex;
  }
`;
