import { useEffect, useRef } from 'react';
import { useTextScramble } from '../hooks/useTextScramble';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: Tag;
}

export default function ScrambleText({ text, className = '', as: Tag = 'h2' }: ScrambleTextProps) {
  const { displayText, scramble } = useTextScramble(text);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          scramble();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [scramble]);

  return (
    <div ref={wrapperRef}>
      <Tag className={className}>{displayText}</Tag>
    </div>
  );
}
