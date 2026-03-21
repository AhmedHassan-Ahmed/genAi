import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedImage = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(imgRef.current, {
      scale: 1.1,
      x: 30,
      y: -20,
      duration: 8,
      ease: "sine.inOut",
    }).to(imgRef.current, {
      scale: 1.15,
      x: -20,
      y: 20,
      duration: 8,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <img
      ref={imgRef}
      src="/ChatGPT Image Mar 20, 2026, 02_44_42 AM.png"
      alt="background"
      className="bg"
    />
  );
};

export default AnimatedImage;