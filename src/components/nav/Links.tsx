import { Flex } from "@chakra-ui/react";
import { links } from "../../utils/data";
import { Link } from "react-scroll";

const Links = () => {
  return (
    <Flex gap={"40px"} hideBelow={"md"} className="text-white ">
      {links.map((each) => (
        <Link
          key={each.id}
          to={each.to}
          spy={true}
          smooth={true}
          duration={500}
          offset={each.offSet}
          activeClass="text-blue"
          className="text-hover-blue"
        >
          <h6 className="small-text cursor">{each.link}</h6>
        </Link>
      ))}
    </Flex>
  );
};

export default Links;
