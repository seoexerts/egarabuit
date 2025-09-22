
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Empresa', href: '/empresa' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contacto', href: '/contacto' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600 font-sans">
              EgaraBuit
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  location.pathname === item.href ? 'text-blue-600 border-b-2 border-blue-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:609936590"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              <i className="fas fa-phone mr-2"></i>
              609 93 65 90
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-gray-700`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1 ${
                    location.pathname === item.href ? 'text-blue-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:609936590"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-phone mr-2"></i>
                609 93 65 90
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
