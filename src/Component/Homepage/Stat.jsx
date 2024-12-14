import React from 'react';

const Stat = () => {
   return (
      <div className='my-10 px-2 lg:px-10'>
      <div className="stats shadow w-full bg-lime-50 flex flex-col md:flex-row">
         <div className="stat">
            <div className="stat-figure text-primary">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current">
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M16 7c0 3.866-3.582 7-8 7S0 10.866 0 7s3.582-7 8-7 8 3.134 8 7z"></path>
               </svg>
            </div>
            <div className="stat-title">Total Students</div>
            <div className="stat-value text-primary">1,200</div>
            <div className="stat-desc">5% increase from last semester</div>
         </div>

         <div className="stat">
            <div className="stat-figure text-secondary">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current">
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M4 6h16M4 10h16m-7 4h7"></path>
               </svg>
            </div>
            <div className="stat-title">Courses Offered</div>
            <div className="stat-value text-secondary">45</div>
            <div className="stat-desc">3 new courses added this semester</div>
         </div>

         <div className="stat">
            <div className="stat-figure text-secondary">
               <div className="avatar online">
                  <div className="w-16 rounded-full">
                     <img src="/student-management-system2.png" />
                  </div>
               </div>
            </div>
            <div className="stat-value">92%</div>
            <div className="stat-title">Graduation Rate</div>
            <div className="stat-desc text-secondary">8% higher than last year</div>
         </div>
      </div>
   </div>
   );
};

export default Stat;