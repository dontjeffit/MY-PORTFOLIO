import { useState, useEffect } from "react";
import { Flex, Box, Icon } from "@chakra-ui/react";
import { Link } from "react-scroll";
import Links from "./Links";
import { ImMenu4 } from "react-icons/im";
import BottomNav from "./BottomNav";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai";
import { arrowVariants } from "../../utils/framerVariants";

type ScrollData = {
  y: number | (Window & typeof globalThis);
  lastY: number | (Window & typeof globalThis);
};

const Navbar = () => {
  const [scrollData, setScrollData] = useState<ScrollData>({
    y: 0,
    lastY: 0,
  });
  const [showNav, setShowNav] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [arrowUp, setArrowUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prev) => {
        return {
          y: window.scrollY,
          lastY: prev.y,
        };
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (Number(scrollY) > 80 && scrollData.y > scrollData.lastY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [scrollData]);

  useEffect(() => {
    if (Number(scrollData.y) > 300) {
      setArrowUp(true);
    } else {
      setArrowUp(false);
    }
  }, [scrollData.y]);

  return (
    <>
      <Box
        position={"fixed"}
        top={{ md: 0 }}
        bottom={{ base: 0 }}
        zIndex={20}
        w={"100%"}
        h={"80px"}
        transition={"all 0.4s ease"}
        transform={{
          base: showNav ? "" : "translateY(100%)",
          md: showNav ? "" : "translateY(-100%)",
        }}
      >
        <Flex
          className="cc-container page-alignment"
          h={"100%"}
          align={"center"}
          justify={"space-between"}
          bg={"rgb(22,25,39, 0.7)"}
          boxShadow={{ base: "0 -3px 0px rgba(0, 0, 0, 0.1)", md: "none" }}
        >
          <Link to="/" spy={true} smooth={true} duration={500} offset={-80}>
            <p className="text-white fw-bold cursor">Jefferson</p>
          </Link>
          <Links />
          <Icon
            hideFrom={"md"}
            onClick={() => setShowBottomNav(true)}
            className="text-fade-white cursor"
            as={ImMenu4}
            boxSize={7}
          />
        </Flex>
      </Box>
      <Box hideFrom={"md"}>
        <BottomNav
          showBottomNav={showBottomNav}
          setShowBottomNav={setShowBottomNav}
        />
      </Box>
      <Box hideBelow={"sm"}>
        <AnimatePresence>
          {arrowUp && (
            <Box
              as={motion.div}
              {...arrowVariants}
              pos={"fixed"}
              zIndex={10}
              right={"20px"}
              bottom={"100px"}
              p={"7px"}
              className="bg-blue"
              borderRadius={"5px"}
            >
              <Icon className="text-white" as={AiOutlineArrowUp} boxSize={5} />
            </Box>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
};

export default Navbar;
