import { useState } from "react";
import Question from "./Question";
import "./App.css";

const questions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  // Add more questions here
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setShowAnswer(false);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setUserAnswer("");
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setShowAnswer(false);
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setUserAnswer("");
    }
  };

  const handleSubmit = () => {
    if (
      userAnswer.trim().toLowerCase() ===
      questions[currentQuestionIndex].answer.toLowerCase()
    ) {
      setScore(score + 1);
    }
    setShowAnswer(true);
  };

  return (
    <div className="App">
      <h1>Trivia Game</h1>
      <p>Score: {score}</p>
      <Question
        question={questions[currentQuestionIndex].question}
        showAnswer={showAnswer}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleSubmit={handleSubmit}
        isLastQuestion={currentQuestionIndex === questions.length - 1}
      />
    </div>
  );
}

export default App;
