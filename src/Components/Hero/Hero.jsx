import React from 'react';
import s from './Hero.module.scss'
import { TypeAnimation } from 'react-type-animation';
import { fadeIn } from '../../variants';
import { motion } from 'framer-motion';
const Hero = () => {
    return (
        <section className={s.Hero}>
            <div className={s.container}>
                <div className={s.left}>
                    <motion.h1 
                    variants={fadeIn("right",0.3)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: false, amount:0.7}}
                    >Добро пожаловать на наш сайт !</motion.h1>
                    <motion.span
                    variants={fadeIn("left",0.3)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: false, amount:0.7}}
                    >Сайт был разработан командой
                    <TypeAnimation 
                     
                     sequence={[
                        "NoCap" ,
                        2400,
                        "Backend: Каимов Амантур, Аутахунов Аширхан ",
                        2400,
                        "Frontend: Демилбеков Акылбек"
                     ]}
                     speed={40}
                     repeat={Infinity}
                     />
                    </motion.span>
                </div>
                <div className={s.right}>

                </div>
            </div>
        </section>
    );
};

export default Hero;