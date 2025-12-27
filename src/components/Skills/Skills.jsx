import React from 'react'
import './Skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>

        <span className="skillDesc">
          I design, build, deploy, and automate modern web applications.
          From slick frontends to secure backends and cloud automation — I create production-ready systems that actually scale.
        </span>

        <div className="skillBars">

            <div className="skillBar">
                <img src={UIDesign} alt="Frontend" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Frontend Development</h2>
                    <p>
                      React, Tailwind, responsive layouts, animations, and performance-optimized UI/UX that feels smooth on any device.
                    </p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="Backend" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Backend & APIs</h2>
                    <p>
                      Node.js, Express, MongoDB, authentication, REST APIs, sockets, file uploads — real backend stuff.
                    </p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="DevOps" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>DevOps & Cloud</h2>
                    <p>
                      Docker, Linux, CI/CD pipelines, Nginx, VPS deployments, domain + SSL setup, monitoring, and automation.
                    </p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Skills
