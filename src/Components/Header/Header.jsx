import React from 'react';
import s from "./Header.module.scss"
import eco from '../../assets/eco 1.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import MyButton from '../MUI/MyButton/MyButton';
import logo from '../../assets/photo1678988458.png'

const Header = () => {
    return (
        <motion.header className={s.header}
        variants={fadeIn("up",1.4)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}}
        >
            <div className={s.container}>
                <div className={s.left_side}>
                    <img src={logo} alt="eco" />
                    <nav>
                           <Link to="/"><h3>Главная</h3></Link>
                           <Link to="/AboutUs"><h3>О нас</h3></Link>
                           <Link to="/Otcheti"><h3>Отчёты</h3></Link>    
                    </nav>
                </div>
             
                <Link to="/Auth"><MyButton>Войти</MyButton></Link>
                
            </div>
        </motion.header>
    );
};

export default Header;