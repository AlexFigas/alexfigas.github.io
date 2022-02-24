import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import whiteLogo from '../images/logos/logo-white.svg'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img className='footer-icon' src={whiteLogo} alt='AlexFigas Logo' />
                        </Link>
                    </div>
                    <small className='website-rights'>AlexFigas © 2022</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to='/' aria-label='Facebook' onClick={() => { window.open('https://www.facebook.com/AlexandreFigas', "_blank") }}>
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link className='social-icon-link instagram' to='/' aria-label='Instagram' onClick={() => { window.open('https://www.instagram.com/alexfigas11/') }}>
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link className='social-icon-link youtube' to='/' aria-label='Youtube' onClick={() => { window.open('https://www.youtube.com/c/AlexFigasGames') }}>
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link className='social-icon-link twitter' to='/' aria-label='Twitter' onClick={() => { window.open('https://twitter.com/AlexFigas') }}>
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link className='social-icon-link linkedin' to='/' aria-label='LinkedIn' onClick={() => { window.open('https://www.linkedin.com/in/alexfigas/') }}>
                            <i className='fab fa-linkedin' />
                        </Link>
                        <Link className='social-icon-link github' to='/' aria-label='GitHub' onClick={() => { window.open('https://github.com/AlexFigas') }}>
                            <i className='fab fa-github' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
