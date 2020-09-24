import React from "react";
import "./App.css";
import AdvertsSection from "./components/AdvertsSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SecondSection from "./components/SecondSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SecondSection />
      <AdvertsSection />
      <FooterSection />
    </div>
  );
}

export default App;
