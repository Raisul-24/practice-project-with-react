import React from 'react';

const Contact = () => {
   return (
      <div className="min-h-screen bg-gray-100 text-gray-800 p-10">
         <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-lg text-center mb-6">
               Have questions, feedback, or need assistance? We're here to help! Reach out to us using the form below or
               through our contact information.
            </p>

            <div className="bg-white shadow-md rounded-lg p-8 mb-8">
               <form>
                  <div className="mb-4">
                     <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                     </label>
                     <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                     />
                  </div>

                  <div className="mb-4">
                     <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                     </label>
                     <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                     />
                  </div>

                  <div className="mb-4">
                     <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                     </label>
                     <textarea
                        id="message"
                        rows="5"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your message"
                     ></textarea>
                  </div>

                  <div className="text-center">
                     <button
                        type="submit"
                        className="btn btn-primary px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                        Send Message
                     </button>
                  </div>
               </form>
            </div>

            <div className="text-center">
               <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
               <p className="mb-2">
                  <strong>Email:</strong> support@sms.com
               </p>
               <p className="mb-2">
                  <strong>Phone:</strong> +1 234 567 890
               </p>
               <p className="mb-2">
                  <strong>Address:</strong> 123 Education Lane, Knowledge City, ED 56789
               </p>
               <div className="flex justify-center mt-4 space-x-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current text-blue-400">
                        <path
                           d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                     </svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current text-red-600">
                        <path
                           d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                     </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current text-blue-600">
                        <path
                           d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                     </svg>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
