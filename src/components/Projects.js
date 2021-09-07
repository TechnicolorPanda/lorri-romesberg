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

function startOver(contentSection) {
  rotateImages(contentSection);
}

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
      setTimeout(() => {
      if (i < projects.project.length-1) {
        setProjectNumber(i);
        i++;
        console.log(i);
      } else {
        i = i - projects.project.length - 1;
        console.log(i);
      }
    }, 1000);
    // return () => clearTimeout(timer);
  },[])

  console.log(projects.project[0].value);

  return (
    <div>
      <h2>Projects</h2>
      {projects.project.map((project => ( 
        <div className = 'slide' key = {project.id}>
          <img src={project.images} alt={project.description}></img>
          <p>{project.name}</p>
          <p><a href={project.githubURL}>Project Code</a></p>
          <p><a href={project.liveDemo}>Live Demo</a></p>
        </div>
      )))}
  </div>
  );
}

export default Projects;