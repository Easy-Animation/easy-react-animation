import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface ICharProps {
  charIndex: number;
  isInViewport: boolean;
  initialState: FlattenSimpleInterpolation;
  animationState: FlattenSimpleInterpolation; 
  char: string;
}

export const Char = styled.span<ICharProps>`
  display: inline-block;
  position: relative;
  ${({initialState}) => initialState}

  ${({char}) => (
    css`
        &::after, &::before {
            content: "${char}";
            position: absolute;
            top: 0;
            left: 0;
            visibility: hidden;
        }
    `
  )}
  
  ${({ isInViewport,charIndex,animationState, char }) =>
    isInViewport &&
    css`
        &, &::after, &::before {
            animation-delay: calc(0.25s + ${charIndex} * 0.1s);
            transition: all 0.25s calc(0.25s + ${charIndex} * 0.1s);
        }
        ${animationState}
    `}
`;

export const Container = styled.div``;
