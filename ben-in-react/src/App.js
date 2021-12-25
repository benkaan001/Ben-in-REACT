import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components to import

import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

// pages to import
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import ProjectsPage from './pages/ProjectsPage';
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
        <main>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/projects'>
              <Projects />
            </Route>
            <Route path='/resume'>
              <Resume />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='*'>
              <ErrorPage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
