export default function Footer() {
  return (
    <footer style={{
      padding: '2rem',
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
    }}>
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
      }}>
        © {new Date().getFullYear()} <span style={{ color: 'var(--accent)' }}>Dhanush Pavan</span>. Built with React & TypeScript.
      </p>
    </footer>
  )
}
