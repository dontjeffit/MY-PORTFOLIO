import { Flex, Box, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { skillsAnimation } from "../../utils/framerVariants";

type TechProps = {
  data: {
    id: number;
    tech: string;
    image: string;
  }[];
  show: boolean;
};

const Tech = ({ data, show }: TechProps) => {
  return (
    <Flex
      direction={"column"}
      gap={"25px"}
      className="text-white"
      p={"0px 10px 0px 60px"}
    >
      {data.map((each, index) => (
        <AnimatePresence key={each.id}>
          {show && (
            <Flex
              key={each.id}
              as={motion.div}
              variants={skillsAnimation(index, data.length)}
              initial="initial"
              animate="animate"
              exit="exit"
              justify={"space-between"}
              align={"center"}
              gap={"10px"}
              borderBottom={"1px solid #576ee0"}
              pb={"10px"}
            >
              <p>{each.tech}</p>
              <Box w={"40px"} h={"40px"}>
                <Image
                  w={"100%"}
                  h={"100%"}
                  alt={`${each.tech} logo`}
                  objectFit={"cover"}
                  src={each.image}
                />
              </Box>
            </Flex>
          )}
        </AnimatePresence>
      ))}
    </Flex>
  );
};

export default Tech;
