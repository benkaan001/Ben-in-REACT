import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components to import
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

// pages to import
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Resume from './pages/Resume';
import HomePage from './pages/HomePage';

//styles to import

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
