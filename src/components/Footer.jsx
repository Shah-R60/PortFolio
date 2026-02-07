import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Shah-R60', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shah-rahul-1a33b4282/', label: 'LinkedIn' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/Shah_Rahul/', label: 'Leetcode' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer style={{ backgroundColor: '#1f2937', color: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem' }}>
          {/* About Section */}
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1rem', fontFamily: "'Kaushan Script', cursive" }}>
              &lt;shah rahul/&gt;
            </h3>
            <p style={{ color: '#9ca3af', marginBottom: '1rem', lineHeight: '1.6', fontStyle: 'italic', fontSize: '0.9rem' }}>
              Front-End / Full-Stack Developer passionate about creating beautiful and
              functional web experiences.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    backgroundColor: '#374151',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d1d5db',
                    fontSize: '1rem',
                    textDecoration: 'none',
                  }}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem' }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', color: '#9ca3af', fontSize: '0.95rem' }}>
              <li>Email: shahrahul3600@gmail.com</li>
              <li>Phone: +91 7283881124</li>
              <li>Location: IIITM Gwalior, India</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid #374151', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: '#9ca3af', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', fontSize: '0.9rem' }}>
            © {currentYear} Shah Rahul. Made with
            <FaHeart style={{ color: '#ef4444' }} />
            by Rahul
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
