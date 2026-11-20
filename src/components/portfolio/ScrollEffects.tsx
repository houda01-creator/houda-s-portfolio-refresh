import { useEffect } from "react";

/** Feeds scroll position to CSS (--py for parallax, --progress for the reading bar). */
export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--progress", String(max > 0 ? y / max : 0));
      document.querySelectorAll<HTMLElement>(".parallax").forEach((el) => {
        const top = el.parentElement?.getBoundingClientRect().top ?? 0;
        el.style.setProperty("--py", String(-top));
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(frame); };
  }, []);
  return <div aria-hidden="true" className="scroll-progress" />;
}
