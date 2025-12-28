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
    <div className="main-wrapper">
      <Navbar navigate={navigate} />
      
      <div className="page-section page-section--light">
        <div className="container">
          <div className="text-center page-intro">
            <h1 className="services-heading">Our Services</h1>
            <p className="services-sub">Professional pond and aquarium maintenance services covering Wiltshire, UK. We specialize in all types of aquatic environments to keep your water features thriving.</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="cta-btn" onClick={() => navigate('/booking')}>Book Your Service Now!</button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
