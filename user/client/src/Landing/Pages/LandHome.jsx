import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

/* ─── Shared micro-components (UI-kit style) ──────────────────────────────── */

function Overline({ children, light = false }) {
  return (
    <p style={{
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: light ? 'var(--gold-300)' : 'var(--n-500)',
      margin: 0,
    }}>
      {children}
    </p>
  );
}

function SectionHeading({ children, light = false, center = false }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2rem, 3.5vw, 3rem)',
      fontWeight: 600,
      letterSpacing: '-0.015em',
      lineHeight: 1.15,
      color: light ? '#fff' : 'var(--n-900)',
      margin: '12px 0 0',
      textAlign: center ? 'center' : 'left',
    }}>
      {children}
    </h2>
  );
}

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ────────────────────────────────────────────────────────────────── */

const STATS = [
  { value: '2,500+', label: 'Alumni Worldwide' },
  { value: '50+',    label: 'Annual Events' },
  { value: '150+',   label: 'Active Mentors' },
  { value: '20+',    label: 'Batch Years' },
];

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: 'Connect with Peers',
    desc: 'Find and reconnect with batchmates, professors, and Commerce graduates across all years and industries.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Mentorship Programme',
    desc: 'Get career guidance from senior alumni or give back as a mentor. Every Commerce graduate has a story worth sharing.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
      </svg>
    ),
    title: 'Events & Reunions',
    desc: 'Annual convocations, batch reunions, webinars, panel discussions, and cultural events — all in one place.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    title: 'Career Opportunities',
    desc: 'Jobs, internships, and collaborations posted exclusively by and for the GMU Commerce community.',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Verify Your Alumni Status',
    desc: 'Sign up with your GM University email or student ID. Our team verifies your Commerce school enrolment.',
  },
  {
    number: '02',
    title: 'Build Your Profile',
    desc: 'Add your graduation year, specialisation, current role, and career journey. Let alumni find you easily.',
  },
  {
    number: '03',
    title: 'Connect & Grow',
    desc: 'Discover batchmates, join mentorship, attend events, and access exclusive opportunities — for life.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Ritesh Sharma',
    batch: 'B.Com 2018 · CA, Deloitte Mumbai',
    quote:
      'The mentorship programme connected me with a senior who guided me through my CA articleship. I genuinely believe I wouldn\'t be where I am without the alumni network.',
  },
  {
    name: 'Priya Agarwal',
    batch: 'MBA 2016 · Co-founder, FinEdge',
    quote:
      'I found my co-founder at an alumni webinar. The GMU Commerce network is small enough to feel personal and large enough to open real doors.',
  },
  {
    name: 'Amit Verma',
    batch: 'M.Com 2020 · Finance Manager, HDFC',
    quote:
      'Being a mentor has been as rewarding as being mentored. Giving back to juniors keeps me rooted in the values that the School of Commerce gave us.',
  },
];

/* ─── Sections ────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        background: 'var(--surface-bg)',
        paddingTop: 68,          /* offset fixed navbar */
      }}
    >
      {/* Left: text */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(48px, 8vw, 96px) clamp(32px, 5vw, 72px) clamp(48px, 8vw, 96px) clamp(32px, 8vw, 96px)',
          maxWidth: 680,
          marginLeft: 'auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Overline>School of Commerce · GM University</Overline>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: 'var(--n-900)',
            margin: '20px 0 24px',
          }}>
            Welcome Home,<br />
            <span style={{ color: 'var(--gmu-600)' }}>Commerce Alumni</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 18,
            color: 'var(--n-600)',
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 36,
          }}>
            Reconnect with batchmates, find mentors, explore opportunities, and give back — all through the official alumni platform of the School of Commerce, GM University.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
            <Link
              to="/signup"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                background: 'var(--gmu-600)',
                color: '#fff',
                borderRadius: 'var(--r-md)',
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all var(--t-base)',
                border: '1px solid var(--gmu-600)',
              }}
            >
              Join the Network
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              to="/login"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '14px 28px',
                background: 'transparent',
                color: 'var(--n-700)',
                borderRadius: 'var(--r-md)',
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
                border: '1px solid var(--border-strong)',
                transition: 'all var(--t-base)',
              }}
            >
              Sign In
            </Link>
          </div>

          {/* Trust line */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: 'var(--n-500)',
          }}>
            <span style={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#22c55e',
            }} />
            2,500+ verified alumni already connected
          </div>
        </motion.div>
      </div>

      {/* Right: visual card */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(48px, 6vw, 80px) clamp(32px, 6vw, 80px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient blob */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 70% at 60% 50%, var(--gmu-50) 0%, transparent 80%)',
        }} />

        {/* Main card */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: 400,
          background: '#fff',
          borderRadius: 'var(--r-2xl)',
          boxShadow: 'var(--shadow-xl)',
          padding: 32,
          border: '1px solid var(--border-subtle)',
        }}>
          {/* Card header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 24,
            paddingBottom: 20,
            borderBottom: '1px solid var(--border-subtle)',
          }}>
            <div style={{
              width: 44,
              height: 44,
              borderRadius: 'var(--r-full)',
              background: 'var(--gmu-600)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontFamily: 'var(--font-display)',
              fontSize: 18,
              fontWeight: 600,
              flexShrink: 0,
            }}>
              GMU
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--n-900)', margin: 0 }}>
                Alumni Network
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--n-500)', margin: 0 }}>
                School of Commerce, GM University
              </p>
            </div>
          </div>

          {/* Mini stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
            {[
              { v: '2,500+', l: 'Alumni' },
              { v: '150+',   l: 'Mentors' },
              { v: '50+',    l: 'Events/yr' },
              { v: '20+',    l: 'Batch years' },
            ].map(({ v, l }) => (
              <div key={l} style={{
                background: 'var(--gmu-50)',
                borderRadius: 'var(--r-lg)',
                padding: '14px 16px',
                border: '1px solid var(--gmu-100)',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'var(--gmu-600)', margin: 0, lineHeight: 1 }}>{v}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--n-500)', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{l}</p>
              </div>
            ))}
          </div>

          {/* Alumni avatars row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex' }}>
              {['RS', 'PA', 'AV', 'MK', 'NJ'].map((init, i) => (
                <div key={init} style={{
                  width: 32,
                  height: 32,
                  borderRadius: 'var(--r-full)',
                  background: `hsl(${215 + i * 18}, 45%, ${38 + i * 5}%)`,
                  border: '2px solid #fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  fontWeight: 600,
                  color: '#fff',
                  marginLeft: i === 0 ? 0 : -8,
                }}>
                  {init}
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--n-500)', margin: 0 }}>
              + 2,495 more alumni
            </p>
          </div>

          {/* Join CTA inside card */}
          <Link
            to="/signup"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 20,
              padding: '11px 0',
              background: 'var(--gmu-600)',
              color: '#fff',
              borderRadius: 'var(--r-md)',
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background var(--t-fast)',
            }}
          >
            Join the Network — It's Free
          </Link>
        </div>

        {/* Floating badge: top-right */}
        <div style={{
          position: 'absolute',
          top: '18%',
          right: '8%',
          background: '#fff',
          borderRadius: 'var(--r-lg)',
          boxShadow: 'var(--shadow-md)',
          padding: '10px 14px',
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--n-700)', margin: 0, fontWeight: 500 }}>
            Active Mentorship Open
          </p>
        </div>

        {/* Floating badge: bottom-left */}
        <div style={{
          position: 'absolute',
          bottom: '18%',
          left: '6%',
          background: 'var(--gmu-600)',
          borderRadius: 'var(--r-lg)',
          boxShadow: 'var(--shadow-md)',
          padding: '10px 14px',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#fff', margin: 0, fontWeight: 500 }}>
            📅 Annual Meet — Dec 2026
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function StatsBar() {
  return (
    <FadeUp>
      <section style={{ background: 'var(--gmu-600)', padding: '52px 80px' }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
        }}>
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              style={{
                textAlign: 'center',
                padding: '0 24px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: 'var(--gold-300)',
                margin: 0,
                lineHeight: 1,
              }}>
                {value}
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'rgba(255,255,255,0.7)',
                margin: '8px 0 0',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 500,
              }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </FadeUp>
  );
}

function FeaturesSection() {
  return (
    <section style={{ padding: 'clamp(64px,10vw,108px) clamp(32px,8vw,96px)', background: 'var(--surface-bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 56px' }}>
            <Overline>What We Offer</Overline>
            <SectionHeading center>Everything You Need to Stay Connected</SectionHeading>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              color: 'var(--n-500)',
              marginTop: 16,
              lineHeight: 1.65,
            }}>
              One platform for the entire alumni lifecycle — from graduation to mentorship to reunion.
            </p>
          </div>
        </FadeUp>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {FEATURES.map(({ icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <FeatureCard icon={icon} title={title} desc={desc} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      style={{
        background: 'var(--surface-elevated)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--r-xl)',
        padding: '32px 28px',
        transition: 'box-shadow var(--t-base), transform var(--t-base)',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'none';
      }}
    >
      <div style={{
        width: 52,
        height: 52,
        borderRadius: 'var(--r-lg)',
        background: 'var(--gmu-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--gmu-600)',
        marginBottom: 20,
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 21,
        fontWeight: 500,
        color: 'var(--n-900)',
        margin: '0 0 10px',
        lineHeight: 1.25,
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        color: 'var(--n-500)',
        lineHeight: 1.65,
        margin: 0,
      }}>
        {desc}
      </p>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section style={{
      padding: 'clamp(64px,10vw,108px) clamp(32px,8vw,96px)',
      background: 'var(--surface-subtle)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 56px' }}>
            <Overline>How It Works</Overline>
            <SectionHeading center>From Graduate to Network Member in Minutes</SectionHeading>
          </div>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative' }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute',
            top: 36,
            left: '16.5%',
            right: '16.5%',
            height: 1,
            background: 'var(--border-default)',
            zIndex: 0,
          }} />

          {STEPS.map(({ number, title, desc }, i) => (
            <FadeUp key={number} delay={i * 0.1}>
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                {/* Step circle */}
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: 'var(--r-full)',
                  background: 'var(--gmu-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 0 0 8px var(--gmu-50)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 600,
                    color: 'var(--gold-300)',
                  }}>
                    {number}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 500,
                  color: 'var(--n-900)',
                  margin: '0 0 10px',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  color: 'var(--n-500)',
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: 260,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                  {desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section style={{ padding: 'clamp(64px,10vw,108px) clamp(32px,8vw,96px)', background: 'var(--surface-bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 56px' }}>
            <Overline>Alumni Stories</Overline>
            <SectionHeading center>Voices from Our Community</SectionHeading>
          </div>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {TESTIMONIALS.map(({ name, batch, quote }, i) => (
            <FadeUp key={name} delay={i * 0.1}>
              <div style={{
                background: 'var(--surface-elevated)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--r-xl)',
                padding: '28px 28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}>
                {/* Quote mark */}
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 56,
                  lineHeight: 0.8,
                  color: 'var(--gmu-100)',
                  display: 'block',
                  userSelect: 'none',
                }}>
                  "
                </span>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                  color: 'var(--n-700)',
                  lineHeight: 1.7,
                  margin: 0,
                  fontStyle: 'italic',
                  flex: 1,
                }}>
                  {quote}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  paddingTop: 16,
                  borderTop: '1px solid var(--border-subtle)',
                }}>
                  {/* Avatar initials */}
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 'var(--r-full)',
                    background: 'var(--gmu-600)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#fff',
                    flexShrink: 0,
                  }}>
                    {name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--n-900)', margin: 0 }}>
                      {name}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--n-500)', margin: '2px 0 0' }}>
                      {batch}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <FadeUp>
      <section style={{
        padding: 'clamp(72px,10vw,112px) clamp(32px,8vw,96px)',
        background: 'var(--gmu-800)',
      }}>
        <div style={{
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
        }}>
          <Overline light>Join the Alumni Community</Overline>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: 0,
          }}>
            Your Story Doesn't End<br />at Graduation
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 17,
            color: 'rgba(255,255,255,0.65)',
            maxWidth: 520,
            lineHeight: 1.65,
            margin: 0,
          }}>
            Stay connected, keep growing, and help the next generation of Commerce graduates from GM University. The network is here. All you have to do is join.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
            <Link
              to="/signup"
              style={{
                padding: '14px 32px',
                background: 'var(--gold-500)',
                color: 'var(--n-900)',
                borderRadius: 'var(--r-md)',
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all var(--t-base)',
                border: '1px solid var(--gold-500)',
              }}
            >
              Join the Network — Free
            </Link>
            <Link
              to="/login"
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: 'rgba(255,255,255,0.85)',
                borderRadius: 'var(--r-md)',
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
                transition: 'all var(--t-base)',
              }}
            >
              Already a member? Sign In
            </Link>
          </div>
        </div>
      </section>
    </FadeUp>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function LandHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: 'var(--font-body)', overflowX: 'hidden' }}>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
