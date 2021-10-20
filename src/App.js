import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './styles/App.css';
import { HashRouter, Route } from 'react-router-dom';

function App() {

  return (
    <HashRouter>
      <div className = 'App'>
        <div className = 'navbar'>
          <Nav/>
        </div>
        <div className = 'content'>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/about' component = {About}/>
            <Route exact path = '/about/resume' component = {Resume}/>
            <Route path = '/skills' component = {Skills}/>
            <Route path = '/projects' exact component = {Projects}/>
            <Route path = '/contact' component = {Contact}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
