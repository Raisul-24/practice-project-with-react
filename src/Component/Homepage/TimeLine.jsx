import React from 'react';

const TimeLine = () => {
   return (
      <div className='max-w-2xl mx-auto'>
         <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
               <div className="timeline-middle text-green-400">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     className="h-5 w-5">
                     <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                  </svg>
               </div>
               <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">Step 1</time>
                  <div className="text-lg font-black">Student Enrollment</div>
                  Students can register by providing personal details, selecting courses, and submitting necessary documents. Enrollment is the first step in the academic journey.
               </div>
               <hr />
            </li>
            <li>
               <hr />
               <div className="timeline-middle text-green-400">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     className="h-5 w-5">
                     <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                  </svg>
               </div>
               <div className="timeline-end mb-10">
                  <time className="font-mono italic">Step 2</time>
                  <div className="text-lg font-black">Examinations</div>
                  Students participate in regular assessments, quizzes, and final exams to evaluate their understanding and performance in their chosen courses.
               </div>
               <hr />
            </li>
            <li>
               <hr />
               <div className="timeline-middle text-green-400">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     className="h-5 w-5">
                     <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                  </svg>
               </div>
               <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">Step 3</time>
                  <div className="text-lg font-black">Results</div>
                  After evaluations, students receive their grades and feedback. Results help identify areas for improvement and recognize achievements.
               </div>
               <hr />
            </li>
            <li>
               <hr />
               <div className="timeline-middle text-green-400">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     className="h-5 w-5">
                     <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                  </svg>
               </div>
               <div className="timeline-end mb-10">
                  <time className="font-mono italic">Step 4</time>
                  <div className="text-lg font-black">Graduation</div>
                  Students complete their academic journey by graduating with certificates or degrees, ready to embark on their professional careers.
               </div>
               <hr />
            </li>
         </ul>
      </div>
   );
};

export default TimeLine;
