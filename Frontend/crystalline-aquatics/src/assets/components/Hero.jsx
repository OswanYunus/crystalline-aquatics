import homeBackground from '../images/homebackground.png';

export default function Hero() {
  const style = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${homeBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: '#06cdf0', // Fallback color
  };

  return (
    <div style={style}>
      {/* Overlay: centered hero text */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: 1100, padding: '0 20px' }}>
          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(32px, 6vw, 64px)',
              lineHeight: 1.02,
              fontWeight: 800,
              margin: 0,
              textShadow: '0 6px 18px rgba(0,0,0,0.5)'
            }}
          >
            Pond and Aquarium Maintenance Services
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.95)',
              fontSize: 'clamp(14px, 2.2vw, 20px)',
              marginTop: 12,
              marginBottom: 18,
              lineHeight: 1.4,
              pointerEvents: 'auto'
            }}
          >
            Crystalline Aquatics are pond and aquarium maintenance professionals covering Wiltshire, UK + some surrounding areas.
          </p>

          {/* Optional translucent label/button under subtitle - remove if you don't want it */}
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.12)',
              color: '#fff',
              padding: '10px 18px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
              boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
              pointerEvents: 'auto'
            }}
          >
            Pond & Aquarium Services
          </div>
        </div>
      </div>
    </div>
  );
}
