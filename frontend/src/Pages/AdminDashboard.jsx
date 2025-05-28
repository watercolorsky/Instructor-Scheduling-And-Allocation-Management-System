// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   FaUser,
//   FaFileAlt,
//   FaChalkboardTeacher,
//   FaCalendarAlt,
//   FaSignOutAlt,
// } from 'react-icons/fa';
// import logo from '../logo.png';
// import '../Styles/AdminDashboard.css';
// import UserManagement from './UserManagement';
// import ApplicationManagement from'./ApplicationManagement';
// import InstructorAlloc from './InstructorAlloc';
// import Scheduling from './Scheduling';


// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('');
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/');
//     console.log('Logout clicked');
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'user':
//         return <UserManagement />;
//       case 'application':
//         return <ApplicationManagement />;
//       case 'instructor':
//         return <InstructorAlloc />;
//       case 'scheduling':
//         return <Scheduling />;
//       default:
//         return (
//           <div className="welcome-screen">
//             <div className="welcome-logo-container">
//               <img src={logo} alt="Logo" className="welcome-logo" />
//               <h1 className="welcome-heading">WELCOME ADMIN!</h1>
//               <p className="welcome-subheading">What would you like to do?</p>
//               <div className="card-options">
//                 <div className="user" onClick={() => setActiveTab('user')}>
//                   <FaUser size={30} />
//                   <p>User<br />Management</p>
//                 </div>
//                 <div className="application" onClick={() => setActiveTab('application')}>
//                   <FaFileAlt size={30} />
//                   <p>Application<br />Management</p>
//                 </div>
//                 <div className="instructor" onClick={() => setActiveTab('instructor')}>
//                   <FaChalkboardTeacher size={30} />
//                   <p>Instructor<br />Allocation</p>
//                 </div>
//                 <div className="scheduling" onClick={() => setActiveTab('scheduling')}>
//                   <FaCalendarAlt size={30} />
//                   <p>Scheduling</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <header className="header-bar">
//         <div className="left-logo">
//           <img src={logo} alt="Logo" className="header-logo" />
//           <span className="school-name">RJ ILOCANDIA</span>
//         </div>
//         <div className="right-logout" onClick={handleLogout}>
//           <FaSignOutAlt />
//           <span>Logout</span>
//         </div>
//       </header>
//       <main className="dashboard-content">{renderContent()}</main>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaFileAlt,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaSignOutAlt,
} from 'react-icons/fa';
import logo from '../logo.png';
import '../Styles/AdminDashboard.css';
import UserManagement from './UserManagement';
import ApplicationManagement from './ApplicationManagement';
import InstructorAlloc from './InstructorAlloc';
import Scheduling from './Scheduling';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    console.log('Logout clicked');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'user':
        return <UserManagement />;
      case 'application':
        return <ApplicationManagement />;
      case 'instructor':
        return <InstructorAlloc />;
      case 'scheduling':
        return <Scheduling />;
      default:
        return (
          <div className="welcome-screen">
            <div className="welcome-logo-container">
              <img src={logo} alt="Logo" className="welcome-logo" />
              <h1 className="welcome-heading">WELCOME ADMIN!</h1>
              <p className="welcome-subheading">What would you like to do?</p>
              <div className="card-options">
                <div className="user" onClick={() => setActiveTab('user')}>
                  <FaUser size={50} />
                  <p>User<br />Management</p>
                </div>
                <div className="application" onClick={() => setActiveTab('application')}>
                  <FaFileAlt size={50} />
                  <p>Application<br />Management</p>
                </div>
                <div className="instructor" onClick={() => setActiveTab('instructor')}>
                  <FaChalkboardTeacher size={50} />
                  <p>Instructor<br />Allocation</p>
                </div>
                <div className="scheduling" onClick={() => setActiveTab('scheduling')}>
                  <FaCalendarAlt size={50} />
                  <p>Scheduling</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="header-bar">
        <div className="left-logo">
          <img src={logo} alt="Logo" className="header-logo" />
          <span className="school-name">RJ ILOCANDIA</span>
        </div>
        <div className="right-logout" onClick={handleLogout}>
          <FaSignOutAlt size={20} />
          <span>Logout</span>
        </div>
      </header>
      <main className="dashboard-content">{renderContent()}</main>
    </div>
  );
};

export default AdminDashboard;

