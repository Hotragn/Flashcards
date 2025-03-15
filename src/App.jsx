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
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setFeedback(""); // Clear feedback when flipping
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setFeedback(""); // Clear feedback when moving to next card
    const nextIndex = (currentIndex + 1) % cardPairs.length;
    setCurrentIndex(nextIndex);
  };

  const handlePreviousCard = () => {
    setIsFlipped(false);
    setFeedback(""); // Clear feedback when moving to previous card
    const prevIndex =
      currentIndex === 0 ? cardPairs.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const handleShuffleCards = () => {
    setIsFlipped(false);
    setFeedback(""); // Clear feedback when shuffling cards
    // const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5);
    setCurrentIndex(0); // Reset to first card after shuffle
  };

  const handleGuessSubmit = () => {
    if (
      userGuess.trim().toLowerCase() ===
      cardPairs[currentIndex].answer.toLowerCase()
    ) {
      setFeedback("Correct!");
      setStreak(streak + 1);
      if (streak + 1 > longestStreak) {
        setLongestStreak(streak + 1);
      }
    } else {
      setFeedback("Incorrect. Try again!");
      setStreak(0); // Reset streak on incorrect answer
    }
    setUserGuess(""); // Clear input after submission
  };

  return (
    <div className="app">
      <h1>The Ultimate Plant Parent!</h1>
      <p>
        How good of a plant parent are you? Test all your planty knowledge here!
      </p>
      <p>Number of cards: {cardPairs.length}</p>
      <p>
        Current Streak: {streak}, Longest Streak: {longestStreak}
      </p>
      <Flashcard
        question={cardPairs[currentIndex].question}
        answer={cardPairs[currentIndex].answer}
        isFlipped={isFlipped}
        onClick={handleFlip}
      />
      <div className="guess-section">
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Place your answer here..."
          className="guess-input"
        />
        <button onClick={handleGuessSubmit} className="submit-btn">
          Submit Guess
        </button>
        {feedback && (
          <p
            className={`feedback ${
              feedback === "Correct!" ? "correct" : "incorrect"
            }`}
          >
            {feedback}
          </p>
        )}
      </div>
      <Navigation
        onNext={handleNextCard}
        onPrevious={handlePreviousCard}
        onShuffle={handleShuffleCards}
      />
    </div>
  );
};

export default App;
