'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  username: string;
  email: string;
  password: string;
  portalName: string;
  portalUrl: string;
}

interface FieldError {
  username?: string;
  email?: string;
  password?: string;
  portalName?: string;
  portalUrl?: string;
}

export default function ClientOnBoarding() {
  const router = useRouter();
  const [verified, setVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState('');
  const [errors, setErrors] = useState<FieldError>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    portalName: '',
    portalUrl: '',
  });

  // ── Auth Guard ────────────────────────────────────────────────────────────
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('/api/auth/session');
        const data = await res.json();
        if (!data.authenticated) {
          router.replace('/onboarding/signup?from=/client-onBoarding');
        } else {
          setVerified(true);
        }
      } catch {
        router.replace('/onboarding/signup?from=/client-onBoarding');
      }
    };
    checkSession();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  };

  const validate = (data: FormData): FieldError => {
    const e: FieldError = {};
    
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = 'Enter a valid email address';
    if (data.password.length < 8)
      e.password = 'Password must be at least 8 characters';
    if (!data.portalName.trim())
      e.portalName = 'Client portal name is required';
    if (!data.portalUrl.trim())
      e.portalUrl = 'Portal URL is required';
    else if (!data.portalUrl.match(/^https?:\/\/.+\..+/))
      e.portalUrl = 'Enter a valid URL (e.g. https://portal.nexus.com)';
    return e;
  };

  const set = (k: keyof FormData, v: string) => {
    const updated = { ...form, [k]: v };
    setForm(updated);
    if (touched[k]) {
      setErrors(validate(updated));
    }
  };

  const blur = (k: keyof FormData) => {
    setTouched(t => ({ ...t, [k]: true }));
    setErrors(e => ({ ...e, ...validate(form) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(Object.keys(form).map(k => [k, true]));
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setApiError('');

    try {
      const res = await fetch('/api/onboarding/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setApiError(data.message || 'Submission failed. Please try again.');
      }
    } catch {
      setApiError('Network error. Please check your connection and retry.');
    } finally {
      setSubmitting(false);
    }
  };

  // ── Gate ─────────────────────────────────────────────────────────────────
  if (!verified) {
    return (
      <div style={{ minHeight: '100vh', background: '#080810', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}.gs{width:32px;height:32px;border:1.5px solid rgba(99,179,237,0.15);border-top-color:#63b3ed;border-radius:50%;animation:spin 0.8s linear infinite}`}</style>
        <div className="gs" />
      </div>
    );
  }

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:       #080810;
      --surface:  #0f1020;
      --surface2: #151628;
      --border:   rgba(255,255,255,0.07);
      --border2:  rgba(255,255,255,0.12);
      --blue:     #4f8ef7;
      --blue-dim: rgba(79,142,247,0.12);
      --blue-glow:rgba(79,142,247,0.25);
      --cyan:     #22d3ee;
      --text:     #e8eaf6;
      --muted:    #6b7280;
      --muted2:   #9ca3af;
      --success:  #10b981;
      --error:    #f87171;
      --gold:     #f59e0b;
    }

    body {
      background: var(--bg);
      min-height: 100vh;
      font-family: 'Sora', sans-serif;
      color: var(--text);
      -webkit-font-smoothing: antialiased;
    }

    /* ── Animated bg mesh ── */
    .bg-mesh {
      position: fixed; inset: 0; pointer-events: none; z-index: 0;
      overflow: hidden;
    }
    .mesh-orb {
      position: absolute; border-radius: 50%; filter: blur(100px);
      animation: orb-drift 20s ease-in-out infinite alternate;
    }
    .mesh-orb-1 { width:600px;height:600px;background:rgba(79,142,247,0.06);top:-200px;right:-100px; }
    .mesh-orb-2 { width:500px;height:500px;background:rgba(34,211,238,0.04);bottom:-150px;left:-100px;animation-delay:-10s; }
    .mesh-orb-3 { width:300px;height:300px;background:rgba(245,158,11,0.03);top:50%;left:40%;animation-delay:-5s; }
    @keyframes orb-drift {
      from { transform: translate(0,0) scale(1); }
      to   { transform: translate(40px,30px) scale(1.08); }
    }

    /* grid lines */
    .bg-mesh::after {
      content: '';
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
      background-size: 72px 72px;
    }

    /* ── Layout ── */
    .shell {
      position: relative; z-index: 10;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* ── Topbar ── */
    .topbar {
      height: 64px;
      border-bottom: 1px solid var(--border);
      background: rgba(8,8,16,0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 40px;
      position: sticky; top: 0; z-index: 100;
    }

    .logo-group { display: flex; align-items: center; gap: 14px; }
    .logo-icon {
      width: 34px; height: 34px;
      background: linear-gradient(135deg, var(--blue), var(--cyan));
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px; font-weight: 400; color: #fff;
      letter-spacing: -0.05em;
    }
    .logo-name {
      font-size: 14px; font-weight: 600; color: var(--text);
      letter-spacing: -0.01em;
    }
    .logo-tag {
      font-size: 10px; font-weight: 400; color: var(--muted);
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.05em;
      margin-left: 2px;
    }

    .topbar-right { display: flex; align-items: center; gap: 20px; }

    .session-badge {
      display: flex; align-items: center; gap: 7px;
      font-size: 11px; font-family: 'JetBrains Mono', monospace;
      color: var(--muted2); letter-spacing: 0.04em;
    }
    .session-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: var(--success);
      box-shadow: 0 0 8px var(--success);
      animation: pulse-dot 2s ease-in-out infinite;
    }
    @keyframes pulse-dot {
      0%,100% { opacity:1; transform:scale(1); }
      50%      { opacity:0.5; transform:scale(0.8); }
    }

    .btn-logout {
      font-family: 'Sora', sans-serif;
      font-size: 11px; font-weight: 500;
      letter-spacing: 0.06em; text-transform: uppercase;
      color: var(--muted2); background: transparent;
      border: 1px solid var(--border2);
      padding: 7px 16px; cursor: pointer; border-radius: 4px;
      transition: all 0.2s;
    }
    .btn-logout:hover { color: var(--error); border-color: rgba(248,113,113,0.4); background: rgba(248,113,113,0.06); }

    /* ── Main content ── */
    .content {
      flex: 1;
      display: grid;
      grid-template-columns: 340px 1fr;
      min-height: calc(100vh - 64px);
    }

    /* ── Left sidebar ── */
    .sidebar {
      border-right: 1px solid var(--border);
      background: var(--surface);
      padding: 48px 36px;
      display: flex; flex-direction: column; gap: 40px;
      animation: slide-left 0.7s ease both;
    }
    @keyframes slide-left { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:none; } }

    .sidebar-head { }
    .sidebar-eyebrow {
      font-size: 10px; font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.2em; text-transform: uppercase;
      color: var(--blue); margin-bottom: 18px;
      display: flex; align-items: center; gap: 8px;
    }
    .sidebar-eyebrow::before { content:''; display:block; width:20px; height:1px; background:var(--blue); }

    .sidebar-title {
      font-size: 26px; font-weight: 300; line-height: 1.25;
      color: var(--text); margin-bottom: 14px; letter-spacing: -0.02em;
    }
    .sidebar-title strong { font-weight: 600; }

    .sidebar-desc {
      font-size: 12px; line-height: 1.9; color: var(--muted2);
      letter-spacing: 0.01em;
    }

    .sidebar-steps { display: flex; flex-direction: column; gap: 0; }
    .step-row {
      display: flex; gap: 16px; align-items: flex-start;
      padding: 20px 0;
      border-bottom: 1px solid var(--border);
    }
    .step-row:last-child { border-bottom: none; }
    .step-num {
      width: 28px; height: 28px; border-radius: 6px;
      background: var(--blue-dim); border: 1px solid rgba(79,142,247,0.2);
      display: flex; align-items: center; justify-content: center;
      font-size: 11px; font-family: 'JetBrains Mono', monospace;
      color: var(--blue); flex-shrink: 0; margin-top: 1px;
    }
    .step-body { }
    .step-label { font-size: 12px; font-weight: 500; color: var(--text); margin-bottom: 4px; }
    .step-desc { font-size: 11px; color: var(--muted); line-height: 1.6; font-family: 'JetBrains Mono', monospace; }

    .sidebar-footer {
      margin-top: auto;
      padding: 18px 20px;
      background: var(--surface2);
      border: 1px solid var(--border);
      border-radius: 6px;
    }
    .sf-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); font-family: 'JetBrains Mono', monospace; margin-bottom: 8px; }
    .sf-status { font-size: 12px; color: var(--success); font-weight: 500; display: flex; align-items: center; gap: 7px; }
    .sf-status::before { content:''; width:6px; height:6px; border-radius:50%; background:var(--success); display:block; }

    /* ── Form area ── */
    .form-area {
      padding: 48px 60px;
      display: flex; align-items: flex-start; justify-content: center;
      animation: slide-right 0.7s ease both;
    }
    @keyframes slide-right { from { opacity:0; transform:translateX(20px); } to { opacity:1; transform:none; } }

    .form-card {
      width: 100%; max-width: 580px;
    }

    .form-header { margin-bottom: 40px; }
    .form-header-tag {
      display: inline-flex; align-items: center; gap: 7px;
      font-size: 10px; font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--cyan); margin-bottom: 16px;
      background: rgba(34,211,238,0.07);
      border: 1px solid rgba(34,211,238,0.15);
      padding: 5px 12px; border-radius: 100px;
    }
    .form-header-tag::before { content:'◈'; font-size:9px; }
    .form-title {
      font-size: 28px; font-weight: 600; letter-spacing: -0.03em;
      color: var(--text); margin-bottom: 8px; line-height: 1.2;
    }
    .form-title span { color: var(--blue); }
    .form-subtitle { font-size: 13px; color: var(--muted2); line-height: 1.7; }

    /* fields */
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
    .form-grid.full { grid-template-columns: 1fr; }

    .field { display: flex; flex-direction: column; gap: 0; }

    .field-label {
      font-size: 11px; font-weight: 500;
      letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--muted2); margin-bottom: 8px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .field-label .req { color: var(--blue); font-size: 14px; line-height: 1; }

    .input-wrap { position: relative; }

    .field-icon {
      position: absolute; left: 14px; top: 50%;
      transform: translateY(-50%);
      color: var(--muted); font-size: 14px; pointer-events: none;
      font-family: 'JetBrains Mono', monospace;
      transition: color 0.2s;
    }

    .field input {
      width: 100%;
      padding: 13px 14px 13px 40px;
      background: var(--surface2);
      border: 1px solid var(--border2);
      border-radius: 6px;
      color: var(--text);
      font-family: 'Sora', sans-serif;
      font-size: 13px;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
      -webkit-appearance: none;
    }
    .field input::placeholder { color: var(--muted); font-size: 12px; }
    .field input:focus {
      border-color: var(--blue);
      background: rgba(79,142,247,0.04);
      box-shadow: 0 0 0 3px var(--blue-glow);
    }
    .field input:focus + .field-icon,
    .input-wrap:focus-within .field-icon { color: var(--blue); }
    .field.has-error input { border-color: var(--error); box-shadow: 0 0 0 3px rgba(248,113,113,0.12); }

    .err-msg {
      font-size: 10px; color: var(--error);
      font-family: 'JetBrains Mono', monospace;
      margin-top: 6px; letter-spacing: 0.04em;
      display: flex; align-items: center; gap: 5px;
    }
    .err-msg::before { content:'!'; font-weight:700; }

    .toggle-pass {
      position: absolute; right: 12px; top: 50%;
      transform: translateY(-50%);
      background: none; border: none; cursor: pointer;
      color: var(--muted); font-size: 11px;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.06em; text-transform: uppercase;
      padding: 4px 6px; transition: color 0.2s;
    }
    .toggle-pass:hover { color: var(--blue); }

    /* url field hint */
    .url-hint {
      font-size: 10px; color: var(--muted);
      font-family: 'JetBrains Mono', monospace;
      margin-top: 6px; letter-spacing: 0.04em;
    }

    /* password strength */
    .strength-bar {
      display: flex; gap: 4px; margin-top: 8px;
    }
    .strength-seg {
      height: 3px; flex: 1; border-radius: 100px;
      background: var(--border2); transition: background 0.3s;
    }
    .strength-seg.weak   { background: var(--error); }
    .strength-seg.fair   { background: var(--gold); }
    .strength-seg.strong { background: var(--success); }
    .strength-label {
      font-size: 10px; font-family: 'JetBrains Mono', monospace;
      color: var(--muted); margin-top: 5px; letter-spacing: 0.06em;
    }

    /* divider */
    .section-divider {
      display: flex; align-items: center; gap: 14px;
      margin: 8px 0 24px;
    }
    .section-divider span {
      font-size: 10px; font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--muted); white-space: nowrap;
    }
    .section-divider::before,
    .section-divider::after {
      content: ''; flex: 1; height: 1px; background: var(--border);
    }

    /* api error */
    .api-error {
      background: rgba(248,113,113,0.07);
      border: 1px solid rgba(248,113,113,0.25);
      border-left: 3px solid var(--error);
      border-radius: 4px;
      padding: 13px 16px;
      font-size: 12px; color: var(--error);
      margin-bottom: 20px;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.03em;
    }

    /* submit btn */
    .btn-submit {
      width: 100%; padding: 15px;
      background: var(--blue);
      border: none; border-radius: 6px;
      color: #fff; font-family: 'Sora', sans-serif;
      font-size: 13px; font-weight: 600;
      letter-spacing: 0.04em; cursor: pointer;
      transition: all 0.25s;
      position: relative; overflow: hidden;
      margin-top: 8px;
    }
    .btn-submit::before {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
      opacity: 0; transition: opacity 0.2s;
    }
    .btn-submit:hover { background: #5f9df8; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(79,142,247,0.35); }
    .btn-submit:hover::before { opacity: 1; }
    .btn-submit:active { transform: translateY(0); }
    .btn-submit:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }

    .btn-spinner {
      display: inline-block; width: 13px; height: 13px;
      border: 1.5px solid rgba(255,255,255,0.3);
      border-top-color: #fff; border-radius: 50%;
      animation: spin 0.7s linear infinite; margin-right: 8px;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* form footer */
    .form-footer {
      margin-top: 24px; padding-top: 20px;
      border-top: 1px solid var(--border);
      display: flex; align-items: center; justify-content: space-between;
    }
    .form-footer-text {
      font-size: 10px; font-family: 'JetBrains Mono', monospace;
      color: var(--muted); letter-spacing: 0.06em;
      display: flex; align-items: center; gap: 7px;
    }
    .form-footer-text::before {
      content: '🔒'; font-size: 11px;
    }
    .form-footer-version {
      font-size: 10px; font-family: 'JetBrains Mono', monospace;
      color: var(--border2); letter-spacing: 0.06em;
    }

    /* ── Success state ── */
    .success-wrap {
      display: flex; flex-direction: column; align-items: center;
      text-align: center; padding: 60px 20px;
      animation: fade-in 0.6s ease both;
    }
    @keyframes fade-in { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:none; } }

    .success-ring {
      width: 80px; height: 80px; border-radius: 50%;
      border: 1.5px solid var(--success);
      background: rgba(16,185,129,0.07);
      display: flex; align-items: center; justify-content: center;
      font-size: 32px; margin-bottom: 28px;
      animation: ring-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both 0.2s;
      box-shadow: 0 0 40px rgba(16,185,129,0.2);
    }
    @keyframes ring-pop { from { transform:scale(0.5); opacity:0; } to { transform:scale(1); opacity:1; } }

    .success-title {
      font-size: 28px; font-weight: 600; letter-spacing: -0.02em;
      color: var(--text); margin-bottom: 10px;
    }
    .success-sub {
      font-size: 13px; color: var(--muted2); line-height: 1.8;
      max-width: 380px; margin: 0 auto 32px;
    }
    .success-meta {
      background: var(--surface2); border: 1px solid var(--border);
      border-radius: 8px; padding: 20px 28px; text-align: left;
      width: 100%; max-width: 380px;
    }
    .success-meta-row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 8px 0; border-bottom: 1px solid var(--border);
      font-size: 11px; font-family: 'JetBrains Mono', monospace;
    }
    .success-meta-row:last-child { border-bottom: none; }
    .success-meta-row .k { color: var(--muted); letter-spacing: 0.06em; }
    .success-meta-row .v { color: var(--text); font-weight: 400; }
    .success-meta-row .v.url { color: var(--blue); }

    @media (max-width: 900px) {
      .content { grid-template-columns: 1fr; }
      .sidebar { display: none; }
      .form-area { padding: 32px 24px; }
      .form-grid { grid-template-columns: 1fr; }
    }
  `;

  const getStrength = (p: string) => {
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p) && /[a-z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  };
  const strength = getStrength(form.password);
  const strengthLabel = ['', 'Weak', 'Fair', 'Fair', 'Strong'][strength];
  const strengthClass = strength <= 1 ? 'weak' : strength <= 3 ? 'fair' : 'strong';

  return (
    <>
      <style>{css}</style>

      <div className="bg-mesh">
        <div className="mesh-orb mesh-orb-1" />
        <div className="mesh-orb mesh-orb-2" />
        <div className="mesh-orb mesh-orb-3" />
      </div>

      <div className="shell">
        {/* ── Topbar ── */}
        <header className="topbar">
          <div className="logo-group">
            <div className="logo-icon">Nx</div>
            <div>
              <span className="logo-name">Nexus Accounts</span>
              <span className="logo-tag"> / portal</span>
            </div>
          </div>
          <div className="topbar-right">
            <div className="session-badge">
              <span className="session-dot" />
              Authenticated Session
            </div>
            <button className="btn-logout" onClick={handleLogout}>Sign Out</button>
          </div>
        </header>

        <div className="content">
          {/* ── Sidebar ── */}
          <aside className="sidebar">
            <div className="sidebar-head">
              <div className="sidebar-eyebrow">Onboarding</div>
              <h2 className="sidebar-title">
                Configure Your<br />
                <strong>Client Portal</strong>
              </h2>
              <p className="sidebar-desc">
                Fill in your details to provision a dedicated client
                workspace. This takes under 2 minutes.
              </p>
            </div>

            <div className="sidebar-steps">
              {[
                { n:'01', label:'Account Identity',  desc:'Email address' },
                { n:'03', label:'Portal Configuration', desc:'Name & URL for your portal' },
              ].map(s => (
                <div className="step-row" key={s.n}>
                  <div className="step-num">{s.n}</div>
                  <div className="step-body">
                    <div className="step-label">{s.label}</div>
                    <div className="step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sidebar-footer">
              <div className="sf-label">Session Status</div>
              <div className="sf-status">Authenticated · Secure</div>
            </div>
          </aside>

          {/* ── Form ── */}
          <main className="form-area">
            <div className="form-card">
              {submitted ? (
                <div className="success-wrap">
                  <div className="success-ring">✓</div>
                  <h2 className="success-title">Portal Provisioned</h2>
                  <p className="success-sub">
                     Client portal has been successfully configured in your website
                  </p>
                  <div className="success-meta">
                    {[
                      { k: 'Email',       v: form.email },
                      { k: 'Portal',      v: form.portalName },
                      { k: 'URL',         v: form.portalUrl, isUrl: true },
                    ].map(r => (
                      <div className="success-meta-row" key={r.k}>
                        <span className="k">{r.k}</span>
                        <span className={`v${r.isUrl ? ' url' : ''}`}>{r.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="form-header">
                    <div className="form-header-tag">Client Onboarding Form</div>
                    <h1 className="form-title">
                      Portal <span>Setup</span>
                    </h1>
                    <p className="form-subtitle">
                      Provide your account credentials and portal configuration.
                      All fields are required to provision your workspace.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Row 1: Username + Email */}
                    <div className="section-divider"><span>Account Identity</span></div>
                    <div className="form-grid">
                   

                      <div className={`field${errors.email && touched.email ? ' has-error' : ''}`}>
                        <div className="field-label">
                          Email Address <span className="req">*</span>
                        </div>
                        <div className="input-wrap">
                          <input
                            type="email"
                            placeholder="you@company.com"
                            value={form.email}
                            onChange={e => set('email', e.target.value)}
                            onBlur={() => blur('email')}
                            autoComplete="email"
                          />
                          <span className="field-icon">✉</span>
                        </div>
                        {errors.email && touched.email && (
                          <p className="err-msg">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Password */}
                    <div className="section-divider"><span>Security</span></div>
                    <div className="form-grid full" style={{ marginBottom: 0 }}>
                      <div className={`field${errors.password && touched.password ? ' has-error' : ''}`}>
                        <div className="field-label">
                          Password <span className="req">*</span>
                        </div>
                        <div className="input-wrap">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Min. 8 characters"
                            value={form.password}
                            onChange={e => set('password', e.target.value)}
                            onBlur={() => blur('password')}
                            autoComplete="new-password"
                            style={{ paddingRight: '72px' }}
                          />
                          <span className="field-icon">⬡</span>
                          <button
                            type="button"
                            className="toggle-pass"
                            onClick={() => setShowPassword(p => !p)}
                          >
                            {showPassword ? 'Hide' : 'Show'}
                          </button>
                        </div>
                        {form.password && (
                          <>
                            <div className="strength-bar">
                              {[1,2,3,4].map(i => (
                                <div
                                  key={i}
                                  className={`strength-seg${strength >= i ? ' ' + strengthClass : ''}`}
                                />
                              ))}
                            </div>
                            <div className="strength-label">
                              {strengthLabel && `Strength: ${strengthLabel}`}
                            </div>
                          </>
                        )}
                        {errors.password && touched.password && (
                          <p className="err-msg">{errors.password}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Portal Name + Portal URL */}
                    <div className="section-divider" style={{ marginTop: 24 }}><span>Portal Configuration</span></div>
                    <div className="form-grid">
                      <div className={`field${errors.portalName && touched.portalName ? ' has-error' : ''}`}>
                        <div className="field-label">
                          Client Portal <span className="req">*</span>
                        </div>
                        <div className="input-wrap">
                          <input
                            type="text"
                            placeholder="e.g. Acme Corp Portal"
                            value={form.portalName}
                            onChange={e => set('portalName', e.target.value)}
                            onBlur={() => blur('portalName')}
                          />
                          <span className="field-icon">⬡</span>
                        </div>
                        {errors.portalName && touched.portalName && (
                          <p className="err-msg">{errors.portalName}</p>
                        )}
                      </div>

                      <div className={`field${errors.portalUrl && touched.portalUrl ? ' has-error' : ''}`}>
                        <div className="field-label">
                          Portal URL <span className="req">*</span>
                        </div>
                        <div className="input-wrap">
                          <input
                            type="url"
                            placeholder="https://portal.acme.com"
                            value={form.portalUrl}
                            onChange={e => set('portalUrl', e.target.value)}
                            onBlur={() => blur('portalUrl')}
                          />
                          <span className="field-icon">⌁</span>
                        </div>
                        {errors.portalUrl && touched.portalUrl ? (
                          <p className="err-msg">{errors.portalUrl}</p>
                        ) : (
                          <p className="url-hint">Must start with https://</p>
                        )}
                      </div>
                    </div>

                    {apiError && <div className="api-error">{apiError}</div>}

                    <button
                      type="submit"
                      className="btn-submit"
                      disabled={submitting}
                    >
                      {submitting && <span className="btn-spinner" />}
                      {submitting ? 'Provisioning Portal…' : 'Provision Client Portal →'}
                    </button>

                    <div className="form-footer">
                      <span className="form-footer-text">256-bit encrypted · SOC 2 compliant</span>
                      <span className="form-footer-version">v2.4.1</span>
                    </div>
                  </form>
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}