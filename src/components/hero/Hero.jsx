import Contact from "../contact/Contact";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const item = ["Contact"];
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>VYANKATESH DESHPANDE</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer, CP and AI/ML enthusiast
          </motion.h1>
          <motion.div  variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Projects
            </motion.button>
            <motion.button variants={textVariants}>
            <motion.a 
              variants={textVariants}
             id="contactButton">
              Contact Me
            </motion.a>
            </motion.button>

          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="./scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Coder Programmer Researcher 
      </motion.div>
      <div className="imageContainer">
        <img src="./Dp_pic2.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
