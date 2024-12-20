import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
   return (
      <div>
         <div className="navbar bg-lime-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn text-lime-600 lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16" />
                     </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-lime-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                     <li>
                        <NavLink to='/about'>About</NavLink>
                     </li>
                     <li>
                        <NavLink to='/studentManage'>Student Management</NavLink>
                     </li>
                     <li>
                        <NavLink to='/contact'>Contact</NavLink>
                     </li>

                  </ul>
               </div>
               <NavLink to='/' className='lg:font-extrabold'>Student Portal</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  <li>
                     <NavLink to='/about'>About</NavLink>
                  </li>
                  <li>
                     <NavLink to='/studentManage'>Student Management</NavLink>
                  </li>
                  <li>
                     <NavLink to='/contact'>Contact</NavLink>
                  </li>
               </ul>
            </div>
            <div className="navbar-end">
               <NavLink className="btn btn-outline btn-success" to='/about'>Explore!</NavLink>
            </div>
         </div>
      </div>
   );
};

export default Navbar;