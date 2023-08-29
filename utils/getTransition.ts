import { cubicBezier } from "framer-motion";

export const getTransition = (
  delay: number = 0,
  duration: number = 0.75,
  ease: (t: number) => number = cubicBezier(0.65, 0, 0.35, 1)
) => {
  return { ease, duration, delay };
};
