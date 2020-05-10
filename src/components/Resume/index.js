import React from 'react';
import { useSpring, animated } from 'react-spring';

import LeftSection from './LeftSection';
import RightSection from './RightSection';
import './style.css';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Resume = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <div className="resume-container">
      {/* <animated.div
        className="resume"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      > */}
      <div className="resume">
        <LeftSection />
        <RightSection />
      </div>
      {/* </animated.div> */}
    </div>
  );
};

export default Resume;
