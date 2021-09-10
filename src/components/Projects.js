import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import projectInfo from './projectInfo';

const Projects = () => {

  // Defines states.
  const [projectDetails, setProjectDetails] = useState({
    name: '', 
    images: '', 
    description: '',
    githubURL: '',
    liveDemo: '',
    id: '',
  });
  const [dotArray, setDotArray] = useState([]);
  const [imageNumber, setImageNumber] = useState(0);

  // Defines constants.
  const numberOfProjects = projectInfo.project.length;
  const projectDisplayed = projectInfo.project;

// determines next image number

function addImage(imageNumber) {
  return ((imageNumber + 1) % 5);
}

// determines previous image number

function subtractImage(imageNumber) {
  const displaySlide = document.getElementsByClassName('slide');
  const newImageNumber = ((imageNumber + (displaySlide.length - 1)) % (displaySlide.length));
  return (newImageNumber);
}

// create arrows to move forward or backward

// function createArrows(contentSection, imageNumber) {
//   const createPreviousArrow = document.createElement('nav');

//   // create previous arrow

//   createPreviousArrow.classList.add('prev');
//   createPreviousArrow.innerHTML = '&#10094';

//   const subtractImageNumber = subtractImage(imageNumber);

//   createPreviousArrow.addEventListener('click', () => {
//     slideImages(contentSection, subtractImageNumber);
//   });

//   contentSection.appendChild(createPreviousArrow);

//   // create next arrow

//   const createNextArrow = document.createElement('nav');
//   createNextArrow.classList.add('next');
//   createNextArrow.innerHTML = '&#10095';

//   const addImageNumber = addImage(imageNumber);

//   createNextArrow.addEventListener('click', () => {
//     slideImages(contentSection, addImageNumber);
//   });

//   contentSection.appendChild(createNextArrow);
// }

// Sets image to selected number.
useEffect(() => {
  setProjectDetails(projectDisplayed[imageNumber]);
},[imageNumber])

// Creates dot corresponding to displayed picture
useEffect(() => {
  let newDotArray = [];
  for (let i = 0; i < numberOfProjects; i++) {
    if (parseInt(imageNumber) === i) {
      newDotArray = newDotArray.concat('true');
    } else {
      newDotArray = newDotArray.concat('false');
    }
  };
  setDotArray(newDotArray);
}, [imageNumber])


  // When dot is clicked, function sets corresponding image number.
  const handleDotClick = (event) => {
    event.preventDefault();  
    setImageNumber(event.target.id);
  }
  
  // Rotates pictures every 4 seconds.
  useEffect(() => {
    let i = imageNumber;
    setImageNumber(i);

  // Changes image number at set interval.
  const timer = setInterval(() => {
    i++;
    setImageNumber(i);

    // Starts rotation of images from the beginning.
    if (i >= numberOfProjects - 1) {
      i = (i - numberOfProjects);
    }
  }, 4000);
  return () => clearInterval(timer);
  },[])

  return (
    <div>
      <h2>Projects</h2>
      <div className = 'slide' key = {projectDetails.id}>
        <p className = 'previous'>{String.fromCharCode(10094)}</p>
        <img className = 'projectImage' src={projectDetails.images} alt={projectDetails.description}></img>
        <p className = 'next'>{String.fromCharCode(10095)}</p>
        <p>{projectDetails.name}</p>
        <p><a href={projectDetails.githubURL}>Project Code</a></p>
        <p><a href={projectDetails.liveDemo}>Live Demo</a></p>



        <p className = 'dot-row'>
          {dotArray.map((dot, index) => {
            return (dot === 'true')? 
              <span 
                className = 'dot' 
                style = {{backgroundColor:'rgb(252, 124, 78)'}}
                id = {index} 
                onClick = {handleDotClick}
              ></span>: 
              <span className = 'dot' 
                style = {{backgroundColor:'darkgray'}}
                id = {index}
                onClick = {handleDotClick}
              ></span>
          })}
        </p>
      </div>
    </div>
  );
}

export default Projects;