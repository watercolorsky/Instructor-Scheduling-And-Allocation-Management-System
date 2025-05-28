// import React, { useEffect, useState } from 'react';
// import '../../Styles/InquiryList.css';

// const InquiryList = () => {
//   const [inquiries, setInquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchInquiries = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/api/inquiries/');
//         if (!response.ok) throw new Error('Failed to fetch inquiries');

//         const data = await response.json();
//         setInquiries(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInquiries();
//   }, []);

//   if (loading) return <p>Loading inquiries...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="inquiry-list">
//       <h2>Inquiry List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Full Name</th>
//             <th>Contact</th>
//             <th>Email</th>
//             <th>Course Type</th>
//             <th>Schedule</th>
//           </tr>
//         </thead>
//         <tbody>
//           {inquiries.map((inquiry, index) => (
//             <tr key={index}>
//               <td>{inquiry.full_name}</td>
//               <td>{inquiry.contact_number}</td>
//               <td>{inquiry.email}</td>
//               <td>{inquiry.course_type}</td>
//               <td>{inquiry.preferred_schedule}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default InquiryList;
