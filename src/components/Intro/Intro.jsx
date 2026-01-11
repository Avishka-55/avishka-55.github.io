import React from 'react'
import './intro.css'
import bg from '../../assets/image.png';
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'
import { Typewriter } from 'react-simple-typewriter'


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <img src={bg} alt="Me" className="mobileAvatar" />

            <span className="hello">Hey there 👋</span>

          <span className="introText">
        I'm <span className="introName">Avishka</span><br/>
  
      <span className="typeText">
            <Typewriter
      words={[
        'Full-Stack Developer',
        'DevOps Engineer',
        'Cloud Architect',
        'API Builder'
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={60}     
      deleteSpeed={35}
      delaySpeed={1200}
      cursorBlinking
    />

      </span>
    </span>


            <p className="introPara">
              I build fast, secure, scalable web apps and automate cloud infrastructure.
              <br/>
              From clean UI to CI/CD pipelines  I ship production-ready systems.
            </p>

            <Link to="contact" smooth={true} duration={500} offset={-100} >
              <button className="btn">
                <img src={btnImg} alt="Hire Me" className='btnImg'/>
                Let’s Connect 🚀
              </button>
            </Link>       
        </div>

        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro
