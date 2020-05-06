import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import { BrowserRouter, Route } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import Courses from './components/CoursesPage'
import HeaderPage from './components//HeaderPage'
function App() {
  return (
    <div>

      <BrowserRouter>
        <HeaderPage></HeaderPage>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/About" component={AboutPage} />
        <Route exact path="/COurses" component={Courses} />
      </BrowserRouter>

    </div>

  );
}

export default App;
