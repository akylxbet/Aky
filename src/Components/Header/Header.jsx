import React from 'react';
import s from "./Header.module.scss"
import eco from '../../assets/eco 1.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import MyButton from '../MUI/MyButton/MyButton';

const Header = () => {
    return (
        <motion.header className={s.header}
        variants={fadeIn("right",0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount:0.7}}
        >
            <div className={s.container}>
                <div className={s.left_side}>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/3b54dada-d63c-4216-ad58-fdde9e2187cd/d7ybhoi-a593cb90-2036-459d-9621-abd091eae325.png" alt="eco" />
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