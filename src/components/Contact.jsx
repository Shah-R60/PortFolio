import { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    backgroundColor: '#374151',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '8px',
    fontSize: '0.95rem',
  };

  const socialIcons = [
    { icon: FaGithub, link: 'https://github.com/Shah-R60' },
    { icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/shah-rahul-1a33b4282/' },
    { icon: SiLeetcode, link: 'https://leetcode.com/u/Shah_Rahul/' },
  ];

  return (
    <section id="contact" style={{ padding: '5rem 2rem', backgroundColor: '#ffffff' }}>
      {/* Heading */}
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '800', color: '#1f2937', marginBottom: '3rem' }}>
        Contact
      </h2>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Left Side - Form */}
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#3b82f6', marginBottom: '0.5rem' }}>
            Connect with me
          </h3>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', maxWidth: '500px' }}>
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Enter your message"
                style={{ ...inputStyle, resize: 'vertical' }}
              ></textarea>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <a
                href="mailto:shahrahul3600@gmail.com"
                style={{ color: '#1f2937', fontSize: '0.9rem', textDecoration: 'underline' }}
              >
                Send me email directly
              </a>
              <button
                type="submit"
                style={{
                  backgroundColor: '#6366f1',
                  color: '#fff',
                  padding: '12px 40px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Info */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem', paddingTop: '2rem' }}>
          {/* Email */}
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1f2937', marginBottom: '0.5rem' }}>Email</h4>
            <a
              href="mailto:shahrahul3600@gmail.com"
              style={{ color: '#3b82f6', fontSize: '0.95rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}
            >
              SHAHRAHUL3600@GMAIL.COM
            </a>
          </div>

          {/* Address */}
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1f2937', marginBottom: '0.5rem' }}>Address</h4>
            <p style={{ color: '#3b82f6', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              IIITM GWALIOR, MADHYA PRADESH<br />INDIA
            </p>
          </div>

          {/* Social */}
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1f2937', marginBottom: '1rem' }}>Social</h4>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '10px',
                    border: '2px solid #9ca3af',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6b7280',
                    fontSize: '1.25rem',
                    transition: 'all 0.3s',
                  }}
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
