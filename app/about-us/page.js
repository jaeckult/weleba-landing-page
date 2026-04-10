import Link from 'next/link';

export const metadata = {
  title: 'About Burbly — Building the Future of Learning',
  description: 'Burbly is a science-backed flashcard platform built for learners who want to study smarter, remember longer, and stay motivated every day.',
};

const sections = [
  {
    icon: '🧠',
    title: 'Our Mission',
    body: "To make effective, science-backed learning accessible to everyone — whether you're a student cramming for boards, a professional upskilling, or a curious mind chasing knowledge for the joy of it.",
    bullets: [
      'Democratize effective learning worldwide',
      'Apply cognitive science to every study session',
      'Make daily learning feel rewarding and fun',
      'Build a supportive global learner community',
    ],
  },
  {
    icon: '🔬',
    title: 'Science First',
    body: 'Every feature in Burbly is grounded in decades of memory science research. The FSRS algorithm schedules your reviews at the perfect moment. Our AI tutor explains concepts at your level and adapts as you grow.',
    bullets: [
      'FSRS spaced repetition scheduling',
      'AI-powered adaptive tutoring',
      'Gamification that builds real habits',
      'Progress analytics to close gaps',
    ],
  },
  {
    icon: '🌍',
    title: 'Built for Every Learner',
    body: 'From medical students mastering pharmacology to language learners building vocabulary in five languages — Burbly adapts to your goals. Our community decks provide world-class material instantly.',
    bullets: [
      'Students & board exam prep',
      'Language learning & vocabulary',
      'Professional certification',
      'Educators & classroom use',
    ],
  },
];

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: '#f8faff', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{ padding: '20px 40px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid #e5e7eb', background: '#fff' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 38, height: 38, background: '#0066FF', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🃏</div>
          <span style={{ fontSize: 20, fontWeight: 800, color: '#0a1628' }}>Burbly</span>
        </Link>
        <div style={{ flex: 1 }} />
        <Link href="/signup" style={{ padding: '10px 20px', background: '#0066FF', color: '#fff', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
          Get Started Free
        </Link>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, #dbeafe 0%, #f8faff 100%)',
        padding: '80px 24px 60px',
        textAlign: 'center',
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,102,255,0.08)', border: '1px solid rgba(0,102,255,0.2)', borderRadius: 999, padding: '6px 14px', fontSize: 13, fontWeight: 600, color: '#0066FF', marginBottom: 20 }}>
          ✨ About Burbly
        </span>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 900, color: '#0a1628', letterSpacing: -1.5, margin: '0 auto 20px', maxWidth: 700, lineHeight: 1.1 }}>
          Building the future of{' '}
          <span style={{ color: '#0066FF' }}>learning</span>
        </h1>
        <p style={{ fontSize: 18, color: '#4b5563', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7 }}>
          Burbly is a science-backed flashcard platform for learners who want to study smarter, remember longer, and stay motivated every single day.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/signup" style={{ padding: '14px 28px', background: '#0066FF', color: '#fff', borderRadius: 14, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 4px 14px rgba(0,102,255,0.3)' }}>
            Start Learning Free
          </Link>
          <Link href="/how-it-works" style={{ padding: '14px 28px', background: '#fff', color: '#374151', borderRadius: 14, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1.5px solid #e5e7eb' }}>
            How it works →
          </Link>
        </div>
      </section>

      {/* Sections */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px 80px' }}>
        {sections.map((s, i) => (
          <div key={i} style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 40,
            alignItems: 'flex-start',
            marginBottom: 64,
            flexDirection: i % 2 === 1 ? 'row-reverse' : 'row',
          }}>
            {/* Text */}
            <div style={{ flex: '1 1 320px' }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>{s.icon}</div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0a1628', margin: '0 0 14px', letterSpacing: -0.5 }}>{s.title}</h2>
              <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.7, margin: '0 0 20px' }}>{s.body}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {s.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: '#374151', fontWeight: 500 }}>
                    <span style={{ color: '#0066FF', flex: '0 0 20px', marginTop: 1 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card placeholder */}
            <div style={{
              flex: '1 1 260px',
              minHeight: 220,
              background: `linear-gradient(135deg, rgba(0,102,255,0.06) 0%, rgba(99,102,241,0.06) 100%)`,
              border: '1px solid rgba(0,102,255,0.12)',
              borderRadius: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 72,
            }}>
              {s.icon}
            </div>
          </div>
        ))}
      </section>

      {/* CTA strip */}
      <section style={{
        background: 'linear-gradient(135deg, #0066FF 0%, #4f46e5 100%)',
        padding: '64px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: '#fff', margin: '0 0 14px', letterSpacing: -0.5 }}>
          Ready to start learning?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, margin: '0 0 32px', lineHeight: 1.6 }}>
          Join thousands of learners who study smarter with Burbly every day.
        </p>
        <Link href="/signup" style={{
          display: 'inline-block',
          padding: '16px 32px',
          background: '#fff',
          color: '#0066FF',
          borderRadius: 14,
          fontWeight: 800,
          fontSize: 16,
          textDecoration: 'none',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        }}>
          Get Started — It&apos;s Free
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '24px', fontSize: 13, color: '#9ca3af', borderTop: '1px solid #e5e7eb', background: '#fff' }}>
        © {new Date().getFullYear()} Burbly. All rights reserved. · <Link href="/privacy" style={{ color: '#6b7280' }}>Privacy</Link> · <Link href="/terms" style={{ color: '#6b7280' }}>Terms</Link>
      </footer>
    </div>
  );
}
