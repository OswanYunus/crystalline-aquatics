import logo from '../icons/logo.png';

export default function Navbar({ navigate }) {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="site-logo clickable-logo" onClick={() => navigate('/')} />
      </div>

      <div className="nav-right">
        <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
        <button className="nav-btn" onClick={() => navigate('/services')}>Services</button>
        <button className="nav-btn" onClick={() => navigate('/about')}>About Me</button>
        <button className="nav-btn" onClick={() => navigate('/booking')}>Booking</button>
        <button className="nav-btn" onClick={() => navigate('/offers')}>Special Offers</button>
      </div>
    </div>
  );
}
