export const bottomNavVariants = {
  key: "bottomNav",
  initial: { y: "100%" },
  animate: {
    y: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    y: "100%",
    transition: { duration: 0.2 },
  },
};

export const textVariant = (index: number) => ({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeIn",
      delay: 0.1 * index,
    },
  },
});

export const skillsAnimation = (index: number, elementNumber: number) => ({
  initial: { y: "-10px", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0.1 * index,
      ease: "easeIn",
      type: "tween",
    },
  },
  exit: {
    y: "-10px",
    opacity: 0,
    transition: {
      duration: 0.07,
      delay: (elementNumber + 1 - index) * 0.05,
      ease: "easeIn",
      type: "tween",
    },
  },
});

export const arrowVariants = {
  key: "arrow",
  initial: { y: "200%" },
  animate: {
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    y: "200%",
    transition: { duration: 0.3 },
  },
};
