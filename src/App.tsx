import "./styles/index.scss";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/nav/Navbar";
import Home from "./components/hero/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Extra from "./components/Extra";

function App() {
  return (
    <Box>
      <Navbar />
      <Box pt={"80px"}>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Extra/>
        <Contact />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
