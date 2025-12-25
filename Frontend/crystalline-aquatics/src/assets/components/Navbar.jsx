import logo from '../icons/logo.png';

export default function Navbar({ navigate }) {
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(6, 205, 240, 0.92)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    padding: '0 32px',
    zIndex: 50,
  };

  return (
    <div style={style}>
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
