import { useEffect, useState } from "react";

/**
 * Small bubble that pops, then expands and fades away after ~1s, revealing the page.
 * Pure CSS so it plays even before the page becomes interactive; removed from the DOM afterwards.
 */
export function IntroBubble() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className="intro-overlay pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <span className="intro-ring absolute h-24 w-24 rounded-full border border-primary" />
      <span className="intro-bubble relative flex h-24 w-24 items-center justify-center rounded-full bg-primary shadow-[var(--shadow-lift)]">
        <span className="intro-letter font-display text-5xl italic text-primary-foreground">H</span>
      </span>
    </div>
  );
}
