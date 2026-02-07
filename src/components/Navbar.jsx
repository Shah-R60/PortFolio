import { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme, bgNavbar, textPrimary, accent } = useTheme();
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
    <nav style={{ position: 'sticky', top: 0, width: '100%', backgroundColor: bgNavbar, backdropFilter: 'blur(8px)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', zIndex: 50, transition: 'background-color 0.3s' }}>
      <div style={{ width: '100%', padding: '0 3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          {/* Logo */}
          <div>
            <a href="#home" style={{ fontSize: '1.5rem', fontWeight: '700', color: textPrimary, textDecoration: 'none', fontFamily: '"Kaushan Script", cursive' }}>
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
                    ? { backgroundColor: '#2563EB', color: 'white', padding: '10px 24px', borderRadius: '6px', fontSize: '16px', fontWeight: '500', boxShadow: '0 2px 8px rgba(37,99,235,0.3)', textDecoration: 'none' }
                    : { color: textPrimary, fontSize: '16px', fontWeight: '500', textDecoration: 'none' }
                }
                className="transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={{ padding: '8px', borderRadius: '50%', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FiSun style={{ width: '22px', height: '22px', color: '#facc15' }} />
              ) : (
                <FiMoon style={{ width: '22px', height: '22px', color: textPrimary }} />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden" style={{ display: 'none', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ padding: '8px', borderRadius: '6px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', color: textPrimary }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX style={{ width: '24px', height: '24px' }} />
              ) : (
                <FiMenu style={{ width: '24px', height: '24px' }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{ backgroundColor: isDark ? '#1e293b' : '#ffffff', borderTop: `1px solid ${isDark ? '#334155' : '#e5e7eb'}`, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} className="md:hidden">
          <div style={{ padding: '0.5rem 1rem 1rem' }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveSection(item.name);
                }}
                style={{
                  display: 'block',
                  padding: '10px 16px',
                  borderRadius: '6px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  marginBottom: '4px',
                  ...(item.name === activeSection
                    ? { backgroundColor: '#2563EB', color: 'white' }
                    : { color: textPrimary }),
                }}
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
