import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import projectList from './projectList';

const Projects = () => {

  const [projectDetails, setProjectDetails] = useState({
    name: '', 
    images: '', 
    description: '',
    githubURL: '',
    liveDemo: '',
    id: '',
  });
  const [projectNumber, setProjectNumber] = useState(0);

  const projects = projectList;

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

// create dot to specify displayed picture

// function createDots(contentSection) {
//   const displaySlide = document.getElementsByClassName('slide');
//   const dotContainer = document.createElement('box');
//   for (let i = 0; i < displaySlide.length; i++) {
//     const imageDot = document.createElement('span');
//     imageDot.classList.add('dot');

//     imageDot.addEventListener('click', () => {
//       slideImages(contentSection, i);
//     });
//     dotContainer.appendChild(imageDot);
//     contentSection.appendChild(dotContainer);
//   }
// }

// repeat images from the beginning
// TODO: put 5 second timeout between image 5 and image 1

  function rotateImages() {
    console.log('rotate images');
    console.log(projects.project.length);
    for (let i = 0; i < projects.project.length; i++) {
      setTimeout(() => {
        console.log(i);
        setProjectDetails(projects.project[i])
        // if (i === projects.length - 1) {
        //   setTimeout(startOver(contentSection), 5000);
      }, 5000)
    }
  }
      

  useEffect(() => {
    let i = 0;
    setProjectDetails(projects.project[i]);
    const timer = setInterval(() => {
      i++;
      setProjectDetails(projects.project[i]);
      if (i >= projects.project.length - 1) {
        i = i - projects.project.length;
      }
    }, 4000);
    return () => clearInterval(timer);
    },[])

  return (
    <div>
      <h2>Projects</h2>
        <div className = 'slide' key = {projectDetails.id}>
          <img src={projectDetails.images} alt={projectDetails.description}></img>
          <p>{projectDetails.name}</p>
          <p><a href={projectDetails.githubURL}>Project Code</a></p>
          <p><a href={projectDetails.liveDemo}>Live Demo</a></p>
        </div>
  </div>
  );
}

export default Projects;