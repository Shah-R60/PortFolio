import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'CorrectMe - Debate Platform',
      techStack: 'React.js, Socket.IO, MongoDB, Google Auth, Express, Node.js',
      points: [
        'Developed a real-time random audio debate platform using **Socket.io** and **WebRTC** for seamless peer-to-peer communication.',
        'Enabled users to connect with random participants for live audio debates on **dynamically** assigned topics.',
        'Integrated **MongoDB** to store user data, debate history, and **Google Authentication** for secure and frictionless user onboarding.',
      ],
      link: '#',
    },
    {
      title: 'Nile - An Ecommerce Website',
      techStack: 'MongoDB, Express, Node.js',
      points: [
        'Developed responsive E-commerce website for selling headphones using HTML, CSS and JavaScript on frontend.',
        'Utilized **MongoDB** for data management and implemented secure user authentication using JWT.',
      ],
      link: '#',
    },
    {
      title: 'PrimeFlix - Video Streaming Website',
      techStack: 'MongoDB, Express, Cloudinary, Node.js',
      points: [
        'Developed responsive Video-Streaming website (YouTube clone) using HTML, CSS and JavaScript on frontend.',
        'Integrated video upload functionality and secure user authentication using JWT.',
        'Managed video metadata and user data with MongoDB; deployed video storage and delivery using **Cloudinary**.',
        'Added features like likes, comments, video upload, and post creation.',
      ],
      link: '#',
    },
  ];

  // Helper to render bold text within strings
  const renderText = (text) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
  };

  return (
    <section id="projects" style={{ padding: '5rem 0', backgroundColor: '#f3f4f6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1F2937' }}>
            My <span style={{ color: '#3B82F6' }}>Projects</span>
          </h2>
        </div>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {projects.map((project, index) => (
            <div key={index}>
              {/* Project Title & Tech Stack */}
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#1F2937', marginBottom: '0.75rem' }}>
                {project.title}
                <span style={{ color: '#6B7280', fontWeight: '400' }}> | </span>
                <span style={{ fontStyle: 'italic', fontWeight: '600', color: '#3B82F6', fontSize: '1.1rem' }}>
                  {project.techStack}
                </span>
              </h3>

              {/* Bullet Points */}
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', margin: 0 }}>
                {project.points.map((point, i) => (
                  <li key={i} style={{ fontSize: '1rem', color: '#4B5563', lineHeight: '1.8', marginBottom: '0.25rem' }}>
                    {renderText(point)}
                    {/* Add View link after last bullet */}
                    {i === project.points.length - 1 && (
                      <>
                        {'  '}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#3B82F6', textDecoration: 'underline', fontWeight: '500', marginLeft: '0.5rem' }}
                        >
                          View
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
