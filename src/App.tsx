import React from 'react';
import Navbar from './components/navbar';
import AboutMe from './components/about_me';
import Skills from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <div className="bg-[black] h-[4000px]">
      <Navbar/>
      <AboutMe/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
