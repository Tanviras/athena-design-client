import React from 'react';
import project from '../../images/logos/20 [Converted]@2x.png';
import './Project.css';

const Project = () => {
    return (
        <div className="project">
            <div className="container">
                <div className="row ">
                <div className="col-md-6 p-3 headMainImg">
            <img  className="w-100 img-fluid" src={project} alt=""/>
            </div>
            <div style={{marginTop:100}} className="col-md-6 col-sm-12 ">
                <h2 style={{marginLeft:10,padding:20}}>Stay Running & Project </h2>
                <p style={{marginLeft:10,padding:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at iaculis eros, sit amet elementum eros. Duis eget efficitur tellus, ultrices hendrerit nulla. Duis ac varius ex, id aliquam nunc. Pellentesque pretium, turpis eget mollis hendrerit, elit mauris efficitur magna, quis fermentum quam turpis eu purus.</p>
                <button style={{marginLeft:30}} className="btnHire">Contact Us</button>

            </div>
        </div>
        </div>
        </div>
    );
};

export default Project;