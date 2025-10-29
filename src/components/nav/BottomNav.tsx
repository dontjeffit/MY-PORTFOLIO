import { Box, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { bottomNavVariants } from "../../utils/framerVariants";
import { links } from "../../utils/data";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

type BottomNavProps = {
  setShowBottomNav: React.Dispatch<React.SetStateAction<boolean>>;
  showBottomNav: boolean;
};

const BottomNav = ({ showBottomNav, setShowBottomNav }: BottomNavProps) => {
  return (
    <AnimatePresence>
      {showBottomNav && (
        <Box
          pos={"fixed"}
          bottom={0}
          width={"100%"}
          zIndex={"50"}
          h={"180px"}
          bg={"rgb(22,25,39)"}
          boxShadow={{ base: "0 -4px 0px rgba(0, 0, 0, 0.1)", md: "none" }}
          as={motion.div}
          {...bottomNavVariants}
        >
          <Flex
            pos={"relative"}
            justify={"center"}
            align={"center"}
            h={"100%"}
            w={"100%"}
          >
            <Box
              width={"100%"}
              maxW={"630px"}
              margin={"0 auto"}
              className="text-white"
            >
              <SimpleGrid columns={3} spacing={8}>
                {links.map((each) => (
                  <Link
                    key={each.id}
                    to={each.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={each.offSet}
                    activeClass="text-blue"
                  >
                    <Box
                      onClick={() => setShowBottomNav(false)}
                      className="cursor text-hover-blue"
                      display={"grid"}
                      placeItems={"center"}
                      p={"5px"}
                    >
                      <Icon boxSize={5} mb={"3px"} as={each.icon} />
                      <h6 className="small-text">{each.link}</h6>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </Box>
            <Icon
              onClick={() => setShowBottomNav(false)}
              pos={"absolute"}
              className="text-fade-white cursor"
              right={"20px"}
              bottom={"15px"}
              as={MdClose}
              boxSize={5}
            />
          </Flex>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default BottomNav;
