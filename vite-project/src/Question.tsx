import React from 'react';
import './Question.css';

function Question({ question, showAnswer, userAnswer, setUserAnswer, handleNext, handlePrev, handleSubmit, isLastQuestion }) {
  return (
    <div className="question-box">
      <p>{question}</p>
      {!showAnswer ? (
        <div>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Your answer"
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <button onClick={handlePrev}>Previous</button>
          {!isLastQuestion && <button onClick={handleNext}>Next Question</button>}
        </div>
      )}
    </div>
  );
}

export default Question;