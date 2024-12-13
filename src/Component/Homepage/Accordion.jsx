import React from 'react';

const Accordion = () => {
   return (
      <div className='mx-auto my-10 w-3/4'>
         <div className="collapse collapse-plus bg-lime-50 mb-2">
            <input type="radio" name="student-accordion" defaultChecked />
            <div className="collapse-title text-xl font-medium">Student Enrollment</div>
            <div className="collapse-content">
               <p>Students can register by providing personal details, selecting courses, and submitting necessary documents. Enrollment is the first step in the academic journey.</p>
            </div>
         </div>
         <div className="collapse collapse-plus bg-lime-50 mb-2">
            <input type="radio" name="student-accordion" />
            <div className="collapse-title text-xl font-medium">Examinations</div>
            <div className="collapse-content">
               <p>Students participate in regular assessments, quizzes, and final exams to evaluate their understanding and performance in their chosen courses.</p>
            </div>
         </div>
         <div className="collapse collapse-plus bg-lime-50 mb-2">
            <input type="radio" name="student-accordion" />
            <div className="collapse-title text-xl font-medium">Results</div>
            <div className="collapse-content">
               <p>After evaluations, students receive their grades and feedback. Results help identify areas for improvement and recognize achievements.</p>
            </div>
         </div>
         <div className="collapse collapse-plus bg-lime-50 mb-2">
            <input type="radio" name="student-accordion" />
            <div className="collapse-title text-xl font-medium">Graduation</div>
            <div className="collapse-content">
               <p>Students complete their academic journey by graduating with certificates or degrees, ready to embark on their professional careers.</p>
            </div>
         </div>
      </div>
   );
};

export default Accordion;
