import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',    href: '/Landing' },
  { label: 'About',   href: '/Landing/about' },
  { label: 'Contact', href: '/Landing/contact' },
];

const S = {
  nav: (scrolled) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'all 0.3s ease',
    background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
    boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
  }),
  inner: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 32px',
    height: 68,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.1,
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    padding: 0,
  },
  logoTop: {
    fontFamily: 'var(--font-display)',
    fontSize: 20,
    fontWeight: 600,
    color: 'var(--gmu-600)',
    letterSpacing: '-0.01em',
  },
  logoSub: {
    fontFamily: 'var(--font-body)',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--n-500)',
  },
  navLinks: {
    display: 'flex',
    gap: 4,
    alignItems: 'center',
  },
  navLink: (active) => ({
    padding: '7px 16px',
    borderRadius: 'var(--r-md)',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    fontWeight: 500,
    textDecoration: 'none',
    color: active ? 'var(--gmu-600)' : 'var(--n-600)',
    background: active ? 'var(--gmu-50)' : 'transparent',
    transition: 'all var(--t-fast)',
    border: 'none',
    cursor: 'pointer',
  }),
  actions: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
  },
  signIn: {
    padding: '8px 20px',
    borderRadius: 'var(--r-md)',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--gmu-600)',
    background: 'transparent',
    border: '1px solid var(--gmu-200)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all var(--t-fast)',
    display: 'inline-flex',
    alignItems: 'center',
  },
  joinBtn: {
    padding: '8px 20px',
    borderRadius: 'var(--r-md)',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    fontWeight: 500,
    color: '#fff',
    background: 'var(--gmu-600)',
    border: '1px solid var(--gmu-600)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all var(--t-fast)',
    display: 'inline-flex',
    alignItems: 'center',
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (href) =>
    href === '/Landing'
      ? location.pathname === '/Landing' || location.pathname === '/Landing/'
      : location.pathname.startsWith(href);

  return (
    <nav style={S.nav(scrolled)}>
      <div style={S.inner}>
        {/* Logo */}
        <Link to="/Landing" style={{ textDecoration: 'none' }}>
          <div style={S.logo}>
            <span style={S.logoTop}>GMU Commerce Alumni</span>
            <span style={S.logoSub}>School of Commerce · GM University</span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div style={S.navLinks} className="hidden md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} to={href} style={S.navLink(isActive(href))}>
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div style={S.actions} className="hidden md:flex">
          <Link to="/login" style={S.signIn}>Sign In</Link>
          <Link to="/signup" style={S.joinBtn}>Join Network</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--n-700)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          style={{
            background: '#fff',
            borderTop: '1px solid var(--border-subtle)',
            padding: '16px 24px 24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                style={{
                  ...S.navLink(isActive(href)),
                  display: 'block',
                  padding: '10px 16px',
                }}
              >
                {label}
              </Link>
            ))}
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              <Link to="/login"  style={{ ...S.signIn,  flex: 1, justifyContent: 'center' }}>Sign In</Link>
              <Link to="/signup" style={{ ...S.joinBtn, flex: 1, justifyContent: 'center' }}>Join Network</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
