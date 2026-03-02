import React from "react";
import "./App.css";

function FloatingHearts() {
  return (
    <div className="hearts-container">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="heart">💖</div>
      ))}
    </div>
  );
}

export default FloatingHearts;