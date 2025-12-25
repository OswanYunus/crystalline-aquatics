import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SpecialOffers({ navigate }) {
  return (
    <div style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar navigate={navigate} />
      
      <div style={{ 
        padding: '120px 24px 60px', 
        minHeight: '100vh', 
        background: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: 800, 
            marginBottom: '1rem',
            color: '#06cdf0',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            Coming Soon
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#666', 
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            We're working on some exciting special offers and discounts for our pond and aquarium maintenance services. 
            Stay tuned for updates!
          </p>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(to right, #06cdf0, #05b8d6)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
