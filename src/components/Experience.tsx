const experiences = [
  {
    role: 'Software Developer',
    company: 'Future View Systems',
    duration: 'May 2025 - Present',
    description: [
      'Developed scalable backend services and REST APIs using FastAPI.',
      'Built separate financial AI agents on a unified platform: QuickBooks agent, MD&A summarization agent, Data QA anomaly detection agent, and a generic LLM agent with email, file, and database capabilities.',
      'Worked on a bookkeeping AI agent within the same platform to automate financial record maintenance and transaction reconciliation.',
      'Developed GenAI solutions using RAG, LangGraph, Agentic AI, prompt engineering, and multimodal AI for intelligent automation and workflow orchestration.',
      'Contributed to frontend development with React.js, implementing UI enhancements and integrations.',
      'Utilized AWS services including DynamoDB, S3, and Bedrock for application development and support.',
      'Implemented asynchronous processing, parallel execution, and WebSocket-based real-time features.',
      'Followed software development best practices across Dev, Test, Pre-Production, and Production environments, leveraging GitHub, pull requests, and code reviews for collaborative development.',
    ],
    tech: ['React', 'TypeScript', 'AWS', 'Python','FastAPI', 'Generative AI', 'RAG', 'Langgraph', 'Agentic AI'],
    type: 'work',
  },
]


export default function Experience() {
  return (
    <section id="experience" style={{
      padding: '6rem 2rem',
      background: 'var(--bg-secondary)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
          textAlign: 'center',
        }}>
          My <span style={{ color: 'var(--accent)' }}>Experience</span>
        </h2>
        <p style={{
          color: 'var(--text-muted)',
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '1rem',
        }}>
          My professional journey so far
        </p>

        {/* Timeline */}
        <div style={{
          position: 'relative',
          paddingLeft: '2rem',
        }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '6px',
            top: '8px',
            bottom: '8px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent), var(--border))',
            borderRadius: '2px',
          }} />

          {experiences.map((exp, index) => (
            <div key={index} style={{
              position: 'relative',
              marginBottom: '2.5rem',
              paddingLeft: '1.5rem',
            }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-1.55rem',
                top: '8px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: 'var(--accent)',
                border: '3px solid var(--bg-secondary)',
                boxShadow: '0 0 10px var(--accent-glow)',
              }} />

              {/* Card */}
              <div style={{
                padding: '1.75rem',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.transform = 'translateX(5px)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(108, 99, 255, 0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}>
                    {exp.role}
                  </h3>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    background: 'var(--bg-primary)',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    color: 'var(--accent)',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}>
                    {exp.duration}
                  </span>
                </div>

                <p style={{
                  color: 'var(--accent)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  marginBottom: '0.75rem',
                }}>
                  {exp.company}
                </p>

                <ul style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                  paddingLeft: '1.2rem',
                  listStyle: 'disc',
                }}>
                  {exp.description.map((point, i) => (
                    <li key={i} style={{ marginBottom: '0.4rem' }}>{point}</li>
                  ))}
                </ul>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}>
                  {exp.tech.map(t => (
                    <span key={t} style={{
                      padding: '0.25rem 0.6rem',
                      background: 'var(--bg-primary)',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border)',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
