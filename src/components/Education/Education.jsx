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
            B.Sc. Major in Computer Science at The Open University of Sri Lanka (OUSL).
            Built a strong foundation in programming, databases, software engineering, computer networks, operating systems, and cloud computing. Actively developing hands-on experience in full-stack development, Linux systems, networking, cloud infrastructure, and DevOps through real-world projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Education
