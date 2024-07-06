import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
           Portfolio Website
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/vyankatesh-deshpande-060a22289/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/vyankatesh_206/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/VyankateshD206">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMhdVRXWsSgHmCRGZlhxPhcqGRCMqxQKHdPMlHHKcNMSVhsNTNwzLhtPVJDsWFSGdFwvSC">
            <img src="/Gmail.png" alt="" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
