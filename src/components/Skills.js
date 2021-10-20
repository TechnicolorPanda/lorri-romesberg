
import React from 'react';
import '../styles/Skills.css';
import skillList from './skillList';

const Skills = () => {

  console.log(skillList.item[0].images);

  return (
    <div id = 'skills-info'>
      <h2>Skills</h2>
      <h3>front-end</h3>
        <div className = 'verticalMenu'>
          <a href = 'https://www.w3schools.com/css/'>CSS3</a>
          <a href = 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'>HTML5</a>
          <a href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'>Javascript</a>
          <a href = 'https://reactjs.org/tutorial/tutorial.html'>React</a>
        </div>
      <h3>back-end</h3>
        <div>
          <a href = 'https://nodejs.org/en/'>NodeJS</a>
          <a href = 'https://expressjs.com/'>Express</a>
          <a href = 'https://www.mongodb.com/'>MongoDB</a>
          <a href = 'https://mongoosejs.com/'>Mongoose</a>
        </div>
      <h3>other</h3>
      <div>
          <a href = 'https://ubuntu.com/'>Linux</a>
          <a href = 'https://git-scm.com/'>git</a>
          <a href = 'https://webpack.js.org/'>Webpack</a>
          <a href = 'https://github.com/'>Github</a>
          <a href = 'https://id.heroku.com/login'>Heroku</a>
          <a href = 'https://jestjs.io/'>Jest</a>
          <a href = 'https://jasmine.github.io/'>Jasmine</a>
        </div>
    </div>
  );
}

  export default Skills;
