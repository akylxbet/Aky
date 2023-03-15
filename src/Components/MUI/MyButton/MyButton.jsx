import React from 'react';
import s from './MyButton.module.scss'
const MyButton = ({children,}) => {
    return (
        <button>{children}</button>
    );
};

export default MyButton;