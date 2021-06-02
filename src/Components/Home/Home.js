import React from 'react';
import Project from '../Project/Project';
import Achievements from './Achievements/Achievements';
import Header from './Header/Header';
import Services from './Services/Services';
import DedicatedSection from './DedicatedSection/DedicatedSection';
import SearchBox from './SearchBox/SearchBox';
import Footer from './Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>

            <div className="bg-light p-3" id='services'>
            <Services></Services>
            </div>

            <Project></Project>

            <div id="achievements">
            <Achievements></Achievements>
            </div>
            

            <div className="bg-light" id='offers'>
            <DedicatedSection />
            </div>

            <SearchBox/>

            <div id='footer'>
            <Footer/>
            </div>
       
            </div>
    );
};

export default Home;