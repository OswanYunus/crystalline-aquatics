import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SpecialOffers({ navigate }) {
  return (
    <div className="main-wrapper">
      <Navbar navigate={navigate} />
      
      <div className="page-section page-section--centered">
        <div className="container text-center">
          <h1 className="coming-heading">Coming Soon</h1>
          <p className="coming-sub">We're working on some exciting special offers and discounts for our pond and aquarium maintenance services. Stay tuned for updates!</p>
          <div className="accent-line" />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
