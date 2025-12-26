import { useState } from 'react';
import PropTypes from 'prop-types';

function BookingCard({ booking, onMarkViewed, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setExpanded(!expanded);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setExpanded(!expanded)}
      onKeyDown={handleKeyDown}
      style={{
        background: 'white',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderLeft: booking.viewed ? '4px solid #28a745' : '4px solid #06cdf0',
        opacity: booking.viewed ? 0.8 : 1,
        cursor: 'pointer',
        transition: 'transform 0.2s',
        marginBottom: '12px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '10px',
            fontWeight: '600',
            backgroundColor: booking.viewed ? '#28a745' : '#06cdf0',
            color: 'white'
          }}>
            {booking.viewed ? 'VIEWED' : 'NEW'}
          </span>
          <span style={{ marginLeft: '8px', fontSize: '12px', color: '#666' }}>
            {new Date(booking.createdAt).toLocaleString()}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {!booking.viewed && (
            <button
              onClick={(e) => { e.stopPropagation(); onMarkViewed(booking._id); }}
              onFocus={(e) => e.target.style.background = '#218838'}
              onBlur={(e) => e.target.style.background = '#28a745'}
              style={{
                padding: '6px 12px',
                background: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.target.style.background = '#218838'}
              onMouseOut={(e) => e.target.style.background = '#28a745'}
            >
              Mark as Viewed
            </button>
          )}
          <button
            onClick={(e) => { e.stopPropagation(); onDelete(booking._id); }}
            onFocus={(e) => e.target.style.background = '#c82333'}
            onBlur={(e) => e.target.style.background = '#dc3545'}
            style={{
              padding: '6px 12px',
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#c82333'}
            onMouseOut={(e) => e.target.style.background = '#dc3545'}
          >
            Delete
          </button>
        </div>
      </div>
      
      {expanded && (
        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #eee', color: '#06cdf0' }}>
          <div><strong>Name:</strong> {booking.name}</div>
          <div><strong>Email:</strong> {booking.email}</div>
          <div><strong>Phone:</strong> {booking.phone}</div>
          <div><strong>Service:</strong> {booking.service}</div>
          <div><strong>Address:</strong> {booking.address}</div>
          {booking.message && <div><strong>Message:</strong> {booking.message}</div>}
        </div>
      )}
    </div>
  );
}

BookingCard.propTypes = {
  booking: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    message: PropTypes.string,
    viewed: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  onMarkViewed: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const ADMIN_USERNAME = 'Noah'; // Change this
  const ADMIN_PASSWORD = 'noah0048'; // Change this

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      fetchBookings();
    } else {
      alert('Incorrect username or password');
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings`);
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsViewed = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings/${id}/viewed`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        // Update local state
        setBookings(bookings.map(booking => 
          booking._id === id ? { ...booking, viewed: true } : booking
        ));
      }
    } catch (error) {
      console.error('Error marking as viewed:', error);
    }
  };

  const deleteBooking = async (id) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setBookings(bookings.filter(booking => booking._id !== id));
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  if (!authenticated) {
    return (
      <div style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
        <div style={{ 
          padding: '120px 24px 60px', 
          minHeight: '100vh', 
          background: '#f8fafc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ maxWidth: '400px', width: '100%' }}>
            <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 18, textAlign: 'center', color: '#06cdf0' }}>Admin Login</h1>
            <form onSubmit={handleLogin} style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="username" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Username *</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter username"
                  style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', backgroundColor: '#f8fcff', color: '#333' }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Password *</label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter password"
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px', backgroundColor: '#f8fcff', color: '#333', paddingRight: '40px' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '18px'
                    }}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
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
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      
      <div style={{ padding: '120px 24px 60px', minHeight: '100vh', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 18, textAlign: 'center', color: '#06cdf0' }}>Admin Dashboard</h1>
          
          {loading ? (
            <p style={{ textAlign: 'center' }}>Loading bookings...</p>
          ) : (
            <div style={{ display: 'grid', gap: '20px' }}>
              {bookings.length === 0 ? (
                <p style={{ textAlign: 'center' }}>No bookings yet.</p>
              ) : (
                bookings.map((booking) => (
                  <BookingCard key={booking._id} booking={booking} onMarkViewed={markAsViewed} onDelete={deleteBooking} />
                ))
              )}
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}