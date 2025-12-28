import homeBackground from '../images/homebackground.png';

export default function Hero() {
  return (
    <div className="hero-bg" style={{ backgroundImage: `url(${homeBackground})` }}>
      {/* Overlay: centered hero text */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Pond and Aquarium Maintenance Services</h1>

          <p className="hero-sub">Crystalline Aquatics are pond and aquarium maintenance professionals covering Wiltshire, UK + some surrounding areas.</p>

          <div className="hero-badge">Pond & Aquarium Services</div>
        </div>
      </div>
    </div>
  );
}
