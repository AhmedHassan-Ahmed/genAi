import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "./theme";

const AnimatedImage = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!imgRef.current) return;

    gsap.to(imgRef.current, {
      scale: 1.25,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    gsap.to(imgRef.current, {
      x: 30,
      y: 30,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0.6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <>
      <img
        ref={imgRef}
        src="/ChatGPT Image Mar 20, 2026, 02_44_42 AM.png"
        alt="background"
        className="fixed inset-0 w-full h-full object-cover -z-20 scale-125"
      />

      <div
        ref={overlayRef}
        className={`fixed inset-0 -z-10 transition-all duration-500 ${
          theme === "dark" &&
          "bg-gradient-to-br from-black/60 via-purple-900/30 to-black/60"
        }
        ${
          theme === "light" &&
          "bg-gradient-to-br from-white/40 via-blue-100/30 to-white/40"
        }
        ${
          theme === "red" &&
          "bg-gradient-to-br from-red-900/50 via-pink-600/30 to-black/60"
        }
        ${
          theme === "blue" &&
          "bg-gradient-to-br from-blue-900/50 via-cyan-600/30 to-black/60"
        }`}
      />

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.15),transparent_50%)]" />
    </>
  );
};

export default AnimatedImage;
