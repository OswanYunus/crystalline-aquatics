import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home({ navigate }) {
  return (
    <div className="main-wrapper">
      {/* Hero (first viewport) */}
      <section className="hero-section">
        <Hero />
        <Navbar navigate={navigate} />
      </section>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
