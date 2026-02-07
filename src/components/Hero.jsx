import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { ReactTyped } from 'react-typed';
import { useTheme } from '../context/ThemeContext';
import backCloud from '../assets/backCloud.png';
import programmer from '../assets/programmer.png';

const Hero = () => {
  const { isDark, textPrimary, textSecondary, border } = useTheme();

  return (
    <section 
      id="home" 
      style={{
        backgroundImage: isDark ? 'none' : `url(${backCloud})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: isDark ? '#0f172a' : undefined,
        background: isDark ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' : undefined,
        transition: 'background-color 0.3s',
      }}
      className={isDark ? '' : 'bg-gradient-to-br from-cyan-300 via-cyan-200 to-blue-200'}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Left Content - Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '700', color: textPrimary, lineHeight: '1.2' }}>
              Hi, I am Rahul
            </h1>
            
            {/* Typing Effect */}
            <div style={{ fontSize: '2rem', fontWeight: '700', minHeight: '50px' }}>
              <ReactTyped
                strings={[
                  'Front-End Developer',
                  'Full-Stack Developer',
                  'Code Enthusiast'
                ]}
                typeSpeed={50}
                backSpeed={50}
                loop
                className="text-blue-600"
              />
            </div>

            <p style={{ fontSize: '1.125rem', color: textSecondary, lineHeight: '1.7', maxWidth: '32rem' }}>
              I am a Front-End / Full-Stack Developer. I am currently working
              at CloudStok Technologies as a Front-End Developer.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
              <a href="https://github.com/Shah-R60" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300" style={{ width: '45px', height: '45px', borderRadius: '12px', border: `2px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: textSecondary }}>
                <FaGithub style={{ fontSize: '22px' }} />
              </a>
              <a href="https://www.linkedin.com/in/shah-rahul-1a33b4282/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300" style={{ width: '45px', height: '45px', borderRadius: '12px', border: `2px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: textSecondary }}>
                <FaLinkedin style={{ fontSize: '22px' }} />
              </a>
              <a href="https://leetcode.com/u/Shah_Rahul/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300" style={{ width: '45px', height: '45px', borderRadius: '12px', border: `2px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: textSecondary }}>
                <SiLeetcode style={{ fontSize: '22px' }} />
              </a>
            </div>

            {/* Resume Button */}
            <div style={{ paddingTop: '1rem' }}>
              <a href="https://drive.google.com/file/d/1hbtk1tzxSDFYQSwI04vszDggpESTPXvi/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', width: '280px', padding: '14px 0', backgroundColor: '#3B82F6', color: 'white', borderRadius: '8px', border: 'none', fontSize: '18px', fontWeight: '500', cursor: 'pointer', boxShadow: '0 4px 14px rgba(59,130,246,0.4)', textAlign: 'center', textDecoration: 'none' }} className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Resume
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={programmer}
              alt="Developer illustration"
              style={{ width: '100%', maxWidth: '520px' }}
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
