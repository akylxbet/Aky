import React from 'react';
import s from './MyInput.module.scss'
import { Input } from "antd";
const MyInput = ({pc, icon , ...props}) => {
    return (   
    <div className={s.sae}>
        <Input
          {...props}
          className={s.Inputs}
          placeholder={pc}
          prefix={icon}
        />
   </div>    
    );
};

export default MyInput;