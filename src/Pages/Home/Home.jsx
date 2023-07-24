import React from 'react';
import Banner from './Banner/Banner';
import FeatureCard from './FeatureCard/FeatureCard';
import NOLAN from './NOLAN/NOLAN';
import Features from './Features/Features';

const Home = () => {
    return (
        <div style={{backgroundColor: 'rgb(15, 14, 14)'}} className='text-white'>
            <Banner></Banner>
            <FeatureCard></FeatureCard>
            <NOLAN></NOLAN>
            <Features></Features>
        </div>
    );
};

export default Home;