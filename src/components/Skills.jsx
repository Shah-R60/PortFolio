import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiTypescript, SiExpress, SiPostman, SiReact, SiRedux, SiFirebase, SiCplusplus } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'C Language', icon: SiCplusplus, color: '#00599C' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
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

  return (
    <section id="skills" style={{ padding: '5rem 0', backgroundColor: '#f3f4f6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1F2937' }}>
            My <span style={{ color: '#3B82F6' }}>Skills</span>
          </h2>
        </div>

        {/* Subheading */}
        <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#3B82F6', marginBottom: '1rem' }}>
          Technologies and Tools
        </h3>
        <p style={{ fontSize: '1.05rem', color: '#6B7280', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '900px' }}>
          Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
        </p>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 2rem',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '10px',
                  cursor: 'default',
                }}
                className="hover:shadow-md transition-all duration-300"
              >
                <IconComponent style={{ fontSize: '32px', color: skill.color, flexShrink: 0 }} />
                <span style={{ fontSize: '1rem', fontWeight: '500', color: '#1F2937' }}>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
