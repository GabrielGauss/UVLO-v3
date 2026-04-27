import { useState, useCallback, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#&';

export function useTextScramble(finalText: string) {
  const [displayText, setDisplayText] = useState(finalText);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let iteration = 0;
    const total = finalText.replace(/ /g, '').length * 4;

    intervalRef.current = setInterval(() => {
      setDisplayText(
        finalText.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (i < iteration / 4) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join('')
      );
      iteration++;
      if (iteration > total) {
        clearInterval(intervalRef.current!);
        setDisplayText(finalText);
      }
    }, 28);
  }, [finalText]);

  return { displayText, scramble };
}
