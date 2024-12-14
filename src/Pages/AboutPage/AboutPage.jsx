import React from 'react';
import { Link } from 'react-router';

const AboutPage = () => {
   return (
      <div className="min-h-screen bg-gray-100 text-gray-800 p-10">
         <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">About Student Management System</h1>
            <p className="text-lg mb-6">
               The <strong>Student Management System (SMS)</strong> is a comprehensive solution designed to simplify and
               enhance the management of educational institutions. From student enrollment to performance tracking, SMS
               provides an all-in-one platform to streamline administrative tasks and improve student outcomes.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-6">
               Our mission is to empower educational institutions with cutting-edge technology that optimizes operations
               and fosters an environment for academic excellence. We aim to make education management efficient,
               transparent, and accessible for everyone.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside mb-6">
               <li>Seamless student enrollment and record management</li>
               <li>Automated attendance tracking</li>
               <li>Comprehensive course and curriculum management</li>
               <li>Real-time performance analytics and reporting</li>
               <li>Parent and student portals for better communication</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Why Choose SMS?</h2>
            <p className="mb-6">
               With SMS, educational institutions can reduce administrative burdens, enhance data accuracy, and focus on
               delivering quality education. Our user-friendly interface and robust features make us a trusted partner
               for schools, colleges, and universities.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-6">
               Have questions or want to learn more about our system? Contact us today to see how we can help transform
               your educational institution.
            </p>
            <div className="text-center mt-8">
               <Link to="/contact" className="btn btn-primary">
                  Contact Us
               </Link>
            </div>
         </div>
      </div>
   );
};

export default AboutPage;
