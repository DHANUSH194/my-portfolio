import { useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"

type SubmitStatus = "idle" | "sending" | "sent" | "error"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<SubmitStatus>("idle")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS configuration. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.")
      setStatus("error")
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          subject,
          message,
        },
        publicKey
      )
      setStatus("sent")
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch (error) {
      console.error("EmailJS send error:", error)
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        background: "var(--bg-secondary)",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Get In <span style={{ color: "var(--accent)" }}>Touch</span>
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            textAlign: "center",
            marginBottom: "3rem",
            fontSize: "1rem",
          }}
        >
          Have a project in mind? Let's work together!
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "1rem 1.25rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                color: "var(--text-primary)",
                fontSize: "0.95rem",
                outline: "none",
                transition: "var(--transition)",
                fontFamily: "inherit",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--accent)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "1rem 1.25rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                color: "var(--text-primary)",
                fontSize: "0.95rem",
                outline: "none",
                transition: "var(--transition)",
                fontFamily: "inherit",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--accent)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{
              padding: "1rem 1.25rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              color: "var(--text-primary)",
              fontSize: "0.95rem",
              outline: "none",
              transition: "var(--transition)",
              fontFamily: "inherit",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              padding: "1rem 1.25rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              color: "var(--text-primary)",
              fontSize: "0.95rem",
              outline: "none",
              resize: "vertical",
              transition: "var(--transition)",
              fontFamily: "inherit",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          />

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              padding: "1rem 2.5rem",
              background: "var(--gradient-1)",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: status === "sending" ? "not-allowed" : "pointer",
              transition: "var(--transition)",
              alignSelf: "center",
              boxShadow: "0 4px 20px var(--accent-glow)",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              if (status !== "sending") {
                e.currentTarget.style.transform = "translateY(-2px)"
                e.currentTarget.style.boxShadow = "0 8px 30px var(--accent-glow)"
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 4px 20px var(--accent-glow)"
            }}
          >
            {status === "sending" ? "Sending..." : "Send Message ✉️"}
          </button>

          <p
            style={{
              color:
                status === "sent"
                  ? "var(--accent)"
                  : status === "error"
                  ? "#ff6b6b"
                  : "var(--text-muted)",
              fontSize: "0.95rem",
              textAlign: "center",
              minHeight: "1.4rem",
            }}
          >
            {status === "sent"
              ? "Message sent — I'll reply soon."
              : status === "error"
              ? "Oops, something went wrong. Please try again later."
              : ""}
          </p>
        </form>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          {[
            {
              label: "GitHub",
              url: "https://github.com/DHANUSH194/",
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              url: "https://www.linkedin.com/in/dhanush-pavan-kommana-028276281/",
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              label: "Email",
              url: "mailto:dhanushpavankommana12@gmail.com",
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--bg-card)",
                borderRadius: "50%",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                transition: "var(--transition)",
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
              onPointerDown={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onPointerUp={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
