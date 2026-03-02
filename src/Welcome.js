import React from "react";
import { motion } from "framer-motion";
import welcomeImg from "./images/welcome.jpeg";

function Welcome({ next, startMusic }) {
  const handleClick = () => {
    if (typeof startMusic === 'function') {
      startMusic();  // music first
      setTimeout(() => {
        next();      // then change screen after a short delay
      }, 500);
    }
  };
    return (
        <motion.div
            className="center-box"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <img src={welcomeImg} className="page-img" alt="welcome" />

            <h1>Happy Holi My Love 🎨💖</h1>
            <p>Every color reminds me of you ❤️</p>

            <button onClick={handleClick}>
        Start Our Love Story 💕
        </button>
        </motion.div>
    );
}

export default Welcome;