import React, { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Container, Inner } from './styles';


const UPDATE_RATE = 10;
const INITIAL_POSITION = {
  x: 0,
  y: 0
}

interface IInitialPosition {
  x: number;
  y: number;
}

interface IMouseResponseProps {
  children: ReactNode;
  depth?: 'low' | 'medium' | 'high';
}

export const MouseResponse = ({ children, depth = 'low' }: IMouseResponseProps) => {
  const [mouse, setMouse] = useState<IInitialPosition>(INITIAL_POSITION)
  const [origin, setOrigin] = useState<IInitialPosition>(INITIAL_POSITION)
  const [counter, setCounter] = useState(0);

  const [transformStyles, setTransformStyles] = useState<IInitialPosition>(INITIAL_POSITION);

  const containerRef = useRef<HTMLDivElement>(document.createElement("div"));
  const innerRef = useRef(document.createElement("div"));

  useEffect(() => {
    setTransformStyles({
         x: parseFloat((mouse.y / innerRef.current.offsetHeight / 2).toFixed(2)),
         y: parseFloat((mouse.x / innerRef.current.offsetWidth / 2).toFixed(2))
       })
  }, [mouse, innerRef])

  const isTimeToUpdate = useMemo(() => {
    return counter % UPDATE_RATE === 0;
  }, [ counter, UPDATE_RATE ])

  useEffect(() => {
    setOrigin({
      x: containerRef?.current?.offsetLeft + Math.floor(containerRef.current.offsetWidth / 2),
      y: containerRef?.current?.offsetTop + Math.floor(containerRef.current.offsetHeight / 2)
    })
  }, [])

  const updatePosition = useCallback((event: any) => {
    
    setMouse({
      x: event.pageX - origin.x,
      y: (event.pageY - origin.y) * -1
    })
  }, [origin])

  const handleMouseMove = useCallback((event: any) => {
    setCounter(value => value + 1);

    if (isTimeToUpdate) {
      updatePosition(event);
    }
  }, [isTimeToUpdate, updatePosition, setCounter])

  const handleMouseLeave = useCallback(() => {
    setTransformStyles(INITIAL_POSITION)
  }, [isTimeToUpdate, updatePosition, setCounter])

 return ( 
    <Container 
      ref={containerRef} 
      onMouseMove={handleMouseMove} 
      onMouseEnter={updatePosition} 
      onMouseLeave={handleMouseLeave} 
      depth={depth}
    >
      <Inner 
        ref={innerRef} 
        x={transformStyles.x}
        y={transformStyles.y}
      >
        {children}
      </Inner>
    </Container>
  )
}