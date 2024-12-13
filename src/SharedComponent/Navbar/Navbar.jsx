import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
   return (
      <div>
         <div className="navbar bg-lime-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn lg:hidden">
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
                     <li><a>Item 1</a></li>
                     <li>
                        <NavLink to='/studentManage'>Student Management</NavLink>
                     </li>
                     <li><a>Item 3</a></li>
                  </ul>
               </div>
               <NavLink to='/' className='lg:font-extrabold'>Student Portal</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  <li><a>Item 1</a></li>
                  <li>
                  <NavLink to='/studentManage'>Student Management</NavLink>
                  </li>
                  <li><a>Item 3</a></li>
               </ul>
            </div>
            <div className="navbar-end">
               <a className="btn">Button</a>
            </div>
         </div>
      </div>
   );
};

export default Navbar;