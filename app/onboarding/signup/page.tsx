'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        router.push('/client-onboarding');
      } else {
        setError(data.message || 'Invalid credentials. Please try again.');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:        #080810;
      --surface:   #0f1020;
      --surface2:  #151628;
      --border:    rgba(255,255,255,0.07);
      --border2:   rgba(255,255,255,0.12);
      --blue:      #4f8ef7;
      --blue-dim:  rgba(79,142,247,0.12);
      --blue-glow: rgba(79,142,247,0.22);
      --cyan:      #22d3ee;
      --cyan-dim:  rgba(34,211,238,0.08);
      --text:      #e8eaf6;
      --muted:     #6b7280;
      --muted2:    #9ca3af;
      --error:     #f87171;
      --success:   #10b981;
    }

    html, body {
      height: 100%;
    }

    body {
      background: var(--bg);
      min-height: 100vh;
      font-family: 'Sora', sans-serif;
      color: var(--text);
      -webkit-font-smoothing: antialiased;
      display: flex;
      align-items: stretch;
    }

    /* ── Animated background ── */
    .bg-layer {
      position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden;
    }
    .bg-grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
      background-size: 72px 72px;
    }
    .orb {
      position: absolute; border-radius: 50%;
      filter: blur(110px);
      animation: drift 18s ease-in-out infinite alternate;
    }
    .orb-1 { width:700px;height:700px;background:rgba(79,142,247,0.07);top:-200px;right:-150px; }
    .orb-2 { width:500px;height:500px;background:rgba(34,211,238,0.05);bottom:-180px;left:-120px;animation-delay:-9s; }
    .orb-3 { width:350px;height:350px;background:rgba(79,142,247,0.04);top:45%;left:35%;animation-delay:-4s; }
    @keyframes drift {
      from { transform: translate(0,0) scale(1); }
      to   { transform: translate(35px,25px) scale(1.07); }
    }

    /* ── Two-column shell ── */
    .shell {
      position: relative; z-index: 10;
      width: 100%; display: flex;
      min-height: 100vh;
    }

    /* ── Left brand panel ── */
    .brand-panel {
      width: 52%;
      background: var(--surface);
      border-right: 1px solid var(--border);
      display: flex; flex-direction: column;
      justify-content: space-between;
      padding: 48px 56px;
      animation: panel-in 0.9s ease both;
      position: relative; overflow: hidden;
    }
    @keyframes panel-in {
      from { opacity:0; transform:translateX(-24px); }
      to   { opacity:1; transform:none; }
    }

    /* subtle diagonal accent line */
    .brand-panel::after {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0;
      width: 1px;
      background: linear-gradient(to bottom,
        transparent 0%,
        rgba(79,142,247,0.25) 30%,
        rgba(34,211,238,0.2) 70%,
        transparent 100%
      );
    }

    .brand-logo { display: flex; align-items: center; gap: 14px; }
    .brand-icon {
      width: 40px; height: 40px; border-radius: 10px;
      background: linear-gradient(135deg, var(--blue) 0%, var(--cyan) 100%);
      display: flex; align-items: center; justify-content: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 15px; color: #fff; letter-spacing: -0.05em;
      box-shadow: 0 0 30px rgba(79,142,247,0.35);
    }
    .brand-name {
      font-size: 15px; font-weight: 600; color: var(--text); letter-spacing: -0.01em;
    }
    .brand-sub {
      font-size: 11px; color: var(--muted);
      font-family: 'JetBrains Mono', monospace; letter-spacing: 0.06em;
    }

    .brand-hero { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 32px 0; }

    .brand-eyebrow {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 10px; font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.22em; text-transform: uppercase;
      color: var(--cyan); margin-bottom: 28px;
    }
    .brand-eyebrow::before {
      content: ''; display: block; width: 24px; height: 1px; background: var(--cyan);
    }

    .brand-title {
      font-size: clamp(36px, 3.5vw, 52px);
      font-weight: 300; line-height: 1.1;
      letter-spacing: -0.03em; color: var(--text);
      margin-bottom: 24px;
    }
    .brand-title strong { font-weight: 600; display: block; }
    .brand-title em {
      font-style: italic; font-weight: 300;
      background: linear-gradient(90deg, var(--blue), var(--cyan));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .brand-desc {
      font-size: 13px; line-height: 1.85; color: var(--muted2);
      max-width: 380px; margin-bottom: 40px;
    }

    /* feature pills */
    .feature-list { display: flex; flex-direction: column; gap: 14px; }
    .feature-item {
      display: flex; align-items: center; gap: 14px;
    }
    .feature-dot {
      width: 32px; height: 32px; border-radius: 8px;
      background: var(--blue-dim); border: 1px solid rgba(79,142,247,0.18);
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; flex-shrink: 0;
    }
    .feature-text { font-size: 12px; color: var(--muted2); letter-spacing: 0.02em; }
    .feature-text strong { color: var(--text); font-weight: 500; display: block; font-size: 12px; margin-bottom: 1px; }

    /* status bar */
    .status-bar {
      display: flex; align-items: center; justify-content: space-between;
      background: var(--surface2); border: 1px solid var(--border);
      border-radius: 8px; padding: 14px 20px;
    }
    .status-left { display: flex; align-items: center; gap: 10px; }
    .status-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: var(--success); box-shadow: 0 0 10px var(--success);
      animation: pulse 2.5s ease-in-out infinite;
    }
    @keyframes pulse {
      0%,100% { opacity:1; transform:scale(1); }
      50%      { opacity:0.4; transform:scale(0.75); }
    }
    .status-text {
      font-size: 11px; font-family: 'JetBrains Mono', monospace;
      color: var(--muted2); letter-spacing: 0.05em;
    }
    .status-badge {
      font-size: 10px; font-family: 'JetBrains Mono', monospace;
      color: var(--blue); letter-spacing: 0.1em;
      background: var(--blue-dim); border: 1px solid rgba(79,142,247,0.2);
      padding: 3px 10px; border-radius: 100px;
    }

    /* ── Right login panel ── */
    .login-panel {
      flex: 1;
      display: flex; align-items: center; justify-content: center;
      padding: 48px 40px;
      animation: panel-right 0.8s ease both 0.1s;
    }
    @keyframes panel-right {
      from { opacity:0; transform:translateX(20px); }
      to   { opacity:1; transform:none; }
    }

    .login-card {
      width: 100%; max-width: 420px;
    }

    /* card header */
    .card-header { margin-bottom: 40px; }
    .card-tag {
      display: inline-flex; align-items: center; gap: 7px;
      font-size: 10px; font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--cyan); background: var(--cyan-dim);
      border: 1px solid rgba(34,211,238,0.15);
      padding: 5px 12px; border-radius: 100px; margin-bottom: 20px;
    }
    .card-tag::before { content: '◈'; font-size: 9px; }

    .card-title {
      font-size: 30px; font-weight: 600; letter-spacing: -0.03em;
      color: var(--text); line-height: 1.15; margin-bottom: 8px;
    }
    .card-title span {
      background: linear-gradient(90deg, var(--blue), var(--cyan));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .card-subtitle {
      font-size: 12px; color: var(--muted2); line-height: 1.7;
      font-family: 'JetBrains Mono', monospace; letter-spacing: 0.03em;
    }

    /* divider */
    .form-divider {
      display: flex; align-items: center; gap: 12px; margin: 28px 0;
    }
    .form-divider::before, .form-divider::after {
      content: ''; flex: 1; height: 1px; background: var(--border);
    }
    .form-divider span {
      font-size: 10px; font-family: 'JetBrains Mono', monospace;
      color: var(--muted); letter-spacing: 0.15em; text-transform: uppercase;
    }

    /* fields */
    .field { margin-bottom: 20px; }
    .field-label {
      display: flex; align-items: center; justify-content: space-between;
      font-size: 11px; font-weight: 500; letter-spacing: 0.09em;
      text-transform: uppercase; color: var(--muted2); margin-bottom: 9px;
    }
    .field-label .req { color: var(--blue); font-size: 15px; line-height: 1; }

    .input-wrap { position: relative; }
    .field-icon {
      position: absolute; left: 14px; top: 50%;
      transform: translateY(-50%); pointer-events: none;
      color: var(--muted); font-size: 13px;
      font-family: 'JetBrains Mono', monospace;
      transition: color 0.2s;
    }
    .input-wrap:focus-within .field-icon { color: var(--blue); }

    .field input {
      width: 100%;
      padding: 14px 14px 14px 42px;
      background: var(--surface2);
      border: 1px solid var(--border2);
      border-radius: 8px;
      color: var(--text);
      font-family: 'Sora', sans-serif; font-size: 13px;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    }
    .field input::placeholder { color: var(--muted); font-size: 12px; }
    .field input:focus {
      border-color: var(--blue);
      background: rgba(79,142,247,0.05);
      box-shadow: 0 0 0 3px var(--blue-glow);
    }

    .toggle-btn {
      position: absolute; right: 12px; top: 50%;
      transform: translateY(-50%);
      background: none; border: none; cursor: pointer;
      color: var(--muted); font-size: 10px;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.08em; text-transform: uppercase;
      padding: 4px 6px; border-radius: 4px;
      transition: all 0.2s;
    }
    .toggle-btn:hover { color: var(--blue); background: var(--blue-dim); }

    /* error */
    .error-box {
      background: rgba(248,113,113,0.07);
      border: 1px solid rgba(248,113,113,0.22);
      border-left: 3px solid var(--error);
      border-radius: 6px;
      padding: 13px 16px; margin-bottom: 20px;
      font-size: 12px; color: var(--error);
      font-family: 'JetBrains Mono', monospace; letter-spacing: 0.03em;
      display: flex; align-items: center; gap: 10px;
    }
    .error-box::before { content: '!'; font-weight: 700; font-size: 13px; flex-shrink: 0; }

    /* submit */
    .btn-submit {
      width: 100%; padding: 15px;
      background: linear-gradient(135deg, var(--blue) 0%, #6aa3f8 100%);
      border: none; border-radius: 8px;
      color: #fff; font-family: 'Sora', sans-serif;
      font-size: 13px; font-weight: 600; letter-spacing: 0.04em;
      cursor: pointer; transition: all 0.25s;
      position: relative; overflow: hidden;
      box-shadow: 0 4px 20px rgba(79,142,247,0.3);
    }
    .btn-submit::after {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
      opacity: 0; transition: opacity 0.2s;
    }
    .btn-submit:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 28px rgba(79,142,247,0.45);
    }
    .btn-submit:hover::after { opacity: 1; }
    .btn-submit:active { transform: translateY(0); }
    .btn-submit:disabled { opacity: 0.45; cursor: not-allowed; transform: none; box-shadow: none; }

    .btn-inner { display: flex; align-items: center; justify-content: center; gap: 8px; }
    .btn-spinner {
      width: 13px; height: 13px;
      border: 1.5px solid rgba(255,255,255,0.3);
      border-top-color: #fff; border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* footer */
    .card-footer {
      margin-top: 28px; padding-top: 22px;
      border-top: 1px solid var(--border);
      display: flex; align-items: center; justify-content: space-between;
    }
    .footer-secure {
      display: flex; align-items: center; gap: 7px;
      font-size: 10px; font-family: 'JetBrains Mono', monospace;
      color: var(--muted); letter-spacing: 0.06em;
    }
    .footer-secure::before { content: '🔒'; font-size: 11px; }
    .footer-ver {
      font-size: 10px; font-family: 'JetBrains Mono', monospace;
      color: rgba(255,255,255,0.12); letter-spacing: 0.06em;
    }

    /* signup link */
    .signup-row {
      margin-top: 20px; text-align: center;
      font-size: 11px; color: var(--muted);
      font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em;
    }
    .signup-row a {
      color: var(--blue); text-decoration: none;
      border-bottom: 1px solid rgba(79,142,247,0.3);
      padding-bottom: 1px; transition: border-color 0.2s;
    }
    .signup-row a:hover { border-color: var(--blue); }

    @media (max-width: 860px) {
      .brand-panel { display: none; }
      .login-panel { padding: 32px 24px; }
    }
  `;

  return (
    <>
      <style>{css}</style>

      {/* Background */}
      <div className="bg-layer">
        <div className="bg-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="shell">
        {/* ── Brand Panel ── */}
        <aside className="brand-panel">
          <div className="brand-logo">
            <div className="brand-icon">Nx</div>
            <div>
              <div className="brand-name">Nexus Accounts</div>
              <div className="brand-sub">Client Portal · v2.4.1</div>
            </div>
          </div>

          <div className="brand-hero">
            <div className="brand-eyebrow">Secure Access</div>
            <h1 className="brand-title">
              <strong>Onboarding</strong>
              <em>Client Portal</em>
            </h1>
            <p className="brand-desc">
              A dedicated workspace for Nexus Accounts clients. Manage
              documents, track onboarding progress, and communicate with
              your dedicated account team — all in one place.
            </p>

            <div className="feature-list">
              {[
                { icon: '⬡', title: 'Dedicated Workspace',  desc: 'Private portal provisioned for your account' },
                { icon: '◈', title: 'Real-time Tracking',   desc: 'Monitor onboarding milestones live' },
                { icon: '⌁', title: '256-bit Encryption',   desc: 'Bank-grade security on every request' },
              ].map(f => (
                <div className="feature-item" key={f.title}>
                  <div className="feature-dot">{f.icon}</div>
                  <div className="feature-text">
                    <strong>{f.title}</strong>
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="status-bar">
            <div className="status-left">
              <div className="status-dot" />
              <span className="status-text">All systems operational</span>
            </div>
            <span className="status-badge">SOC 2 Compliant</span>
          </div>
        </aside>

        {/* ── Login Panel ── */}
        <main className="login-panel">
          <div className="login-card">
            <div className="card-header">
              <div className="card-tag">Secure Sign In</div>
              <h2 className="card-title">
                Welcome to <span>Nexus</span>
              </h2>
              <p className="card-subtitle">
                Enter your credentials to access the client portal.
              </p>
            </div>

            <div className="form-divider"><span>Credentials</span></div>

            <form onSubmit={handleLogin} noValidate>
              {/* Username */}
              <div className="field">
                <div className="field-label">
                  Username <span className="req">*</span>
                </div>
                <div className="input-wrap">
                  <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                    autoComplete="username"
                  />
                  <span className="field-icon">@</span>
                </div>
              </div>

              {/* Password */}
              <div className="field">
                <div className="field-label">
                  Password <span className="req">*</span>
                </div>
                <div className="input-wrap">
                  <input
                    type={showPass ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    style={{ paddingRight: '68px' }}
                  />
                  <span className="field-icon">⬡</span>
                  <button
                    type="button"
                    className="toggle-btn"
                    onClick={() => setShowPass(p => !p)}
                    tabIndex={-1}
                  >
                    {showPass ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {error && <div className="error-box">{error}</div>}

              <button type="submit" className="btn-submit" disabled={loading}>
                <span className="btn-inner">
                  {loading && <span className="btn-spinner" />}
                  {loading ? 'Authenticating…' : 'Access Portal →'}
                </span>
              </button>
            </form>

            <div className="card-footer">
              <span className="footer-secure">256-bit encrypted · Secure</span>
              <span className="footer-ver">v2.4.1</span>
            </div>

            <div className="signup-row">
              Don&apos;t have access?&nbsp;
              <a href="/onboarding/signup">Request onboarding →</a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}