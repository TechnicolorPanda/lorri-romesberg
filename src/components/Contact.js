import React from 'react';
import '../styles/Contact.css';

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
          <Mailto email = 'LorriAnn7@gmail.com' subject = 'Web Designer Profile Page'>LorriAnn7@gmail.com</Mailto>
          <a href = 'https://github.com/TechnicolorPanda'>Github</a>
          <a href = 'https://www.linkedin.com/in/lorri-romesberg-aa713319/'>LinkedIn</a>
        </h3>
      </div>
    </div>
  );
}

  export default Contact;