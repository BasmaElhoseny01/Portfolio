import React from 'react'
import { useEffect } from 'react';

//Stylesheet
import './Style/App.css'

//Components
import NavBar from './Components/NavBar';
import LeftSideBar from './Components/LeftSideBar';
import AboutMe from './Components/AboutMe';
import RightSideBar from './Components/RightSideBar';
import Achievments from './Components/Achievments';
import Skills from './Components/Skills';
import Projects from './Components/Projects';


function App() {
  useEffect(() => {
    document.title = "Basma Elhoseny"
  }, [])

  return (
    <div className="App">
      <NavBar />
      <LeftSideBar />
      <RightSideBar />
      <div className="Body">
        <AboutMe />
        <div id='Achievements'>
          <Achievments />
        </div>
        <div id="Skills">
          <Skills />
        </div>
        <div id="Projects">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
