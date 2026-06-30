export default function About() {
  return (
    <section id="about" style={{
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
        About <span style={{ color: 'var(--accent)' }}>Me</span>
      </h2>
      <p style={{
        color: 'var(--text-muted)',
        textAlign: 'center',
        marginBottom: '3rem',
        fontSize: '1rem',
      }}>
        Get to know me better
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'center',
      }}>
        {/* Avatar / Visual */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '280px',
            height: '280px',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--gradient-1)',
            padding: '3px',
            animation: 'glow 3s ease-in-out infinite',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: 'calc(var(--radius-lg) - 2px)',
              background: 'var(--bg-secondary)',
              overflow: 'hidden',
            }}>
              <img
                src="/Portfolio-picture.png"
                alt="Dhanush Pavan Kommana"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}>
            I'm a passionate AI Full Stack Developer who loves building modern,
            responsive web applications. With a strong foundation in front-end,
            back-end, and AI technologies including Generative AI, RAG, and
            LangGraph, I enjoy turning complex problems into simple, beautiful,
            intelligent solutions.
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}>
            When I'm not coding, you can find me exploring new technologies or learning about system
            design and cloud architecture.
          </p>


        </div>
      </div>
    </section>
  )
}
