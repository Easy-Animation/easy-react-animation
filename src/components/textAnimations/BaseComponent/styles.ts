import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface ICharProps {
    charIndex: number;
    isInViewport: boolean;
    initialState: FlattenSimpleInterpolation;
    animationState: FlattenSimpleInterpolation;
    customAnimationProps: FlattenSimpleInterpolation | null;
    char: string;
    charTotal: number;
    reverse: boolean;
    transition: string | null;
}

export const Char = styled.span<ICharProps>`
  display: inline-block;
  position: relative;
  ${({ initialState }) => initialState}

  ${({ char }) => (
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
  
  ${({
        isInViewport,
        charIndex,
        animationState,
        charTotal,
        reverse,
        transition
    }) =>
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

    ${({
            customAnimationProps
        }) =>
        customAnimationProps &&
        css`
        & {
            ${customAnimationProps}
        }
    `}
`;

interface IContainerProps {
    containerStyle: FlattenSimpleInterpolation | undefined;
}

export const Container = styled.div<IContainerProps>`    
    > p {
        margin: 0;
        padding: 0;
    }

    ${({ containerStyle }) => containerStyle && containerStyle}
`;
