/* eslint-disable react-hooks/exhaustive-deps */
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

  const numberOfProjects = projectInfo.project.length;
  const projectDisplayed = projectInfo.project;

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

  // Sets image to selected number.
  useEffect(() => {
    setProjectDetails(projectDisplayed[imageNumber]);
  },[imageNumber])

  function subtractImage(imageNumber) {
    return ((imageNumber + (numberOfProjects - 1)) % numberOfProjects);
  }

  // Moves image back one image
  const moveBack = () => {
    setImageNumber(subtractImage(imageNumber));
  }

  function addImage(imageNumber) {
    return ((imageNumber + 1) % numberOfProjects);
  }

  // Moves image forward one image
  const moveForward = () => {
    setImageNumber(addImage(imageNumber));
  }

  // When dot is clicked, function sets corresponding image number.
  const handleDotClick = (event) => {
    event.preventDefault();  
    setImageNumber(event.target.id);
  }
  
  // TODO: reset image in series upon dot or arrow click
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
        <p className = 'previous' onClick = {moveBack}>{String.fromCharCode(10094)}</p>
        <img className = 'projectImage' src={projectDetails.images} alt={projectDetails.description}></img>
        <p className = 'next' onClick = {moveForward}>{String.fromCharCode(10095)}</p>
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