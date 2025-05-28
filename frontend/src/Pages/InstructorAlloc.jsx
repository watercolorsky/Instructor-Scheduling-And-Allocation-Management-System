import React, { useState } from 'react';
import '../Styles/InstructorAlloc.css';

const InstructorAlloc = ({ goBack }) => {
  const [instructorName, setInstructorName] = useState('');
  const [course, setCourse] = useState('Theoretical Driving Course');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [studentName, setStudentName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!instructorName || !date || !time || !studentName) {
      alert('Please fill in all fields');
      return;
    }

    const newAlloc = {
      instructor_name: instructorName,
      course,
      date,
      time,
      student_name: studentName,
    };

    // Get existing allocations from localStorage or empty array
    const existingAllocs = JSON.parse(localStorage.getItem('allocations') || '[]');

    // Add new allocation
    const updatedAllocs = [...existingAllocs, newAlloc];

    // Save updated allocations back to localStorage
    localStorage.setItem('allocations', JSON.stringify(updatedAllocs));

    // Clear form fields
    setInstructorName('');
    setCourse('Theoretical Driving Course');
    setDate('');
    setTime('');
    setStudentName('');

    alert('Instructor assigned successfully!');
  };

  return (
    <div className="ins-alloc">
      <button className="go-back-button" onClick={goBack}>&larr; Go back</button>
      <h2>Instructor Allocation</h2>
    <div className="instructor-alloc">
      <form className="alloc-form" onSubmit={handleSubmit}>
        <label>
          Instructor Name
          <input
            type="text"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
            placeholder="Enter instructor's full name"
          />
        </label>

        <label>
          Course
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option>Theoretical Driving Course</option>
            <option>Practical Driving Course</option>
          </select>
        </label>

        <label>
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Time
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>

        <label>
          Assigned Student
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter student's full name"
          />
        </label>

        <button type="submit">Assign Instructor</button>
      </form>
    </div></div>
  );
};

export default InstructorAlloc;
