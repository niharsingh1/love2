import React from "react";
import { motion } from "framer-motion";
import finalImg from "./images/final.jpeg";

function Final({ reset }) {
  return (
    <motion.div
      className="center-box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={finalImg} className="page-img" alt="final" />

      <h1>Happy Holi My Forever Love 🌈💖</h1>

      <div style={{ marginTop: "20px", lineHeight: "1.7" }}>
        <p>
          My love,  
          Every color of Holi reminds me of your smile.
          You are the brightest shade in my life,
          the softest comfort to my heart,
          and the happiest reason behind my every day.
        </p>

        <p>
          When you laugh, my world feels complete.
          When you are sad, I feel it too.
          I don’t just love you —
          I feel safe with you,
          I feel home with you,
          I feel forever with you.
        </p>

        <p>
          I promise to stand beside you in every season,
          every festival,
          every fight,
          every dream.
        </p>

        <p style={{ fontWeight: "bold", marginTop: "15px" }}>
          You are my today, my tomorrow,
          and my always. ❤️
        </p>
      </div>

      <button onClick={reset}>Play Again 💕</button>
    </motion.div>
  );
}

export default Final;