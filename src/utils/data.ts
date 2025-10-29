import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSend,
  AiOutlineDatabase,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";

export const links = [
  {
    id: 1,
    link: "Home",
    to: "/",
    icon: AiOutlineHome,
    offSet: -80,
  },
  {
    id: 2,
    link: "About",
    to: "about",
    icon: AiOutlineUser,
    offSet: -80,
  },
  {
    id: 3,
    link: "Skills",
    to: "skills",
    icon: GiSkills,
    offSet: -80,
  },
  {
    id: 4,
    link: "Portfolio",
    to: "portfolio",
    icon: AiOutlineDatabase,
    offSet: -80,
  },
  {
    id: 5,
    link: "Contact Me",
    to: "contact",
    icon: AiOutlineSend,
    offSet: -80,
  },
];

export const socials = [
  {
    id: 1,
    icon: AiOutlineWhatsApp,
    link: "https://wa.link/f93b5l",
  },
  {
    id: 2,
    icon: AiOutlineTwitter,
    link: "https://x.com/dontjeffit",
  },
  {
    id: 3,
    icon: AiOutlineGithub,
    link: "https://github.com/dontjeffit",
  },
  {
    id: 4,
    icon: AiOutlineLinkedin,
    link: "https://www.linkedin.com/in/jefferson-anu-john-912235293/",
  },
];

export const frontEnd = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dbxvk3apv/image/upload/v1684088223/Languages/html5-icon-13_qvhfra.webp",
    tech: "HTML",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dbxvk3apv/image/upload/v1684087181/Languages/800px-CSS3_logo.svg_elztw4.webp",
    tech: "CSS",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dbxvk3apv/image/upload/v1686869514/Languages/sw8zlvflfasdznh5qzen.jpg",
    tech: "BOOTSTRAP",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dbxvk3apv/image/upload/v1697886110/Languages/dh6mqxthkyzg9jiz67gh.webp",
    tech: "CHAKRA UI",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dbxvk3apv/image/upload/v1684087376/Languages/800px-JavaScript-logo_ayuz4z.webp",
    tech: "JAVASCRIPT",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dbxvk3apv/image/upload/v1697886036/Languages/typescript_pxdwpo.webp",
    tech: "TYPESCRIPT",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dbxvk3apv/image/upload/v1684087456/Languages/2300px-React-icon.svg_q0zfg2.webp",
    tech: "REACT",
  },
];

export const backend = [
  {
    id: 1,
    tech: "NODEJS",
    image:
      "https://res.cloudinary.com/dbxvk3apv/image/upload/v1684087529/Languages/nodejs-logo-FBE122E377-seeklogo.com_temdc8.webp",
  },
  {
    id: 2,
    tech: "EXPRESSJS",
    image:
      "https://res.cloudinary.com/dbxvk3apv/image/upload/v1684088080/Languages/2e5b0058b2d38158b21439fe06e9b8fabe3cb139_byfmpo.webp",
  },
  {
    id: 3,
    tech: "MONGODB",
    image:
      "https://res.cloudinary.com/dbxvk3apv/image/upload/v1684087775/Languages/free-mongodb-3629020-3030245_pwebas.webp",
  },
];

export const portfolio = [
    {
    id: 3,
    image:
      "/images/backyard.png",
    name: "Backyard",
    about: "A marketplace for buying inspected and verified cars",
    demoLink: "https://www.checkbackyard.com/",
  },
    {
    id: 2,
    image:
      "https://res.cloudinary.com/dbxvk3apv/image/upload/v1686920355/Languages/Movie_Image_kubq27.webp",
    name: "The Movie DB",
    about: "A frontend project. Consumed api from an external source.",
    demoLink: "https://foyindevflix.netlify.app/",
  },
  {
    id: 1,
    image:
      "/images/Sayfood.png",
    name: "SayFood",
    about:
      "Full-stack food delivery platform built with JWT authentication, Redux, and Paystack integration.",
    demoLink: "https://www.sayfoods.co/",
  },
  {
    id: 0,
    image:
      "https://res.cloudinary.com/dbxvk3apv/image/upload/v1697905097/Languages/Screenshot_22_jphp2p.webp",
    name: "Nairaland Clone",
    about:
      "This is a clone of the popular Nairaland Forum. It's a fullstack project. Responsive in all device",
    demoLink: "https://nairaland-clone-client.vercel.app/",
  },
];
