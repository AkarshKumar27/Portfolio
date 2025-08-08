import { useEffect, useMemo, useState } from "react";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const AmbientLight = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const reduced = useMemo(prefersReducedMotion, []);

  useEffect(() => {
    if (reduced) return;
    const handler = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };
    window.addEventListener("pointermove", handler, { passive: true });
    return () => window.removeEventListener("pointermove", handler);
  }, [reduced]);

  const bg = `radial-gradient(500px circle at ${pos.x}% ${pos.y}%, hsl(var(--primary-glow) / 0.18), transparent 60%)`;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ backgroundImage: bg }}
    />
  );
};

export default AmbientLight;
