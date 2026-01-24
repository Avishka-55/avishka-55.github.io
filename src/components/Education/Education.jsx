import React from 'react'
import './Education.css'
import ouslLogo from '../../assets/ousl.png' // put your uni logo here

const Education = () => {
  return (
    <section id="education">
      <span className="eduTitle">Education</span>

      <div className="eduCard">
        <div className="eduLogo">
          <img src={ouslLogo} alt="OUSL Logo" />
        </div>

        <div className="eduContent">
          <h2>B.Sc. Major in Computer Science</h2>
          <h3>The Open University of Sri Lanka (OUSL)</h3>
          <span className="eduYear">2022 – 2026</span>

          <p>
            Strong foundation in programming, databases, software engineering,
            networking, operating systems, and cloud technologies. Actively
            building real-world skills in Full-Stack Development, Linux,
            Networking, Cloud, and DevOps.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Education
