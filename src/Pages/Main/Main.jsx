import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Hero from '../../Components/Hero/Hero';
import s from './Main.module.scss'
const Main = () => {
    return (
        <div className={s.Main}>
            <Hero/>
            <AboutUs/>
        </div>
    );
};

export default Main;