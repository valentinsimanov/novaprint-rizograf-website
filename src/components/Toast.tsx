'use client';

import { useEffect, useRef } from 'react';

export default function Toast() {
  const toastRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const msg = (e as CustomEvent<string>).detail;
      if (!toastRef.current || !textRef.current) return;
      if (timerRef.current) clearTimeout(timerRef.current);
      textRef.current.textContent = msg;
      toastRef.current.classList.add('show');
      timerRef.current = setTimeout(() => {
        toastRef.current?.classList.remove('show');
      }, 2200);
    };
    window.addEventListener('show-toast', handler);
    return () => window.removeEventListener('show-toast', handler);
  }, []);

  return (
    <div className="toast" ref={toastRef} role="status" aria-live="polite">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span ref={textRef}>Контакты скопированы</span>
    </div>
  );
}

export function showToast(message: string) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: message }));
  }
}
