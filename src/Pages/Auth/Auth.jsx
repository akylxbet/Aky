import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import React from 'react';
import MyInput from '../../Components/MUI/MyInput/MyInput';
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import s from "./Auth.module.scss"
import MyButton from '../../Components/MUI/MyButton/MyButton';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
const Auth = () => {
    return (
        
        
        <div className={s.Auth}>
           <motion.div className={s.container}
           variants={fadeIn("up",0.5  )} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once: false, amount:0.9}}
           > 
                <h1>Вход</h1>
                <MyInput type="Email"
                    pc="Email"
                    icon={<MailOutlined/>}
                    // value={login.email}
                    // onChange={(e)=>{
                    //     setLogin({...login, email:e.target.value})
                    // }}
                />
                <MyInput type="password"
                    pc="Пароль"
                    icon={<LockOutlined/>}
                    // value={login.passwrod}
                    // onChange={(e)=>{
                    //     setLogin({...login, password:e.target.value})
                    // }}
                />
                
                <MyButton>Войти</MyButton>
                <Link to='/Registr'>  <motion.span
                    variants={fadeIn("left",0.3)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: false, amount:0.7}}
                    >
                    <TypeAnimation 
                     
                     sequence={[
                        "Нет аккаунта?" ,
                        2400,
                        "Зарегистрируйся" 
                     ]}
                     speed={40}
                     
                     />
                    </motion.span></Link>
            </motion.div>  
            
        </div>
    );
};

export default Auth;