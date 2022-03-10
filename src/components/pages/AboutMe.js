import React from "react";
import '../../App.css'

import Blender from "../../images/logos/Blender.svg"

function AboutMe() {

    return (
        <>
            <h1 className="about-me">ABOUT ME</h1>

            <h2>Hi, I'm <span className="name-text">Alexandre Figueiredo</span></h2>
            <p style={{marginBottom: 100    }}>Full-Stack Developer with development experience of over {new Date().getFullYear() - 2019} years based in Lisbon, Portugal </p>

            <div className="flex-container">
                <div className="flex-child">
                    <p className="title-paragraph">Experience</p>
                    <p style={{marginTop: 10}}>🎓 Informatics and Multimedia Engineering student</p>
                    <p>🏎️ ISEL Formula Student Developer</p>
                </div>
                <div className="flex-child">
                    <p className="title-paragraph">Languages</p>
                    <div class="row" style={{marginTop: 10}}>
                        <div class="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                        </div>
                        <div className="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                        </div>
                        <div class="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                        </div>
                        <div class="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                        </div>
                        <div className="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
                        </div>
                        <div className="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                        </div>
                        <div className="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                        </div>
                        <div className="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/processing/processing-original.svg" alt="Processing" />
                        </div>
                        <div className="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="Numpy" />
                        </div>
                        <div className="column">
                            <img src={Blender} alt="Blender" />
                        </div>
                        <div className="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        </div>
                        <div className="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                        </div>
                        <div className="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        </div>
                        <div className="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" />
                        </div>
                        <div className="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                        </div>
                        <div className="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />
                        </div>
                        <div className="column">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;