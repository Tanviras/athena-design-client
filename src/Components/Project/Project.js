import React from 'react';
import project from '../../images/logos/20 [Converted]@2x.png';
import './Project.css';
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
];
const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Project = () => {

    const [prop, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 },
    }));


    return (
        <div className="project">
            <div className="container">
                <div className="row ">


                    <animated.div
                        className="animated-card col-md-6 p-3 headMainImg"
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: prop.xys.interpolate(trans), marginTop: 40 }}
                    >

                        <div>
                            <img className="w-100 img-fluid" src={project} alt="" />
                        </div>

                    </animated.div>



                    <div style={{ marginTop: 100 }} className="col-md-6 col-sm-12 ">
                        <h2 style={{ marginLeft: 10, padding: 20 }}>Stay Running and Project </h2>
                        <p style={{ marginLeft: 10, padding: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at iaculis eros, sit amet elementum eros. Duis eget efficitur tellus, ultrices hendrerit nulla. Duis ac varius ex, id aliquam nunc. Pellentesque pretium, turpis eget mollis hendrerit, elit mauris efficitur magna, quis fermentum quam turpis eu purus.</p>
                        <button style={{ marginLeft: 30 }} className="btnHire">Contact Us</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;