import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
const TO = ['/', 'About-Me', 'Projects', 'Contact-Me'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, where: to }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonTo = TO.includes(to) ? to : TO[0];

    return (
        <Link to={checkButtonTo} className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
};

