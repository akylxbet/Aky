import {React, useState} from 'react';
import s from "./Register.module.scss"
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import MyInput from '../../Components/MUI/MyInput/MyInput';
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import MyButton from '../../Components/MUI/MyButton/MyButton';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
const Register = () => {

    const [error, setError] = useState('');
	
	const [userData, setUserData] = useState({
		username: '',
		email: '',
		password: '',
	})




	const BASE_URL = ''

	const postDataUser = async () => {
		try {
			setLoading(true)
			await axios
				.post(BASE_URL + "/register", userData)
				.then((res) => localStorage.setItem('token', JSON.stringify(res.data.token)), console.log(localStorage))
			setUserData({ username: '', email: '', password: '' });
			window.location.reload();
		} catch (error) {
			setError(error.response.data.error)
		}
		setLoading(false);
	}


    return (
        <motion.div className={s.container}
            variants={fadeIn("up",0.5  )} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount:0.9}}
            > 
             <h1>Регистрация</h1>
             <MyInput type="name"
                 pc="Имя"
                 icon={<UserOutlined/>}
                 // value={login.email}
                 // onChange={(e)=>{
                 //     setLogin({...login, email:e.target.value})
                 // }}
             />
             <MyInput type="Email"
                 pc="Email"
                 icon={<MailOutlined/>}
                 // value={login.passwrod}
                 // onChange={(e)=>{
                 //     setLogin({...login, password:e.target.value})
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
             {/* <Link to='/Registr'>  <motion.span
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
                 </motion.span></Link> */}
         </motion.div>  
         
    );
};

export default Register;