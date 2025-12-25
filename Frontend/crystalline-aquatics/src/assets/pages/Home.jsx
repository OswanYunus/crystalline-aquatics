import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home({ navigate }) {
  return (
    <div style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Hero (first viewport) */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <Hero />
        <Navbar navigate={navigate} />
      </section>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
