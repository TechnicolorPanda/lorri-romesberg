import React, { useEffect } from 'react';
import '../styles/App.css';

const Home = () => {

    // Animates name upon page loading.
    useEffect(() => {
      document.getElementById('first-name').style.marginLeft = '10%';
      document.getElementById('last-name').style.marginLeft = '10%';
    },[]);

  return (
    <div>
      <h1>
        <div id = 'first-name'>Lorri </div>
        <div id = 'last-name'>Romesberg</div>
      </h1>
      <h3>full stack web developer</h3>
    </div>
  );
}

  export default Home;