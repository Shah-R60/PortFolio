import { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div style={{ width: '100%', padding: '0 3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl md:text-3xl font-bold text-gray-800" style={{ fontFamily: '"Kaushan Script", cursive' }}>
              &lt; shah rahul /&gt;
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center" style={{ gap: '2.5rem' }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.name)}
                style={
                  item.name === activeSection
                    ? { backgroundColor: '#2563EB', color: 'white', padding: '10px 24px', borderRadius: '6px', fontSize: '16px', fontWeight: '500', boxShadow: '0 2px 8px rgba(37,99,235,0.3)' }
                    : { color: '#374151', fontSize: '16px', fontWeight: '500' }
                }
                className="transition-all duration-300 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FiMoon className="w-5 h-5 text-gray-700" />
              ) : (
                <FiSun className="w-6 h-6 text-yellow-500" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FiMoon className="w-5 h-5 text-gray-700" />
              ) : (
                <FiSun className="w-6 h-6 text-yellow-500" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveSection(item.name);
                }}
                className={`${
                  item.name === 'Home'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'
                } block px-4 py-2 rounded-md font-medium transition-colors duration-300`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
