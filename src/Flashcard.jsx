import React from "react";
import "./Flashcard.css";

const Flashcard = ({ question, answer, isFlipped, onClick }) => {
  return (
    <div
      className={`flashcard ${isFlipped ? "flipped" : ""}`}
      onClick={onClick}
    >
      <div className="front">{question}</div>
      <div className="back">{answer}</div>
    </div>
  );
};

export default Flashcard;
