import React from 'react';
import './App.css';
import NavBar from '../src/components/NavBar.jsx';
import IntroSection from './components/IntroSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgCard from './components/ImgCard';
import PortfolioSec from './components/PortfolioSec';
import Process from './components/Process';




function App() {
  return (
    <div>
      <NavBar />
      <IntroSection />
      <ImgCard />
      <PortfolioSec />
      <Process />

    </div>
  );
}

export default App;
