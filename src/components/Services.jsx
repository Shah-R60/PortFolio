import { FaBuilding, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Services = () => {
  const { bgPrimary, textPrimary, textSecondary, textMuted } = useTheme();

  return (
    <section id="experience" style={{ padding: '5rem 0', backgroundColor: bgPrimary, transition: 'background-color 0.3s' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: textPrimary }}>
            My <span style={{ color: '#3B82F6' }}>Experience</span>
          </h2>
        </div>

        {/* Experience Card */}
        <div style={{ borderRadius: '12px', padding: '2.5rem 0' }}>
          {/* Company and Role */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: textPrimary, marginBottom: '0.5rem' }}>
              Full Stack Developer Intern
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <FaBuilding style={{ color: '#3B82F6', fontSize: '1.1rem' }} />
              <p style={{ fontSize: '1.15rem', color: '#3B82F6', fontWeight: '600' }}>
                Rishishwar Industry Private Limited - Techori Division
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <FaCalendarAlt style={{ color: textMuted, fontSize: '1.1rem' }} />
              <div>
                <p style={{ fontSize: '0.875rem', color: textMuted, marginBottom: '0.25rem' }}>Duration</p>
                <p style={{ fontSize: '1rem', color: textPrimary, fontWeight: '600' }}>August 2025 - November 2025</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <FaBriefcase style={{ color: textMuted, fontSize: '1.1rem' }} />
              <div>
                <p style={{ fontSize: '0.875rem', color: textMuted, marginBottom: '0.25rem' }}>Type</p>
                <p style={{ fontSize: '1rem', color: textPrimary, fontWeight: '600' }}>Remote • Paid</p>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: textPrimary, marginBottom: '1rem' }}>
              Key Responsibilities
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#3B82F6', fontSize: '1.25rem', lineHeight: '1.5' }}>•</span>
                <p style={{ fontSize: '1rem', color: textSecondary, lineHeight: '1.7' }}>
                  Developed and maintained full-stack web applications using modern technologies and frameworks
                </p>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#3B82F6', fontSize: '1.25rem', lineHeight: '1.5' }}>•</span>
                <p style={{ fontSize: '1rem', color: textSecondary, lineHeight: '1.7' }}>
                  Collaborated with the development team to design and implement new features while adhering to professional standards
                </p>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#3B82F6', fontSize: '1.25rem', lineHeight: '1.5' }}>•</span>
                <p style={{ fontSize: '1rem', color: textSecondary, lineHeight: '1.7' }}>
                  Successfully completed all assigned responsibilities within the 75 working days internship tenure
                </p>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#3B82F6', fontSize: '1.25rem', lineHeight: '1.5' }}>•</span>
                <p style={{ fontSize: '1rem', color: textSecondary, lineHeight: '1.7' }}>
                  Maintained professional conduct and met all organizational requirements throughout the internship period
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
