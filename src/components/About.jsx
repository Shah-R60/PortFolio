import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { bgPrimary, textPrimary, textSecondary } = useTheme();

  return (
    <section id="about" style={{ padding: '5rem 0', backgroundColor: bgPrimary, transition: 'background-color 0.3s' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: textPrimary }}>
            About <span style={{ color: '#3B82F6' }}>Me</span>
          </h2>
        </div>

        {/* Subheading */}
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#3B82F6', marginBottom: '1.5rem' }}>
          A bit about me
        </h3>

        {/* Description */}
        <p style={{ fontSize: '1.05rem', color: textSecondary, lineHeight: '1.9', textAlign: 'justify' }}>
          I'm a self-taught web developer and Full-Stack Developer with experience in designing new features from ideation to production, 
          implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience 
          while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like 
          to accompany from the first idea to release. Currently, I'm working at CloudStok Technologies as a Front-End Developer.
        </p>
      </div>
    </section>
  );
};

export default About;
