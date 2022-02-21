import React from 'react'
import { Button } from './Button'
import '../App.css'
import './Welcome.css'
import videos from '../videos/welcome.mp4'

function Welcome() {
  return (
    <div className='welcome-container'>
      {/* Video */}
      <video src={videos} autoPlay loop muted />
      <h1>WELCOME</h1>
      <p>alexfigas.github.io</p>
      <div className="welcome-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>ABOUT ME</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>GITHUB</Button>
      </div>
    </div>
  )
}

export default Welcome