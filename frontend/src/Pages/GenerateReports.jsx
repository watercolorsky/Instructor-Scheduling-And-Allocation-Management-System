import React, { useState } from "react";
import "../Styles/GenerateReports.css"; 


const GenerateReports = () => {
  const [reportVisible, setReportVisible] = useState(false);

  const handleGenerateReport = () => {
    setReportVisible(true);
  };

  return (
    <div className="report-container">
      <h1 className="report-title">Generate Instructor Allocation Report</h1>
      <div className="button-wrapper">
        <button className="generate-btn" onClick={handleGenerateReport}>
          Generate Report
        </button>
      </div>

      {reportVisible && (
        <div className="table-wrapper">
          <table className="report-table">
            <thead>
              <tr>
                <th>Instructor</th>
                <th>Student</th>
                <th>Date Allocated</th>
              </tr>
            </thead>
          </table>
        </div>
      )}
    </div>
  );
};

export default GenerateReports;
