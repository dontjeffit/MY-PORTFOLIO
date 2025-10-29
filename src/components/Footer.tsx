import { Box, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { socials } from "../utils/data";

const Footer = () => {
  return (
    <Box bg={"#0e101b"} py={"60px"}>
      <Box className="page-alignment cc-container">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
          <Box>
            <h2 className="text-white">Jefferson</h2>
            <p className="text-blue">Fullstack Web Developer</p>
          </Box>
          <Flex flexWrap={"wrap"} gap={"50px"} height={"min-content"}>
            <Link
              to={"about"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              <p className="cursor text-white">About</p>
            </Link>
            <Link
              to={"skills"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              <p className="cursor text-white">Skills</p>
            </Link>
            <Link
              to={"portfolio"}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              <p className="cursor text-white">Portfolio</p>
            </Link>
          </Flex>
          <Flex gap={"50px"} flexWrap={"wrap"} height={"min-content"}>
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
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Footer;
