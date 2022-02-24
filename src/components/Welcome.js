import React from 'react'
import { Button } from './Button'
import '../App.css'
import './Welcome.css'
import videos from '../videos/welcome.mp4'
import welcomeImage from '../images/welcome-img.png'

function Welcome() {    

    return (
        <div className='welcome-container'>
            <img className='welcome-img' src={welcomeImage} alt='' />
            {/* Video */}
            <video src={videos} autoPlay loop muted />
            <h1>WELCOME</h1>
            <p>AlexFigas.github.io</p>
            <div className="welcome-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' to="/About-Me">ABOUT ME</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={(e) => { window.open('https://github.com/AlexFigas', "_blank"); }}>GITHUB</Button>
            </div>
        </div>
    )
}

export default Welcome