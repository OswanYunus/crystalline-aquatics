import logo from '../icons/logo.png';

export default function Navbar({ navigate }) {
  return (
    <div className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src={logo} alt="Logo" className="site-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
        <button className="nav-btn" onClick={() => navigate('/services')}>Services</button>
        <button className="nav-btn" onClick={() => navigate('/about')}>About Me</button>
        <button className="nav-btn" onClick={() => navigate('/booking')}>Booking</button>
        <button className="nav-btn" onClick={() => navigate('/offers')}>Special Offers</button>
      </div>
    </div>
  );
}
