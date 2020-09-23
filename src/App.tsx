import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import SecondSection from './components/SecondSection';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SecondSection />
    </div>
  );
}

export default App;
