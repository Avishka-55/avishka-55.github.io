import React from 'react'
import './Education.css'
const Education = () => {
  return (
    <section id='education'>
        <span className='eduTitle'>Education</span>

        <span className="eduDesc">
          B.Sc. in Computer Science undergraduate at The Open University of Sri Lanka (OUSL),
          actively building real-world skills through certifications in Full-Stack Development,
          Cloud, Linux, Networking, and DevOps.
        </span>

        <div className="eduBars">
            <div className="eduBar">
                <div className="eduBarText">
                    <h2>B.Sc. in Computer Science — OUSL</h2>
                    <p>
                      Strong foundation in programming, databases, software engineering, networking,
                      operating systems, and cloud technologies.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Education
