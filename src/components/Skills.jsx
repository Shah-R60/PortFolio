import { useRef, useEffect, useState } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiTypescript, SiExpress, SiPostman, SiReact, SiRedux, SiFirebase, SiCplusplus } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { bgSecondary, bgCard, textPrimary, textMuted } = useTheme();
  const { isDark } = useTheme();
  const [visibleRows, setVisibleRows] = useState([]);
  const rowRefs = useRef([]);

  const skills = [
    { name: 'C Language', icon: SiCplusplus, color: '#00599C' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Express', icon: SiExpress, color: isDark ? '#e2e8f0' : '#000000' },
    { name: 'NodeJS', icon: FaNode, color: '#339933' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'React Native', icon: SiReact, color: '#61DAFB' },
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'Javascript', icon: FaJs, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Mongo DB', icon: SiMongodb, color: '#47A248' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  ];

  // Split skills into rows of 5
  const rows = [];
  for (let i = 0; i < skills.length; i += 5) {
    rows.push(skills.slice(i, i + 5));
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rowIndex = Number(entry.target.dataset.row);
          if (entry.isIntersecting) {
            setVisibleRows((prev) => {
              if (!prev.includes(rowIndex)) return [...prev, rowIndex];
              return prev;
            });
          } else {
            setVisibleRows((prev) => prev.filter((r) => r !== rowIndex));
          }
        });
      },
      { threshold: 0.2 }
    );

    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Keyframes injected via style tag
  const slideUpKeyframes = `
    @keyframes slideUpRow {
      0% { 
        transform: translateY(80px) translateZ(0px); 
        opacity: 0; 
      }
      60% { 
        transform: translateY(-10px) translateZ(0px); 
        opacity: 1; 
      }
      80% { 
        transform: translateY(5px) translateZ(0px); 
      }
      100% { 
        transform: translateY(0) translateZ(0px); 
        opacity: 1; 
      }
    }
  `;

  return (
    <section id="skills" style={{ padding: '5rem 0', backgroundColor: bgSecondary, transition: 'background-color 0.3s' }}>
      <style>{slideUpKeyframes}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: textPrimary }}>
            My <span style={{ color: '#3B82F6' }}>Skills</span>
          </h2>
        </div>

        {/* Subheading */}
        <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#3B82F6', marginBottom: '1rem' }}>
          Technologies and Tools
        </h3>
        <p style={{ fontSize: '1.05rem', color: textMuted, lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '900px' }}>
          Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
        </p>

        {/* Skills Grid - Row by Row */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              ref={(el) => (rowRefs.current[rowIndex] = el)}
              data-row={rowIndex}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '1.5rem',
                opacity: visibleRows.includes(rowIndex) ? 1 : 0,
                animation: visibleRows.includes(rowIndex)
                  ? `slideUpRow 0.6s ease-out ${rowIndex * 0.1}s both`
                  : 'none',
              }}
            >
              {row.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 2rem',
                      backgroundColor: isDark ? '#0f172a' : '#ffffff',
                      borderRadius: '10px',
                      cursor: 'default',
                      border: isDark ? '1px solid #334155' : '1px solid #e5e7eb',
                      transition: 'background-color 0.3s',
                    }}
                    className="hover:shadow-md transition-all duration-300"
                  >
                    <IconComponent style={{ fontSize: '32px', color: skill.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '1rem', fontWeight: '500', color: textPrimary }}>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
