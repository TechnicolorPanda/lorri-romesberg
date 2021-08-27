import React from 'react';
import '../styles/App.css';

const About = () => {

  return (
    <div id = 'about-info'>
      <h2>About me</h2>
      <p>I have pursued many different passions in my life:</p>
      <ul>
        <li className = 'about-list'>I have been a social worker/psychotherapist for children, families, and sex offenders;</li>
        <li className = 'about-list'>A lawyer for parents and children in child welfare cases,</li>
        <li className = 'about-list'>A guardian ad litem and court investigator in the juvenile courts,</li>
        <li className = 'about-list'>A mom,</li>
        <li className = 'about-list'>A Girl Scout and Boy Scout adult leader,</li>
        <li className = 'about-list'>An Odyssey of the Mind coach,</li>
        <li className = 'about-list'>A knitwear designer,</li>
      </ul>
      <p>And more ...</p>
      <p id = 'about-paragraph'>
        At the current transition in my life, I pondered what career I wanted to pursue. 
        I decided to be brave and pursue my interest in coding. With the help of the community 
        at&nbsp;&nbsp; 
        <a href = 'https://www.theodinproject.com/'>The Odin Project</a>
        , I was able to teach myself full stack web development. Check out 
        my projects to see what I have learned!
      </p>
    </div>
  );
}

  export default About;