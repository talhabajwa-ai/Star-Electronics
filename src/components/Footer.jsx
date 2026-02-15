import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="text-xl font-bold">Star Electric</h3>
                <p className="text-gray-400 text-sm">Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional electrical services in Lahore. Trusted by hundreds of 
              satisfied customers.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors"
              >
                📘
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors"
              >
                📷
              </a>
              <a
                href="https://wa.me/9242112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors"
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Home Wiring</li>
              <li className="text-gray-400">Fan Installation</li>
              <li className="text-gray-400">Appliance Repair</li>
              <li className="text-gray-400">Safety Inspection</li>
              <li className="text-gray-400">Solar Installation</li>
              <li className="text-gray-400">Smart Home Setup</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span className="text-gray-400">
                  Main Market, Gulberg III<br />
                  Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <a href="tel:+9242112345678" className="text-gray-400 hover:text-primary transition-colors">
                  +92 42 11234567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <a href="mailto:info@primeelectric.pk" className="text-gray-400 hover:text-primary transition-colors">
                  info@primeelectric.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Prime Electric Solutions. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
