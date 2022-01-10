import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';
import Resume from './Pages/Resume';
import Home from './components/Home';

function App() {
  
  return (
    <div className="main-background">
    <Router>
      <Header className='page-header' />
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/certificate" component={Resume} />
      </Switch>
      <Footer className='page-footer' />
    </Router>
    </div>
  );
}

export default App;
