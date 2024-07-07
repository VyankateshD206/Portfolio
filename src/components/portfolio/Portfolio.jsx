import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Links from "../sidebar/links/Links";

const items = [
  {
    id: 1,
    title: "PIPER 🎵",
    img: "./PIPER-pic.png",
    desc: "PIPER is a song recommendation system that utilizes the Spotify API to provide users with personalized song recommendations based on their Mood, preferences and listening history.",
    link: "https://piper-spotify.streamlit.app",
  },
  {
    id: 2,
    title: "Rescue The Princess Game",
    img: "./Designer.png",
    desc: "The Rescue the Princess game is an exciting project implemented in the C programming language, incorporating the Depth-First Search (DFS) algorithm. It gives optimal path for Mario to save the princess with given no. of monsters. In this Game the monsters are intelligent that means when Mario moves one step, monsters also move one step in the direction of princess or Mario depending upon their distance from them.",
    link: "https://github.com/VyankateshD206/ICS1010_Project.git",
  
  },
  {
    id: 3,
    title: "Arduino Fibre Optics Communication",
    img: "./Arduino.png",
    desc: "Arduino Fibre Optics Communication project was presented at the Project Expo 2023 of EEL 1010 Introduction to electrical engineering which uses Arduino Uno, LDR sensor and glass tube to transmit data from one device to another.",
    
  },
  {
    id: 4,
    title: "JunkMate Android App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Work in progress.",
    
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
