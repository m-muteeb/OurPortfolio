import React from 'react';

import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import Expertise from '../sections/Expertise';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Process from '../sections/Process';
import FeedBack from '../sections/FeedBack';

import Contacts from '../sections/Contacts';
import Whatsappbutton from '../sections/WhatsappButton';
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <Expertise />
      <Projects />
      <Process />
      <About />
      <FeedBack />

      <Contacts />
      <Whatsappbutton />
      <Footer />
    </div>
  );
};

export default Home;
