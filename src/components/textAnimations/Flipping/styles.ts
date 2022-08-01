import styled, { css } from "styled-components";

interface ICharProps {
  charIndex: number;
  isInViewport: boolean;
}

export const Char = styled.span<ICharProps>`
  display: inline-block;
  transform: rotateY(180deg);
  
  ${({ isInViewport,charIndex }) =>
    isInViewport &&
    css`
        animation-delay: calc(0.25s + ${charIndex} * 0.1s);
        transition: all 0.25s calc(0.25s + ${charIndex} * 0.1s);
        transform: rotateY(0deg);
    `}
`;

export const Container = styled.div``;
