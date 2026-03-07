import { useEffect, useState, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'motion/react';

export default function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '', 
  decimals = 0 
}: { 
  value: number, 
  suffix?: string, 
  prefix?: string,
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Number(latest.toFixed(decimals)));
    });
  }, [springValue, decimals]);

  const formattedValue = value >= 1000 && decimals === 0
    ? displayValue.toLocaleString() 
    : displayValue.toFixed(decimals);

  return (
    <span ref={ref}>
      {prefix}{formattedValue}{suffix}
    </span>
  );
}
