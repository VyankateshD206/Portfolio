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

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
};

const highlightStyle = { color: "orange", fontWeight: 600 };

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
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
            <motion.b whileHover={{ color: "orange" }}>About :</motion.b>
          </h1>
        </div>
        <motion.div
          className="aboutText"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            <span role="img" aria-label="sparkles">
              ✨
            </span>{" "}
            <span style={highlightStyle}>I’m Vyankatesh Deshpande</span>, a
            Computer Science undergrad at IIT Jodhpur who finds joy in building
            tech that actually helps people.
            <br />
            <span role="img" aria-label="robot">
              🤖
            </span>{" "}
            Whether it's an{" "}
            <span style={highlightStyle}>AI</span> that understands your mood and
            curates songs for you, a smoother hostel room allocation experience,
            or an app that keeps your nutrition in check—I love turning real
            problems into intuitive solutions.
            <br />
            <br />
            <span className="hide-on-mobile">
              <span role="img" aria-label="bulb">
                💡
              </span>{" "}
              My projects are driven by{" "}
              <span style={highlightStyle}>empathy</span> and{" "}
              <span style={highlightStyle}>impact</span>. I enjoy blending machine
              learning, full-stack development, and clean design to create tools
              that make life a little easier, smarter, or just more fun for users.
              <br />
              <br />
              <span role="img" aria-label="rocket">
                🚀
              </span>{" "}
              Currently exploring the intersection of{" "}
              <span style={highlightStyle}>AI</span>,{" "}
              <span style={highlightStyle}>product thinking</span>, and{" "}
              <span style={highlightStyle}>user-centered design</span>. I believe
              tech isn't just about code—it's about people.
              <br />
              <br />
              <span role="img" aria-label="handshake">
                🤝
              </span>{" "}
              Let’s build things that matter. Always up for collaborating, solving
              cool problems, or geeking out over new ideas!
            </span>
          </p>
        </motion.div>
        <motion.div
          className="aboutImage"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="./working_man.jpg" alt="Working man" />
        </motion.div>
      </motion.div>
      {/* <motion.div className="listContainer" variants={variants}>
              
      </motion.div> */}
    </motion.div>
  );
};

export default Services;
