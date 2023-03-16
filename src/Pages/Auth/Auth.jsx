import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import {React, useState} from 'react';
import MyInput from '../../Components/MUI/MyInput/MyInput';
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import s from "./Auth.module.scss"
import MyButton from '../../Components/MUI/MyButton/MyButton';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
const Auth = () => {

    const [userLogin, setUserLogin] = useState({
		email: '',
		password: ''
	})
	const [errorMessage, setErrorMessage] = useState('')

	

	
	

	const LOGIN_URL = ''

	const login = async () => {
		if (userLogin.email.length > 1 || userLogin.password.length > 1) {
			try {
			
				const { data } = await axios.post(LOGIN_URL, userLogin);
				console.log(data);
				localStorage.setItem('token', JSON.stringify(data.token));
				
			} catch (error) {
				setErrorMessage(error.response.data.error);
			}
			setLoading(false)
		}

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
                <Link to='/Register'>  <motion.span
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
            </motion.div>  
            
        </div>
    );
}};

export default Auth;