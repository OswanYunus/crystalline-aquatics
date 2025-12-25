import logo from '../icons/logo.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>

        <div className="footer-center">
          <p className="footer-desc">
            Crystalline Aquatics are pond and aquarium maintenance professionals covering Wiltshire, UK specialising in all ponds, cold water aquariums and tropical aquariums.
          </p>

          <div className="footer-contact">
            <div>
              <strong>Call</strong>
              <div className="contact-line">07375860089</div>
            </div>
            <div>
              <strong>Address</strong>
              <div className="contact-line">Greystones, Bromham, Chippenham, Wiltshire, UK SN15 2JT</div>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="copyright">© 2025 Crystalline Aquatics. All Rights Reserved</div>
          <div className="policies">Privacy Policy | Cookie Policy</div>
        </div>
      </div>
    </footer>
  );
}
