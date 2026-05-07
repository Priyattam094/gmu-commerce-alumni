import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home',     to: '/Landing' },
  { label: 'About',   to: '/Landing/about' },
  { label: 'Contact', to: '/Landing/contact' },
  { label: 'Terms',   to: '/Landing/terms' },
];

const NETWORK_LINKS = [
  { label: 'Join the Network', to: '/signup' },
  { label: 'Sign In',          to: '/login' },
  { label: 'Forgot Password',  to: '/forgot-password' },
];

export default function Content() {
  const year = new Date().getFullYear();

  return (
    <div style={{
      background: 'var(--gmu-800)',
      color: 'rgba(255,255,255,0.7)',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: 'clamp(48px,6vw,72px) clamp(32px,6vw,80px) 0',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
          paddingBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>

          {/* Brand column */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                fontWeight: 600,
                color: '#fff',
                margin: '0 0 4px',
                letterSpacing: '-0.01em',
              }}>
                GMU Commerce Alumni
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                color: 'var(--gold-400)',
                margin: 0,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>
                School of Commerce · GM University
              </p>
            </div>

            <p style={{
              fontSize: 13,
              lineHeight: 1.7,
              maxWidth: 300,
              margin: '0 0 24px',
              color: 'rgba(255,255,255,0.55)',
            }}>
              Connecting graduates of the School of Commerce, GM University — for mentorship, community, and lifelong professional growth.
            </p>

            {/* Social */}
            <div>
              <p style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
                marginBottom: 12,
              }}>
                Follow Us
              </p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 38,
                  height: 38,
                  borderRadius: 'var(--r-md)',
                  background: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'all var(--t-fast)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--gold-500)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = 'var(--gold-500)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: 16,
            }}>
              Platform
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      transition: 'color var(--t-fast)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Network links */}
          <div>
            <p style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: 16,
            }}>
              Alumni Network
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NETWORK_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                      transition: 'color var(--t-fast)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: 16,
            }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p style={{ fontSize: 13, margin: 0, lineHeight: 1.55, color: 'rgba(255,255,255,0.6)' }}>
                School of Commerce<br />
                GM University<br />
                India
              </p>
              <a
                href="mailto:alumni@gmu.ac.in"
                style={{
                  fontSize: 13,
                  color: 'var(--gold-300)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                alumni@gmu.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            © {year} Alumni Association, School of Commerce, GM University. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {[{ l: 'Privacy', t: '/Landing/terms' }, { l: 'Terms', t: '/Landing/terms' }].map(({ l, t }) => (
              <Link
                key={l}
                to={t}
                style={{
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.35)',
                  textDecoration: 'none',
                  transition: 'color var(--t-fast)',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
