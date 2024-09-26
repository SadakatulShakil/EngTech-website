import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Business from '../Business/Business';
import New from '../New';
import Popup from '../Popup/Popup';
import Projects from '../Projects/Projects';
import RecentProjects from '../Projects/RecentProjects';
import Specialists from '../Specialists/Specialists';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
     return (
          <div>
              
            <Banner></Banner>
      <About></About>
      <Business></Business>
      <Projects></Projects>
      <Specialists></Specialists>
   
      <Testimonials></Testimonials>
      {/* <RecentProjects></RecentProjects>   */}
      {/* <New></New>
      <Popup></Popup> */}
          </div>
     );
};

export default Home;