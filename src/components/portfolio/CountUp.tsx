import { useEffect, useRef, useState } from "react";
import type { Figure } from "@/data/portfolio";

const format = (n: number) => n.toLocaleString("fr-FR");

/** Counts from 0 to the value when it scrolls into view; startDelay is measured from page load. */
export function CountUp({ figure, startDelay = 0 }: { figure: Figure; startDelay?: number }) {
  const [value, setValue] = useState(figure.value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setValue(0);
    let raf = 0;
    let timeout = 0;
    const run = () => {
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(figure.value * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          timeout = window.setTimeout(run, Math.max(0, startDelay - performance.now()));
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [figure.value, startDelay]);

  return (
    <span ref={ref} className="lining-nums tabular-nums">
      {figure.prefix}
      {format(value)}
      {figure.suffix}
    </span>
  );
}
