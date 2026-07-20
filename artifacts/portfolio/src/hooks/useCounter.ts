import { useState, useEffect } from 'react';
import gsap from 'gsap';

export function useCounter(end: number, duration: number = 2, inView: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const obj = { val: 0 };
    const tl = gsap.to(obj, {
      val: end,
      duration: duration,
      ease: 'power3.out',
      onUpdate: () => {
        setCount(Math.floor(obj.val));
      }
    });

    return () => {
      tl.kill();
    };
  }, [end, duration, inView]);

  return count;
}
