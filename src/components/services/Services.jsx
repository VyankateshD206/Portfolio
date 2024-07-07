import { useRef } from "react";
import "./services.scss";
import { motion, px, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Succcess is no accident. It is hard work, perseverance, sacrifice
          <br /> and love of what you are doing
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>About :</motion.b>
          </h1>
        
        </div>
        <p >I'm currently pursuing a B.Tech in Computer Science and Engineering, with a keen interest in Machine Learning and Artificial Intelligence. I am passionate about exploring the latest advancements in these fields and am always eager to learn and expand my knowledge. I strive to apply my skills and enthusiasm to contribute to innovative projects and technological solutions.</p>
        
        <motion.div
            whileHover={{ scale: 1.1 }} // Zoom in on hover
            whileTap={{ scale: 0.9 }}   // Slightly shrink on tap
        >
            <img src="./working_man.jpg" alt="" />
        </motion.div>
               
      </motion.div>
      {/* <motion.div className="listContainer" variants={variants}>
              
      </motion.div> */}
    </motion.div>
  );
};

export default Services;
