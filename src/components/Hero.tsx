export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '2rem',
      overflow: 'hidden',
    }}>
      {/* Background gradient orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(108, 99, 255, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(233, 66, 245, 0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      <div style={{
        textAlign: 'center',
        maxWidth: '800px',
        position: 'relative',
        zIndex: 1,
      }}>
        <p style={{
          color: 'var(--accent)',
          fontSize: '1rem',
          fontWeight: 500,
          marginBottom: '1rem',
          fontFamily: "'JetBrains Mono', monospace",
          animation: 'fadeInUp 0.6s ease forwards',
        }}>
          👋 Hello, I'm
        </p>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          animation: 'fadeInUp 0.6s ease 0.2s forwards',
          opacity: 0,
        }}>
          <span style={{
            background: 'var(--gradient-1)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradient 4s ease infinite',
          }}>
            Dhanush Pavan
          </span>
        </h1>

        <h2 style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          fontWeight: 400,
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          animation: 'fadeInUp 0.6s ease 0.4s forwards',
          opacity: 0,
        }}>
          AI Full Stack Developer & Creative Problem Solver
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-muted)',
          maxWidth: '600px',
          margin: '0 auto 3rem',
          animation: 'fadeInUp 0.6s ease 0.6s forwards',
          opacity: 0,
        }}>
          AI Full Stack Developer with 1+ years of experience building GenAI-powered applications using FastAPI, React, RAG, Langgraph and AWS. Skilled in developing scalable backend systems, AI-driven features, and end-to-end web applications
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'fadeInUp 0.6s ease 0.8s forwards',
          opacity: 0,
        }}>
          <a href="#projects" style={{
            padding: '0.875rem 2rem',
            background: 'var(--gradient-1)',
            color: '#fff',
            borderRadius: '50px',
            fontWeight: 600,
            fontSize: '0.95rem',
            transition: 'var(--transition)',
            boxShadow: '0 4px 20px var(--accent-glow)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px var(--accent-glow)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px var(--accent-glow)' }}
          >
            View My Work
          </a>
          <a href="#contact" style={{
            padding: '0.875rem 2rem',
            border: '2px solid var(--border)',
            color: 'var(--text-primary)',
            borderRadius: '50px',
            fontWeight: 600,
            fontSize: '0.95rem',
            transition: 'var(--transition)',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'float 2s ease-in-out infinite',
      }}>
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid var(--border)',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '8px',
        }}>
          <div style={{
            width: '3px',
            height: '8px',
            background: 'var(--accent)',
            borderRadius: '2px',
            animation: 'float 1.5s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  )
}
