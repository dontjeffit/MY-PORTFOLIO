import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { socials } from "../../utils/data";
import useElement from "../../hooks/useElement";
import Intro from "./Intro";

const Home = () => {
  const { elementRef, elementWidth } = useElement();

  return (
    <Box id="/" mb={"100px"} pt={{ md: "100px" }} className="cc-container page-alignment text-white">
      <Flex gap={{ base: "40px", md: "100px" }} mb={{ base: "30px", md: 0 }}>
        <Flex direction={"column"} gap={"35px"}>
          {socials.map((each) => (
            <a
              key={each.id}
              href={each.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className="text-blue text-hover-light-3-blue"
                as={each.icon}
                boxSize={6}
              />
            </a>
          ))}
        </Flex>
        <Flex
          w={"80%"}
          justify={"space-between"}
          flexWrap={"wrap"}
          gap={{ base: "30px", md: 0 }}
        >
          <Intro base={false} />
          <Box
            ref={elementRef}
            width={{ base: "100%", md: "46%" }}
            maxW={{ base: "320px", md: "46%" }}
            h={elementWidth}
          >
            <Image
              w={"100%"}
              h={"100%"}
              borderRadius={"60%"}
              alt="picture"
              objectFit={"cover"}
              src="/images/myphoto.jpg"
            />
          </Box>
        </Flex>
      </Flex>
      <Intro base />
    </Box>
  );
};

export default Home;
