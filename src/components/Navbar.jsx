import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">⚡</span>
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-black' : 'text-black'}`}>
                Star Electric
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-dark-gray' : 'text-dark-gray'}`}>
                Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-dark-gray font-medium hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <span className="text-xl">🛒</span>
              <span className="absolute -top-1 -right-1 bg-primary text-xs w-5 h-5 rounded-full flex items-center justify-center text-black font-bold">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">
              {isMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-dark-gray font-medium hover:text-primary transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <span className="text-xl">🛒</span>
                <span className="absolute -top-1 -right-1 bg-primary text-xs w-5 h-5 rounded-full flex items-center justify-center text-black font-bold">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
