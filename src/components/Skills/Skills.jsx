import React from 'react'
import './Skills.css'

import reactIcon from '../../assets/react.png'
import tailwindIcon from '../../assets/tailwind.png'
import jsIcon from '../../assets/js.png'


import nodeIcon from '../../assets/node.png'
import expressIcon from '../../assets/express.png'
import mongoIcon from '../../assets/mongo.png'


import dockerIcon from '../../assets/docker.png'
import linuxIcon from '../../assets/linux.png'
import nginxIcon from '../../assets/nginx.png'

const Skills = () => {
  return (
    <section id="skills">
      <div className="sectionInner">

        <span className="skillTitle">What I Do</span>

        <span className="skillDesc">
          I design, build, deploy, and automate modern web applications.
          From slick frontends to secure backends and cloud automation.
        </span>

        <div className="skillsGrid">

          <div className="skillCard">
            <h2>Frontend</h2>
            <p>React, Tailwind, responsive UI, performance-focused UX.</p>

            <div className="iconSwitcher">
              <img src={reactIcon} className="icon i1" />
              <img src={tailwindIcon} className="icon i2" />
              <img src={jsIcon} className="icon i3" />
            </div>
          </div>

          <div className="skillCard">
            <h2>Backend</h2>
            <p>Node.js, Express, MongoDB, REST APIs, auth, sockets.</p>

            <div className="iconSwitcher">
              <img src={nodeIcon} className="icon i1" />
              <img src={expressIcon} className="icon i2" />
              <img src={mongoIcon} className="icon i3" />
            </div>
          </div>

          <div className="skillCard">
            <h2>DevOps</h2>
            <p>Docker, Linux, Nginx, CI/CD, VPS, SSL, monitoring.</p>

            <div className="iconSwitcher">
              <img src={dockerIcon} className="icon i1" />
              <img src={linuxIcon} className="icon i2" />
              <img src={nginxIcon} className="icon i3" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}



export default Skills
