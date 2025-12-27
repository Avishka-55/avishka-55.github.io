import React from 'react'
import './intro.css'
import bg from '../../assets/image.png';
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hey there 👋</span>

            <span className="introText">
              I'm <span className="introName">Avishka</span><br/>
              Full-Stack & DevOps Engineer
            </span>

            <p className="introPara">
              I build fast, secure, scalable web apps and automate cloud infrastructure.
              <br/>
              From clean UI to CI/CD pipelines — I ship production-ready systems.
            </p>

            <Link to="contact" smooth={true} duration={500}>
              <button className="btn">
                <img src={btnImg} alt="Hire Me" className='btnImg'/>
                Let’s Work 🚀
              </button>
            </Link>       
        </div>

        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro
