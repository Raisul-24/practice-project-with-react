import React from 'react';
import Banner1 from '../../Component/Homepage/Banner1';
import Accordion from '../../Component/Homepage/Accordion';
import Banner2 from '../../Component/Homepage/Banner2';
import Stat from '../../Component/Homepage/Stat';
import TimeLine from '../../Component/Homepage/TimeLine';

const HomePage = () => {
   return (
      <div>
      <Banner2></Banner2>
         <Accordion></Accordion>
         <Banner1></Banner1>
         <TimeLine></TimeLine>
         <Stat></Stat>
      </div>
   );
};

export default HomePage;