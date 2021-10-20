import React from 'react';
import About from '../AboutUs/About';
import Allservices from '../Services/Allservices';
import HomeBanner from './HomeBanner';
import '../CSS/custom.css'

const HomeMain = () => {
    return (
        <div id="home" className="body">
            <HomeBanner />
            <Allservices />
            <About></About>
        </div>
    );
};

export default HomeMain;