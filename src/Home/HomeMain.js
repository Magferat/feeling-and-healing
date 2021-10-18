import React from 'react';
import About from '../AboutUs/About';
import Allservices from '../Services/Allservices';
import HomeBanner from './HomeBanner';

const HomeMain = () => {
    return (
        <div>
            <HomeBanner />
            <Allservices />
            <About></About>
        </div>
    );
};

export default HomeMain;