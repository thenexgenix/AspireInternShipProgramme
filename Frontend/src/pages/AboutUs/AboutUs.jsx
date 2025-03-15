import React from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Quote from './quote/quote';
import Mission from './Misson/Misson';

const AboutUs = () => {
    return (
        <div  style={{ fontFamily: "'Sen', sans-serif" }} className='bg-[#EFF2FA] '>
            <Header></Header>
            <Banner></Banner>
            <Quote></Quote>
            <Mission></Mission>
        </div>
    );
};

export default AboutUs;