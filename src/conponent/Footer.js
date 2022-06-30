import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const {isDark, setIsDark } = useContext(ThemeContext)
    const OnClickDark= () =>{
        setIsDark(!isDark)
    }
    return (
        <div className={isDark? 'Footer dark' : 'Footer'}>
            <button onClick={OnClickDark}>다크모드</button>
        </div>
    );
};

export default Footer;