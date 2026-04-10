import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found | Burbly',
  description: 'This page does not exist. Head back to Burbly to start learning.',
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse 80% 60% at 50% -10%, #dbeafe 0%, #f8faff 60%, #f0f4ff 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: '24px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 72, marginBottom: 16 }}>🃏</div>

      <h1 style={{ fontSize: 120, fontWeight: 900, margin: '0 0 8px', color: '#0066FF', lineHeight: 1, letterSpacing: -4 }}>
        404
      </h1>

      <h2 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 12px', color: '#0a1628', letterSpacing: -0.5 }}>
        This card got lost in the deck
      </h2>

      <p style={{ fontSize: 16, color: '#6b7280', maxWidth: 380, margin: '0 0 40px', lineHeight: 1.6 }}>
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to your flashcards.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '14px 28px',
            background: '#0066FF',
            color: '#fff',
            borderRadius: 14,
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(0,102,255,0.35)',
            transition: 'background 0.2s',
          }}
        >
          ← Back to Home
        </Link>
        <Link
          href="/signup"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '14px 28px',
            background: '#fff',
            color: '#0066FF',
            borderRadius: 14,
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
            border: '2px solid rgba(0,102,255,0.2)',
          }}
        >
          Get Started Free
        </Link>
      </div>
    </div>
  );
}
