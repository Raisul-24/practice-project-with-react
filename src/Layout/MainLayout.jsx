import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../SharedComponent/Navbar/Navbar';
import Footer from '../SharedComponent/Footer/Footer';

const MainLayout = () => {
   return (
      <div className='mx-auto max-w-screen-2xl bg-white'>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default MainLayout;