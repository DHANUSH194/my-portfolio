const projects = [
  {
    title: 'Rental MERN Stack Application',
    description: [
      'Developed a full-stack car rental platform using MongoDB, Express.js, React, and Node.js, enabling users to browse, book, and manage car rentals online.',
      'Designed dynamic and responsive frontend with React featuring real-time data updates, search functionality, and modular component structure.',
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    gradient: 'linear-gradient(135deg, #6c63ff 0%, #e942f5 100%)',
  },
  {
    title: 'Knee Osteoarthritis Prediction using Deep Learning',
    description: [
      'Developed a Deep Learning model leveraging CNNs to predict the severity of knee osteoarthritis from X-ray images.',
      'Preprocessed medical imaging data using OpenCV and TensorFlow, improving model input quality and reducing noise.',
      'Achieved 92% accuracy in detecting osteoarthritis stages, surpassing traditional diagnostic methods.',
    ],
    tech: ['TensorFlow', 'OpenCV', 'CNN', 'Python'],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: '6rem 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: 700,
        marginBottom: '1rem',
        textAlign: 'center',
      }}>
        Featured <span style={{ color: 'var(--accent)' }}>Projects</span>
      </h2>
      <p style={{
        color: 'var(--text-muted)',
        textAlign: 'center',
        marginBottom: '3rem',
        fontSize: '1rem',
      }}>
        Some of my recent work
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
      }}>
        {projects.map(project => (
          <div key={project.title} style={{
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            overflow: 'hidden',
            background: 'var(--bg-card)',
            transition: 'var(--transition)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-8px)'
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          >
            {/* Project header gradient */}
            <div style={{
              height: '8px',
              background: project.gradient,
            }} />

            <div style={{ padding: '1.75rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                color: 'var(--text-primary)',
              }}>
                {project.title}
              </h3>

              <div style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
              }}>
                {project.description.map((line, idx) => (
                  <p key={idx} style={{ marginBottom: '0.75rem' }}>
                    {line}
                  </p>
                ))}
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    padding: '0.3rem 0.7rem',
                    background: 'var(--bg-primary)',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    color: 'var(--accent)',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                  }}>
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
