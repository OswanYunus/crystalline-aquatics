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
    <div style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar navigate={navigate} />
      
      <div style={{ padding: '120px 24px 60px', minHeight: '100vh', background: '#f8fafc' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 18, textAlign: 'center', color: '#06cdf0' }}>Book Your Service</h1>
          <p style={{ textAlign: 'center', marginBottom: 32, color: '#666' }}>
            Fill out the form below to schedule your pond or aquarium maintenance service.
          </p>
          
          <form onSubmit={handleSubmit} style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g. John Doe"
                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', backgroundColor: '#f8fcff', color: '#333' }}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="e.g. john.doe@example.com"
                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', backgroundColor: '#f8fcff', color: '#333' }}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Phone Number *</label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ padding: '12px', border: '1px solid #ddd', borderRight: 'none', borderRadius: '8px 0 0 8px', background: '#f9f9f9', fontSize: '16px', color: '#1e2021ff', fontWeight: '600' }}>+44</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 7375860089"
                  style={{ flex: 1, padding: '12px', border: '1px solid #ddd', borderLeft: 'none', borderRadius: '0 8px 8px 0', fontSize: '16px', backgroundColor: '#f8fcff', color: '#333' }}
                />
              </div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Enter your address"
                autoComplete="address"
                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', backgroundColor: '#f8fcff', color: '#333' }}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Service Type *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', backgroundColor: '#f8fcff', color: '#333' }}
              >
                <option value="">Select a service</option>
                <option value="pond-maintenance">Pond Maintenance</option>
                <option value="aquarium-setup">Aquarium Setup</option>
                <option value="water-testing">Water Testing</option>
                <option value="filter-cleaning">Filter Cleaning</option>
                <option value="emergency-service">Emergency Service</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', resize: 'vertical', backgroundColor: '#f8fcff', color: '#333' }}
                placeholder="Please describe your specific needs or any additional information..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                background: '#06cdf0',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.target.style.background = '#05b8d6'}
              onMouseOut={(e) => e.target.style.background = '#06cdf0'}
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
