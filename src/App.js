import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';


function App() {
  
  return (
    <div className="main-background">
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;