import React, { useEffect, useState } from 'react';
import '../Styles/Scheduling.css';

const Scheduling = ({ goBack }) => {
  const [allocations, setAllocations] = useState([]);

  useEffect(() => {
    const savedAllocs = JSON.parse(localStorage.getItem('allocations') || '[]');
    setAllocations(savedAllocs);
  }, []);

  return (
    <div className="scheduling-container">
      <div className="top-bar">
      <button className="go-back-button" onClick={goBack}>&larr; Go back</button>
    </div>
      <h2>Scheduling</h2>
      {allocations.length === 0 ? (
        <p>No allocations found.</p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Instructor Name</th>
                <th>Course</th>
                <th>Date</th>
                <th>Time</th>
                <th>Assigned Student</th>
              </tr>
            </thead>
            <tbody>
              {allocations.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.instructor_name}</td>
                  <td>{item.course}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.student_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Scheduling;
