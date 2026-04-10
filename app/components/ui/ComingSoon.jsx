import Link from 'next/link';

/**
 * Reusable "Coming Soon" page shell for Burbly sub-pages under construction.
 * Usage: export default function MyPage() { return <ComingSoon title="…" icon="…" />; }
 */
export default function ComingSoon({ title, subtitle, icon = '🃏' }) {
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
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 48 }}>
        <div style={{ width: 42, height: 42, background: '#0066FF', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
          🃏
        </div>
        <span style={{ fontSize: 22, fontWeight: 800, color: '#0a1628', letterSpacing: -0.5 }}>Burbly</span>
      </Link>

      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'rgba(0,102,255,0.08)', border: '1px solid rgba(0,102,255,0.2)',
        borderRadius: 999, padding: '6px 14px', marginBottom: 24,
        fontSize: 13, fontWeight: 600, color: '#0066FF',
      }}>
        ✨ Coming soon
      </div>

      <div style={{ fontSize: 56, marginBottom: 20 }}>{icon}</div>

      <h1 style={{ fontSize: 36, fontWeight: 800, color: '#0a1628', margin: '0 0 14px', letterSpacing: -0.5, maxWidth: 480 }}>
        {title}
      </h1>

      <p style={{ fontSize: 16, color: '#6b7280', maxWidth: 400, margin: '0 0 40px', lineHeight: 1.6 }}>
        {subtitle || "We're building something great here. Check back soon or start studying now."}
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/signup" style={{
          padding: '14px 28px', background: '#0066FF', color: '#fff',
          borderRadius: 14, fontWeight: 700, fontSize: 15, textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(0,102,255,0.35)',
        }}>
          Get Started Free
        </Link>
        <Link href="/" style={{
          padding: '14px 28px', background: '#fff', color: '#374151',
          borderRadius: 14, fontWeight: 600, fontSize: 15, textDecoration: 'none',
          border: '1.5px solid #e5e7eb',
        }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
