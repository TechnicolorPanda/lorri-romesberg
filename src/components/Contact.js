import React from 'react';
import '../styles/Contact.css';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin-logo.png';

const Contact = () => {

  const Mailto = ({ email, subject = '', children }) => {
    let params = subject;
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div>
      <h2 className = 'contact-heading'>Contact</h2>
      <div className = 'verticalmenu'>
        <h3>
          <p className = 'center-black'>Email:
            <Mailto email = 'LorriAnn7@gmail.com' subject = 'Web Designer Profile Page'>
              LorriAnn7@gmail.com
            </Mailto>
          </p>
          <a href = 'https://github.com/TechnicolorPanda'>
            <img className = 'github' src = {github} alt = 'Github'></img>
          </a>
          <a href = 'https://www.linkedin.com/in/lorri-romesberg-aa713319/'>
            <img className = 'linkedin' src = {linkedin} alt = 'Linked In'></img>
          </a>
        </h3>
      </div>
    </div>
  );
}

  export default Contact;