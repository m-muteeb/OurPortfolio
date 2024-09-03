import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import MyProgress from '../sections/MyProgress';
import Projects from '../sections/Projects';
import FeedBack from '../sections/FeedBack';
import Expertise from '../sections/Expertise';
import  ContactsHeading from '../sections/ContactHeading.js';
import Contacts from '../sections/Contacts';





const Home = () => {
  return (
    <div className="home-page">
     
      <Hero />
      <About />
      <MyProgress/>
      <Projects />
      <FeedBack/>
      <Expertise />
      <ContactsHeading/>
      <Contacts />
    
    </div>
  );
};

export default Home;
