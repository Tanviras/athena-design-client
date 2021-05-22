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

            <div className="bg-light p-3">
            <Services></Services>
            </div>

            <Project></Project>
            <Achievements></Achievements>

            <div className="bg-light">
            <DedicatedSection />
            <SearchBox/>
            <Footer/>
            </div>

        </div>
    );
};

export default Home;