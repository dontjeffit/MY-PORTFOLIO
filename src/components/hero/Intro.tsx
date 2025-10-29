import { Box, Flex, Icon } from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import TypingText from "../TypingText";

type IntroProps = {
  base: boolean;
};

const Intro = ({ base }: IntroProps) => {
  return (
    <Box
      display={{ base: base ? "block" : "none", md: base ? "none" : "block" }}
      width={{ base: "100%", md: "46%" }}
    >
      <TypingText title="Hi, I'm Jefferson"/>
      <h4 className="text-blue medium-text">A Fullstack Web Developer</h4>
      <p style={{ marginTop: "15px" }} className="text-fade-white">
        I am highly skilled at building responsive web applications and robust
        backend architecture
      </p>
      <p style={{ marginTop: "20px" }}>
        Want to take your <span className="text-blue">brand</span> to the next
        level?
      </p>
      <a
        href="https://wa.link/f93b5l"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Flex
          mt={"25px"}
          padding={"20px 15px"}
          className="bg-blue bg-hover-dark-3-blue"
          width={"max-content"}
          align={"center"}
          gap={"15px"}
          borderRadius={"10px"}
        >
          <p className="text-white fw-bold">Hire me</p>
          <Icon boxSize={5} className="text-white" as={AiOutlineSend} />
        </Flex>
      </a>
    </Box>
  );
};

export default Intro;
