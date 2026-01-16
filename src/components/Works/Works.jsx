import React from 'react'
import './Works.css'
import p1 from '../../assets/portfolio-1.png'
import p2 from '../../assets/portfolio-2.png'
import p3 from '../../assets/portfolio-3.png'
import p4 from '../../assets/portfolio-4.png'
import p5 from '../../assets/portfolio-5.png'
import p6 from '../../assets/portfolio-6.png'

const projects = [
  {
    img: p1,
    title: "ChatNest — Real-Time Chat App",
    desc: "Real-time messaging app with authentication, sockets, and modern UI.",
    link: "https://chatnest-12.netlify.app/"
  },
  {
    img: p2,
    title: "Authenticator — MERN Auth App",
    desc: "Full-stack MERN authentication system with secure login, email verify and password reset option",
    link: "https://mern-auth-123.netlify.app/"
  },
  {
    img: p3,
    title: "Personal Portfolio Website",
    desc: "Responsive personal portfolio built with React and modern UI design.",
    link: "https://wmavishka.me"
  },
  {
    img: p4,
    title: "Gemini AI Chat Application",
    desc: "AI-powered chat application built using the Gemini API.",
    link: "https://gemini-chatbot-private.netlify.app/"
  },
  {
    img: p5,
    title: "YouView — YouTube Clone",
    desc: "YouTube-style video platform using the YouTube Data API.",
    link: "https://youview-private.netlify.app/"
  },
  {
    img: p6,
    title: "OUSL GPA Calculator",
    desc: "Automated GPA calculator for OUSL students based on official result sheets.",
    link: "https://avishka-55.github.io/OUSL-GPA-Calculator"
  },
];


const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>Projects</h2>
      <span className="worksDesc">
        Some real projects I’ve built and deployed.
      </span>

      <div className="worksImgs">
        {projects.map((p, i) => (
          <a href={p.link} target="_blank" rel="noreferrer" className="projectCard" key={i}>
            <img src={p.img} alt={p.title} className="worksImg" />
            <div className="overlay">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="liveTag">Live Link↗</span>

            </div>
          </a>
        ))}
      </div>

      
    </section>
  )
}

export default Works
