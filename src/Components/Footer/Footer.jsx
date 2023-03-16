import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { fadeIn } from '../../variants';
import { motion } from 'framer-motion';
import s from "./Footer.module.scss"
const Footer = () => {
    return (
        <motion.footer className={s.footer}
        variants={fadeIn("left",0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}}>
        <div className={s.container}>
        
        <Link to="/Registr">
        <motion.span
                    variants={fadeIn("left",0.5)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: false, amount:0.4}}
                    >
                    <TypeAnimation 
                     
                     sequence={[
                        "Привет!" ,
                        3000,
                        "Как насчёт того, чтобы зарегистрироваться? " 
                     ]}
                     speed={40}
                     repeat={Infinity}
                     />
                    </motion.span>
        
        </Link>
        </div>
    </motion.footer>
    );
};

export default Footer;