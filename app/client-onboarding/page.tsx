'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  email: string;
  password: string;
  portalName: string;
  portalUrl: string;
}

interface FieldError {
  email?: string;
  password?: string;
  portalName?: string;
  portalUrl?: string;
}

interface Submission {
  id: string;
  email: string;
  portalName: string;
  portalUrl: string;
  submittedAt: string;
  updatedAt?: string;
}

interface EditState {
  email: string;
  portalName: string;
  portalUrl: string;
}

type View = 'form' | 'submissions';

export default function ClientOnBoarding() {
  const router = useRouter();
  const [verified, setVerified] = useState(false);
  const [activeView, setActiveView] = useState<View>('form');

  // ── Form state ────────────────────────────────────────────────────────────
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState('');
  const [errors, setErrors] = useState<FieldError>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState<FormData>({ email: '', password: '', portalName: '', portalUrl: '' });

  // ── Submissions state ─────────────────────────────────────────────────────
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loadingSubs, setLoadingSubs] = useState(false);
  const [subsError, setSubsError] = useState('');
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<EditState>({ email: '', portalName: '', portalUrl: '' });
  const [editErrors, setEditErrors] = useState<Partial<EditState>>({});
  const [savingId, setSavingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  // ── Auth Guard ────────────────────────────────────────────────────────────
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('/api/auth/session');
        const data = await res.json();
        if (!data.authenticated) router.replace('/onboarding/signup?from=/client-onBoarding');
        else setVerified(true);
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

  // ── Toast ─────────────────────────────────────────────────────────────────
  const showToast = (msg: string, type: 'success' | 'error') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  // ── Form logic ────────────────────────────────────────────────────────────
  const validate = (data: FormData): FieldError => {
    const e: FieldError = {};
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email address';
    if (data.password.length < 8) e.password = 'Password must be at least 8 characters';
    if (!data.portalName.trim()) e.portalName = 'Client portal name is required';
    if (!data.portalUrl.trim()) e.portalUrl = 'Portal URL is required';
    else if (!data.portalUrl.match(/^https?:\/\/.+\..+/)) e.portalUrl = 'Enter a valid URL (e.g. https://portal.nexus.com)';
    return e;
  };

  const set = (k: keyof FormData, v: string) => {
    const updated = { ...form, [k]: v };
    setForm(updated);
    if (touched[k]) setErrors(validate(updated));
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
        showToast('Portal provisioned successfully!', 'success');
      } else {
        setApiError(data.message || 'Submission failed. Please try again.');
      }
    } catch {
      setApiError('Network error. Please check your connection and retry.');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({ email: '', password: '', portalName: '', portalUrl: '' });
    setErrors({});
    setTouched({});
    setApiError('');
    setSubmitted(false);
  };

  // ── Submissions CRUD ──────────────────────────────────────────────────────
  const fetchSubmissions = useCallback(async () => {
    setLoadingSubs(true);
    setSubsError('');
    try {
      const res = await fetch('/api/onboarding/submissions');
      const data = await res.json();
      if (data.success) setSubmissions(data.submissions);
      else setSubsError(data.message || 'Failed to load.');
    } catch {
      setSubsError('Network error.');
    } finally {
      setLoadingSubs(false);
    }
  }, []);

  useEffect(() => {
    if (verified && activeView === 'submissions') fetchSubmissions();
  }, [verified, activeView, fetchSubmissions]);

  const startEdit = (s: Submission) => {
    setEditingId(s.id);
    setEditForm({ email: s.email, portalName: s.portalName, portalUrl: s.portalUrl });
    setEditErrors({});
  };
  const cancelEdit = () => { setEditingId(null); setEditErrors({}); };

  const validateEdit = (f: EditState): Partial<EditState> => {
    const e: Partial<EditState> = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Invalid email';
    if (!f.portalName.trim()) e.portalName = 'Required';
    if (!f.portalUrl.match(/^https?:\/\/.+\..+/)) e.portalUrl = 'Invalid URL';
    return e;
  };

  const saveEdit = async (id: string) => {
    const errs = validateEdit(editForm);
    if (Object.keys(errs).length > 0) { setEditErrors(errs); return; }
    setSavingId(id);
    try {
      const res = await fetch(`/api/onboarding/submissions/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm),
      });
      const data = await res.json();
      if (data.success) {
        setSubmissions(prev => prev.map(s => s.id === id ? { ...s, ...editForm, updatedAt: data.data?.updatedAt } : s));
        setEditingId(null);
        showToast('Updated successfully.', 'success');
      } else {
        showToast(data.message || 'Update failed.', 'error');
      }
    } catch {
      showToast('Network error.', 'error');
    } finally {
      setSavingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/onboarding/submissions/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setSubmissions(prev => prev.filter(s => s.id !== id));
        showToast('Submission deleted.', 'success');
      } else {
        showToast(data.message || 'Delete failed.', 'error');
      }
    } catch {
      showToast('Network error.', 'error');
    } finally {
      setDeletingId(null);
      setConfirmDelete(null);
    }
  };

  const filtered = submissions.filter(s =>
    [s.email, s.portalName, s.portalUrl].some(v => v.toLowerCase().includes(search.toLowerCase()))
  );

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  // ── Gate ──────────────────────────────────────────────────────────────────
  if (!verified) return (
    <div style={{ minHeight: '100vh', background: '#080810', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}.gs{width:32px;height:32px;border:1.5px solid rgba(99,179,237,0.15);border-top-color:#63b3ed;border-radius:50%;animation:spin 0.8s linear infinite}`}</style>
      <div className="gs" />
    </div>
  );

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

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:        #080810;
      --surface:   #0f1020;
      --surface2:  #151628;
      --surface3:  #1a1b30;
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
      --gold:      #f59e0b;
    }

    body { background: var(--bg); min-height: 100vh; font-family: 'Sora', sans-serif; color: var(--text); -webkit-font-smoothing: antialiased; }

    /* bg */
    .bg-mesh { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
    .mesh-orb { position: absolute; border-radius: 50%; filter: blur(100px); animation: orb-drift 20s ease-in-out infinite alternate; }
    .mesh-orb-1 { width:600px;height:600px;background:rgba(79,142,247,0.06);top:-200px;right:-100px; }
    .mesh-orb-2 { width:500px;height:500px;background:rgba(34,211,238,0.04);bottom:-150px;left:-100px;animation-delay:-10s; }
    .mesh-orb-3 { width:300px;height:300px;background:rgba(245,158,11,0.03);top:50%;left:40%;animation-delay:-5s; }
    @keyframes orb-drift { from{transform:translate(0,0)scale(1)} to{transform:translate(40px,30px)scale(1.08)} }
    .bg-mesh::after { content:''; position:absolute; inset:0; background-image: linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px); background-size:72px 72px; }

    /* layout */
    .shell { position: relative; z-index: 10; min-height: 100vh; display: flex; flex-direction: column; }

    /* topbar */
    .topbar { height:64px; border-bottom:1px solid var(--border); background:rgba(8,8,16,0.9); backdrop-filter:blur(20px); display:flex; align-items:center; justify-content:space-between; padding:0 40px; position:sticky; top:0; z-index:200; }
    .logo-group { display:flex; align-items:center; gap:14px; }
    .logo-icon { width:34px;height:34px;background:linear-gradient(135deg,var(--blue),var(--cyan));border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono';font-size:14px;color:#fff;letter-spacing:-0.05em; }
    .logo-name { font-size:14px; font-weight:600; color:var(--text); letter-spacing:-0.01em; }
    .logo-tag { font-size:10px; color:var(--muted); font-family:'JetBrains Mono'; letter-spacing:0.05em; margin-left:2px; }
    .topbar-right { display:flex; align-items:center; gap:16px; }
    .session-badge { display:flex; align-items:center; gap:7px; font-size:11px; font-family:'JetBrains Mono'; color:var(--muted2); letter-spacing:0.04em; }
    .session-dot { width:6px;height:6px;border-radius:50%;background:var(--success);box-shadow:0 0 8px var(--success);animation:pulse-dot 2s ease-in-out infinite; }
    @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
    .btn-logout { font-family:'Sora';font-size:11px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;color:var(--muted2);background:transparent;border:1px solid var(--border2);padding:7px 16px;cursor:pointer;border-radius:4px;transition:all 0.2s; }
    .btn-logout:hover { color:var(--error);border-color:rgba(248,113,113,0.4);background:rgba(248,113,113,0.06); }

    /* tab nav */
    .tab-nav { display:flex; gap:0; border-bottom:1px solid var(--border); background:var(--surface); padding:0 40px; }
    .tab-btn { font-family:'Sora';font-size:12px;font-weight:500;letter-spacing:0.02em;color:var(--muted2);background:transparent;border:none;border-bottom:2px solid transparent;padding:14px 20px;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;gap:8px;margin-bottom:-1px; }
    .tab-btn:hover { color:var(--text); }
    .tab-btn.active { color:var(--blue);border-bottom-color:var(--blue); }
    .tab-count { background:var(--blue-dim);border:1px solid rgba(79,142,247,0.2);color:var(--blue);font-size:9px;font-family:'JetBrains Mono';padding:2px 7px;border-radius:100px;letter-spacing:0.06em; }

    /* content area */
    .content { flex:1; display:grid; grid-template-columns:340px 1fr; min-height:calc(100vh - 110px); }

    /* sidebar */
    .sidebar { border-right:1px solid var(--border);background:var(--surface);padding:48px 36px;display:flex;flex-direction:column;gap:40px;animation:slide-left 0.7s ease both; }
    @keyframes slide-left { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:none} }
    .sidebar-eyebrow { font-size:10px;font-family:'JetBrains Mono';letter-spacing:0.2em;text-transform:uppercase;color:var(--blue);margin-bottom:18px;display:flex;align-items:center;gap:8px; }
    .sidebar-eyebrow::before { content:'';display:block;width:20px;height:1px;background:var(--blue); }
    .sidebar-title { font-size:26px;font-weight:300;line-height:1.25;color:var(--text);margin-bottom:14px;letter-spacing:-0.02em; }
    .sidebar-title strong { font-weight:600; }
    .sidebar-desc { font-size:12px;line-height:1.9;color:var(--muted2);letter-spacing:0.01em; }
    .sidebar-steps { display:flex;flex-direction:column;gap:0; }
    .step-row { display:flex;gap:16px;align-items:flex-start;padding:20px 0;border-bottom:1px solid var(--border); }
    .step-row:last-child { border-bottom:none; }
    .step-num { width:28px;height:28px;border-radius:6px;background:var(--blue-dim);border:1px solid rgba(79,142,247,0.2);display:flex;align-items:center;justify-content:center;font-size:11px;font-family:'JetBrains Mono';color:var(--blue);flex-shrink:0;margin-top:1px; }
    .step-label { font-size:12px;font-weight:500;color:var(--text);margin-bottom:4px; }
    .step-desc { font-size:11px;color:var(--muted);line-height:1.6;font-family:'JetBrains Mono'; }
    .sidebar-footer { margin-top:auto;padding:18px 20px;background:var(--surface2);border:1px solid var(--border);border-radius:6px; }
    .sf-label { font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);font-family:'JetBrains Mono';margin-bottom:8px; }
    .sf-status { font-size:12px;color:var(--success);font-weight:500;display:flex;align-items:center;gap:7px; }
    .sf-status::before { content:'';width:6px;height:6px;border-radius:50%;background:var(--success);display:block; }

    /* form area */
    .form-area { padding:48px 60px;display:flex;align-items:flex-start;justify-content:center;animation:slide-right 0.7s ease both; }
    @keyframes slide-right { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:none} }
    .form-card { width:100%;max-width:580px; }
    .form-header { margin-bottom:40px; }
    .form-header-tag { display:inline-flex;align-items:center;gap:7px;font-size:10px;font-family:'JetBrains Mono';letter-spacing:0.15em;text-transform:uppercase;color:var(--cyan);margin-bottom:16px;background:rgba(34,211,238,0.07);border:1px solid rgba(34,211,238,0.15);padding:5px 12px;border-radius:100px; }
    .form-header-tag::before { content:'◈';font-size:9px; }
    .form-title { font-size:28px;font-weight:600;letter-spacing:-0.03em;color:var(--text);margin-bottom:8px;line-height:1.2; }
    .form-title span { color:var(--blue); }
    .form-subtitle { font-size:13px;color:var(--muted2);line-height:1.7; }

    /* fields */
    .form-grid { display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px; }
    .form-grid.full { grid-template-columns:1fr; }
    .field { display:flex;flex-direction:column;gap:0; }
    .field-label { font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:var(--muted2);margin-bottom:8px;display:flex;align-items:center;justify-content:space-between; }
    .field-label .req { color:var(--blue);font-size:14px;line-height:1; }
    .input-wrap { position:relative; }
    .field-icon { position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--muted);font-size:14px;pointer-events:none;font-family:'JetBrains Mono';transition:color 0.2s; }
    .field input { width:100%;padding:13px 14px 13px 40px;background:var(--surface2);border:1px solid var(--border2);border-radius:6px;color:var(--text);font-family:'Sora';font-size:13px;outline:none;transition:border-color 0.2s,box-shadow 0.2s,background 0.2s;-webkit-appearance:none; }
    .field input::placeholder { color:var(--muted);font-size:12px; }
    .field input:focus { border-color:var(--blue);background:rgba(79,142,247,0.04);box-shadow:0 0 0 3px var(--blue-glow); }
    .input-wrap:focus-within .field-icon { color:var(--blue); }
    .field.has-error input { border-color:var(--error);box-shadow:0 0 0 3px rgba(248,113,113,0.12); }
    .err-msg { font-size:10px;color:var(--error);font-family:'JetBrains Mono';margin-top:6px;letter-spacing:0.04em;display:flex;align-items:center;gap:5px; }
    .err-msg::before { content:'!';font-weight:700; }
    .toggle-pass { position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--muted);font-size:11px;font-family:'JetBrains Mono';letter-spacing:0.06em;text-transform:uppercase;padding:4px 6px;transition:color 0.2s; }
    .toggle-pass:hover { color:var(--blue); }
    .url-hint { font-size:10px;color:var(--muted);font-family:'JetBrains Mono';margin-top:6px;letter-spacing:0.04em; }
    .strength-bar { display:flex;gap:4px;margin-top:8px; }
    .strength-seg { height:3px;flex:1;border-radius:100px;background:var(--border2);transition:background 0.3s; }
    .strength-seg.weak { background:var(--error); }
    .strength-seg.fair { background:var(--gold); }
    .strength-seg.strong { background:var(--success); }
    .strength-label { font-size:10px;font-family:'JetBrains Mono';color:var(--muted);margin-top:5px;letter-spacing:0.06em; }
    .section-divider { display:flex;align-items:center;gap:14px;margin:8px 0 24px; }
    .section-divider span { font-size:10px;font-family:'JetBrains Mono';letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);white-space:nowrap; }
    .section-divider::before,.section-divider::after { content:'';flex:1;height:1px;background:var(--border); }
    .api-error { background:rgba(248,113,113,0.07);border:1px solid rgba(248,113,113,0.25);border-left:3px solid var(--error);border-radius:4px;padding:13px 16px;font-size:12px;color:var(--error);margin-bottom:20px;font-family:'JetBrains Mono';letter-spacing:0.03em; }
    .btn-submit { width:100%;padding:15px;background:var(--blue);border:none;border-radius:6px;color:#fff;font-family:'Sora';font-size:13px;font-weight:600;letter-spacing:0.04em;cursor:pointer;transition:all 0.25s;position:relative;overflow:hidden;margin-top:8px; }
    .btn-submit::before { content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.1),transparent);opacity:0;transition:opacity 0.2s; }
    .btn-submit:hover { background:#5f9df8;transform:translateY(-1px);box-shadow:0 8px 24px rgba(79,142,247,0.35); }
    .btn-submit:hover::before { opacity:1; }
    .btn-submit:active { transform:translateY(0); }
    .btn-submit:disabled { opacity:0.5;cursor:not-allowed;transform:none;box-shadow:none; }
    .btn-spinner { display:inline-block;width:13px;height:13px;border:1.5px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:spin 0.7s linear infinite;margin-right:8px; }
    @keyframes spin { to{transform:rotate(360deg)} }
    .form-footer { margin-top:24px;padding-top:20px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between; }
    .form-footer-text { font-size:10px;font-family:'JetBrains Mono';color:var(--muted);letter-spacing:0.06em;display:flex;align-items:center;gap:7px; }
    .form-footer-text::before { content:'🔒';font-size:11px; }
    .form-footer-version { font-size:10px;font-family:'JetBrains Mono';color:var(--border2);letter-spacing:0.06em; }

    /* success */
    .success-wrap { display:flex;flex-direction:column;align-items:center;text-align:center;padding:60px 20px;animation:fade-in 0.6s ease both; }
    @keyframes fade-in { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:none} }
    .success-ring { width:80px;height:80px;border-radius:50%;border:1.5px solid var(--success);background:rgba(16,185,129,0.07);display:flex;align-items:center;justify-content:center;font-size:32px;margin-bottom:28px;animation:ring-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both 0.2s;box-shadow:0 0 40px rgba(16,185,129,0.2); }
    @keyframes ring-pop { from{transform:scale(0.5);opacity:0} to{transform:scale(1);opacity:1} }
    .success-title { font-size:28px;font-weight:600;letter-spacing:-0.02em;color:var(--text);margin-bottom:10px; }
    .success-sub { font-size:13px;color:var(--muted2);line-height:1.8;max-width:380px;margin:0 auto 32px; }
    .success-meta { background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:20px 28px;text-align:left;width:100%;max-width:380px; }
    .success-meta-row { display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border);font-size:11px;font-family:'JetBrains Mono'; }
    .success-meta-row:last-child { border-bottom:none; }
    .success-meta-row .k { color:var(--muted);letter-spacing:0.06em; }
    .success-meta-row .v { color:var(--text); }
    .success-meta-row .v.url { color:var(--blue); }
    .btn-new { margin-top:24px;padding:11px 24px;background:var(--blue-dim);border:1px solid rgba(79,142,247,0.3);color:var(--blue);font-family:'Sora';font-size:12px;font-weight:500;border-radius:6px;cursor:pointer;transition:all 0.2s;letter-spacing:0.02em; }
    .btn-new:hover { background:rgba(79,142,247,0.2); }

    /* ── Submissions panel ── */
    .subs-area { padding:36px 40px;flex:1;overflow-x:auto;animation:fade-in 0.4s ease both; }
    .subs-header { display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:28px;flex-wrap:wrap; }
    .subs-title { font-size:20px;font-weight:600;letter-spacing:-0.02em; }
    .subs-sub { font-size:11px;color:var(--muted2);font-family:'JetBrains Mono';margin-top:4px;letter-spacing:0.04em; }

    /* stats */
    .stats-row { display:flex;gap:14px;flex-wrap:wrap;margin-bottom:24px; }
    .stat-card { background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:14px 20px;display:flex;align-items:center;gap:12px;min-width:140px;animation:fadeUp 0.4s ease both; }
    @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
    .stat-icon { width:32px;height:32px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0; }
    .si-blue { background:var(--blue-dim);border:1px solid rgba(79,142,247,0.15); }
    .si-green { background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.15); }
    .stat-val { font-size:20px;font-weight:600;letter-spacing:-0.02em;font-family:'JetBrains Mono'; }
    .stat-label { font-size:9px;color:var(--muted2);letter-spacing:0.1em;text-transform:uppercase;font-family:'JetBrains Mono';margin-top:1px; }

    /* toolbar */
    .toolbar { display:flex;align-items:center;gap:12px;margin-bottom:18px;flex-wrap:wrap; }
    .search-wrap { position:relative;flex:1;min-width:200px;max-width:360px; }
    .search-icon { position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--muted);font-size:13px;pointer-events:none; }
    .search-input { width:100%;padding:9px 14px 9px 36px;background:var(--surface2);border:1px solid var(--border2);border-radius:6px;color:var(--text);font-family:'Sora';font-size:12px;outline:none;transition:border-color 0.2s,box-shadow 0.2s; }
    .search-input::placeholder { color:var(--muted); }
    .search-input:focus { border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-glow); }
    .results-count { font-size:10px;font-family:'JetBrains Mono';color:var(--muted2);letter-spacing:0.06em;margin-left:auto;white-space:nowrap; }
    .btn-refresh { font-family:'JetBrains Mono';font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--muted2);background:transparent;border:1px solid var(--border2);padding:8px 14px;border-radius:4px;cursor:pointer;transition:all 0.2s; }
    .btn-refresh:hover { color:var(--blue);border-color:rgba(79,142,247,0.4);background:var(--blue-dim); }

    /* table */
    .table-wrap { background:var(--surface);border:1px solid var(--border);border-radius:10px;overflow:hidden;animation:fadeUp 0.4s ease 0.1s both;min-width:700px; }
    .table-head { display:grid;grid-template-columns:2fr 2fr 2.5fr 1.4fr 170px;padding:11px 20px;background:var(--surface2);border-bottom:1px solid var(--border); }
    .th { font-size:9px;font-family:'JetBrains Mono';letter-spacing:0.18em;text-transform:uppercase;color:var(--muted);font-weight:500; }
    .table-row { display:grid;grid-template-columns:2fr 2fr 2.5fr 1.4fr 170px;padding:0 20px;border-bottom:1px solid var(--border);transition:background 0.15s;animation:rowIn 0.35s ease both; }
    .table-row:last-child { border-bottom:none; }
    .table-row:hover { background:rgba(255,255,255,0.015); }
    @keyframes rowIn { from{opacity:0;transform:translateX(-6px)} to{opacity:1;transform:none} }
    .td { padding:14px 0;display:flex;align-items:center;font-size:12px;color:var(--text);min-width:0; }
    .td-inner { overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;padding-right:10px; }
    .td-email { font-family:'JetBrains Mono';font-size:11px;color:var(--muted2); }
    .td-portal { font-weight:500; }
    .td-url { color:var(--blue);font-size:11px;font-family:'JetBrains Mono'; }
    .td-date { font-family:'JetBrains Mono';font-size:10px;color:var(--muted); }
    .td-actions { gap:7px; }

    /* edit inputs */
    .edit-input { width:100%;padding:6px 9px;background:var(--surface3);border:1px solid var(--border2);border-radius:5px;color:var(--text);font-family:'Sora';font-size:11px;outline:none;transition:border-color 0.2s,box-shadow 0.2s;margin-right:8px; }
    .edit-input:focus { border-color:var(--blue);box-shadow:0 0 0 2px var(--blue-glow); }
    .edit-input.err { border-color:var(--error); }
    .edit-err { font-size:9px;color:var(--error);font-family:'JetBrains Mono';margin-top:3px;letter-spacing:0.04em; }

    /* action btns */
    .btn-action { padding:5px 11px;border-radius:5px;border:1px solid;cursor:pointer;font-size:10px;font-family:'JetBrains Mono';font-weight:500;letter-spacing:0.06em;text-transform:uppercase;transition:all 0.18s;display:flex;align-items:center;gap:4px;white-space:nowrap;flex-shrink:0; }
    .btn-edit { color:var(--blue);border-color:rgba(79,142,247,0.25);background:var(--blue-dim); }
    .btn-edit:hover { background:rgba(79,142,247,0.2);border-color:rgba(79,142,247,0.5); }
    .btn-del { color:var(--error);border-color:rgba(248,113,113,0.2);background:rgba(248,113,113,0.06); }
    .btn-del:hover { background:rgba(248,113,113,0.15);border-color:rgba(248,113,113,0.45); }
    .btn-save { color:var(--success);border-color:rgba(16,185,129,0.25);background:rgba(16,185,129,0.08); }
    .btn-save:hover { background:rgba(16,185,129,0.18); }
    .btn-cancel2 { color:var(--muted2);border-color:var(--border2);background:transparent; }
    .btn-cancel2:hover { color:var(--text); }
    .btn-spin2 { width:9px;height:9px;border:1.5px solid rgba(255,255,255,0.2);border-top-color:currentColor;border-radius:50%;animation:spin 0.7s linear infinite;display:inline-block; }

    /* empty / loading */
    .empty { text-align:center;padding:70px 20px;display:flex;flex-direction:column;align-items:center;gap:10px; }
    .empty-icon { font-size:32px;opacity:0.3; }
    .empty-text { font-size:13px;color:var(--muted2); }
    .empty-sub { font-size:10px;color:var(--muted);font-family:'JetBrains Mono'; }
    .loading { text-align:center;padding:70px;display:flex;flex-direction:column;align-items:center;gap:14px; }
    .load-ring { width:32px;height:32px;border:1.5px solid var(--border2);border-top-color:var(--blue);border-radius:50%;animation:spin 0.8s linear infinite; }
    .load-text { font-size:10px;font-family:'JetBrains Mono';color:var(--muted2);letter-spacing:0.1em; }
    .error-bar { background:rgba(248,113,113,0.07);border:1px solid rgba(248,113,113,0.2);border-radius:6px;padding:12px 16px;font-size:11px;color:var(--error);font-family:'JetBrains Mono';display:flex;align-items:center;gap:10px;margin-bottom:18px; }

    /* modal */
    .overlay { position:fixed;inset:0;background:rgba(8,8,16,0.8);backdrop-filter:blur(8px);z-index:500;display:flex;align-items:center;justify-content:center;animation:fadeIn 0.2s ease; }
    @keyframes fadeIn { from{opacity:0} to{opacity:1} }
    .confirm-modal { background:var(--surface);border:1px solid var(--border2);border-radius:12px;padding:30px;max-width:380px;width:90%;animation:modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1) both; }
    @keyframes modalIn { from{opacity:0;transform:scale(0.9)} to{opacity:1;transform:scale(1)} }
    .modal-icon { font-size:26px;margin-bottom:12px; }
    .modal-title { font-size:17px;font-weight:600;margin-bottom:8px; }
    .modal-body { font-size:12px;color:var(--muted2);line-height:1.7;margin-bottom:22px; }
    .modal-actions { display:flex;gap:10px; }
    .modal-actions .btn-action { flex:1;justify-content:center;padding:9px;font-size:11px; }

    /* toast */
    .toast { position:fixed;bottom:24px;right:24px;z-index:999;background:var(--surface2);border:1px solid var(--border2);border-radius:8px;padding:12px 18px;font-size:11px;font-family:'JetBrains Mono';display:flex;align-items:center;gap:9px;box-shadow:0 8px 32px rgba(0,0,0,0.4);animation:toastIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both;max-width:320px; }
    @keyframes toastIn { from{opacity:0;transform:translateY(10px)scale(0.95)} to{opacity:1;transform:none} }
    .toast.success { border-color:rgba(16,185,129,0.3); }
    .toast.error { border-color:rgba(248,113,113,0.3); }
    .toast-dot { width:5px;height:5px;border-radius:50%;flex-shrink:0; }
    .toast.success .toast-dot { background:var(--success);box-shadow:0 0 6px var(--success); }
    .toast.error .toast-dot { background:var(--error); }

    @media(max-width:900px) {
      .content { grid-template-columns:1fr; }
      .sidebar { display:none; }
      .form-area { padding:32px 24px; }
      .form-grid { grid-template-columns:1fr; }
      .subs-area { padding:24px 16px; }
      .tab-nav { padding:0 16px; }
      .topbar { padding:0 16px; }
    }
  `;

  return (
    <>
      <style>{css}</style>

      {/* bg */}
      <div className="bg-mesh">
        <div className="mesh-orb mesh-orb-1" />
        <div className="mesh-orb mesh-orb-2" />
        <div className="mesh-orb mesh-orb-3" />
      </div>

      {/* confirm delete modal */}
      {confirmDelete && (
        <div className="overlay" onClick={() => setConfirmDelete(null)}>
          <div className="confirm-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-icon">🗑</div>
            <div className="modal-title">Delete Submission</div>
            <div className="modal-body">This is permanent and cannot be undone. The portal record will be removed from the database.</div>
            <div className="modal-actions">
              <button className="btn-action btn-cancel2" onClick={() => setConfirmDelete(null)}>Cancel</button>
              <button className="btn-action btn-del" onClick={() => handleDelete(confirmDelete)} disabled={deletingId === confirmDelete}>
                {deletingId === confirmDelete ? <><span className="btn-spin2" /> Deleting…</> : '⚠ Confirm Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* toast */}
      {toast && (
        <div className={`toast ${toast.type}`}>
          <div className="toast-dot" />
          {toast.msg}
        </div>
      )}

      <div className="shell">
        {/* topbar */}
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

        {/* tab nav */}
        <nav className="tab-nav">
          <button className={`tab-btn${activeView === 'form' ? ' active' : ''}`} onClick={() => setActiveView('form')}>
            ＋ New Portal
          </button>
          <button
            className={`tab-btn${activeView === 'submissions' ? ' active' : ''}`}
            onClick={() => setActiveView('submissions')}
          >
            All Submissions
            {submissions.length > 0 && <span className="tab-count">{submissions.length}</span>}
          </button>
        </nav>

        {/* ── Form view ── */}
        {activeView === 'form' && (
          <div className="content">
            <aside className="sidebar">
              <div>
                <div className="sidebar-eyebrow">Onboarding</div>
                <h2 className="sidebar-title">Configure Your<br /><strong>Client Portal</strong></h2>
                <p className="sidebar-desc">Fill in your details to provision a dedicated client workspace. This takes under 2 minutes.</p>
              </div>
              <div className="sidebar-steps">
                {[
                  { n: '01', label: 'Account Identity', desc: 'Email address' },
                  { n: '02', label: 'Security', desc: 'Secure password setup' },
                  { n: '03', label: 'Portal Configuration', desc: 'Name & URL for your portal' },
                ].map(s => (
                  <div className="step-row" key={s.n}>
                    <div className="step-num">{s.n}</div>
                    <div>
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

            <main className="form-area">
              <div className="form-card">
                {submitted ? (
                  <div className="success-wrap">
                    <div className="success-ring">✓</div>
                    <h2 className="success-title">Portal Provisioned</h2>
                    <p className="success-sub">Client portal has been successfully configured in your workspace.</p>
                    <div className="success-meta">
                      {[
                        { k: 'Email', v: form.email },
                        { k: 'Portal', v: form.portalName },
                        { k: 'URL', v: form.portalUrl, isUrl: true },
                      ].map(r => (
                        <div className="success-meta-row" key={r.k}>
                          <span className="k">{r.k}</span>
                          <span className={`v${r.isUrl ? ' url' : ''}`}>{r.v}</span>
                        </div>
                      ))}
                    </div>
                    <button className="btn-new" onClick={resetForm}>＋ Add Another Portal</button>
                    <button className="btn-new" style={{ marginLeft: 10 }} onClick={() => { setActiveView('submissions'); }}>
                      View All Submissions →
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="form-header">
                      <div className="form-header-tag">Client Onboarding Form</div>
                      <h1 className="form-title">Portal <span>Setup</span></h1>
                      <p className="form-subtitle">Provide your account credentials and portal configuration. All fields are required.</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                      {/* Email */}
                      <div className="section-divider"><span>Account Identity</span></div>
                      <div className="form-grid full">
                        <div className={`field${errors.email && touched.email ? ' has-error' : ''}`}>
                          <div className="field-label">Email Address <span className="req">*</span></div>
                          <div className="input-wrap">
                            <input type="email" placeholder="you@company.com" value={form.email}
                              onChange={e => set('email', e.target.value)} onBlur={() => blur('email')} autoComplete="email" />
                            <span className="field-icon">✉</span>
                          </div>
                          {errors.email && touched.email && <p className="err-msg">{errors.email}</p>}
                        </div>
                      </div>

                      {/* Password */}
                      <div className="section-divider"><span>Security</span></div>
                      <div className="form-grid full" style={{ marginBottom: 0 }}>
                        <div className={`field${errors.password && touched.password ? ' has-error' : ''}`}>
                          <div className="field-label">Password <span className="req">*</span></div>
                          <div className="input-wrap">
                            <input type={showPassword ? 'text' : 'password'} placeholder="Min. 8 characters"
                              value={form.password} onChange={e => set('password', e.target.value)}
                              onBlur={() => blur('password')} autoComplete="new-password" style={{ paddingRight: '72px' }} />
                            <span className="field-icon">⬡</span>
                            <button type="button" className="toggle-pass" onClick={() => setShowPassword(p => !p)}>
                              {showPassword ? 'Hide' : 'Show'}
                            </button>
                          </div>
                          {form.password && (
                            <>
                              <div className="strength-bar">
                                {[1,2,3,4].map(i => (
                                  <div key={i} className={`strength-seg${strength >= i ? ' ' + strengthClass : ''}`} />
                                ))}
                              </div>
                              <div className="strength-label">{strengthLabel && `Strength: ${strengthLabel}`}</div>
                            </>
                          )}
                          {errors.password && touched.password && <p className="err-msg">{errors.password}</p>}
                        </div>
                      </div>

                      {/* Portal */}
                      <div className="section-divider" style={{ marginTop: 24 }}><span>Portal Configuration</span></div>
                      <div className="form-grid">
                        <div className={`field${errors.portalName && touched.portalName ? ' has-error' : ''}`}>
                          <div className="field-label">Client Portal <span className="req">*</span></div>
                          <div className="input-wrap">
                            <input type="text" placeholder="e.g. Acme Corp Portal" value={form.portalName}
                              onChange={e => set('portalName', e.target.value)} onBlur={() => blur('portalName')} />
                            <span className="field-icon">⬡</span>
                          </div>
                          {errors.portalName && touched.portalName && <p className="err-msg">{errors.portalName}</p>}
                        </div>

                        <div className={`field${errors.portalUrl && touched.portalUrl ? ' has-error' : ''}`}>
                          <div className="field-label">Portal URL <span className="req">*</span></div>
                          <div className="input-wrap">
                            <input type="url" placeholder="https://portal.acme.com" value={form.portalUrl}
                              onChange={e => set('portalUrl', e.target.value)} onBlur={() => blur('portalUrl')} />
                            <span className="field-icon">⌁</span>
                          </div>
                          {errors.portalUrl && touched.portalUrl
                            ? <p className="err-msg">{errors.portalUrl}</p>
                            : <p className="url-hint">Must start with https://</p>}
                        </div>
                      </div>

                      {apiError && <div className="api-error">{apiError}</div>}

                      <button type="submit" className="btn-submit" disabled={submitting}>
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
        )}

        {/* ── Submissions view ── */}
        {activeView === 'submissions' && (
          <div className="subs-area">
            <div className="subs-header">
              <div>
                <div className="subs-title">All Submissions</div>
                <div className="subs-sub">Manage · Edit · Delete client portal records</div>
              </div>
            </div>

            {/* stats */}
            <div className="stats-row">
              <div className="stat-card" style={{ animationDelay: '0s' }}>
                <div className="stat-icon si-blue">📋</div>
                <div>
                  <div className="stat-val">{submissions.length}</div>
                  <div className="stat-label">Total Clients</div>
                </div>
              </div>
              <div className="stat-card" style={{ animationDelay: '0.08s' }}>
                <div className="stat-icon si-green">✓</div>
                <div>
                  <div className="stat-val">{submissions.filter(s => s.portalUrl.startsWith('https')).length}</div>
                  <div className="stat-label">Secure Portals</div>
                </div>
              </div>
            </div>

            {subsError && (
              <div className="error-bar">
                ⚠ {subsError}
                <button style={{ marginLeft:'auto',background:'none',border:'none',color:'inherit',cursor:'pointer',fontFamily:'inherit',fontSize:'inherit' }} onClick={fetchSubmissions}>Retry →</button>
              </div>
            )}

            <div className="toolbar">
              <div className="search-wrap">
                <span className="search-icon">⌕</span>
                <input className="search-input" type="text" placeholder="Search email, portal name, URL…"
                  value={search} onChange={e => setSearch(e.target.value)} />
              </div>
              <button className="btn-refresh" onClick={fetchSubmissions}>↻ Refresh</button>
              <div className="results-count">{filtered.length} / {submissions.length} records</div>
            </div>

            <div className="table-wrap">
              <div className="table-head">
                <div className="th">Email</div>
                <div className="th">Portal Name</div>
                <div className="th">Portal URL</div>
                <div className="th">Date</div>
                <div className="th">Actions</div>
              </div>

              {loadingSubs ? (
                <div className="loading">
                  <div className="load-ring" />
                  <div className="load-text">Loading submissions…</div>
                </div>
              ) : filtered.length === 0 ? (
                <div className="empty">
                  <div className="empty-icon">📂</div>
                  <div className="empty-text">{search ? 'No results match your search.' : 'No submissions yet.'}</div>
                  <div className="empty-sub">{search ? 'Try a different query' : 'Submissions appear here after clients complete onboarding.'}</div>
                </div>
              ) : (
                filtered.map((s, i) => {
                  const isEditing = editingId === s.id;
                  const isSaving = savingId === s.id;
                  return (
                    <div className="table-row" key={s.id} style={{ animationDelay: `${i * 0.03}s` }}>
                      {/* email */}
                      <div className="td td-email">
                        {isEditing ? (
                          <div style={{ width:'100%',paddingRight:8 }}>
                            <input className={`edit-input${editErrors.email ? ' err':''}`} value={editForm.email}
                              onChange={e => setEditForm(f => ({ ...f, email: e.target.value }))} placeholder="email@co.com" />
                            {editErrors.email && <div className="edit-err">{editErrors.email}</div>}
                          </div>
                        ) : <div className="td-inner">{s.email}</div>}
                      </div>
                      {/* portal name */}
                      <div className="td td-portal">
                        {isEditing ? (
                          <div style={{ width:'100%',paddingRight:8 }}>
                            <input className={`edit-input${editErrors.portalName ? ' err':''}`} value={editForm.portalName}
                              onChange={e => setEditForm(f => ({ ...f, portalName: e.target.value }))} placeholder="Portal name" />
                            {editErrors.portalName && <div className="edit-err">{editErrors.portalName}</div>}
                          </div>
                        ) : <div className="td-inner">{s.portalName}</div>}
                      </div>
                      {/* portal url */}
                      <div className="td td-url">
                        {isEditing ? (
                          <div style={{ width:'100%',paddingRight:8 }}>
                            <input className={`edit-input${editErrors.portalUrl ? ' err':''}`} value={editForm.portalUrl}
                              onChange={e => setEditForm(f => ({ ...f, portalUrl: e.target.value }))} placeholder="https://..." />
                            {editErrors.portalUrl && <div className="edit-err">{editErrors.portalUrl}</div>}
                          </div>
                        ) : (
                          <div className="td-inner">
                            <a href={s.portalUrl} target="_blank" rel="noopener noreferrer"
                              style={{ color:'var(--blue)',textDecoration:'none' }}
                              onMouseEnter={e => (e.currentTarget.style.textDecoration='underline')}
                              onMouseLeave={e => (e.currentTarget.style.textDecoration='none')}>
                              {s.portalUrl}
                            </a>
                          </div>
                        )}
                      </div>
                      {/* date */}
                      <div className="td td-date">
                        <div className="td-inner">{formatDate(s.submittedAt)}</div>
                      </div>
                      {/* actions */}
                      <div className="td td-actions">
                        {isEditing ? (
                          <>
                            <button className="btn-action btn-save" onClick={() => saveEdit(s.id)} disabled={isSaving}>
                              {isSaving ? <><span className="btn-spin2" /> Saving</> : '✓ Save'}
                            </button>
                            <button className="btn-action btn-cancel2" onClick={cancelEdit} disabled={isSaving}>✕</button>
                          </>
                        ) : (
                          <>
                            <button className="btn-action btn-edit" onClick={() => startEdit(s)}>✎ Edit</button>
                            <button className="btn-action btn-del" onClick={() => setConfirmDelete(s.id)}>🗑</button>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}