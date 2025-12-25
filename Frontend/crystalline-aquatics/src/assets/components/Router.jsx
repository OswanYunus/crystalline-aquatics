import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import Booking from '../pages/Booking';
import SpecialOffers from '../pages/SpecialOffers';
import Admin from '../pages/Admin';

const routes = {
  '/': Home,
  '/services': Services,
  '/about': About,
  '/booking': Booking,
  '/offers': SpecialOffers,
  '/admin': Admin,
};

export default function Router({ path, navigate }) {
  const Page = routes[path] || Home;
  return <Page navigate={navigate} />;
}
