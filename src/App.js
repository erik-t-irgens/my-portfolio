import React from 'react';
import './App.css';
// Pages
import AboutPage from './components/aboutpage/AboutPage.js'
import MusicPage from './components/musicpage/MusicPage.js'
import BlogPage from './components/blogpage/BlogPage.js'
import ProjectsPage from './components/projectspage/ProjectsPage.js'
// Header
import Header from './components/Header'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Route exact path="/" render={() => <h1>hello</h1>}></Route>
        <Route exact path="/about" render={() => <AboutPage />}></Route>
        <Route exact path="/projects" render={() => <ProjectsPage />}></Route>
        <Route exact path="/blog" render={() => <BlogPage />}></Route>
      </Router>
    </div>
  );
}

export default App;
