import React from 'react';
import './styles/App.css';
// import Home from './components/Home';
// import Nav from './components/Nav';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, 
  // Route 
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className = 'App'>
        <div className = 'navbar'>
          {/* <Nav/> */}
        </div>
        <div className = 'content'>
          <Switch>
            {/* <Route path = '/' exact component = {Home} />
            <Route path = '/about' component = {About}/>
            <Route path = '/skills' exact component = {Skills}/>
            <Route path = '/projects' component = {Projects}/>
            <Route path = '/contact' component = {Contact}/> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
