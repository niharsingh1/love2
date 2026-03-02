import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Welcome from "./Welcome";
import Question from "./Question";
import Final from "./Final";
import HoliBackground from "./HoliBackground";
import loveMusic from "./music/love.mpeg";


function App() {
  const [screen, setScreen] = useState(0);
  const audioRef = useRef(null);
  const hasPlayedRef = useRef(false);

  const nextScreen = () => {
    setScreen(prev => prev + 1);
  };

  const reset = () => {
    setScreen(0);
  };

  const startMusic = () => {
    if (audioRef.current && !hasPlayedRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play();
      hasPlayedRef.current = true;
    }
  };

  const handleOutsideClick = (e) => {

  // Only trigger if background itself clicked
  if (e.target.classList.contains("app-container")) {

    startMusic(); // start music on first interaction

    const text = document.createElement("div");
    text.innerText = "No escaping my love 😘";
    text.className = "floating-text";

    text.style.left = e.clientX + "px";
    text.style.top = e.clientY + "px";

    document.body.appendChild(text);
    setTimeout(() => text.remove(), 1500);
  }
};

  return (
    <div className="app-container" onClick={handleOutsideClick}>
      <audio ref={audioRef} src={loveMusic} loop />
      <HoliBackground />
      <div className="floating-hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>💖</span>
        ))}
      </div>
{screen === 0 && <Welcome next={nextScreen} startMusic={startMusic} />}      {screen === 1 && <Question next={nextScreen} step={1} />}
      {screen === 2 && <Question next={nextScreen} step={2} />}
      {screen === 3 && <Question next={nextScreen} step={3} />}
      {screen === 4 && <Question next={nextScreen} step={4} />}
      {screen === 5 && <Question next={nextScreen} step={5} />}
      {screen === 6 && <Question next={nextScreen} step={6} />}
      {screen === 7 && <Question next={nextScreen} step={7} />}
      {screen === 8 && <Question next={nextScreen} step={8} />}
      {screen === 9 && <Final reset={reset} />}
    </div>
  );
}

export default App;