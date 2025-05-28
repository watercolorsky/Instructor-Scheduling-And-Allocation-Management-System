import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/Inquire.css';
import logo from '../logo.png';

const Inquire = () => {
  const { courseType } = useParams();
  const navigate = useNavigate();

  const normalizedCourseType =
    courseType === "practical"
      ? "Practical Driving Course"
      : "Theoretical Driving Course";

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    middleinitial: "",
    birthdate: "",
    age: "",
    gender: "",
    maritalstats: "",
    nationality: "",
    houseno: "",
    purok: "",
    barangay: "",
    townmunicipality: "",
    province: "",
    zipcode: "",
    birthplace: "",
    contactno: "",
    email: "",
    ltoid: "",
    signature: null,
    preferred_schedule: "",
    course_type: normalizedCourseType,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const submissionData = new FormData();
    submissionData.append(
      "full_name",
      `${formData.firstname} ${formData.middleinitial} ${formData.lastname}`
    );
    submissionData.append("email", formData.email);
    submissionData.append("contact_number", formData.contactno);
    submissionData.append("preferred_schedule", formData.preferred_schedule || "Not specified");
    submissionData.append("course_type", formData.course_type);
    submissionData.append("birthdate", formData.birthdate);
    submissionData.append("age", formData.age);
    submissionData.append("gender", formData.gender);
    submissionData.append("marital_status", formData.maritalstats);
    submissionData.append("nationality", formData.nationality);
    submissionData.append("house_no", formData.houseno);
    submissionData.append("purok", formData.purok);
    submissionData.append("barangay", formData.barangay);
    submissionData.append("town_municipality", formData.townmunicipality);
    submissionData.append("province", formData.province);
    submissionData.append("zip_code", formData.zipcode);
    submissionData.append("birthplace", formData.birthplace);
    submissionData.append("lto_client_id", formData.ltoid);
    submissionData.append("signature", formData.signature);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/inquiries/driving-course/",
        submissionData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 201 || response.status === 200) {
        setMessage("✅ Application submitted successfully!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setMessage("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Error occurred. Please check your inputs or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
     <>
    <header className="inquire-header">
      <div className="logo-area">
        <img src={logo} alt="RJ Logo" className="header-logo" />
        <span className="school-name">RJ ILOCANDIA DRIVING SCHOOL PORTAL</span>
      </div>
      <div className="login-link" onClick={() => navigate('/')}>
        <span role="img" aria-label="login"></span> HOME
      </div>
    </header>
    <div className="form-container">
      <div className="form-header">
  <h2>{normalizedCourseType} Application</h2>
 <button className="back-btn" onClick={() => navigate(-1)}>Cancel</button>
</div>


      {loading && <p className="loading">Submitting your application...</p>}
      {message && <p className="message">{message}</p>}

      <form className="inquiry-form" onSubmit={handleSubmit}>
        {/* Personal Info */}
        <section className="form-section">
          <h3>Personal Information</h3>
          <label>First Name<input name="firstname" value={formData.firstname} onChange={handleChange} required /></label>
          <label>Last Name<input name="lastname" value={formData.lastname} onChange={handleChange} required /></label>
          <label>Middle Initial<input name="middleinitial" value={formData.middleinitial} onChange={handleChange} required /></label>
          <label>Birthdate<input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} required /></label>
          <label>Age<input type="number" name="age" value={formData.age} onChange={handleChange} required /></label>
          <label>Gender<select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select></label>
          <label>Marital Status<select name="maritalstats" value={formData.maritalstats} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widowed">Widowed</option>
          </select></label>
          <label>Nationality<input name="nationality" value={formData.nationality} onChange={handleChange} required /></label>
        </section>

        {/* Address Info */}
        <section className="form-section">
          <h3>Address Information</h3>
          <label>House No.<input name="houseno" value={formData.houseno} onChange={handleChange} required /></label>
          <label>Purok<input name="purok" value={formData.purok} onChange={handleChange} required /></label>
          <label>Barangay<input name="barangay" value={formData.barangay} onChange={handleChange} required /></label>
          <label>Town/Municipality<input name="townmunicipality" value={formData.townmunicipality} onChange={handleChange} required /></label>
          <label>Province<input name="province" value={formData.province} onChange={handleChange} required /></label>
          <label>Zip Code<input name="zipcode" value={formData.zipcode} onChange={handleChange} required /></label>
          <label>Birthplace<input name="birthplace" value={formData.birthplace} onChange={handleChange} required /></label>
        </section>

        {/* Contact and Course Info */}
        <section className="form-section">
          <h3>Course & Contact Information</h3>
          <label>Contact Number<input name="contactno" value={formData.contactno} onChange={handleChange} required /></label>
          <label>Email<input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
          <label>LTO Client ID<input name="ltoid" value={formData.ltoid} onChange={handleChange} required /></label>
          <label>Preferred Schedule<input name="preferred_schedule" value={formData.preferred_schedule} onChange={handleChange} /></label>
          <label>Student Signature<input type="file" name="signature" onChange={handleChange} required /></label>

          <label className="checkbox">
            <input type="checkbox" checked readOnly /> 15 Hours - {formData.course_type}
          </label>
        </section>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
    </>
  );
};

export default Inquire;
