import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface BounceCardsProps {
  className?: string;
  images?: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = '',
  images = [],
  containerWidth = 800,   
  containerHeight = 450, 
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
 transformStyles ,
  enableHover = false
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [measuredWidth, setMeasuredWidth] = useState(containerWidth);
  const spread = measuredWidth * 0.24;

  const dynamicTransforms = useMemo(
    () =>
      transformStyles ?? [
        `rotate(10deg) translate(-${spread * 1.7}px)`,
        `rotate(5deg) translate(-${spread * 0.85}px)`,
        `rotate(-3deg)`,
        `rotate(-10deg) translate(${spread * 0.85}px)`,
        `rotate(2deg) translate(${spread * 1.7}px)`
      ],
    [spread, transformStyles]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setMeasuredWidth(entry.contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.card',
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    } else if (transformStr === 'none') {
      return 'rotate(0deg)';
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform: string, offsetX: number): string => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === 'none' ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);
    images.forEach((_, i) => {
      const selector = q(`.card-${i}`);
      gsap.killTweensOf(selector);

      const baseTransform = dynamicTransforms[i] || 'none';

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
     const offsetX = i < hoveredIdx ? -spread : spread;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);
    images.forEach((_, i) => {
      const selector = q(`.card-${i}`);
      gsap.killTweensOf(selector);
      const baseTransform = dynamicTransforms[i] || 'none';
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    });
  };

  return (
    <div
      className={`bounceCardsContainer ${className}`}
      ref={containerRef}
      style={{
        position: 'relative',
        width: `min(${containerWidth}px, calc(100vw - 2rem))`,
        height: `min(${containerHeight}px, 62vw, calc(100vh - 14rem))`
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`card card-${idx}`}
          style={{ transform: dynamicTransforms[idx] ?? 'none' }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img className="image" src={src} alt={`card-${idx}`} />
        </div>
      ))}
    </div>
  );
}
