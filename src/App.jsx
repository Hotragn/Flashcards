import React, { useState } from "react";
import "./App.css";
import Flashcard from "./Flashcard";
import Navigation from "./Navigation";

const cardPairs = [
  { question: "What is the capital of France?", answer: "Paris" },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  { question: "Who painted the Starry Night?", answer: "Vincent van Gogh" },
  {
    question:
      "When a plant needs more than 50% humidity, what kind of plant is it?",
    answer: "Tropical Plant",
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * cardPairs.length);
    setCurrentIndex(randomIndex);
  };

  const handlePreviousCard = () => {
    setIsFlipped(false);
    const prevIndex =
      currentIndex === 0 ? cardPairs.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="app">
      <h1>The Ultimate Plant Parent!</h1>
      <p>
        How good of a plant parent are you? Test all your planty knowledge here!
      </p>
      <p>Number of cards: {cardPairs.length}</p>
      <Flashcard
        question={cardPairs[currentIndex].question}
        answer={cardPairs[currentIndex].answer}
        isFlipped={isFlipped}
        onClick={handleFlip}
      />
      <Navigation onNext={handleNextCard} onPrevious={handlePreviousCard} />
    </div>
  );
};

export default App;
