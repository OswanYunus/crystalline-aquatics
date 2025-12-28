import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Booking({ navigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare submission data with full phone number
    const submissionData = {
      ...formData,
      phone: '+44' + formData.phone
    };
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });
      
      if (response.ok) {
        alert('Booking request submitted! We will contact you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          service: '',
          message: ''
        });
      } else {
        alert('Error submitting booking. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting booking. Please try again.');
    }
  };

  return (
    <div className="main-wrapper">
      <Navbar navigate={navigate} />
      
      <div className="page-section page-section--light">
        <div className="container">
          <h1 className="services-heading text-center">Book Your Service</h1>
          <p className="text-center" style={{ marginBottom: 32, color: '#666' }}>
            Fill out the form below to schedule your pond or aquarium maintenance service.
          </p>
          
          <form onSubmit={handleSubmit} className="form-card">
            <div className="form-row">
              <label className="form-label">Full Name *</label>
              <input className="form-input" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. John Doe" />
            </div>

            <div className="form-row">
              <label className="form-label">Email *</label>
              <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="e.g. john.doe@example.com" />
            </div>

            <div className="form-row">
              <label className="form-label">Phone Number *</label>
              <div className="phone-row">
                <span className="phone-prefix">+44</span>
                <input className="form-input phone-input" type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="e.g. 7375860089" />
              </div>
            </div>

            <div className="form-row">
              <label className="form-label">Address *</label>
              <input className="form-input" type="text" name="address" value={formData.address} onChange={handleChange} required placeholder="Enter your address" autoComplete="address" />
            </div>

            <div className="form-row">
              <label className="form-label">Service Type *</label>
              <select className="form-input" name="service" value={formData.service} onChange={handleChange} required>
                <option value="">Select a service</option>
                <option value="pond-maintenance">Pond Maintenance</option>
                <option value="aquarium-setup">Aquarium Setup</option>
                <option value="water-testing">Water Testing</option>
                <option value="filter-cleaning">Filter Cleaning</option>
                <option value="emergency-service">Emergency Service</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-row">
              <label className="form-label">Additional Message</label>
              <textarea className="form-input form-textarea" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Please describe your specific needs or any additional information..."></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit Booking Request</button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
