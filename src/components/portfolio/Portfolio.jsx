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
    link: "https://github.com/VyankateshD206/PIPER_Spotify_API.git",
    videoLink: "https://drive.google.com/file/d/1c5e4FXZvblGwtXZiFTULoIIc0BVBHNOV/view?usp=sharing",
    siteLink: "https://piper-spotify.streamlit.app/",
  },
  {
    id: 2,
    title: "NetViz: Computer Network Visualizer",
    subtitle: "DSA Course Project",
    img: "./NetViz-pic.png",
    desc: "Developed a tool using C++ and DSA to simulate computer network operations, enabling users to design custom network topologies through an intuitive drag-and-drop interface and provided visual representation of data packet transmission.",
    link: "https://github.com/VyankateshD206/NetViz",
    videoLink: "https://drive.google.com/file/d/1rsJkzfiBtY1UGg8KZSpZR7iXEr8NSxp-/view?usp=drive_link",
  },
  {
    id: 3,
    title: "IITJ Hostel Allocation Website",
    subtitle: "MERN stack Project",
    img: "./IITJ_Hostel.jpg",
    desc: "Developed a hostel room allocation website using the MERN stack for efficient room assignment, enabling students to view available rooms and apply easily.",
    link: "https://iitj-hostel-allocation-frontend.vercel.app/",
    videoLink: "https://drive.google.com/file/u/1/d/1ju10kBkpoge49QBAHFD6AvqKHzXLf2Uv/view?usp=sharing",
    siteLink: "https://iitj-hostel-allocation-frontend.vercel.app/",
  },
  {
    id: 4,
    title: "Linguistix 🗣️",
    subtitle: "CSL2050 - Pattern Recognition and Machine Learning Project",
    img: "./Linguistic.png",
    desc: "Linguistix is an advanced speaker recognition system that identifies individuals based on their unique vocal characteristics. Utilizing cutting-edge machine learning and deep learning techniques, it ensures accurate and efficient voice-based authentication and verification.",
    link: "https://github.com/VyankateshD206/Linguistix",
    videoLink: "https://youtu.be/yORB3cY9WDA",
    siteLink: "http://34.121.3.96:8080/",
  
  },
  {
    id: 5,
    title: "EatWise 🍽️",
    subtitle: "AI-Powered Food Classification and Nutrition Analysis App",
    img: "./eatwise.png",
    desc: "Built an AI-powered Android app using Kotlin and YOLOv8 to classify 30+ Indian food items in real-time, mapping predictions to nutritional values to address gaps in global nutrition apps.",
    link: "https://github.com/VyankateshD206/DC_EatWise",
    videoLink: "https://drive.google.com/file/d/1CZezPVNW4TUdtGoMYi2hSrQJrGQOKbJt/view",
  
  },
  {
    id: 6,
    title: "Rescue The Princess Game 👸",
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
            <div className="buttonGroup">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>GitHub</button>
              </a>
              {item.videoLink && (
                <a href={item.videoLink} target="_blank" rel="noopener noreferrer">
                  <button>See Video</button>
                </a>
              )}
              {item.siteLink && (
                <a href={item.siteLink} target="_blank" rel="noopener noreferrer">
                  <button>Visit Site</button>
                </a>
              )}
            </div>
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
