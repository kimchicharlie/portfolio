import React from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x: number, y: number) => [
  (y - window.innerHeight / 2) / 80,
  -(x - window.innerWidth / 2) / 80,
  1.1,
];

const trans = (x: number, y: number, s: number) =>
  `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const PaperAnimation = (props: any) => {
  const [springProps, set] = useSpring<{
    xys: number[];
    config: { mass: number; tension: number; friction: number };
  }>(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 350, friction: 40 },
  }));
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: springProps.xys.interpolate(trans),
      }}
      {...props}
    />
  );
};

export default PaperAnimation;
