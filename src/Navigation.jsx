import React from "react";
import "./Navigation.css";

const Navigation = ({ onNext, onPrevious, onShuffle }) => {
  return (
    <div className="navigation">
      <button className="nav-btn" onClick={onPrevious}>
        ←
      </button>
      <button className="nav-btn shuffle-btn" onClick={onShuffle}>
        Shuffle Cards
      </button>
      <button className="nav-btn" onClick={onNext}>
        →
      </button>
    </div>
  );
};

export default Navigation;
