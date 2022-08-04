import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface ICharProps {
  charIndex: number;
  isInViewport: boolean;
  initialState: FlattenSimpleInterpolation;
  animationState: FlattenSimpleInterpolation; 
  char: string;
  charTotal: number;
  reverse: boolean;
  transition: string | null;
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
  
  ${({ isInViewport,charIndex,animationState, charTotal, reverse, transition }) =>
    isInViewport &&
    css`
        &, &::after, &::before {
            animation-delay: calc(0.25s + ${charIndex} * 0.1s);
            transition: all 0.25s calc(0.25s + ${charIndex} * 0.1s);

            ${transition && `transition: ${transition}`};
            
            ${reverse && `transition-delay: calc((${charTotal} - ${charIndex}) * .1s);`};
        }
        ${animationState}
    `}
`;

export const Container = styled.div`
    overflow: hidden;
    position: relative;
    width:auto;
    & * {
        display: inline-block;
    }
    @keyframes block {
                0%{ 
                    transform: translate(-110%, 0);
                }
                45%, 55%{
                    transform: translate(0, 0);
                }
                100%{
                    transform: translate(110%, 0);
                }
            }

            &::after {
                color: #000;
                visibility: visible;
                clip-path: inset(0 0 0 0);
                content: '';
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: #000;
                animation: block .5s .25s both;

            }
`;
