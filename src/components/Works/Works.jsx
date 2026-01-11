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
    title: "Chat Application",
    desc: "Real-time chat app with auth & sockets",
    link: "https://yourproject1.com"
  },
  {
    img: p2,
    title: "Cloud Deployed API",
    desc: "Node.js API deployed on VPS with SSL",
    link: "https://yourproject2.com"
  },
  {
    img: p3,
    title: "Portfolio Website",
    desc: "React personal portfolio",
    link: "https://yourproject3.com"
  },
  {
    img: p4,
    title: "E-Commerce App",
    desc: "Full-stack shopping platform",
    link: "https://yourproject4.com"
  },
  {
    img: p5,
    title: "DevOps Automation",
    desc: "CI/CD pipeline with Docker",
    link: "https://yourproject5.com"
  },
  {
    img: p6,
    title: "AI Web Tool",
    desc: "AI powered SaaS web app",
    link: "https://yourproject6.com"
  },
]

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
              <span className="liveTag">Live ↗</span>

            </div>
          </a>
        ))}
      </div>

      
    </section>
  )
}

export default Works
