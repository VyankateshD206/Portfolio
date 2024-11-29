import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Links from "../sidebar/links/Links";

const items = [
  {
    id: 1,
    title: "PIPER 🎵",
    subtitle: "ML Project",
    img: "./PIPER-pic.png",
    desc: "PIPER is a song recommendation system that utilizes the Spotify API to provide users with personalized song recommendations based on their Mood, preferences and listening history.",
    link: "https://piper-spotify.streamlit.app",
  },
  {
    id: 2,
    title: "NetViz: Computer Network Visualizer",
    subtitle: "DSA Course Project",
    img: "./NetViz-pic.png",
    desc: "Developed a tool using C++ and DSA to simulate computer network operations, enabling users to design custom network topologies through an intuitive drag-and-drop interface and provided visual representation of data packet transmission.",
    link: "https://github.com/VyankateshD206/NetViz",
  },
  {
    id: 3,
    title: "IITJ Hostel Allocation Website",
    subtitle: "MERN stack Project",
    img: "./IITJ_Hostel.jpg",
    desc: "Developed a hostel room allocation website using the MERN stack for efficient room assignment, enabling students to view available rooms and apply easily.",
    link: "https://iitj-hostel-allocation-frontend.vercel.app/",
  },

  {
    id: 4,
    title: "Rescue The Princess Game",
    subtitle: "ICS Course Project in C language",
    img: "./Designer.png",
    desc: "Created a C-based game using the Depth-First Search (DFS) algorithm to determine the optimal path for Mario to rescue the princess.",
    link: "https://github.com/VyankateshD206/ICS1010_Project.git",
  
  },
  
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <h3 style={{color: 'orange'}}>{item.subtitle}</h3>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
