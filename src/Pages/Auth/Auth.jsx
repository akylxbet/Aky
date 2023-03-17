import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import {React, useState} from 'react';
import MyInput from '../../Components/MUI/MyInput/MyInput';
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import s from "./Auth.module.scss"
import MyButton from '../../Components/MUI/MyButton/MyButton';
import { Link, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import axios from 'axios'
import { AUTH } from '../../Api';
const Auth = () => {

    
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const getRegister = () => {
      navigate("/Register");
    };
  
    const postUsers = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(AUTH, {
            email: "",
            password: "",
        });
        const access = response.data.access;
        const refresh = response.data.refresh;
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
  
        if (response.status === 200 || 201) {
          return navigate("/");
        } else if (!response.status) {
          console.log("error");
        }
      } catch (error) {
        console.error("hui");
      }
    };



    return (
        
        
        <div className={s.Auth}>
           <motion.form 
           onSubmit={postUsers}
           className={s.container}
           variants={fadeIn("up",0.5  )} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once: false, amount:0.9}}
           > 
                <h1>Вход</h1>
                <MyInput type="Email"
                    pc="Email"
                    icon={<MailOutlined/>}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <MyInput type="password"
                    pc="Пароль"
                    icon={<LockOutlined/>}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <MyButton onClikc={navigate}>Войти</MyButton>
                <Link to='/Recovery'>  <motion.span
                    variants={fadeIn("left",0.5)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once: false, amount:0.7}}
                    >
                    <TypeAnimation 
                     
                     sequence={[
                        "Забыл пароль?" ,
                        2700,
                        "Восстанови пароль! " 
                     ]}
                     speed={20}
                     
                     />
                    </motion.span></Link>
            </motion.form>  
            
        </div>
    );
};

export default Auth;