import React from "react";
import { motion } from "framer-motion";

import q1 from "./images/q1.jpeg";
import q2 from "./images/q2.jpeg";
import q3 from "./images/q3.jpeg";
import q4 from "./images/q4.jpeg";
import q5 from "./images/q5.jpeg";
import q6 from "./images/q6.jpeg";
import q7 from "./images/q7.jpeg";
import q8 from "./images/q8.jpeg";

function Question({ next, step }) {

  const data = {
    1: {
      img: q1,
      question: "Do you know how much I love you? 💕",
      options: ["More than chocolates 🍫", "More than everything 🌍"]
    },
    2: {
      img: q2,
      question: "Who makes my life colorful like Holi? 🎨",
      options: ["You obviously 😌", "Still you cutie 💖"]
    },
    3: {
      img: q3,
      question: "What is my favorite place? 🏡",
      options: ["Your arms 🤗", "Anywhere with you ❤️"]
    },
    4: {
      img: q4,
      question: "What happens when you smile? 😊",
      options: ["My heart melts 💓", "World becomes beautiful 🌸"]
    },
    5: {
      img: q5,
      question: "If we fight, what will I do? 😏",
      options: ["Say sorry first 🥺", "Hug you tight 🤍"]
    },
    6: {
      img: q6,
      question: "What are we made for? 💍",
      options: ["Forever ♾️", "Marriage 😘"]
    },
    7: {
      img: q7,
      question: "What are you to me? 💌",
      options: ["My peace 🕊️", "My everything 💞"]
    },
    8: {
      img: q8,
      question: "Will you stay with me in every Holi of life? 🌈",
      options: ["Forever & Always 💖", "Till last breath ❤️"]
    }
  };

  const current = data[step];

  if (!current) {
    return <div>All done! 🎉</div>;
  }

  return (
    <motion.div
      className="center-box"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <img src={current.img} className="page-img" alt="romantic" />

      <h2>{current.question}</h2>

      <div>
        {current.options.map((opt, index) => (
          <button key={index} onClick={() => next()}>
            {opt}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default Question;