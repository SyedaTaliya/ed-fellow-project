import React from 'react';
import './App.css';

// Components

import HeaderBar from './components/HeaderBar.jsx';
import SliderBar from './components/SliderBar.jsx';
import LogoSection from './components/LogoSection.jsx';
import ProductText from './components/ProductText.jsx';
import ProductCard from './components/ProductCard.jsx';
import RandonText from './components/RandomText.jsx';
import Businesscard from './components/BusinessCard.jsx';


// Images

import logo from './components/images/logo.jpg';


function App() {
  return (
    <div className="App">

      <HeaderBar
        image={logo}
      />

      <section className="slider-main">

        <div className="background-placeholder"></div>

        <SliderBar
          smallHeading="AS ALWAYS WE BELIEVE THAT"
          heading="Being a good Designer means Being a good problem solver"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />

      </section>

      <section className="logo-main">
        <LogoSection />
      </section>



      <div className="product-section">

        <ProductText
          smallHeading="What we provide"
          heading="We focus on Digital products."
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />

        <div className="product-list">
          <ProductCard
            icon="fas fa-crown"
            heading="Branding"
            text="Lorem Ipsum is simply dummy text"
            change="down-card"
          />
          <ProductCard
            icon="fas fa-mobile"
            heading="Mobile Apps"
            text="Lorem Ipsum is simply dummy text"
          />
          <ProductCard
            icon="fas fa-laptop-code"
            heading="Web Design"
            text="Lorem Ipsum is simply dummy text"
          />
          <ProductCard
            icon="fas fa-chess-board"
            heading="Strategy"
            text="Lorem Ipsum is simply dummy text"
            change="up-card"
          />
        </div>
      </div>

      <div className="business-section">

        <div className="business-cards">

          <Businesscard 
            textTop="01"
            textDown="Strategy & Research"
            giveID="green"
          />
          <Businesscard 
            textTop="02"
            textDown="Wireframe & UI design"
            giveID="purple"
          />
          <Businesscard 
            textTop="03"
            textDown="front & back-end code"
            giveID="pink"
          />
          <Businesscard 
            textTop="04"
            textDown="Delivery & Assurance"
            giveID="orange"
          />


        </div>

        <RandonText
          smallHeading="OUR PROCESS"
          heading="Make everything as simple as possible"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
        />

      </div>


    </div>




  );
}

export default App;
