import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles.css";

export default function GlassHero() {
  const blobs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    blobs.current.forEach((blob, i) => {
      if (!blob) return;

      gsap.to(blob, {
        x: i % 2 === 0 ? 120 : -120,
        y: i % 2 === 0 ? -80 : 80,
        duration: 10 + i * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div className="wrapper">
      {/* BLOBS */}
      {[0, 1, 2, 3].map((_, i) => (
        <div
          key={i}
          ref={(el): void => {
            blobs.current[i] = el;
          }}
          className={`blob blob${i}`}
        />
      ))}

      {/* ✨ OVERLAY */}
      <div className="overlay" />

      {/* GLASS */}
      <div className="glass">
        <h1>Glass UI</h1>
      </div>
    </div>
  );
}