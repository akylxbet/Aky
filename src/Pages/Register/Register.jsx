import {React, useState} from 'react';
import s from "./Register.module.scss"
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import MyInput from '../../Components/MUI/MyInput/MyInput';
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import {message} from 'antd'
import MyButton from '../../Components/MUI/MyButton/MyButton';
import { Link, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import axios from 'axios';
import { AUTH, BASE_URL } from '../../Api';
// import { message } from 'antd';
const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  
    const navigate = useNavigate();
    const handleAuth = () => {
      navigate("/Auth");
    };
  
    // const [messageApi, contextHolder] = message.useMessage();
    // const error = () => {
    //   messageApi.open({
    //     type: 'error',
    //     content: 'This username is already taked',
    //     style: {
    //       marginTop: '100px',
    //     }
    //   });
    // };
  
    const AuthUsers = async () => {
      try {
        const response = await axios.post(AUTH, {
          username,
          password,
        });
        if (response.status === 200 || 201) {
          const access = response.data.access;
          const refresh = response.data.refresh;
  
          localStorage.setItem("access", access);
          localStorage.setItem("refresh", refresh);
          navigate("/");
        } else if (!response.status) {
          console.log("error");
        }
      } catch {
        console.log('error')
      }
      }
    
  
    const postUsers = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(BASE_URL, {
          username,
          password,
          email,
        });
        if (response.status === 200 || 201) {
          // console.log("Success:", response.data);
          // navigate("/auth");
          AuthUsers()
        }
      } catch (e) {
        console.log("Ошибка какая-то")
      }
    };
  


    return (
        <motion.form onSubmit={postUsers} className={s.container}
            
            variants={fadeIn("up",0.5  )} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount:0.9}}
            > 
             <h1>Регистрация</h1>
             <MyInput type="name"
                 pc="Имя"
                 icon={<UserOutlined/>}
                 value={username}
                 onChange={(e)=> {setUsername(e.target.value)}}
             />
             <MyInput type="Email"
                 pc="Email"
                 icon={<MailOutlined/>}
                 value={email} 
                 onChange={(e)=> {setEmail(e.target.value)}}
             />
               <MyInput type="password"
                 pc="Пароль"
                 icon={<LockOutlined/>}
                 value={password}
                 onChange={(e)=> {setPassword(e.target.value)}}
             />


             <MyButton onClick = {handleAuth}
             type='submit'
			>Зарегистрироваться
              </MyButton>
           
         </motion.form>  
         
    );
}
export default Register;