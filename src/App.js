import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components to import
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Scroll from './components/Scroll';

// pages to import
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Resume from './pages/Resume';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

//styles to import

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Scroll />
        <div className='app'>
          <NavBar />
          <div className='body'>
            <Switch>
              <Route exact path='/ben-in-react' component={HomePage} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={ProjectsPage} />
              <Route path='/resume' component={Resume} />
              <Route path='/contact' component={Contact} />
              <Route path='*' component={ErrorPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
