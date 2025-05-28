// import React from 'react';
// import rjbg from '../rjbg.png';
// import { useNavigate } from 'react-router-dom';
// import '../Styles/ApplyPage.css';
// import logo from '../logo.png';

// function ApplyPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="apply-wrapper" style={{ backgroundImage: `url(${rjbg})` }}>
//       <header className="portal-header">
//         <div className="logo-area">
//           <img src={logo} alt="RJ Logo" className="header-logo" />
//           <span className="school-name">RJ ILOCANDIA DRIVING SCHOOL PORTAL</span>
//         </div>
//         <div className="login-link" onClick={() => navigate('/')}>
//           HOME
//         </div>
//       </header>

//       <main className="apply-main">
//         <div className="blue-overlay">
//           <div className="registration-box">
//             <h2 className="section-header">APPLICATION</h2>
//             <div className="top-options">
//               <div className="option-card" onClick={() => navigate('/inquire/theoretical')}>
//                 <div className="blue-icon">📘</div>
//                 <span>THEORETICAL DRIVING SCHOOL</span>
//               </div>
//               <div className="option-card" onClick={() => navigate('/inquire/practical')}>
//                 <div className="blue-icon">🚗</div>
//                 <span>PRACTICAL DRIVING SCHOOL</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ApplyPage;

import React from 'react';
import rjbg from '../rjbg.png'; // Background image
import { useNavigate } from 'react-router-dom';
import '../Styles/ApplyPage.css';
import logo from '../logo.png'; 

function ApplyPage() {
  const navigate = useNavigate();

  return (
    <div className="apply-wrapper" style={{ backgroundImage: `url(${rjbg})` }}>
      <header className="portal-header">
        <div className="logo-area">
          <img src={logo} alt="RJ Logo" className="header-logo" />
          <span className="school-name">RJ ILOCANDIA DRIVING SCHOOL PORTAL</span>
        </div>
        <div className="login-link" onClick={() => navigate('/')}>
          HOME
        </div>
      </header>

      <main className="apply-main">
        <div className="blue-overlay">
          <div className="registration-box">
            <h2 className="section-header">APPLICATION</h2>
            <div className="top-options">
              <div className="option-card" onClick={() => navigate('/inquire/theoretical')}>
                <div className="blue-icon">📘</div>
                <span>THEORETICAL DRIVING SCHOOL</span>
              </div>
              <div className="option-card" onClick={() => navigate('/inquire/practical')}>
                <div className="blue-icon">🚗</div>
                <span>PRACTICAL DRIVING SCHOOL</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ApplyPage;


