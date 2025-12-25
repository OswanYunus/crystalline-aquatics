import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services({ navigate }) {
  const services = [
    {
      title: 'Pond Maintenance',
      description: 'Complete pond cleaning, water quality testing, filter maintenance, and seasonal care to keep your pond healthy and beautiful.',
      icon: '🏞️'
    },
    {
      title: 'Cold Water Aquarium Maintenance',
      description: 'Professional care for cold water aquariums including water changes, equipment servicing, and fish health monitoring.',
      icon: '🐠'
    },
    {
      title: 'Tropical Aquarium Maintenance',
      description: 'Specialized maintenance for tropical aquariums with temperature control, coral care, and exotic fish species management.',
      icon: '🌺'
    },
    {
      title: 'Aquarium Setup',
      description: 'Complete setup of new aquariums including equipment installation, water conditioning, and initial stocking guidance.',
      icon: '🔧'
    },
    {
      title: 'Water Testing & Analysis',
      description: 'Comprehensive water quality testing to ensure optimal conditions for your aquatic life and early problem detection.',
      icon: '🧪'
    },
    {
      title: 'Filter Cleaning & Maintenance',
      description: 'Deep cleaning and servicing of aquarium and pond filtration systems to maintain water clarity and quality.',
      icon: '🔄'
    },
    {
      title: 'Emergency Services',
      description: '24/7 emergency response for aquarium or pond issues including equipment failures, water quality problems, and fish health emergencies.',
      icon: '🚨'
    }
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar navigate={navigate} />
      
      <div style={{ padding: '120px 24px 60px', minHeight: '100vh', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 18, color: '#06cdf0' }}>Our Services</h1>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Professional pond and aquarium maintenance services covering Wiltshire, UK. 
              We specialize in all types of aquatic environments to keep your water features thriving.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                  {service.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  marginBottom: '1rem', 
                  textAlign: 'center',
                  color: '#333'
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  color: '#666', 
                  lineHeight: 1.6,
                  textAlign: 'center'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => navigate('/booking')}
              style={{
                padding: '16px 32px',
                background: '#06cdf0',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.2s',
                boxShadow: '0 4px 12px rgba(6, 205, 240, 0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#05b8d6';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#06cdf0';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Book Your Service Now!
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
