import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import projectList from './projectList';

const Projects = () => {

  const [itemDetails, setItemDetails] = useState({
    name: '', 
    images: '', 
    description: '',
    url: '',
  });

  console.log(projectList.item[0]);

  useEffect(() => {

    setItemDetails(projectList.item[0]);
  },[])

  console.log(itemDetails.images);

  return (
    <div>
      <h2>Projects</h2>
      <img src={itemDetails.images} alt={itemDetails.description}></img>
      <a href={itemDetails.url}>{itemDetails.name}</a>
    </div>
  );
}

  export default Projects;