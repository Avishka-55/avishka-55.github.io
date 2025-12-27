import './Contact.css';

import facebookIcon from '../../assets/facebook-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import githubIcon from '../../assets/github-icon.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
      const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE,
  import.meta.env.VITE_EMAILJS_TEMPLATE,
  form.current,
  {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC,
  }
)

      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Emails sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <div id='contactPage'>
            
            <div id="contact">
                            <h1 className="contactPageTitle">Contact Me</h1>
                            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                                <input type="text" className="name" placeholder='Your name' name='name' required/>
                                <input type="text" className="email" placeholder='Your Email' name='email' required/>
                                <textarea name="message" placeholder='Your Message' rows={5} className='msg' required></textarea>
                                <button type="submit" value="Send" className='submitBtn'>Submit</button>
                                <div className="links">
                                  
                                   <a href="https://github.com/Avishka-55" target="_blank" rel="noreferrer">
                                        <img src={githubIcon} alt="GitHub" className="link" />
                                        </a>

                                        <a href="https://linkedin.com/in/wm-avishka" target="_blank" rel="noreferrer">
                                        <img src={linkedinIcon} alt="LinkedIn" className="link" />
                                        </a>

                                        <a href="https://www.facebook.com/wmavishka" target="_blank" rel="noreferrer">
                                        <img src={facebookIcon} alt="Facebook" className="link" />
                                        </a>

                                        <a href="https://instagram.com/______a_v_i_s_h_k_a______" target="_blank" rel="noreferrer">
                                        <img src={instagramIcon} alt="Instagram" className="link" />
                                        </a>

                                </div>
                   </form>
            </div>
            
        </div>
    );
}

export default Contact;