import React from 'react';
import s from './Hero.module.scss'
import { TypeAnimation } from 'react-type-animation';
import { fadeIn } from '../../variants';
import { motion } from 'framer-motion';
const Hero = () => {
    return (
        <section className={s.Hero}>
            <motion.div className={s.container}
            variants={fadeIn("up",0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}}
            >
                <div className={s.content}>
                <div className={s.center}>
                <motion.h1 
                    className={s.intro}
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
                    <div className={s.lower_center}>
                <motion.div className={s.left}
                 variants={fadeIn("right",0.3)} 
                 initial="hidden" 
                 whileInView={'show'} 
                 viewport={{once: false, amount:0.7}}>
                    <h1>
                    <TypeAnimation 
                     
                     sequence={[
                        "Для чего создавался сайт?" ,
                        2400
                       
                     ]}
                     speed={10}
                     repeat={Infinity}
                     />                        
                    </h1>
                    <p>Здесь создавался проект для хакатона от нашей <br />
                    
                    <a href="https://it-academy.kg/">
                    <TypeAnimation 
                     
                     sequence={[
                        " ItAcademy.kg" ,
                        2400
                       
                     ]}
                     speed={10}
                     repeat={Infinity}
                     /></a>
                    </p>
                    <p>Здесь мы отображаем различные отчёты</p>
                </motion.div>
                <div className={s.right}>

                </div>
                </div>
            </div>
            </motion.div>
        </section>
    );
};

export default Hero;