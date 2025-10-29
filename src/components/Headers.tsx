import { Box } from "@chakra-ui/react";

type HeadersProps = {
  title: string;
  subTitle: string;
};

const Headers = ({ title, subTitle }: HeadersProps) => {
  return (
    <Box width={"100%"} textAlign={"center"} mb={"50px"}>
      <h2 className="text-white">{title}</h2>
      <h6 className="small-text text-blue">{subTitle}</h6>
    </Box>
  );
};

export default Headers;
