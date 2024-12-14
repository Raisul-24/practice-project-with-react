import React from 'react';
import { Link } from 'react-router';

const Banner2 = () => {
   return (
      <div>
         <div
            className="hero min-h-screen"
            style={{
               backgroundImage: "url(sms.jpeg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
               <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Welcome to SMS</h1>
                  <p className="mb-5">
                     Revolutionizing education with an all-in-one Student Management System. Manage student
                     enrollment, attendance, courses, and performance analytics seamlessly.
                  </p>
                  <Link to="/features" className="btn btn-success btn-outline">
                     Explore Features
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner2;
