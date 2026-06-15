"use client";
import { useInView } from "react-intersection-observer";
import { useAnimation, type AnimationControls } from "framer-motion";
import { useEffect } from "react";

export function useScrollAnimation(threshold = 0.15) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold, triggerOnce: true });
  useEffect(() => { if (inView) controls.start("visible"); }, [inView, controls]);
  return { ref, controls, inView };
}

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
