'use client';

import { useState, useRef, useEffect } from 'react';

type State = 'idle' | 'loading' | 'success' | 'error' | 'redirecting';

export default function PortalAccess() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [portalName, setPortalName] = useState('');
  const [portalUrl, setPortalUrl] = useState('');
  const [touched, setTouched] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  useEffect(() => {
    if (state === 'redirecting') {
      const interval = setInterval(() => {
        setCountdown(c => {
          if (c <= 1) { clearInterval(interval); window.location.href = portalUrl; return 0; }
          return c - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [state, portalUrl]);

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail(email)) return;
    setState('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/portal/lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setPortalName(data.portalName);
        setPortalUrl(data.portalUrl);
        setState('success');
        setTimeout(() => { setCountdown(3); setState('redirecting'); }, 1600);
      } else {
        setErrorMsg(data.message || 'No portal found.');
        setState('error');
      }
    } catch {
      setErrorMsg('Connection error. Please try again.');
      setState('error');
    }
  };

  const showFieldError = touched && email.length > 0 && !isValidEmail(email);
  const isSuccess = state === 'success' || state === 'redirecting';

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
      --blue-glow: rgba(79,142,247,0.25);
      --cyan:      #22d3ee;
      --text:      #e8eaf6;
      --muted:     #6b7280;
      --muted2:    #9ca3af;
      --success:   #10b981;
      --error:     #f87171;
    }

    html, body { min-height: 100vh; background: var(--bg); font-family: 'Sora', sans-serif; color: var(--text); -webkit-font-smoothing: antialiased; }

    /* bg */
    .bg-mesh { position:fixed; inset:0; pointer-events:none; z-index:0; overflow:hidden; }
    .mesh-orb { position:absolute; border-radius:50%; filter:blur(110px); animation:orb-drift 18s ease-in-out infinite alternate; }
    .o1 { width:700px;height:700px;background:rgba(79,142,247,0.07);top:-200px;right:-150px; }
    .o2 { width:550px;height:550px;background:rgba(34,211,238,0.04);bottom:-150px;left:-100px;animation-delay:-9s; }
    .o3 { width:350px;height:350px;background:rgba(79,142,247,0.04);top:60%;left:50%;animation-delay:-4s; }
    @keyframes orb-drift { from{transform:translate(0,0)scale(1)} to{transform:translate(35px,25px)scale(1.07)} }
    .bg-mesh::after { content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px);background-size:72px 72px; }

    /* topbar */
    .topbar { position:fixed;top:0;left:0;right:0;z-index:100;height:64px;border-bottom:1px solid var(--border);background:rgba(8,8,16,0.88);backdrop-filter:blur(20px);display:flex;align-items:center;justify-content:space-between;padding:0 40px; }
    .logo-group { display:flex;align-items:center;gap:14px; }
    .logo-icon { width:34px;height:34px;background:linear-gradient(135deg,var(--blue),var(--cyan));border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono';font-size:14px;color:#fff;letter-spacing:-0.05em; }
    .logo-name { font-size:14px;font-weight:600;color:var(--text);letter-spacing:-0.01em; }
    .logo-tag { font-size:10px;color:var(--muted);font-family:'JetBrains Mono';letter-spacing:0.05em;margin-left:2px; }
    .topbar-right { display:flex;align-items:center;gap:16px; }
    .topbar-link { font-family:'JetBrains Mono';font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--muted2);text-decoration:none;border:1px solid var(--border2);padding:6px 14px;border-radius:4px;transition:all 0.2s; }
    .topbar-link:hover { color:var(--blue);border-color:rgba(79,142,247,0.4);background:var(--blue-dim); }

    /* shell */
    .shell { position:relative;z-index:10;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:100px 24px 60px; }
    .center-col { width:100%;max-width:500px;display:flex;flex-direction:column;align-items:center; }

    /* badge + heading */
    .page-badge { display:inline-flex;align-items:center;gap:7px;font-size:10px;font-family:'JetBrains Mono';letter-spacing:0.15em;text-transform:uppercase;color:var(--cyan);margin-bottom:28px;background:rgba(34,211,238,0.07);border:1px solid rgba(34,211,238,0.15);padding:6px 14px;border-radius:100px;animation:fadeUp 0.7s ease both; }
    .page-badge::before { content:'◈';font-size:9px; }
    .page-heading { text-align:center;margin-bottom:12px;animation:fadeUp 0.7s ease 0.07s both; }
    .page-heading h1 { font-size:40px;font-weight:600;letter-spacing:-0.03em;line-height:1.15;color:var(--text); }
    .page-heading h1 span { color:var(--blue); }
    .page-sub { text-align:center;font-size:13px;color:var(--muted2);line-height:1.8;max-width:360px;animation:fadeUp 0.7s ease 0.13s both;margin-bottom:40px;font-weight:300; }
    @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:none} }

    /* card */
    .card { width:100%;background:var(--surface);border:1px solid var(--border2);border-radius:12px;padding:40px 44px;box-shadow:0 24px 64px rgba(0,0,0,0.35),0 1px 0 rgba(255,255,255,0.04) inset;animation:fadeUp 0.7s ease 0.18s both;position:relative;overflow:hidden; }
    .card::before { content:'';position:absolute;top:0;left:15%;right:15%;height:1px;background:linear-gradient(90deg,transparent,rgba(79,142,247,0.45),transparent); }

    /* section divider */
    .section-divider { display:flex;align-items:center;gap:14px;margin-bottom:28px; }
    .section-divider::before,.section-divider::after { content:'';flex:1;height:1px;background:var(--border); }
    .section-divider span { font-size:10px;font-family:'JetBrains Mono';letter-spacing:0.2em;text-transform:uppercase;color:var(--muted);white-space:nowrap; }

    /* field */
    .field { display:flex;flex-direction:column;margin-bottom:20px; }
    .field-label { font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:var(--muted2);margin-bottom:9px;display:flex;align-items:center;justify-content:space-between; }
    .req { color:var(--blue);font-size:14px;line-height:1; }
    .input-wrap { position:relative; }
    .field-icon { position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--muted);font-size:14px;pointer-events:none;font-family:'JetBrains Mono';transition:color 0.2s; }
    .field-input { width:100%;padding:14px 60px 14px 42px;background:var(--surface2);border:1px solid var(--border2);border-radius:6px;color:var(--text);font-family:'Sora';font-size:13px;outline:none;transition:border-color 0.2s,box-shadow 0.2s,background 0.2s;-webkit-appearance:none; }
    .field-input::placeholder { color:var(--muted);font-size:12px; }
    .field-input:focus { border-color:var(--blue);background:rgba(79,142,247,0.04);box-shadow:0 0 0 3px var(--blue-glow); }
    .input-wrap:focus-within .field-icon { color:var(--blue); }
    .field-input.err { border-color:var(--error);box-shadow:0 0 0 3px rgba(248,113,113,0.12); }
    .err-msg { font-size:10px;color:var(--error);font-family:'JetBrains Mono';margin-top:6px;letter-spacing:0.04em;display:flex;align-items:center;gap:5px; }
    .err-msg::before { content:'!';font-weight:700; }
    .clear-btn { position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--muted);font-size:11px;font-family:'JetBrains Mono';letter-spacing:0.06em;text-transform:uppercase;padding:4px 6px;transition:color 0.2s; }
    .clear-btn:hover { color:var(--error); }

    /* api error */
    .api-error { background:rgba(248,113,113,0.07);border:1px solid rgba(248,113,113,0.25);border-left:3px solid var(--error);border-radius:4px;padding:13px 16px;font-size:12px;color:var(--error);margin-bottom:20px;font-family:'JetBrains Mono';letter-spacing:0.03em;display:flex;align-items:center;gap:8px;animation:shake 0.4s ease; }
    @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-5px)} 40%{transform:translateX(5px)} 60%{transform:translateX(-3px)} 80%{transform:translateX(3px)} }

    /* submit */
    .btn-submit { width:100%;padding:15px;background:var(--blue);border:none;border-radius:6px;color:#fff;font-family:'Sora';font-size:13px;font-weight:600;letter-spacing:0.04em;cursor:pointer;transition:all 0.25s;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;gap:9px;margin-top:4px; }
    .btn-submit::before { content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.1),transparent);opacity:0;transition:opacity 0.2s; }
    .btn-submit:hover { background:#5f9df8;transform:translateY(-1px);box-shadow:0 8px 24px rgba(79,142,247,0.38); }
    .btn-submit:hover::before { opacity:1; }
    .btn-submit:active { transform:translateY(0); }
    .btn-submit:disabled { opacity:0.5;cursor:not-allowed;transform:none;box-shadow:none; }
    .btn-spin { display:inline-block;width:13px;height:13px;border:1.5px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:spin 0.7s linear infinite; }
    @keyframes spin { to{transform:rotate(360deg)} }

    /* card footer */
    .card-footer { margin-top:22px;padding-top:20px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between; }
    .footer-secure { font-size:10px;font-family:'JetBrains Mono';color:var(--muted);letter-spacing:0.06em;display:flex;align-items:center;gap:6px; }
    .footer-secure::before { content:'🔒';font-size:11px; }
    .footer-ver { font-size:10px;font-family:'JetBrains Mono';color:var(--border2);letter-spacing:0.06em; }

    /* success */
    .success-wrap { display:flex;flex-direction:column;align-items:center;text-align:center;padding:10px 0;animation:fadeUp 0.5s ease both; }
    .success-ring { width:72px;height:72px;border-radius:50%;border:1.5px solid var(--success);background:rgba(16,185,129,0.07);display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:20px;animation:ring-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both 0.1s;box-shadow:0 0 40px rgba(16,185,129,0.18); }
    @keyframes ring-pop { from{transform:scale(0.5);opacity:0} to{transform:scale(1);opacity:1} }
    .success-title { font-size:24px;font-weight:600;letter-spacing:-0.02em;color:var(--text);margin-bottom:8px; }
    .success-portal-badge { display:inline-flex;align-items:center;gap:7px;font-size:11px;font-family:'JetBrains Mono';letter-spacing:0.1em;text-transform:uppercase;color:var(--blue);margin-bottom:8px;background:var(--blue-dim);border:1px solid rgba(79,142,247,0.2);padding:5px 14px;border-radius:100px; }
    .success-sub { font-size:13px;color:var(--muted2);line-height:1.75;margin-bottom:26px; }
    .countdown-wrap { display:flex;flex-direction:column;align-items:center;gap:10px; }
    .countdown-ring { width:56px;height:56px;position:relative; }
    .countdown-ring svg { width:100%;height:100%;transform:rotate(-90deg); }
    .ring-track { fill:none;stroke:var(--border2);stroke-width:2; }
    .ring-fill { fill:none;stroke:var(--blue);stroke-width:2;stroke-linecap:round;stroke-dasharray:145;animation:drain 3s linear forwards; }
    @keyframes drain { from{stroke-dashoffset:0} to{stroke-dashoffset:145} }
    .countdown-num { position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono';font-size:18px;font-weight:500;color:var(--blue); }
    .countdown-label { font-size:10px;font-family:'JetBrains Mono';letter-spacing:0.15em;text-transform:uppercase;color:var(--muted2); }
    .go-now { margin-top:10px;font-size:10px;font-family:'JetBrains Mono';color:var(--blue);background:var(--blue-dim);border:1px solid rgba(79,142,247,0.25);cursor:pointer;letter-spacing:0.1em;text-transform:uppercase;padding:7px 16px;border-radius:4px;transition:all 0.2s; }
    .go-now:hover { background:rgba(79,142,247,0.2);border-color:rgba(79,142,247,0.5); }

    /* info bar */
    .info-bar { display:flex;gap:0;margin-top:24px;width:100%;border:1px solid var(--border);border-radius:8px;background:var(--surface);overflow:hidden;animation:fadeUp 0.7s ease 0.28s both; }
    .info-cell { flex:1;padding:14px 20px;text-align:center;border-right:1px solid var(--border); }
    .info-cell:last-child { border-right:none; }
    .info-val { font-size:12px;font-weight:500;color:var(--text);margin-bottom:3px;display:flex;align-items:center;justify-content:center;gap:6px; }
    .info-lbl { font-size:9px;font-family:'JetBrains Mono';letter-spacing:0.15em;text-transform:uppercase;color:var(--muted); }
    .sdot { width:5px;height:5px;border-radius:50%; }
    .sdot-green { background:var(--success);box-shadow:0 0 5px var(--success);animation:pulse-dot 2s ease-in-out infinite; }
    .sdot-blue  { background:var(--blue);box-shadow:0 0 5px var(--blue); }
    @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }

    @media(max-width:560px) {
      .card { padding:28px 20px; }
      .page-heading h1 { font-size:28px; }
      .topbar { padding:0 16px; }
      .info-bar { display:none; }
    }
  `;

  return (
    <>
      <style>{css}</style>

      <div className="bg-mesh">
        <div className="mesh-orb o1" />
        <div className="mesh-orb o2" />
        <div className="mesh-orb o3" />
      </div>

      <header className="topbar">
        <div className="logo-group">
          <div className="logo-icon">Nx</div>
          <div>
            <span className="logo-name">Nexus Accounts</span>
            <span className="logo-tag"> / portal</span>
          </div>
        </div>
        <div className="topbar-right">
          <a href="/client-onBoarding" className="topbar-link">Onboarding →</a>
        </div>
      </header>

      <div className="shell">
        <div className="center-col">

          <div className="page-badge">Client Gateway</div>

          <div className="page-heading">
            <h1>Access Your <span>Portal</span></h1>
          </div>
          <p className="page-sub">
            Enter the email address linked to your account and we'll take you straight to your client workspace.
          </p>

          <div className="card">
            {isSuccess ? (
              <div className="success-wrap">
                <div className="success-ring">✓</div>
                <h2 className="success-title">Portal Found</h2>
                <div className="success-portal-badge">◈ {portalName}</div>
                <p className="success-sub">
                  Your workspace has been located.<br />Redirecting you now…
                </p>
                {state === 'redirecting' && (
                  <div className="countdown-wrap">
                    <div className="countdown-ring">
                      <svg viewBox="0 0 50 50">
                        <circle className="ring-track" cx="25" cy="25" r="23" />
                        <circle className="ring-fill"  cx="25" cy="25" r="23" />
                      </svg>
                      <div className="countdown-num">{countdown}</div>
                    </div>
                    <div className="countdown-label">Redirecting</div>
                    <button className="go-now" onClick={() => { window.location.href = portalUrl; }}>
                      Go Now →
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="section-divider"><span>Identify Your Account</span></div>

                {state === 'error' && (
                  <div className="api-error">
                    <span>⚠</span> {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="field">
                    <div className="field-label">
                      Email Address <span className="req">*</span>
                    </div>
                    <div className="input-wrap">
                      <input
                        ref={inputRef}
                        className={`field-input${showFieldError ? ' err' : ''}`}
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={e => { setEmail(e.target.value); if (state === 'error') setState('idle'); }}
                        onBlur={() => setTouched(true)}
                        autoComplete="email"
                        disabled={state === 'loading'}
                      />
                      <span className="field-icon">✉</span>
                      {email && (
                        <button type="button" className="clear-btn"
                          onClick={() => { setEmail(''); setState('idle'); setTouched(false); inputRef.current?.focus(); }}>
                          Clear
                        </button>
                      )}
                    </div>
                    {showFieldError && <p className="err-msg">Enter a valid email address</p>}
                  </div>

                  <button type="submit" className="btn-submit" disabled={state === 'loading'}>
                    {state === 'loading'
                      ? <><span className="btn-spin" /> Locating Portal…</>
                      : 'Access My Portal →'}
                  </button>
                </form>

                <div className="card-footer">
                  <span className="footer-secure">256-bit encrypted · SOC 2 compliant</span>
                  <span className="footer-ver">v2.4.1</span>
                </div>
              </>
            )}
          </div>

          <div className="info-bar">
            <div className="info-cell">
              <div className="info-val"><span className="sdot sdot-green" /> Active</div>
              <div className="info-lbl">System Status</div>
            </div>
            <div className="info-cell">
              <div className="info-val"><span className="sdot sdot-blue" /> Instant</div>
              <div className="info-lbl">Portal Access</div>
            </div>
            <div className="info-cell">
              <div className="info-val">256-bit</div>
              <div className="info-lbl">Encryption</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}