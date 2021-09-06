import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import projectList from './projectList';

const Projects = () => {

  const [itemDetails, setItemDetails] = useState({
    name: '', 
    images: '', 
    description: '',
    githubURL: '',
    liveDemo: '',
  });

  const project = projectList;

  useEffect(() => {
    setItemDetails(project.item[2]);
  },[])

  console.log(itemDetails.images);

  return (
    <div>
      <h2>Projects</h2>
      <div>
        <img src={itemDetails.images} alt={itemDetails.description}></img>
        <p>{itemDetails.name}</p>
        <p><a href={itemDetails.githubURL}>Project Code</a></p>
        <p><a href={itemDetails.liveDemo}>Live Demo</a></p>
      </div>
    </div>
  );
}

  export default Projects;