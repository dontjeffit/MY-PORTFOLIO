import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";

const Extra = () => {
  return (
    <Flex
      width={"100%"}
      maxW={"768px"}
      mx={"auto"}
      padding={{
        base: "25px 1.25rem 25px 1.25rem",
        md: "35px 3.125rem 15px 3.125rem",
      }}
      mb={"100px"}
      bg={"#0e101b"}
      direction={{ base: "column", md: "row" }}
      justify={"space-between"}
      align={"center"}
      gap={{ base: "30px", md: 0 }}
      borderRadius={{ md: "20px" }}
    >
      <Box
        width={{ base: "100%", md: "44%" }}
        textAlign={{ base: "center", md: "start" }}
      >
        <h4
          style={{ marginBottom: "10px" }}
          className="large-text text-white fw-bold"
        >
          Got A New Project?
        </h4>
        <p className="text-white" style={{ marginBottom: "20px" }}>
          Hire me, let's add value to{" "}
          <span className="text-blue">your brand</span>.
        </p>
        <p className="text-white" style={{ marginBottom: "10px" }}>
          I develop <span className="text-blue">responsive</span> and{" "}
          <span className="text-blue">high quality</span> websites with{" "}
          <span className="text-blue">robust</span> and{" "}
          <span className="text-blue">highly scalable</span> server-side
        </p>
        <p className="text-white fw-bold" style={{ marginBottom: "20px" }}>
          Send me a message now so we can get working
        </p>
        <Flex justify={{ base: "center", md: "start" }}>
          <a
            href="mailto:anujohnjeff@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Flex
              padding={"20px 15px"}
              className="bg-white bg-hover-dark-1-white"
              width={"max-content"}
              align={"center"}
              gap={"15px"}
              borderRadius={"10px"}
            >
              <p className="text-blue fw-bold">Contact me</p>
              <Icon boxSize={5} className="text-blue" as={AiOutlineSend} />
            </Flex>
          </a>
        </Flex>
      </Box>
      <Box hideBelow={"md"} width={"48%"}>
        <Box width={"100%"} maxW={"320px"} h={"300px"}>
          <Image
            w={"100%"}
            h={"100%"}
            objectFit={"cover"}
            alt=""
            src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1698061198/Languages/Ellipse_6_uq4opf.png"
          />
        </Box>
        <Image />
      </Box>
    </Flex>
  );
};

export default Extra;
