import React from 'react';
import Navbar from './components/navbar';
import AboutMe from './components/about_me';
import Skills from './components/skills';

function App() {
  return (
    <div className="bg-[black] h-[2000px]">
      <Navbar/>
      <AboutMe/>
      <Skills/>
    </div>
  );
}

export default App;
