const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React', 'TypeScript', 'Bootstrap', 'HTML/CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Python', 'FastAPI', 'NodeJs', 'REST APIs', 'NoSQL', 'PostgreSQL', 'Sockets',],
  },
  {
    title: 'AI & ML',
    icon: '🤖',
    skills: ['GenerativeAI', 'LangGraph', 'Prompt Engineering', 'RAG', 'Agentic AI', 'MultiModal AI'],
  },
  {
    title: 'Tools & Cloud',
    icon: '☁️',
    skills: ['Git', 'Github', 'AWS'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '6rem 2rem',
      background: 'var(--bg-secondary)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
          textAlign: 'center',
        }}>
          My <span style={{ color: 'var(--accent)' }}>Skills</span>
        </h2>
        <p style={{
          color: 'var(--text-muted)',
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '1rem',
        }}>
          Technologies I work with
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {skillCategories.map(category => (
            <div key={category.title} style={{
              padding: '2rem',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)',
              transition: 'var(--transition)',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(108, 99, 255, 0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
              }}>
                {category.icon}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
              }}>
                {category.title}
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
              }}>
                {category.skills.map(skill => (
                  <span key={skill} style={{
                    padding: '0.4rem 0.9rem',
                    background: 'var(--bg-primary)',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border)',
                    transition: 'var(--transition)',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
