import React, {useState} from 'react';
import {db} from '../firebase';
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Civil Construction',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatusMessage('Thank you! Your details have been submitted successfully.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Civil Construction',
        message: ''
      });
    } catch (error) {
      console.error('Detailed Firebase Error:', error);
      setStatusMessage(`Failed: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Connect With Us</h1>
        <p>Let's discuss your project requirements. Fill out the form below and our team will get back to you shortly.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter your phone number" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Select Service</label>
            <select name="service" value={formData.service} onChange={handleChange}>
              <option value="Civil Construction">Civil Construction</option>
              <option value="Architectural Plan">Architectural Plan</option>
              <option value="BBMP Sanction Plan">BBMP Sanction Plan</option>
              <option value="Interior Design">Interior Design</option>
              <option value="Structural Design">Structural Design</option>
              <option value="Estimation & Valuation">Estimation & Valuation</option>
            </select>
          </div>

          <div className="form-group">
            <label>Project Details / Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your project..."></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>

          {statusMessage && <p className="status-msg">{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;