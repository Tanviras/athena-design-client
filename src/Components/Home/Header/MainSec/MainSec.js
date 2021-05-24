import React, { useState } from 'react';
import './MainSec.css';
import frame from '../../../../images/logos/Frame.png';
import Radium, { StyleRoot } from 'radium';
import { bounce } from 'react-animations';

import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
];
const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const MainSec = () => {

    const [prop, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 },
    }));

    const styles = {
        bounce: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounce, 'bounce')
        }
    }

    return (
        <div className="container headMain mb-2">

            <div className="row d-flex align-items-center">
                <div className="col-md-4 mr-5 p-4">
                    <h1><strong> Florence <br /> Agency </strong></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatum ullam velit eligendi facilis.</p>
                    <button className="btn text-light w-50 btnHire">See Pricing</button>
                </div>

                <animated.div
                    className="animated-card col-md-6 offset-md-1 p-3 headMainImg"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: prop.xys.interpolate(trans), marginTop: 40 }}
                >

                    <div>
                        <StyleRoot>
                            <img className="w-100 img-fluid" src={frame} alt="" style={styles.bounce} />
                        </StyleRoot>
                    </div>

                </animated.div>



            </div>
        </div>
    );
};

export default MainSec;