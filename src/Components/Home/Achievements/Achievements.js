import React from 'react';
import './Achievements.css';
import happy from '../../../images/icons/happy@2x.png';
import marketing from '../../../images/icons/marketing@2x.png';
import surface from '../../../images/icons/surface1@2x.png';
import transportation from '../../../images/icons/transportation@2x.png';


const Achievements = () => {
    return (
        <div className="achievement bg-light pt-4 pb-2">
                <div className="container ">
            <div className="row ">
            <div className="col-md-4 col-sm-12">
                <h2>Our Achievements</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at iaculis eros, sit amet elementum eros. Duis eget efficitur tellus, ultrices hendrerit nulla. Duis ac varius ex, id aliquam nunc. Pellentesque pretium, turpis eget mollis hendrerit, elit mauris efficitur magna, quis fermentum quam turpis eu purus.</p>

            </div>
            <div className="col-md-8">
               <div className="emoji">
               <div className="leaf" >
               <div className="achv1">
                   <div className="d-flex justify-content-between">
                    <div className="mr-5">
                        <img src={happy} alt=""/>
                    </div>
                    <div>
                        <h2 >700+</h2>
                        <p className="on">Happy Faceson</p>
                    </div>
                    </div>
               </div>
                    
               </div>
               <div className="leaf">
               <div className="achv2">
               <div className="d-flex justify-content-between">
                    <div className="mr-5">
                        <img src={marketing} alt=""/>
                    </div>
                    <div>
                        <h2>140+</h2>
                        <p className="on">Projects Completed</p>
                    </div>
                    </div>
               </div>
                    
               </div>
               </div>
               <div className="emoji">
               <div className="leaf" >
               <div className="achv3">
               <div className="d-flex justify-content-between">
                    <div  className="mr-5">
                        <img className="prize" src={surface} alt=""/>
                    </div>
                    <div>
                        <h2>251+</h2>
                        <p className="on">Crazy Mindson</p>
                    </div>
                    </div>
               </div>
                    
               </div>
               <div className="leaf">
               <div className="achv4">
               <div className="d-flex justify-content-between">
                    <div  className="mr-5">
                        <img src={transportation} alt=""/>
                    </div>
                    <div>
                        <h2>175+</h2>
                        <p className="on">Running Projectson</p>
                    </div>
                    </div>
               </div>
                    
               </div>
               </div>


                </div>
            </div>
            </div>

        </div>
        
    );
};

export default Achievements;