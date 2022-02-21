import React from 'react'
import { Button } from './Button'
import '../App.css'
import './Welcome.css'

function Welcome() {
  return (
    <div className='welcome-container'>
        {/* Video */}
        <video src="public/videos/welcome.mp4" autoPlay loop muted />
        <h1>WELCOME</h1>
        <p>AlexFigas.github.io</p>
        <div className="welcome-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>ABOUT ME</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>GITHUB</Button>
        </div>
    </div>
  )
}

export default Welcome