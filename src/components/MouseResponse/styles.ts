import styled, { css } from 'styled-components';

const getDepth = (value: string) => {
    switch (value) {
        case 'low':
            return '40px';
        case 'medium':
            return '20px';
        case 'high':
            return '10px';
        default:
            return '40px';
    }
}

interface IContainerProps {
    depth: 'low' | 'medium' | 'high';
}

interface IInnerProps {
    x: number;
    y: number;
}

export const Container = styled.div<IContainerProps>`
    perspective: ${({depth}) => getDepth(depth)};
`;

export const Inner = styled.div<IInnerProps>`
    transition: transform 400ms;
    
    ${({x, y}) => css`
        transform: rotateX(${x}deg) rotateY(${y}deg);
    `}
    
`