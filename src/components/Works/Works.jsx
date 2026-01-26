import React, { useState } from 'react';
import './Works.css';
import p1 from '../../assets/portfolio-1.png';
import p2 from '../../assets/portfolio-2.png';
import p3 from '../../assets/portfolio-3.png';
import p4 from '../../assets/portfolio-4.png';
import p5 from '../../assets/portfolio-5.png';
import p6 from '../../assets/portfolio-6.png';

const projects = [
  {
    img: p1,
    title: "ChatNest — Real-Time Chat App",
    shortDesc: "Real-time messaging with sockets",
    fullDesc: "Built a full-stack real-time messaging application featuring WebSocket connections, JWT authentication, message encryption, and a modern responsive UI. Supports group chats, file sharing, and online status indicators.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    link: "https://chatnest-12.netlify.app/",
    github: "https://github.com/Avishka-55/Chat-Nest"
  },
  {
    img: p2,
    title: "Authenticator — MERN Auth App",
    shortDesc: "Full-stack authentication system",
    fullDesc: "Complete MERN stack authentication with bcrypt password hashing, email verification via nodemailer, JWT refresh tokens, password reset functionality, and protected routes. Includes admin dashboard.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Nodemailer"],
    link: "https://mern-auth-123.netlify.app/",
    github: "https://github.com/Avishka-55/mern-authonication"
  },
  {
    img: p3,
    title: "Personal Portfolio Website",
    shortDesc: "Responsive portfolio with React",
    fullDesc: "Modern personal portfolio showcasing projects, skills, and experience. Features smooth animations, contact form integration, and fully responsive design optimized for all devices.",
    tech: ["React", "CSS3", "Framer Motion", "EmailJS"],
    link: "https://wmavishka.me",
    github: "https://github.com/Avishka-55/avishka-55.github.io"
  },
  {
    img: p4,
    title: "Gemini AI Chat Application",
    shortDesc: "AI-powered chat with Gemini API",
    fullDesc: "Interactive AI chatbot leveraging Google's Gemini API. Features conversation history, markdown support for responses, code syntax highlighting, and streaming responses for better UX.",
    tech: ["React", "Gemini API", "Markdown", "LocalStorage"],
    link: "https://gemini-chatbot-private.netlify.app/",
    github: "#"
  },
  {
    img: p5,
    title: "YouView — YouTube Clone",
    shortDesc: "Video platform with YouTube API",
    fullDesc: "YouTube clone using the official YouTube Data API v3. Includes video search, channel pages, trending videos, related videos sidebar, and responsive video player with custom controls.",
    tech: ["React", "YouTube API", "React Router", "Axios"],
    link: "https://youview-private.netlify.app/",
    github: "https://github.com/Avishka-55/youview"
  },
  {
    img: p6,
    title: "OUSL GPA Calculator",
    shortDesc: "GPA calculator for OUSL students",
    fullDesc: "Automated GPA calculation tool specifically designed for Open University of Sri Lanka students. Parses official result sheets, handles different credit systems, and generates detailed grade reports.",
    tech: ["JavaScript", "HTML5", "CSS3", "PDF.js"],
    link: "https://avishka-55.github.io/OUSL-GPA-Calculator",
    github: "https://github.com/Avishka-55/OUSL-GPA-Calculator"
  },
];

const Works = () => {
  const [expandedId, setExpandedId] = useState(null);

const toggleExpand = (index) => {
  setExpandedId(expandedId === index ? null : index);
  
  if (expandedId !== index) {
    setTimeout(() => {
      const expandedCard = document.querySelector('.project-card.expanded');
      if (expandedCard) {
        expandedCard.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }, 50);
  }
};

  return (
    <section id="works">
      <div className="works-container">
        <h2 className="works-title">Projects</h2>
        <p className="works-subtitle">
          Real projects I've built and deployed. Click any card for full details.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${expandedId === index ? 'expanded' : ''}`} onClick={() => toggleExpand(index)}>
              <div className={`collapsed-view ${expandedId === index ? 'hidden' : ''}`}>
                <div className="project-image-wrapper">
                  <img src={project.img} alt={project.title} className="project-image" />
                  <div className="image-overlay"></div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-short-desc">{project.shortDesc}</p>
                  
                  <div className="tech-tags">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-tag-more">+{project.tech.length - 3}</span>
                    )}
                  </div>

                  <div className="card-footer">
                    <span className="click-hint">
                      Click for details
                      <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className={`expanded-view ${expandedId === index ? '' : 'hidden'}`}>
                <button onClick={(e) => { e.stopPropagation(); setExpandedId(null); }} className="close-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                <div className="expanded-content">
                  <div className="expanded-image-wrapper">
                    <img src={project.img} alt={project.title} className="expanded-image" />
                  </div>

                  <div className="expanded-details">
                    <div>
                      <h3 className="expanded-title">{project.title}</h3>
                      <p className="expanded-desc">{project.fullDesc}</p>

                      <div className="tech-stack-section">
                        <h4 className="tech-stack-title">
                          <svg className="code-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                          </svg>
                          Tech Stack
                        </h4>
                        <div className="tech-tags-full">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="tech-tag-full">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="action-buttons">
                      <a href={project.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="btn-primary">
                        <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="btn-secondary">
                        <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;