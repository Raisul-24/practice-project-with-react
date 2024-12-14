import React, { useState } from 'react';

function StudentManagement() {
  const [students, setStudents] = useState([]); // Stores the list of students
  const [newStudent, setNewStudent] = useState({ name: '', age: '', grade: '' }); // Temporary storage for new student data
  const [editIndex, setEditIndex] = useState(-1); // Tracks the index of the student being edited

  // Handle input changes for adding/updating students
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  // Add a new student
  const addStudent = () => {
    if (!newStudent.name || !newStudent.age || !newStudent.grade) {
      alert('Please fill out all fields.');
      return;
    }
    setStudents([...students, newStudent]);
    setNewStudent({ name: '', age: '', grade: '' });
  };

  // Delete a student
  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  // Edit a student
  const editStudent = (index) => {
    setEditIndex(index);
    setNewStudent(students[index]);
  };

  // Update a student
  const updateStudent = () => {
    if (!newStudent.name || !newStudent.age || !newStudent.grade) {
      alert('Please fill out all fields.');
      return;
    }
    const updatedStudents = students.map((student, index) =>
      index === editIndex ? newStudent : student
    );
    setStudents(updatedStudents);
    setNewStudent({ name: '', age: '', grade: '' });
    setEditIndex(-1);
  };

  return (
    <div className="p-2 md:p-5">
      <h1 className="text-2xl font-bold mb-5">Student Management System</h1>

      {/* Input Form */}
      <div className="mb-5 flex flex-col md:flex-row gap-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleInputChange}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newStudent.age}
          onChange={handleInputChange}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={newStudent.grade}
          onChange={handleInputChange}
          className="input input-bordered w-full max-w-xs"
        />
        {editIndex === -1 ? (
          <button
            onClick={addStudent}
            className="btn btn-primary btn-outline"
          >
            Add Student
          </button>
        ) : (
          <button
            onClick={updateStudent}
            className="btn btn-success btn-outline"
          >
            Update Student
          </button>
        )}
      </div>

      {/* Student List */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => editStudent(index)}
                    className="btn btn-warning btn-sm btn-outline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteStudent(index)}
                    className="btn btn-error btn-sm btn-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {students.length === 0 && <p className="text-red-500 font-semibold mt-5">No students available. Add some!</p>}
    </div>
  );
}

export default StudentManagement;
