import { useState, useRef } from "react";
import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Icon,
} from "@chakra-ui/react";
import Headers from "../Headers";
import { BsSend } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<
    "idle" | "pending" | "success" | "failed"
  >("idle");

  const form = useRef<HTMLFormElement>(null!);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading("pending");
    emailjs
      .sendForm(
        "service_n5gw8iq",
        "template_e9gz3h6",
        form.current,
        "bA4fqTqAOjhRjZhGh"
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setLoading("success");
          console.log("done");
        },
        (error) => {
          console.log(error);
          setLoading("failed");
        }
      );
  };

  return (
    <Box id="contact" mb={"100px"} className="cc-container page-alignment">
      <Headers
        title="Send me a message"
        subTitle="Got a question or proposal, or just want to say hello? Go ahead."
      />
      <form ref={form} onSubmit={sendEmail}>
        <Flex
          direction={"column"}
          gap={"20px"}
          width={"!00%"}
          maxW={"660px"}
          margin={"0 auto"}
        >
          <Flex
            direction={{ base: "column", sm: "row" }}
            justify={"space-between"}
            gap={{ base: "20px", sm: 0 }}
          >
            <Box
              className="bg-purple"
              padding={"10px 10px 5px 10px"}
              width={{ base: "100%", sm: "48%" }}
              borderRadius={"10px"}
            >
              <FormControl>
                <FormLabel width={"max-content"}>
                  <p style={{ marginBottom: "10px" }} className="text-white">
                    Name
                  </p>
                </FormLabel>
                <Input
                  required
                  className="text-white"
                  border={"none"}
                  _focus={{ border: "none", boxShadow: "none" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </Box>
            <Box
              className="bg-purple"
              padding={"10px 10px 5px 10px"}
              width={{ base: "100%", sm: "48%" }}
              borderRadius={"10px"}
            >
              <FormControl>
                <FormLabel width={"max-content"}>
                  <p style={{ marginBottom: "10px" }} className="text-white">
                    E-mail
                  </p>
                </FormLabel>
                <Input
                  required
                  type="email"
                  className="text-white"
                  border={"none"}
                  _focus={{ border: "none", boxShadow: "none" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </Box>
          </Flex>
          <Box
            className="bg-purple"
            padding={"10px 10px 5px 10px"}
            borderRadius={"10px"}
          >
            <FormControl>
              <FormLabel width={"max-content"}>
                <p style={{ marginBottom: "10px" }} className="text-white">
                  Subject
                </p>
              </FormLabel>
              <Input
                required
                className="text-white"
                border={"none"}
                _focus={{ border: "none", boxShadow: "none" }}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box
            className="bg-purple"
            padding={"10px 10px 5px 10px"}
            borderRadius={"10px"}
          >
            <FormLabel width={"max-content"}>
              <p style={{ marginBottom: "10px" }} className="text-white">
                Message
              </p>
            </FormLabel>
            <Textarea
              h={"200px"}
              required
              className="text-white"
              border={"none"}
              _focus={{ border: "none", boxShadow: "none" }}
              placeholder="Hi we need a skilled developer to build our project. How soon can you hop on to discuss this"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Box>
          <button
            disabled={Boolean(loading === "pending")}
            type="submit"
            style={{ width: "100%" }}
          >
            <Flex
              padding={"20px 15px"}
              className="bg-blue bg-hover-dark-3-blue active"
              align={"center"}
              gap={"15px"}
              borderRadius={"10px"}
              justify={"center"}
            >
              <h5 className="text-white fw-bold medium-text">Shoot</h5>
              <Icon boxSize={5} className="text-white" as={BsSend} />
            </Flex>
          </button>
        </Flex>
      </form>
    </Box>
  );
};

export default Contact;
