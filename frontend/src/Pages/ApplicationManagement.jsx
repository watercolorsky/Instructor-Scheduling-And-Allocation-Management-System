// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../Styles/ApplicationManagement.css';

// const ApplicationManagement = ({ goBack }) => {
//   const [inquiries, setInquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedInquiry, setSelectedInquiry] = useState(null);

//   useEffect(() => {
//     fetchInquiries();
//   }, []);

//   const fetchInquiries = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/inquiries/driving-course/list/');
//       setInquiries(response.data);
//     } catch (error) {
//       console.error('Error fetching inquiries:', error);
//       alert('Failed to fetch inquiries.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const approveInquiry = async (id) => {
//     if (!window.confirm("Approve this inquiry?")) return;
//     try {
//       await axios.patch(`http://localhost:8000/api/inquiries/driving-course/${id}/`, { status: 'approved' });
//       alert('Inquiry approved.');
//       fetchInquiries();
//     } catch (error) {
//       console.error("Failed to approve inquiry:", error);
//       alert("Failed to approve inquiry.");
//     }
//   };

//   const openModal = (inquiry) => setSelectedInquiry(inquiry);
//   const closeModal = () => setSelectedInquiry(null);

//   return (
//     <div className="application-management-container">
//        <div className="top-bar">
//       <button className="go-back-button" onClick={goBack}>&larr; Go back</button>
//     </div>
//       <h2>Application Management</h2>
//       {loading ? (
//         <p>Loading inquiries...</p>
//       ) : inquiries.length === 0 ? (
//         <p>No inquiries found.</p>
//       ) : (
//         <table className="inquiries-table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Full Name</th>
//               <th>Course</th>
//               <th>Schedule</th>
//               <th>Contact</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {inquiries.map((inq, index) => (
//               <tr key={inq.id}>
//                 <td>{index + 1}</td>
//                 <td>{inq.full_name}</td>
//                 <td>{inq.course_type}</td>
//                 <td>{inq.preferred_schedule}</td>
//                 <td>{inq.contact_number}</td>
//                 <td>
//                   <button className="view-btn" onClick={() => openModal(inq)}>View</button>
//                   <button className="approve-btn" onClick={() => approveInquiry(inq.id)}>Approve</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {selectedInquiry && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content top-position" onClick={e => e.stopPropagation()}>
//             <h3>Inquiry Details</h3>
//             <p><strong>Full Name:</strong> {selectedInquiry.full_name}</p>
//             <p><strong>Email:</strong> {selectedInquiry.email}</p>
//             <p><strong>Contact:</strong> {selectedInquiry.contact_number}</p>
//             <p><strong>Course Type:</strong> {selectedInquiry.course_type}</p>
//             <p><strong>Schedule:</strong> {selectedInquiry.preferred_schedule}</p>
//             <p><strong>Birthdate:</strong> {selectedInquiry.birthdate}</p>
//             <p><strong>Gender:</strong> {selectedInquiry.gender}</p>
//             <p><strong>Address:</strong> {selectedInquiry.house_no}, Purok {selectedInquiry.purok}, {selectedInquiry.barangay}, {selectedInquiry.town_municipality}, {selectedInquiry.province}, {selectedInquiry.zip_code}</p>
//             <p><strong>LTO Client ID:</strong> {selectedInquiry.lto_client_id}</p>
//             <button className="close-modal-btn" onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApplicationManagement;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/ApplicationManagement.css';

const ApplicationManagement = () => {
  const navigate = useNavigate();
  const goBack = () => navigate('/admin-dashboard');

  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/inquiries/driving-course/list/');
      setInquiries(response.data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
      alert('Failed to fetch inquiries.');
    } finally {
      setLoading(false);
    }
  };

  const approveInquiry = async (id) => {
    if (!window.confirm("Approve this inquiry?")) return;
    try {
      await axios.patch(`http://localhost:8000/api/inquiries/driving-course/${id}/`, { status: 'approved' });
      alert('Inquiry approved.');
      fetchInquiries();
    } catch (error) {
      console.error("Failed to approve inquiry:", error);
      alert("Failed to approve inquiry.");
    }
  };

  const openModal = (inquiry) => setSelectedInquiry(inquiry);
  const closeModal = () => setSelectedInquiry(null);

  return (
    <div className="application-management-container">
      <div className="top-bar">
        <button className="go-back-button" onClick={goBack}>&larr; Go back</button>
      </div>
      <h2>Application Management</h2>

      {loading ? (
        <p>Loading inquiries...</p>
      ) : inquiries.length === 0 ? (
        <p>No inquiries found.</p>
      ) : (
        <div className="table-wrapper">
          <table className="inquiries-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Course</th>
                <th>Schedule</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq, index) => (
                <tr key={inq.id}>
                  <td>{index + 1}</td>
                  <td>{inq.full_name}</td>
                  <td>{inq.course_type}</td>
                  <td>{inq.preferred_schedule}</td>
                  <td>{inq.contact_number}</td>
                  <td>
                    <button className="view-btn" onClick={() => openModal(inq)}>View</button>
                    <button className="approve-btn" onClick={() => approveInquiry(inq.id)}>Approve</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedInquiry && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content top-position" onClick={e => e.stopPropagation()}>
            <h3>Inquiry Details</h3>
            <p><strong>Full Name:</strong> {selectedInquiry.full_name}</p>
            <p><strong>Email:</strong> {selectedInquiry.email}</p>
            <p><strong>Contact:</strong> {selectedInquiry.contact_number}</p>
            <p><strong>Course Type:</strong> {selectedInquiry.course_type}</p>
            <p><strong>Schedule:</strong> {selectedInquiry.preferred_schedule}</p>
            <p><strong>Birthdate:</strong> {selectedInquiry.birthdate}</p>
            <p><strong>Gender:</strong> {selectedInquiry.gender}</p>
            <p><strong>Address:</strong> {selectedInquiry.house_no}, Purok {selectedInquiry.purok}, {selectedInquiry.barangay}, {selectedInquiry.town_municipality}, {selectedInquiry.province}, {selectedInquiry.zip_code}</p>
            <p><strong>LTO Client ID:</strong> {selectedInquiry.lto_client_id}</p>
            <button className="close-modal-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationManagement;

