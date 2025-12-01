import React from 'react';

import Hero from '../sections/Hero';
import About from '../sections/About';
import MyProgress from '../sections/MyProgress';
import Projects from '../sections/Projects';
import FeedBack from '../sections/FeedBack';
import Expertise from '../sections/Expertise';

import Contacts from '../sections/Contacts';
import Whatsappbutton from '../sections/WhatsappButton'
import Footer from "../sections/Footer"







const Home = () => {
  return (
    <div className="home-page">
     <div
  className="bg mb-5"
  style={{
    backgroundImage: 'linear-gradient(180deg, rgba(30, 146, 255, 0.8) 0%, #C30EFF 100%)',
  }}
>


    
      <Hero />
     
      </div>
      <About />
      <MyProgress/>
      <Projects />
      <FeedBack/>
      <Expertise />
     
      <Contacts />
      <Whatsappbutton/>
      <Footer/>
    
    </div>
  );
};

export default Home;
