import React from 'react';
import Auth from '../../Pages/Auth/Auth';
import s from './AboutUs.module.scss'
import DashBoard from '../DashBoard/DashBoard'
const AboutUs = () => {
    return (
        <section className={s.AboutUs}>
            <DashBoard/>
        </section>
    );
};

export default AboutUs;