'use client';

import { useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import Link from 'next/link';
import Image from 'next/image';
import {
  Brain,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Check
} from 'lucide-react';

// ─── Constants ───────────────────────────────────────────────────────────────
const FLUTTER_WEB_APP_URL = 'https://burblyweb.vercel.app/#/home';
const DEEP_LINK_URL = 'burbly://auth/start';

// ─── Platform detection ───────────────────────────────────────────────────────
function isMobileBrowser() {
  if (typeof navigator === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function getDeepLinkUrl() {
  if (typeof navigator === 'undefined') return DEEP_LINK_URL;
  if (/Android/i.test(navigator.userAgent)) {
    return 'intent://auth/start#Intent;scheme=burbly;package=com.burbly.app;end';
  }
  return DEEP_LINK_URL;
}

// ─── Redirect helper ──────────────────────────────────────────────────────────
// Mobile: tries to open the installed Flutter app via deep link.
// Desktop/web: redirects to the deployed Flutter web app.
function redirectAfterSignIn(setFinalState) {
  if (isMobileBrowser()) {
    window.location.href = getDeepLinkUrl();
    setTimeout(() => setFinalState((s) => s === 'success' ? 'no_app' : s), 2500);
  } else {
    // Desktop or tablet web → send to Flutter web app after a moment
    setFinalState('web_redirect');
    setTimeout(() => { window.location.href = FLUTTER_WEB_APP_URL; }, 2000);
  }
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function SignupPage() {
  const [state, setState] = useState('idle'); // idle | loading | success | error | no_app
  const [errorMsg, setErrorMsg] = useState('');
  const [user, setUser] = useState(null);

  // If already signed in to Firebase in this browser, skip straight to redirect
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u && state === 'idle') {
        setUser(u);
        setState('success');
        redirectAfterSignIn(setState);
      }
    });
    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  async function handleGoogleSignIn() {
    setState('loading');
    setErrorMsg('');
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setState('success');
      redirectAfterSignIn(setState);
    } catch (err) {
      // User cancelled the popup — silent
      if (err.code === 'auth/popup-closed-by-user' || err.code === 'auth/cancelled-popup-request') {
        setState('idle');
        return;
      }
      setErrorMsg(err.message || 'Sign-in failed. Please try again.');
      setState('error');
    }
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="signup-page">
      {/* ── Background ── */}
      <div className="signup-bg" />

      {/* ── Nav ── */}
      <nav className="signup-nav">
        <Link href="/" className="signup-logo">
          <Image src="/image copy 6.png" alt="Burbly" width={40} height={40} className="signup-logo-img" />
        </Link>
      </nav>

      {/* ── Card ── */}
      <main className="signup-main">
        <div className="signup-card">

          {/* Idle / loading state */}
          {(state === 'idle' || state === 'loading' || state === 'error') && (
            <>
              {/* Icon */}
              <div className="signup-icon-wrap">
                <Brain className="w-8 h-8 text-[#0066FF]" />
              </div>

              <h1 className="signup-title">Create your free account</h1>
              <p className="signup-subtitle">
                Sign in with Google to start learning with Burbly — no credit card required.
              </p>

              {/* Google button */}
              <button
                id="google-signin-btn"
                className={`signup-google-btn ${state === 'loading' ? 'loading' : ''}`}
                onClick={handleGoogleSignIn}
                disabled={state === 'loading'}
              >
                {state === 'loading' ? (
                  <>
                    <span className="signup-spinner" />
                    Signing you in…
                  </>
                ) : (
                  <>
                    <GoogleLogo />
                    Continue with Google
                  </>
                )}
              </button>

              {/* Error */}
              {state === 'error' && (
                <div className="signup-error">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" /> {errorMsg}
                </div>
              )}

              {/* Divider */}
              <div className="signup-divider">
                <span />
                <p>No password needed</p>
                <span />
              </div>

              {/* Trust bullets */}
              <ul className="signup-trust">
                <li><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free forever — no credit card</li>
                <li><ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure Google sign-in</li>
                <li><Smartphone className="w-4 h-4 text-emerald-500" /> Opens in the Burbly app</li>
              </ul>

              <p className="signup-legal">
                By continuing you agree to our{' '}
                <Link href="/terms">Terms of Service</Link> and{' '}
                <Link href="/privacy">Privacy Policy</Link>.
              </p>
            </>
          )}

          {/* Web redirect state (desktop or explicit continue) */}
          {state === 'web_redirect' && (
            <>
              <div className="signup-success-icon"><Sparkles className="w-12 h-12 text-[#0066FF] mx-auto" /></div>
              <h2 className="signup-title">Syncing account...</h2>
              <p className="signup-subtitle">
                Taking you to the <strong>Home Screen</strong> in a moment.
              </p>
              <div className="signup-redirect-bar">
                <div className="signup-redirect-fill" />
              </div>
              <p style={{ marginTop: 16, fontSize: 13, color: '#9ca3af' }}>
                Not redirecting?{' '}
                <a href={FLUTTER_WEB_APP_URL} style={{ color: '#0066FF', fontWeight: 600 }}>
                  Click here
                </a>
              </p>
            </>
          )}

          {/* Success / redirecting state (mobile) */}
          {state === 'success' && (
            <>
              <div className="signup-success-icon"><Sparkles className="w-12 h-12 text-[#0066FF] mx-auto" /></div>
              <h2 className="signup-title">Welcome, {user?.displayName?.split(' ')[0]}!</h2>
              <p className="signup-subtitle">Opening Burbly for you…</p>
              <div className="signup-redirect-bar">
                <div className="signup-redirect-fill" />
              </div>
            </>
          )}

          {/* No-app fallback (mobile only — app not installed) */}
          {state === 'no_app' && (
            <>
              <div className="signup-success-icon"><CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" /></div>
              <h2 className="signup-title">You're signed in!</h2>
              <p className="signup-subtitle">
                Get the Burbly app to start studying. Your account is ready.
              </p>

              <div className="signup-store-links">
                <a
                  href="https://apps.apple.com/app/burbly"
                  className="signup-store-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AppStoreLogo /> App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.burbly.app"
                  className="signup-store-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PlayStoreLogo /> Google Play
                </a>
              </div>

              <div className="signup-open-hint" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <div>
                  Already have the app?{' '}
                  <button
                    onClick={() => { window.location.href = getDeepLinkUrl(); }}
                    className="signup-link-btn"
                  >
                    Open Burbly
                  </button>
                </div>
                <div>
                  Or{' '}
                  <button
                    onClick={() => {
                      setState('web_redirect');
                      setTimeout(() => {
                        window.location.href = FLUTTER_WEB_APP_URL;
                      }, 1500);
                    }}
                    className="signup-link-btn"
                  >
                    continue in browser
                  </button>
                </div>
              </div>
            </>
          )}

        </div>
      </main>

      <style jsx>{`
        /* ── Layout ── */
        .signup-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Gradient background */
        .signup-bg {
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% -10%, #dbeafe 0%, #f8faff 60%, #f0f4ff 100%);
          z-index: 0;
        }

        /* ── Nav ── */
        .signup-nav {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          padding: 20px 32px;
        }

        .signup-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .signup-logo-img {
          object-fit: contain;
        }

        .signup-logo-text {
          font-size: 22px;
          font-weight: 800;
          color: #0a1628;
          letter-spacing: -0.5px;
        }

        /* ── Main ── */
        .signup-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px 64px;
          position: relative;
          z-index: 10;
        }

        /* ── Card ── */
        .signup-card {
          background: #ffffff;
          border: 1px solid rgba(0, 102, 255, 0.12);
          border-radius: 24px;
          padding: 48px 40px;
          width: 100%;
          max-width: 440px;
          box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.04),
            0 20px 60px -10px rgba(0, 102, 255, 0.08);
          text-align: center;
        }

        @media (max-width: 480px) {
          .signup-card {
            padding: 36px 24px;
          }
        }

        /* ── Icon ── */
        .signup-icon-wrap {
          width: 68px;
          height: 68px;
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          border: 1px solid rgba(0, 102, 255, 0.1);
        }

        .signup-icon {
          font-size: 32px;
        }

        .signup-success-icon {
          font-size: 52px;
          margin-bottom: 16px;
        }

        /* ── Typography ── */
        .signup-title {
          font-size: 24px;
          font-weight: 800;
          color: #0a1628;
          margin: 0 0 10px;
          letter-spacing: -0.4px;
          line-height: 1.2;
        }

        .signup-subtitle {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
          margin: 0 0 28px;
        }

        /* ── Google button ── */
        .signup-google-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 15px 24px;
          background: #0066FF;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.1px;
          box-shadow: 0 4px 14px rgba(0, 102, 255, 0.35);
          margin-bottom: 20px;
        }

        .signup-google-btn:hover:not(:disabled) {
          background: #0052cc;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0, 102, 255, 0.45);
        }

        .signup-google-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .signup-google-btn.loading,
        .signup-google-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        /* ── Spinner ── */
        .signup-spinner {
          width: 18px;
          height: 18px;
          border: 2.5px solid rgba(255, 255, 255, 0.3);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── Divider ── */
        .signup-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .signup-divider span {
          flex: 1;
          height: 1px;
          background: #e5e7eb;
        }

        .signup-divider p {
          font-size: 12px;
          color: #9ca3af;
          white-space: nowrap;
          margin: 0;
          font-weight: 500;
        }

        /* ── Trust list ── */
        .signup-trust {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }

        .signup-trust li {
          font-size: 13.5px;
          color: #374151;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* ── Error ── */
        .signup-error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 13.5px;
          color: #dc2626;
          text-align: left;
          margin-bottom: 16px;
          display: flex;
          gap: 8px;
          align-items: flex-start;
        }

        /* ── Legal ── */
        .signup-legal {
          font-size: 12px;
          color: #9ca3af;
          line-height: 1.5;
          margin: 0;
        }

        .signup-legal a {
          color: #0066FF;
          text-decoration: none;
          font-weight: 500;
        }

        .signup-legal a:hover {
          text-decoration: underline;
        }

        /* ── Redirect bar (success state) ── */
        .signup-redirect-bar {
          height: 4px;
          background: #e5e7eb;
          border-radius: 99px;
          overflow: hidden;
          margin-top: 20px;
        }

        .signup-redirect-fill {
          height: 100%;
          background: linear-gradient(90deg, #0066FF, #6366f1);
          border-radius: 99px;
          animation: fillBar 2.5s linear forwards;
          width: 0%;
        }

        @keyframes fillBar {
          to { width: 100%; }
        }

        /* ── App store links ── */
        .signup-store-links {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin: 24px 0 16px;
        }

        .signup-store-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #0a1628;
          color: #ffffff;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s;
        }

        .signup-store-btn:hover {
          background: #1e3a5f;
        }

        /* ── Open hint ── */
        .signup-open-hint {
          font-size: 13px;
          color: #6b7280;
          margin: 0;
        }

        .signup-link-btn {
          background: none;
          border: none;
          color: #0066FF;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

// ── SVG icons ─────────────────────────────────────────────────────────────────

function GoogleLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.5 6.8 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.5-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.5 6.8 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.4 0 10.3-2.1 14-5.4l-6.5-5.5C29.6 35 26.9 36 24 36c-5.3 0-9.7-3.3-11.3-7.9l-6.5 5C9.6 39.6 16.3 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.5 5.5C37.7 40.6 44 35.6 44 24c0-1.3-.1-2.5-.4-3.5z"/>
    </svg>
  );
}

function AppStoreLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.53 3.99zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  );
}

function PlayStoreLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76A2 2 0 0 1 2 22V2a2 2 0 0 1 1.18-1.76l11.61 11.61-11.61 11.91zM22 12l-3.5 2.03L15.47 12l3.03-2.03L22 12zM4.5 1.03l12.82 7.41L14.4 11.4 4.5 1.03zm0 21.94l9.9-10.36 2.92 2.92L4.5 22.97z"/>
    </svg>
  );
}
