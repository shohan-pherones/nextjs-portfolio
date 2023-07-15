export const getTransition = (
  delay: number = 0,
  duration: number = 0.75,
  ease: string = "easeInOut"
) => {
  return { ease, duration, delay };
};
