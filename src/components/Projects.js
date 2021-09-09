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
  const [currentDot, setCurrentDot] = useState(0);
  const [targetDot, setTargetDot] = useState('');

  // Defines constants.
  const numberOfProjects = projectInfo.project.length;

  // display selected image and hide others

  function slideImages(contentSection, imageNumber) {
    const displaySlide = document.getElementsByClassName('slide');
    // const highlightDot = document.getElementsByClassName('dot');

    for (let i = 0; i < displaySlide.length; i++) {
    if (imageNumber === i) {
      displaySlide[i].style.display = 'block';
      // highlightDot[i].style.backgroundColor = '#717171';
      // createArrows(contentSection, imageNumber);
    } else {
      displaySlide[i].style.display = 'none';
      // highlightDot[i].style.backgroundColor = '#bbb';
    }
  }
}

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

const handleDotClick = (event) => {
  event.preventDefault();  
  setTargetDot(event.target.id);
}

// Create dot to specify displayed picture
useEffect(() => {
  let newDotArray = [];
  for (let i = 0; i < numberOfProjects; i++) {
    if (currentDot === i) {
      newDotArray = newDotArray.concat('true');
    } else {
      newDotArray = newDotArray.concat('false');
    }
  };
  setDotArray(newDotArray);
}, [currentDot])

// TODO: eliminate currentDot #3

  // Sets current dot number
  const rotateDotNumber = () => {
    if (currentDot < numberOfProjects) {
      return(currentDot + 1);
    } else {
      return(currentDot - numberOfProjects);
    }
  }

  // Sets the number of slide on dots

  const fillDotArray = () => {
    setCurrentDot(rotateDotNumber(currentDot));
  }

  // Places dots under rotating images.
  useEffect(() => {
    fillDotArray();
  }, [projectDetails])
     
  // Rotates pictures every 4 seconds.
  useEffect(() => {
    let i = 0;
    setProjectDetails(projectInfo.project[i]);

    // Changes image number at set interval.
    const timer = setInterval(() => {
      i++;
      setProjectDetails(projectInfo.project[i]);

      // Starts rotation of images from the beginning.
      if (i >= numberOfProjects - 1) {
        i = i - numberOfProjects;
      }
    }, 4000);
    return () => clearInterval(timer);
    },[])

  return (
    <div>
      <h2>Projects</h2>
      <div className = 'slide' key = {projectDetails.id}>
        <img className = 'projectImage' src={projectDetails.images} alt={projectDetails.description}></img>
        <p>{projectDetails.name}</p>
        <p><a href={projectDetails.githubURL}>Project Code</a></p>
        <p><a href={projectDetails.liveDemo}>Live Demo</a></p>
        <p className = 'dot-row'>
          {dotArray.map((dot, index) => {
            return (dot === 'true')? 
              <span 
                className = 'dot' 
                style = {{backgroundColor:'orange'}}
                id = {index} 
                onClick = {handleDotClick}
              ></span>: 
              <span className = 'dot' 
                id = {index}
                style = {{backgroundColor:'darkgray'}}
                onClick = {handleDotClick}
              ></span>
          })}
        </p>
      </div>
    </div>
  );
}

export default Projects;