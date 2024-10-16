import React from 'react';
import Layout from '../../Components/Layouts/Layout';
import "../../styles/HomeStyle.css";
import Section from './Section1.js';
import Sectionn from './Sectionn.js';
import Sectionnn from './Sectionnn.js';
import Sectionnnn from './Sectionnnn.js';
import Sectionnnnn from './Sectionnnnn.js';
import Sectionnnnnn from './Sectionnnnnn.js';
import Sectionnnnnnn from './Sectionnnnnnn.js';
import Footer from '../../Components/Layouts/Footer.js';





function Home() {
  return (
    <>
    <Layout/>
    {/* Home section hero banner */}
    <Section />
    {/* Home section about */}
    <Sectionn />
    {/* Home section Menu */}
    <Sectionnn />
    {/* Home section Promotion */}
    <Sectionnnn />
    {/* Home section Shop*/}
   <Sectionnnnn />
   <Sectionnnnnn />
   <Sectionnnnnnn />
    <Footer />
  
    </>
  )
}

export default Home