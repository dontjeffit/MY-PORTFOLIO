import { motion } from "framer-motion";
import { textVariant } from "../utils/framerVariants";

type TypingTextProps = {
  title: string;
};

const TypingText = ({ title }: TypingTextProps) => {
  return (
    <motion.h1>
      {Array.from(title).map((letter, index) => (
        <motion.span
          key={index}
          variants={textVariant(index + 1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TypingText;
