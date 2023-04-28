import React, { useState, useRef, useEffect } from 'react';
import { useScrollTrigger, Grow, Fade, Zoom } from '@mui/material';

interface Props {
  children: React.ReactElement;
  timeout: number;
  animation: 'grow' | 'fade' | 'zoom';
}

const ScrollAnimation: React.FC<Props> = (props: Props ) => {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [triggered]);

  // render appropriate animation component based on animation prop
  const animationComponent = () => {
    switch (props.animation) {
      case 'grow':
        return <Grow timeout={props.timeout} in={triggered}><div>{props.children}</div></Grow>;
      case 'fade':
        return <Fade timeout={props.timeout} in={triggered}><div>{props.children}</div></Fade>;
      case 'zoom':
        return <Zoom timeout={props.timeout} in={triggered}><div>{props.children}</div></Zoom>;
      default:
        return <Fade timeout={props.timeout} in={triggered}><div>{props.children}</div></Fade>;
    }
  }

  return (
    <div ref={ref}>
      {animationComponent()}
    </div>
  );
};

export default ScrollAnimation;
