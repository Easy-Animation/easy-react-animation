import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface ICharProps {
  charIndex: number;
  isInViewport: boolean;
  initialState: FlattenSimpleInterpolation;
  animationState: FlattenSimpleInterpolation; 
}

export const Char = styled.span<ICharProps>`
  display: inline-block;
  ${({initialState}) => initialState}
  
  ${({ isInViewport,charIndex,animationState }) =>
    isInViewport &&
    css`
        animation-delay: calc(0.25s + ${charIndex} * 0.1s);
        transition: all 0.25s calc(0.25s + ${charIndex} * 0.1s);
        ${animationState}
    `}
`;

export const Container = styled.div``;
