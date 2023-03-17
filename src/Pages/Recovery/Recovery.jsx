import React from 'react';
import s from "./Recovery.module.scss"
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import MyInput from '../../Components/MUI/MyInput/MyInput';
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import MyButton from '../../Components/MUI/MyButton/MyButton';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import axios from 'axios';
const Recovery = () => {



    return (
        <motion.div className={s.container}
        variants={fadeIn("up",1.3  )} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false, amount:0.9}}
        > 
         <h1>Восстановление пароля</h1>
         <MyInput type="Email"
             pc="Введите свою почту"
             icon={<MailOutlined/>}
             // value={login.email}
             // onChange={(e)=>{
             //     setLogin({...login, email:e.target.value})
             // }}
         />



         <MyButton>Восстановить пароль</MyButton>
        <motion.span
             variants={fadeIn("left",1.4)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount:1}}
             >
             <TypeAnimation 
              
              sequence={[
                 "Привет!" ,
                 3000,
                 "Проверь почту, пожалуйста!",
                 3000
              ]}
              speed={40}
              repeat={Infinity}
              />
             </motion.span>
     </motion.div>  
    );
};

export default Recovery;